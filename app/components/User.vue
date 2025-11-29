<script setup lang="ts">
defineProps<{
  name: string
  description: string
  avatar: {
    src?: string
    icon?: string
    alt?: string
    size?: 	'md' | '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '3xs' | '2xl' | '3xl'
  }
}>()
</script>
<template>
  <UUser
    :name="name"
    :description="description"
    :avatar="avatar"
  />
</template>