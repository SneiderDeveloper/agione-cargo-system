<script setup lang="ts">
withDefaults(defineProps<{
  tags: string[]
  variant?: 'text' | 'chip'
}>(), {
  variant: 'text'
})
</script>
<template>
  <div v-if="variant === 'text'" class="flex gap-1.5 text-sm text-slate-600">
    <template v-for="(tag, index) in tags" :key="index">
      <span>{{ tag }}</span>
      <span v-if="index < tags.length - 1">•</span>
    </template>
  </div>
  <div v-if="variant === 'chip'" class="flex gap-1.5">
    <template v-for="(tag, index) in tags" :key="index">
      <Chip 
        v-if="tag"
        :label="tag"
        color="neutral"
        variant="soft"
      />
    </template>
  </div>
</template>