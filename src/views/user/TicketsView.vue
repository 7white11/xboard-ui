<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ticketAPI } from '@/api'
import { MessageSquare, Plus, X } from 'lucide-vue-next'

const tickets = ref<any[]>([])
const loading = ref(true)
const showNew = ref(false)
const newSubject = ref('')
const newMessage = ref('')
const submitting = ref(false)

const levelMap: Record<number, string> = { 0: 'Low', 1: 'Medium', 2: 'High' }
const statusMap: Record<number, { label: string; class: string }> = {
  0: { label: 'Open', class: 'badge-accent' },
  1: { label: 'Replied', class: 'badge-ai' },
  2: { label: 'Closed', class: 'badge-warning' },
}

async function load() {
  loading.value = true
  try {
    const res: any = await ticketAPI.fetch()
    tickets.value = res.data || []
  } finally {
    loading.value = false
  }
}

async function submit() {
  if (!newSubject.value || !newMessage.value) return
  submitting.value = true
  try {
    await ticketAPI.save({ subject: newSubject.value, message: newMessage.value, level: 1 })
    showNew.value = false
    newSubject.value = ''
    newMessage.value = ''
    await load()
  } finally {
    submitting.value = false
  }
}

onMounted(load)
</script>

<template>
  <div class="p-6 lg:p-8 max-w-6xl mx-auto space-y-8">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold tracking-tight">Tickets</h1>
        <p class="text-fg-muted mt-1 text-sm">Get support from our team</p>
      </div>
      <button @click="showNew = !showNew" class="btn btn-primary btn-sm">
        <Plus v-if="!showNew" class="w-4 h-4" />
        <X v-else class="w-4 h-4" />
        {{ showNew ? 'Cancel' : 'New Ticket' }}
      </button>
    </div>

    <!-- New ticket form -->
    <transition name="fade">
      <div v-if="showNew" class="card p-5 space-y-4">
        <input v-model="newSubject" class="input" placeholder="Subject" />
        <textarea v-model="newMessage" class="input min-h-[120px] resize-none" placeholder="Describe your issue..." />
        <div class="flex justify-end">
          <button @click="submit" class="btn btn-primary btn-sm" :disabled="submitting">
            {{ submitting ? 'Sending...' : 'Submit' }}
          </button>
        </div>
      </div>
    </transition>

    <!-- Ticket list -->
    <div v-if="loading" class="space-y-3">
      <div v-for="i in 3" :key="i" class="card p-4 animate-pulse">
        <div class="h-4 bg-bg-elevated rounded w-2/3" />
      </div>
    </div>

    <div v-else-if="!tickets.length" class="card p-12 text-center">
      <MessageSquare class="w-12 h-12 text-fg-dim mx-auto mb-4" />
      <p class="text-fg-muted">No tickets yet</p>
    </div>

    <div v-else class="space-y-3">
      <div v-for="ticket in tickets" :key="ticket.id" class="card p-4">
        <div class="flex items-center gap-3 mb-2">
          <span class="text-sm font-medium text-fg flex-1">{{ ticket.subject }}</span>
          <span class="badge" :class="statusMap[ticket.status]?.class">{{ statusMap[ticket.status]?.label }}</span>
        </div>
        <p class="text-xs text-fg-muted line-clamp-2">{{ ticket.last_reply?.content || ticket.message }}</p>
        <div class="text-xs text-fg-dim mt-2">{{ new Date(ticket.created_at * 1000).toLocaleString() }}</div>
      </div>
    </div>
  </div>
</template>
