<script setup lang="ts">
  defineProps<{
    label?: string | null
    value?: string | number
    iconName?: string
    isLoading?: boolean
  }>()
</script>
<template>
  <div class="flex gap-2 items-center">
    <IconContainer
      :name="iconName"
      size="sm"
    />
    <section v-if="!isLoading" class="flex flex-col">
      <span class="text-xs text-slate-500">
        {{ label }}
      </span>
      <span class="font-semibold text-lg">
        {{ value }}
      </span>
    </section>
    <div 
      v-if="isLoading"
      class="grid gap-1.5"
    >
      <USkeleton class="h-3 w-24" />
      <USkeleton class="h-5 w-32" />
    </div>
  </div>
</template>