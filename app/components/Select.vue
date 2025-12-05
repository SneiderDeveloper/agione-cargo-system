<script setup lang="ts">
import type { SelectItem, FormFieldProps } from '@nuxt/ui'

defineProps<{
  modelValue?: string | number,
  items?: SelectItem[],
  formFieldProps?: FormFieldProps
}>()
</script>

<template>
  <UFormField v-bind="formFieldProps">
    <USelect :model-value="modelValue" :items="items" class="w-48" />
  </UFormField>
</template>