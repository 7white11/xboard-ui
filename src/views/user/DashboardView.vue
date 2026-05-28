<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useAuthStore } from '@/stores'
import { userAPI, planAPI, noticeAPI } from '@/api'
import { Activity, ArrowUpRight, Zap, Globe, Clock, HardDrive, Wifi } from 'lucide-vue-next'

const auth = useAuthStore()
const stat = ref<any>(null)
const plans = ref<any[]>([])
const notices = ref<any[]>([])
const loading = ref(true)

const trafficUsed = computed(() => {
  if (!stat.value) return { used: '0 B', total: '0 B', percent: 0 }
  const used = stat.value.u || 0
  const total = stat.value.transfer_enable || 0
  const percent = total > 0 ? Math.round((used / total) * 100) : 0
  return { used: formatBytes(used), total: formatBytes(total), percent }
})

function formatBytes(b: number): string {
  if (b === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(b) / Math.log(k))
  return parseFloat((b / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
}

onMounted(async () => {
  try {
    const [statRes, planRes, noticeRes] = await Promise.all([
      userAPI.getStat(),
      planAPI.fetch(),
      noticeAPI.fetch().catch(() => ({ data: [] }))
    ])
    stat.value = (statRes as any).data
    plans.value = (planRes as any).data || []
    notices.value = (noticeRes as any).data || []
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="p-6 lg:p-8 max-w-6xl mx-auto space-y-8">
    <!-- Header -->
    <div>
      <h1 class="text-2xl font-bold tracking-tight">Dashboard</h1>
      <p class="text-fg-muted mt-1 text-sm">Welcome back, {{ auth.user?.email }}</p>
    </div>

    <!-- Stats grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="card p-5">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs text-fg-muted font-medium uppercase tracking-wider">Plan</span>
          <Zap class="w-4 h-4 text-accent" />
        </div>
        <div class="text-xl font-bold text-fg">{{ auth.user?.plan?.name || 'Free' }}</div>
        <div class="text-xs text-fg-dim mt-1">
          {{ auth.user?.expired_at ? new Date(auth.user.expired_at * 1000).toLocaleDateString() : 'No expiry' }}
        </div>
      </div>

      <div class="card p-5">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs text-fg-muted font-medium uppercase tracking-wider">Traffic</span>
          <Activity class="w-4 h-4 text-ai" />
        </div>
        <div class="text-xl font-bold text-fg">{{ trafficUsed.used }}</div>
        <div class="text-xs text-fg-dim mt-1">of {{ trafficUsed.total }}</div>
        <div class="mt-3 h-1.5 bg-bg-elevated rounded-full overflow-hidden">
          <div class="h-full rounded-full transition-all duration-500"
            :class="trafficUsed.percent > 80 ? 'bg-destructive' : trafficUsed.percent > 50 ? 'bg-warning' : 'bg-accent'"
            :style="{ width: trafficUsed.percent + '%' }" />
        </div>
      </div>

      <div class="card p-5">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs text-fg-muted font-medium uppercase tracking-wider">Balance</span>
          <HardDrive class="w-4 h-4 text-warning" />
        </div>
        <div class="text-xl font-bold text-fg">¥{{ ((auth.user?.balance || 0) / 100).toFixed(2) }}</div>
        <div class="text-xs text-fg-dim mt-1">Account balance</div>
      </div>

      <div class="card p-5">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs text-fg-muted font-medium uppercase tracking-wider">Servers</span>
          <Globe class="w-4 h-4 text-accent" />
        </div>
        <div class="text-xl font-bold text-fg">{{ stat?.alive_ip || 0 }}</div>
        <div class="text-xs text-fg-dim mt-1">Active connections</div>
      </div>
    </div>

    <!-- Notices -->
    <div v-if="notices.length" class="card p-5">
      <h2 class="text-sm font-semibold text-fg mb-4 flex items-center gap-2">
        <Wifi class="w-4 h-4 text-ai" />
        Latest Notices
      </h2>
      <div class="space-y-3">
        <div v-for="notice in notices.slice(0, 3)" :key="notice.id"
          class="flex items-start gap-3 p-3 rounded-lg bg-bg-elevated/50">
          <div class="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
          <div class="flex-1 min-w-0">
            <div class="text-sm font-medium text-fg">{{ notice.title }}</div>
            <div class="text-xs text-fg-muted mt-1 line-clamp-2">{{ notice.content }}</div>
          </div>
          <span class="text-xs text-fg-dim shrink-0">{{ new Date(notice.created_at * 1000).toLocaleDateString() }}</span>
        </div>
      </div>
    </div>

    <!-- Quick actions -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <router-link to="/plans" class="card p-5 group hover:border-accent/30 transition-all cursor-pointer">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm font-semibold text-fg">Upgrade Plan</div>
            <div class="text-xs text-fg-muted mt-1">{{ plans.length }} plans available</div>
          </div>
          <ArrowUpRight class="w-4 h-4 text-fg-dim group-hover:text-accent transition-colors" />
        </div>
      </router-link>
      <router-link to="/orders" class="card p-5 group hover:border-ai/30 transition-all cursor-pointer">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm font-semibold text-fg">Order History</div>
            <div class="text-xs text-fg-muted mt-1">View past orders</div>
          </div>
          <ArrowUpRight class="w-4 h-4 text-fg-dim group-hover:text-ai transition-colors" />
        </div>
      </router-link>
      <router-link to="/tickets" class="card p-5 group hover:border-warning/30 transition-all cursor-pointer">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm font-semibold text-fg">Support</div>
            <div class="text-xs text-fg-muted mt-1">Get help</div>
          </div>
          <ArrowUpRight class="w-4 h-4 text-fg-dim group-hover:text-warning transition-colors" />
        </div>
      </router-link>
    </div>
  </div>
</template>
