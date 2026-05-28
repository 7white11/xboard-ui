<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores'
import { Zap, ArrowRight } from 'lucide-vue-next'

const router = useRouter()
const auth = useAuthStore()
const email = ref('')
const password = ref('')
const error = ref('')

async function handleLogin() {
  error.value = ''
  try {
    await auth.login(email.value, password.value)
    router.push('/dashboard')
  } catch (e: any) {
    error.value = e.message || 'Login failed'
  }
}
</script>

<template>
  <div class="w-full max-w-sm">
    <!-- Logo -->
    <div class="text-center mb-10">
      <div class="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-5 glow-accent">
        <Zap class="w-7 h-7 text-accent" />
      </div>
      <h1 class="text-2xl font-bold tracking-tight text-fg">Welcome back</h1>
      <p class="text-fg-muted mt-2 text-sm">Sign in to your account</p>
    </div>

    <!-- Form -->
    <form @submit.prevent="handleLogin" class="space-y-4">
      <div>
        <label class="block text-xs text-fg-muted mb-2 font-medium">EMAIL</label>
        <input v-model="email" type="email" class="input" placeholder="you@example.com" required />
      </div>
      <div>
        <label class="block text-xs text-fg-muted mb-2 font-medium">PASSWORD</label>
        <input v-model="password" type="password" class="input" placeholder="••••••••" required />
      </div>

      <p v-if="error" class="text-sm text-destructive">{{ error }}</p>

      <button type="submit" class="btn btn-primary w-full btn-lg" :disabled="auth.loading">
        <span v-if="auth.loading" class="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
        <span v-else class="flex items-center gap-2">
          Sign in <ArrowRight class="w-4 h-4" />
        </span>
      </button>
    </form>

    <p class="text-center text-sm text-fg-dim mt-6">
      Don't have an account?
      <router-link to="/register" class="text-accent hover:underline ml-1">Create one</router-link>
    </p>
  </div>
</template>
