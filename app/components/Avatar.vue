<script setup lang="ts">
import type { AvatarProps } from '@nuxt/ui'

defineProps<AvatarProps>()
</script>
<template>
  <UAvatar :alt="alt" :size="size" />
</template>