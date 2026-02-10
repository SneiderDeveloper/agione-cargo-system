<script setup lang="ts">
import type { Awb } from '#shared/types/awb'

const { data: awbs } = await useLazyFetch<Awb[]>('/api/awb')

const tickers = [
  {
    value: '4',
    label: "Today's Orders",
    icon: 'i-lucide-box',
  },
  {
    value: '2805',
    label: 'Total Cargo (kg)',
    icon: 'i-lucide-box',
    color: 'green'
  },
  {
    value: '1',
    label: 'Accepted/Not Secured',
    icon: 'i-lucide-box',
    color: 'green'
  },
  {
    value: '1',
    label: 'Screening Completed',
    icon: 'i-lucide-box',
    color: 'green'
  },
  {
    value: '1',
    label: 'Pre-Manifested',
    icon: 'i-lucide-box',
    color: 'green'
  },
  {
    value: '1',
    label: 'Manifested',
    icon: 'i-lucide-box',
    color: 'green'
  },
  {
    value: '50%',
    label: 'Efficiency',
    icon: 'i-lucide-box',
    color: 'green'
  },
]

console.log(awbs.value)
</script>
<template>
  <div class="grid grid-cols-2 gap-2">
    <template v-for="ticker in tickers">
      <Ticker 
        :value="ticker.value" 
        :label="ticker.label" 
        :icon="ticker.icon" 
        :color="ticker.color"
      />
    </template>
  </div>
  <SectionContainer 
    title="Today's Processing Overview"
    description="Real-time status of today's cargo processing activities"
    headerClass="bg-red-500"
    :icon="{
      name: 'i-lucide-chart-bar',
    }"
  >
  {{ awbs }}
    <template v-for="awb in awbs">
      <OrderCard
        :title="awb.code"
        :awbsNumber="awb.code"
        :orderNumber="awb.code"
        :status="awb.status"
        :totalWeight="awb?.totalWeight"
        :totalAwbs="awb?.totalNumberOfPieces"
        :user="{
          name: awb?.driver?.fullName,
          avatar: {
            alt: awb?.driver?.fullName
          }
        }"
        :seeDetails="true"
      />
    </template>
  </SectionContainer>
</template>