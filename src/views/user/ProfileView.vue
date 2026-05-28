<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores'
import { userAPI } from '@/api'
import { UserCircle, Copy, Check, Shield, Key } from 'lucide-vue-next'

const auth = useAuthStore()
const copied = ref(false)
const saving = ref(false)
const changingPwd = ref(false)
const oldPassword = ref('')
const newPassword = ref('')
const pwdMsg = ref('')

const subscribeUrl = computed(() => {
  const token = auth.user?.subscribe_url || auth.user?.token || ''
  return token ? `${window.location.origin}/api/v1/client/subscribe?token=${token}` : ''
})

function copyUrl() {
  if (subscribeUrl.value) {
    navigator.clipboard.writeText(subscribeUrl.value)
    copied.value = true
    setTimeout(() => copied.value = false, 2000)
  }
}

async function changePassword() {
  if (!oldPassword.value || !newPassword.value) return
  changingPwd.value = true
  pwdMsg.value = ''
  try {
    await userAPI.changePassword({ old_password: oldPassword.value, new_password: newPassword.value })
    pwdMsg.value = 'Password changed successfully'
    oldPassword.value = ''
    newPassword.value = ''
  } catch (e: any) {
    pwdMsg.value = e.message || 'Failed'
  } finally {
    changingPwd.value = false
  }
}
</script>

<template>
  <div class="p-6 lg:p-8 max-w-3xl mx-auto space-y-8">
    <div>
      <h1 class="text-2xl font-bold tracking-tight">Profile</h1>
      <p class="text-fg-muted mt-1 text-sm">Manage your account settings</p>
    </div>

    <!-- User info -->
    <div class="card p-6">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-14 h-14 rounded-2xl bg-ai/15 flex items-center justify-center">
          <UserCircle class="w-7 h-7 text-ai" />
        </div>
        <div>
          <div class="text-lg font-semibold text-fg">{{ auth.user?.email }}</div>
          <div class="text-sm text-fg-dim">{{ auth.user?.plan?.name || 'Free Plan' }}</div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="p-4 rounded-lg bg-bg-elevated">
          <div class="text-xs text-fg-dim mb-1">Balance</div>
          <div class="text-lg font-bold text-fg">¥{{ ((auth.user?.balance || 0) / 100).toFixed(2) }}</div>
        </div>
        <div class="p-4 rounded-lg bg-bg-elevated">
          <div class="text-xs text-fg-dim mb-1">Expires</div>
          <div class="text-lg font-bold text-fg">{{ auth.user?.expired_at ? new Date(auth.user.expired_at * 1000).toLocaleDateString() : 'Never' }}</div>
        </div>
      </div>
    </div>

    <!-- Subscribe URL -->
    <div class="card p-6">
      <h2 class="text-sm font-semibold text-fg mb-4 flex items-center gap-2">
        <Key class="w-4 h-4 text-accent" />
        Subscribe Link
      </h2>
      <div class="flex gap-2">
        <input :value="subscribeUrl" class="input flex-1 font-mono text-xs" readonly />
        <button @click="copyUrl" class="btn btn-secondary btn-sm shrink-0">
          <component :is="copied ? Check : Copy" class="w-4 h-4" />
          {{ copied ? 'Copied' : 'Copy' }}
        </button>
      </div>
    </div>

    <!-- Change password -->
    <div class="card p-6">
      <h2 class="text-sm font-semibold text-fg mb-4 flex items-center gap-2">
        <Shield class="w-4 h-4 text-ai" />
        Change Password
      </h2>
      <div class="space-y-4">
        <input v-model="oldPassword" type="password" class="input" placeholder="Current password" />
        <input v-model="newPassword" type="password" class="input" placeholder="New password" />
        <p v-if="pwdMsg" class="text-sm" :class="pwdMsg.includes('success') ? 'text-accent' : 'text-destructive'">{{ pwdMsg }}</p>
        <button @click="changePassword" class="btn btn-primary btn-sm" :disabled="changingPwd">
          {{ changingPwd ? 'Saving...' : 'Update Password' }}
        </button>
      </div>
    </div>
  </div>
</template>
