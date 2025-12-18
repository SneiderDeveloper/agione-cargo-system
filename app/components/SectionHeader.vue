<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  icon?: {
    name: string
    color?: string
    backgroundColor?: string
  }
}>()
</script>
<template>
  <div class="flex items-center gap-3">
    <IconContainer
      v-if="icon"
      :name="icon.name"
      :class-icon="icon.color"
      :class-name="icon.backgroundColor"
    />
    <div class="flex gap-2 w-full justify-between items-center">
      <div>
        <h3 class="text-lg leading-5 font-semibold">{{ title }}</h3>
        <span class="text-slate-500 text-sm">{{ description }}</span>
      </div>
      <div>
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
