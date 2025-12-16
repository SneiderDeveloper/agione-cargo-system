<script setup lang="ts">
import type { InputProps } from '#shared/types/InputProps'

const props = withDefaults(defineProps<InputProps>(), {
  variant: 'subtle',
  size: 'lg',
})
const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const { formFieldProps, modelValue, ...inputProps } = props
</script>

<template>
  <UFormField v-bind="formFieldProps" class="w-full">
    <UInput
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
      v-bind="inputProps"
      class="w-full"
      :ui="{ base: 'rounded-lg' }"
    />
  </UFormField>
</template>
