<script setup lang="ts">
import type { SelectItem, SelectProps, FormFieldProps } from '@nuxt/ui'

interface SelectPropsExtended extends SelectProps {
  items?: SelectItem[]
  formFieldProps?: FormFieldProps
}

const props =defineProps<SelectPropsExtended>()
</script>

<template>
  <UFormField v-bind="formFieldProps">
    <USelect
      v-bind="props"
      class="w-full rounded-lg" 
    />
  </UFormField>
</template>