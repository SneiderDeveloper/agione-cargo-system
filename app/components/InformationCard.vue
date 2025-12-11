<script setup lang="ts">
import type { BadgeProps } from '@nuxt/ui'

defineProps<{
  title?: string
  chip?: BadgeProps
}>()
</script>
<template>
  <div class="border-2 border-slate-100 rounded-2xl p-3">
    <section class="flex justify-between items-center mb-3">
      <h3 class="uppercase text-slate-500 text-xs font-semibold">
        {{ title }}
      </h3>
      <Chip
        v-if="chip?.label"
        :label="chip?.label"
        :color="chip?.color"
        :variant="chip?.variant"
      />
    </section>
    <section>
      <slot />
    </section>
  </div>
</template>