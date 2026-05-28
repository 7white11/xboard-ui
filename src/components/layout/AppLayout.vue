<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores'
import { LayoutDashboard, Package, Receipt, UserCircle, MessageSquare, LogOut, Zap } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/plans', label: 'Plans', icon: Package },
  { path: '/orders', label: 'Orders', icon: Receipt },
  { path: '/tickets', label: 'Tickets', icon: MessageSquare },
  { path: '/profile', label: 'Profile', icon: UserCircle },
]

const isAuthPage = computed(() => ['Login', 'Register'].includes(route.name as string))

function handleLogout() {
  auth.logout()
  router.push('/login')
}
</script>

<template>
  <!-- Auth pages: no layout -->
  <div v-if="isAuthPage" class="min-h-screen bg-bg flex items-center justify-center p-4">
    <router-view />
  </div>

  <!-- App layout -->
  <div v-else class="min-h-screen bg-bg flex">
    <!-- Sidebar -->
    <aside class="w-64 border-r border-border flex-col hidden lg:flex shrink-0">
      <!-- Logo -->
      <div class="p-6 border-b border-border">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
            <Zap class="w-4 h-4 text-accent" />
          </div>
          <span class="font-semibold text-fg tracking-tight">Xboard</span>
        </div>
      </div>

      <!-- Nav -->
      <nav class="flex-1 p-4 space-y-1">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer"
          :class="route.path === item.path ? 'bg-accent/10 text-accent' : 'text-fg-muted hover:text-fg hover:bg-white/5'"
        >
          <component :is="item.icon" class="w-4 h-4" />
          {{ item.label }}
        </router-link>
      </nav>

      <!-- User -->
      <div class="p-4 border-t border-border">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-8 h-8 rounded-full bg-ai/20 flex items-center justify-center">
            <UserCircle class="w-4 h-4 text-ai" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-sm text-fg truncate">{{ auth.user?.email || 'User' }}</div>
            <div class="text-xs text-fg-dim">{{ auth.user?.plan?.name || 'Free' }}</div>
          </div>
        </div>
        <button @click="handleLogout" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-fg-muted hover:text-destructive hover:bg-destructive/5 transition-all w-full cursor-pointer">
          <LogOut class="w-4 h-4" />
          Logout
        </button>
      </div>
    </aside>

    <!-- Main -->
    <main class="flex-1 overflow-auto">
      <!-- Mobile header -->
      <header class="lg:hidden flex items-center justify-between p-4 border-b border-border">
        <div class="flex items-center gap-2">
          <Zap class="w-5 h-5 text-accent" />
          <span class="font-semibold text-fg">Xboard</span>
        </div>
      </header>
      <router-view />
    </main>
  </div>
</template>
