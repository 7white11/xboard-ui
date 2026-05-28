<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { planAPI } from '@/api'
import { Check, Zap, Crown, Star } from 'lucide-vue-next'

const plans = ref<any[]>([])
const loading = ref(true)

function formatPrice(cents: number): string {
  return (cents / 100).toFixed(2)
}

const tierIcons: Record<string, any> = { 0: Zap, 1: Star, 2: Crown }

onMounted(async () => {
  try {
    const res: any = await planAPI.fetch()
    plans.value = res.data || []
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="p-6 lg:p-8 max-w-6xl mx-auto space-y-8">
    <div>
      <h1 class="text-2xl font-bold tracking-tight">Plans</h1>
      <p class="text-fg-muted mt-1 text-sm">Choose the plan that fits your needs</p>
    </div>

    <div v-if="loading" class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="i in 3" :key="i" class="card p-6 animate-pulse">
        <div class="h-6 bg-bg-elevated rounded w-1/3 mb-4" />
        <div class="h-10 bg-bg-elevated rounded w-1/2 mb-6" />
        <div class="space-y-3">
          <div v-for="j in 5" :key="j" class="h-4 bg-bg-elevated rounded" />
        </div>
      </div>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(plan, i) in plans" :key="plan.id"
        class="card p-6 flex flex-col relative overflow-hidden group"
        :class="i === 1 ? 'border-accent/30 glow-accent' : ''">
        <!-- Popular badge -->
        <div v-if="i === 1" class="absolute top-0 right-0">
          <div class="bg-accent text-black text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
        </div>

        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center"
            :class="i === 1 ? 'bg-accent/15' : 'bg-ai/15'">
            <component :is="tierIcons[i] || Zap" class="w-5 h-5"
              :class="i === 1 ? 'text-accent' : 'text-ai'" />
          </div>
          <div>
            <h3 class="font-semibold text-fg">{{ plan.name }}</h3>
            <p class="text-xs text-fg-dim">{{ plan.group_name }}</p>
          </div>
        </div>

        <!-- Price -->
        <div class="mb-6">
          <span class="text-3xl font-bold text-fg">¥{{ formatPrice(plan.month_price) }}</span>
          <span class="text-fg-muted text-sm">/month</span>
        </div>

        <!-- Features -->
        <ul class="space-y-3 flex-1 mb-6">
          <li v-if="plan.transfer_enable" class="flex items-center gap-2 text-sm text-fg-muted">
            <Check class="w-4 h-4 text-accent shrink-0" />
            {{ (plan.transfer_enable / 1073741824).toFixed(0) }} GB traffic
          </li>
          <li v-if="plan.speed_limit" class="flex items-center gap-2 text-sm text-fg-muted">
            <Check class="w-4 h-4 text-accent shrink-0" />
            {{ plan.speed_limit }} Mbps speed
          </li>
          <li class="flex items-center gap-2 text-sm text-fg-muted">
            <Check class="w-4 h-4 text-accent shrink-0" />
            {{ plan.device_limit || 'Unlimited' }} devices
          </li>
          <li v-for="f in (plan.features || []).slice(0, 3)" :key="f" class="flex items-center gap-2 text-sm text-fg-muted">
            <Check class="w-4 h-4 text-accent shrink-0" />
            {{ f }}
          </li>
        </ul>

        <!-- CTA -->
        <button class="btn w-full" :class="i === 1 ? 'btn-primary' : 'btn-secondary'">
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>
