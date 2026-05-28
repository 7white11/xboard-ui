import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { authAPI, userAPI, configAPI } from '@/api'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('xboard_token'))
  const user = ref<any>(null)
  const loading = ref(false)

  const isLoggedIn = computed(() => !!token.value && !!user.value)

  async function login(email: string, password: string) {
    loading.value = true
    try {
      const res: any = await authAPI.login({ email, password })
      if (res.data?.auth_data) {
        token.value = res.data.auth_data
        localStorage.setItem('xboard_token', res.data.auth_data)
        await fetchUser()
        return true
      }
      throw new Error(res.message || 'Login failed')
    } finally {
      loading.value = false
    }
  }

  async function fetchUser() {
    if (!token.value) return
    try {
      const res: any = await userAPI.getInfo()
      user.value = res.data
    } catch {
      logout()
    }
  }

  function logout() {
    token.value = null
    user.value = null
    localStorage.removeItem('xboard_token')
  }

  async function checkAuth() {
    if (token.value) await fetchUser()
  }

  return { token, user, loading, isLoggedIn, login, fetchUser, logout, checkAuth }
})

export const useAppStore = defineStore('app', () => {
  const config = ref<any>(null)
  const darkMode = ref(true)

  async function fetchConfig() {
    try {
      const res: any = await configAPI.get()
      config.value = res.data
    } catch {}
  }

  return { config, darkMode, fetchConfig }
})
