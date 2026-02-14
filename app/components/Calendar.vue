<script setup lang="ts">
import { ref, computed } from 'vue'
import moment from 'moment'

interface CalendarDay {
  date: moment.Moment
  dayNumber: number
  dayName: string
  isToday: boolean
}

const currentDate = ref(moment())

const weekDays = computed((): CalendarDay[] => {
  const start = moment(currentDate.value).startOf('week')
  const days: CalendarDay[] = []
  const today = moment().startOf('day')

  for (let i = 0; i < 7; i++) {
    const date = moment(start).add(i, 'days')

    days.push({
      date: date,
      dayNumber: date.date(),
      dayName: date.format('ddd').toUpperCase(),
      isToday: date.isSame(today, 'day')
    })
  }

  return days
})


const weekRange = computed(() => {
  const start = weekDays.value[0]?.date
  const end = weekDays.value[6]?.date
  
  const startStr = start?.format('MMMM D')
  const endStr = end?.format('MMMM D, YYYY')
  
  return `${startStr} - ${endStr}`
})

const handleBack = () => {
  currentDate.value = moment(currentDate.value)
    .subtract(7, 'days')
}

const handleForward = () => {
  currentDate.value = moment(currentDate.value)
    .add(7, 'days')
}

const handleToday = () => {
  currentDate.value = moment()
}
</script>

<template>
  <SectionContainer
    title="Weekly Calendar"
    :description="weekRange"
    :icon="{
      name: 'i-lucide-calendar',
      color: 'green'
    }"
  >
    <template #actions>
      <div 
        class="
          flex
          items-center
          gap-2
          rounded-2xl 
          bg-white p-2
        "
      >
        <UButton 
          color="neutral" 
          variant="soft" 
          icon="i-lucide-chevron-left" 
          @click="handleBack"
        />
        <UButton 
          color="neutral" 
          variant="soft"
          @click="handleToday"
        >
          Today
        </UButton>
        <UButton 
          color="neutral" 
          variant="soft" 
          icon="i-lucide-chevron-right" 
          @click="handleForward"
        />
      </div>
    </template>
    <div class="overflow-x-auto w-full">
      <div 
        class="
          grid 
          grid-cols-7 
          gap-2 
          h-120 
          min-w-max
        "
      >
        <template v-for="day in weekDays" :key="day.date.valueOf()">
          <Column :day="day" />
        </template>
      </div>
    </div>
  </SectionContainer>
</template>