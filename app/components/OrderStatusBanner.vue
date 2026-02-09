<script setup lang="ts">
import moment from 'moment';

const dateCheckIn = ref(moment('2024-12-11 12:40 PM', 'YYYY-MM-DD hh:mm A'));
const hoursDifference = ref<string>('00:00:00');

let intervalId: number | undefined;

withDefaults(defineProps<{
  totalAwbs: string | number | undefined | null
  assignedDoor: string | undefined | null
}>(), {
  totalAwbs: '0',
  assignedDoor: 'N/A'
})

onMounted(() => {
  intervalId = setInterval(() => {
    const currentTime = moment();
    const duration = moment(currentTime.diff(dateCheckIn.value));
    hoursDifference.value = duration.format('HH:mm:ss');
  }, 1000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>
<template>
  <div 
    class="
      flex
      justify-between
      items-center
      border-2 
      border-slate-200 
      rounded-2xl 
      p-3
    "
  >
    <section class="flex gap-2">
      <IconContainer
        name="i-lucide-truck"
        size="md"
      />
      <div>
        <div class="flex items-center gap-2">
          <Chip 
            label="Acceptance In Progress"
            variant="soft"
            color="secondary"
          />
          <div class="flex items-center gap-1">
            <UIcon
              name="i-lucide-clock"
              class="bg-secondary"
            />
            <span class="text-sm font-medium">
              {{ hoursDifference }}
            </span>
          </div>
        </div>
        <MetaTags
          :tags="[
            `${totalAwbs} AWBs`,
            `${assignedDoor}`
          ]"
        />
      </div>
    </section>
    <Progress
      :v-model="4"
      :max="5"
      :ui="{
        root: 'w-20'
      }"
      color="secondary"
    />
  </div>
</template>