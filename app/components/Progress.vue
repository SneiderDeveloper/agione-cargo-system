<script setup lang="ts">
import type { ProgressProps } from '@nuxt/ui'

const props = defineProps<ProgressProps>()
</script>
<template>
  <UProgress v-bind="props" />
</template>