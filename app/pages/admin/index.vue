<script setup lang="ts">
import type { Awb } from '#shared/types/awb'
import type { TabsItem } from '@nuxt/ui'

const items: TabsItem[] = [
  {
    label: 'Dashboard',
    icon: 'i-lucide-bar-chart-3',
    slot: 'dashboard'
  },
  {
    label: 'Status Board',
    icon: 'i-lucide-layout-dashboard',
    slot: 'statusBoard'
  },
  {
    label: 'Calendar',
    icon: 'i-lucide-calendar',
    slot: 'calendar'
  }
]

const { data: awbs } = await useLazyFetch<Awb[]>('/api/awb')
</script>
<template>
  <UTabs :items="items" color="neutral">
    <template #dashboard>
      <DashboardAdmin :awbs="awbs" />
    </template>
    <template #statusBoard>
      <span>Status Board</span>
    </template>
    <template #calendar>
      <Calendar />
    </template>
  </UTabs>
</template>