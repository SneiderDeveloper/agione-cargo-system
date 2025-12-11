<script setup lang="ts">
import type { TextareaProps, FormFieldProps } from '@nuxt/ui'

interface TextareaPropsExtended extends TextareaProps {
  formFieldProps?: FormFieldProps
}

const props = withDefaults(defineProps<TextareaPropsExtended>(), {
  variant: 'subtle',
  autoresize: true,
})
</script>
<template>
  <UFormField v-bind="props.formFieldProps" class="w-full">
    <UTextarea v-bind="props" :ui="{ base: 'rounded-lg', root: 'w-full' }" />
  </UFormField>
</template>