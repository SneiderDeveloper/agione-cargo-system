<script setup lang="ts">
import type { SelectProps, FormFieldProps } from '@nuxt/ui'

const model = defineModel()

interface SelectPropsExtended extends SelectProps {
  formFieldProps?: FormFieldProps
}

const props = withDefaults(defineProps<SelectPropsExtended>(), {
  variant: 'subtle',
  size: 'lg'
})
</script>

<template>
  <div>
  <UFormField v-bind="formFieldProps">
    <USelect
      v-model="model"
      :multiple="multiple"
      :items="items"
      :variant="variant"
      :size="size"
      :placeholder="placeholder"
      class="w-full rounded-lg" 
    />
  </UFormField>
  </div>
</template>