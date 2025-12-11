<script setup lang="ts">
import type { SwitchProps } from '@nuxt/ui'
  
const props = defineProps<SwitchProps>()
</script>

<template>
  <USwitch v-bind="props" />
</template>
