<script setup lang="ts">
  defineProps<{
    label?: string | null
    value?: string | number
    iconName?: string
  }>()
</script>
<template>
  <div class="flex gap-2 items-center">
    <IconContainer
      :name="iconName"
      size="sm"
    />
    <section class="flex flex-col">
      <span v-if="label" class="text-xs text-slate-500">
        {{ label }}
      </span>
      <span v-if="value" class="font-semibold text-lg">
        {{ value }}
      </span>
    </section>
  </div>
</template>