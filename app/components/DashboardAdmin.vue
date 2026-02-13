<script setup lang="ts">
import type { Awb } from '#shared/types/awb'

const tickers = [
  {
    value: '4',
    label: "Today's Orders",
    icon: 'i-lucide-box',
  },
  {
    value: '2805',
    label: 'Total Cargo (kg)',
    icon: 'i-lucide-weight',
    color: 'slate'
  },
  {
    value: '1',
    label: 'Accepted/Not Secured',
    icon: 'i-lucide-badge-check',
    color: 'green'
  },
  {
    value: '1',
    label: 'Screening Completed',
    icon: 'i-lucide-shield',
    color: 'blue'
  },
  {
    value: '1',
    label: 'Pre-Manifested',
    icon: 'i-lucide-clipboard-list',
    color: 'purple'
  },
  {
    value: '1',
    label: 'Manifested',
    icon: 'i-lucide-plane',
    color: 'green'
  },
  {
    value: '50%',
    label: 'Efficiency',
    icon: 'i-lucide-gauge',
    color: 'green'
  },
]

defineProps<{
  awbs: Awb[] | undefined,
}>()
</script>
<template>
  <div class="flex flex-col gap-3">
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
        name: 'i-lucide-box',
      }"
    >
      <template #actions>
        <Chip 
          :label="`${awbs?.length || 0} AWBs`" 
          color="neutral"
          variant="soft"
          size="md"
        />
      </template>
      <div class="flex flex-col gap-3">
        <template v-for="awb in awbs">
          <OrderCard
            :id="awb.id"
            :title="awb.code"
            :awbsNumber="awb.code"
            :orderNumber="awb.code"
            :status="awb.status"
            :priority="awb.order?.priority"
            :totalWeight="awb?.totalWeight"
            :totalAwbs="awb?.totalNumberOfPieces"
            :description="awb.natureOfGoods"
            detailsLink="/admin/awb/"
            :user="{
              name: awb?.driver?.fullName,
              description: 'Arrived at 10:30 AM',
              avatar: {
                alt: awb?.driver?.fullName
              }
            }"
            :seeDetails="true"
          />
        </template>

      </div>
    </SectionContainer>
  </div>
</template>