<script setup lang="ts">
import type { TickerProps } from '#shared/types/tickerProps'

withDefaults(defineProps<TickerProps>(), {
  value: 0,
  color: 'slate'
})
</script>
<template>
  <div 
    class="
      flex
      w-full
      sm:max-w-80
      justify-between
      items-center
      rounded-2xl 
      border
      border-slate-200/60
      hover:border-slate-300/80 
      p-3 
      transition-all 
      duration-500 
      hover:shadow-lg 
      hover:shadow-slate-200/40 
      hover:-translate-y-1 
      cursor-pointer
    "
  >
    <section>
      <h1 class="text-2xl font-bold">
        {{ value }}
      </h1>
      <span class="text-sm uppercase text-slate-400 font-semibold">
        {{ label }}
      </span>
    </section>
    <section 
      class="
        size-10
        flex 
        justify-center 
        items-center 
        rounded-2xl
      "
      :class="`bg-${color}-100`"
    >
      <UIcon 
        :name="icon" 
        class="size-6"
        :class="`text-${color}-500`"
      />
    </section>
  </div>
</template>