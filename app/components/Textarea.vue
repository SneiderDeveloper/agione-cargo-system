<script setup lang="ts">
import type { TextareaProps, FormFieldProps } from '@nuxt/ui'

const model = defineModel<string>()

interface TextareaPropsExtended extends TextareaProps {
  formFieldProps?: FormFieldProps
}

const props = withDefaults(defineProps<TextareaPropsExtended>(), {
  variant: 'subtle',
  autoresize: true,
})

const { formFieldProps, modelValue, ...textareaProps } = props
</script>
<template>
  <UFormField v-bind="formFieldProps" class="w-full">
    <UTextarea 
      v-model="model"
      v-bind="textareaProps" 
      :ui="{ base: 'rounded-lg', root: 'w-full' }" 
    />
  </UFormField>
</template>