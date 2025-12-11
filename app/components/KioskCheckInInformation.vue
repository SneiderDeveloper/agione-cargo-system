<script setup lang="ts">
defineProps<{
  createdAt: string
}>()
</script>
<template>
  <InformationCard title="Kiosk Check In">
    <div class="flex justify-between items-center">
      <DataWidget 
        iconName="i-lucide-box"
        value="Sep 2, 2025"
        label="Date"
      />
      <DataWidget 
        iconName="i-lucide-box"
        value="08:30 AM"
        label="Time"
      />
    </div>
  </InformationCard>
</template>