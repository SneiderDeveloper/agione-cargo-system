<script setup lang="ts">
defineProps<{
	alt?: string
	size?: 	'md' | '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '3xs' | '2xl' | '3xl'
}>()
</script>
<template>
  <UAvatar :alt="alt" :size="size" />
</template>