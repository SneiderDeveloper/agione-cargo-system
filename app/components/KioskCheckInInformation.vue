<script setup lang="ts">
import moment from 'moment'

const props = withDefaults(defineProps<{
  createdAt: string | undefined
}>(), {
  createdAt: '',
})

const FORMAT_DATE = 'MMM D, YYYY'
const FORMAT_TIME = 'hh:mm A'

const formatDate = (date: string, format: string) => {
  if (!date) return ''
  return moment(date).format(format)
}

const loading = useState<boolean>('loading')

const date = computed(() => formatDate(props?.createdAt, FORMAT_DATE))
const time = computed(() => formatDate(props?.createdAt, FORMAT_TIME))

</script>
<template>
  <InformationCard title="Kiosk Check In">
    <div class="flex justify-between items-center">
      <DataWidget 
        iconName="i-lucide-box"
        :value="date"
        label="Date"
        :isLoading="loading"
      />
      <DataWidget 
        iconName="i-lucide-box"
        :value="time"
        label="Time"
        :isLoading="loading"
      />
    </div>
  </InformationCard>
</template>