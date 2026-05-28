<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { orderAPI } from '@/api'
import { Receipt, ExternalLink } from 'lucide-vue-next'

const orders = ref<any[]>([])
const loading = ref(true)

const statusMap: Record<string, { label: string; class: string }> = {
  0: { label: 'Pending', class: 'badge-warning' },
  1: { label: 'Paid', class: 'badge-accent' },
  2: { label: 'Cancelled', class: 'badge-danger' },
  3: { label: 'Completed', class: 'badge-accent' },
}

function formatPrice(cents: number): string {
  return (cents / 100).toFixed(2)
}

onMounted(async () => {
  try {
    const res: any = await orderAPI.fetch()
    orders.value = res.data || []
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="p-6 lg:p-8 max-w-6xl mx-auto space-y-8">
    <div>
      <h1 class="text-2xl font-bold tracking-tight">Orders</h1>
      <p class="text-fg-muted mt-1 text-sm">Your order history</p>
    </div>

    <div v-if="loading" class="space-y-3">
      <div v-for="i in 5" :key="i" class="card p-4 animate-pulse">
        <div class="h-4 bg-bg-elevated rounded w-full" />
      </div>
    </div>

    <div v-else-if="!orders.length" class="card p-12 text-center">
      <Receipt class="w-12 h-12 text-fg-dim mx-auto mb-4" />
      <p class="text-fg-muted">No orders yet</p>
    </div>

    <div v-else class="space-y-3">
      <div v-for="order in orders" :key="order.trade_no" class="card p-4 flex items-center gap-4">
        <div class="w-10 h-10 rounded-xl bg-ai/10 flex items-center justify-center shrink-0">
          <Receipt class="w-5 h-5 text-ai" />
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium text-fg">{{ order.plan?.name || 'Plan' }}</span>
            <span class="badge" :class="statusMap[order.status]?.class">{{ statusMap[order.status]?.label }}</span>
          </div>
          <div class="text-xs text-fg-dim mt-1">{{ order.trade_no }}</div>
        </div>
        <div class="text-right">
          <div class="text-sm font-semibold text-fg">¥{{ formatPrice(order.total_amount || 0) }}</div>
          <div class="text-xs text-fg-dim">{{ new Date(order.created_at * 1000).toLocaleDateString() }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
