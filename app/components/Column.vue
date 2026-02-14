<script setup lang="ts">
  defineProps<{
    day: {
      dayNumber: number
      dayName: string
      isToday: boolean
    }
  }>()
</script>
<template>
  <div 
    class="
      h-full 
      min-w-32
      rounded-2xl 
      bg-slate-50 
      border 
      border-slate-100
    "
  >
    <section 
      :class="[
        'border-b text-center rounded-t-2xl p-2',
        day.isToday 
          ? 'bg-green-100 border-green-200' 
          : 'bg-slate-100 border-slate-200'
      ]"
    >
      <h1 class="font-semibold text-2xl">
        {{ day.dayNumber }}
      </h1>
      <span class="text-slate-500 text-xs uppercase">
        {{ day.dayName }}
      </span>
    </section>
    <section class="p-2">
      <!-- Card -->
      <div
        class="
          grid
          gap-1 
          border-l-4 
          border-green-500 
          bg-green-50 
          rounded-lg 
          p-2
        "
      >
        <h3 class="font-semibold">
          ORD-2025-001
        </h3>
        <div>
          <span class="text-sm text-slate-400">Driver</span>
          <p class="text-sm font-semibold">John Doe</p>
        </div>
        <div>
          <div class="flex items-center gap-1">
            <UIcon name="i-lucide-clock" class="text-slate-400" />
            <span class="text-sm text-slate-400">Arrival: 08:30</span>
          </div>
          <div class="flex items-center gap-1">
            <UIcon name="i-lucide-box" class="text-slate-400" />
            <span class="text-sm text-slate-400">3 AWBs</span>
          </div>
          <div class="flex items-center gap-1 text-green-500">
            <UIcon name="i-lucide-box" />
            <span class="text-sm">In Buildup: 4:45 PM</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>