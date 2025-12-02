<script setup lang="ts">
defineProps<{
  tags: string[]
}>()
</script>
<template>
  <div class="flex gap-1.5 text-sm text-slate-600">
    <template v-for="(tag, index) in tags" :key="index">
      <span>{{ tag }}</span>
      <span v-if="index < tags.length - 1">•</span>
    </template>
  </div>
</template>