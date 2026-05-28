<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authAPI } from '@/api'
import { Zap, ArrowRight } from 'lucide-vue-next'

const router = useRouter()
const email = ref('')
const password = ref('')
const inviteCode = ref('')
const error = ref('')
const loading = ref(false)

async function handleRegister() {
  error.value = ''
  loading.value = true
  try {
    const res: any = await authAPI.register({ email: email.value, password: password.value, invite_code: inviteCode.value || undefined })
    if (res.data?.auth_data) {
      localStorage.setItem('xboard_token', res.data.auth_data)
      router.push('/dashboard')
    }
  } catch (e: any) {
    error.value = e.message || 'Registration failed'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="w-full max-w-sm">
    <div class="text-center mb-10">
      <div class="w-14 h-14 rounded-2xl bg-ai/15 flex items-center justify-center mx-auto mb-5 glow-ai">
        <Zap class="w-7 h-7 text-ai" />
      </div>
      <h1 class="text-2xl font-bold tracking-tight text-fg">Create account</h1>
      <p class="text-fg-muted mt-2 text-sm">Get started with your subscription</p>
    </div>

    <form @submit.prevent="handleRegister" class="space-y-4">
      <div>
        <label class="block text-xs text-fg-muted mb-2 font-medium">EMAIL</label>
        <input v-model="email" type="email" class="input" placeholder="you@example.com" required />
      </div>
      <div>
        <label class="block text-xs text-fg-muted mb-2 font-medium">PASSWORD</label>
        <input v-model="password" type="password" class="input" placeholder="Min 8 characters" required />
      </div>
      <div>
        <label class="block text-xs text-fg-muted mb-2 font-medium">INVITE CODE <span class="text-fg-dim">(optional)</span></label>
        <input v-model="inviteCode" type="text" class="input" placeholder="Enter invite code" />
      </div>

      <p v-if="error" class="text-sm text-destructive">{{ error }}</p>

      <button type="submit" class="btn btn-primary w-full btn-lg" :disabled="loading">
        <span v-if="loading" class="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
        <span v-else class="flex items-center gap-2">
          Create account <ArrowRight class="w-4 h-4" />
        </span>
      </button>
    </form>

    <p class="text-center text-sm text-fg-dim mt-6">
      Already have an account?
      <router-link to="/login" class="text-accent hover:underline ml-1">Sign in</router-link>
    </p>
  </div>
</template>
