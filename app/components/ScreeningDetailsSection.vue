<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

const items: TabsItem[] = [
  {
    label: 'Manual',
    icon: 'i-lucide-edit',
    slot: 'manual'
  },
  {
    label: 'Scan',
    icon: 'i-lucide-scan',
    slot: 'scan'
  }
]
</script>
<template>
  <SectionContainer
    title="Add Screening Details"
    description="Perform additional security inspections"
    :icon="{
      name: 'i-lucide-list',
      color: 'purple'
    }"
  >
    <UTabs :items="items" color="neutral">
      <template #manual>
        <ScreeningDetailsForm />
      </template>
      <template #scan>
        <ScreeningDetailsForm :scan="true" />
      </template>
    </UTabs>
    <Button class="w-full mt-3">
      Add Inspection
    </Button>
  </SectionContainer>
</template>