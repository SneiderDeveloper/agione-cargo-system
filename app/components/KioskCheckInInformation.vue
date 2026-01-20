<script setup lang="ts">
import moment from 'moment'

const props = defineProps<{
  createdAt: string | undefined
}>()

const date = props.createdAt ? moment(props.createdAt).format('MMM D, YYYY') : ''
const time = props.createdAt ? moment(props.createdAt).format('hh:mm A') : ''

</script>
<template>
  <InformationCard title="Kiosk Check In">
    <div class="flex justify-between items-center">
      <DataWidget 
        iconName="i-lucide-box"
        :value="date"
        label="Date"
      />
      <DataWidget 
        iconName="i-lucide-box"
        :value="time"
        label="Time"
      />
    </div>
  </InformationCard>
</template>