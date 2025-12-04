<script setup lang="ts">
import type { InputProps } from '#shared/types/InputProps'

const props = withDefaults(defineProps<InputProps>(), {})
const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

// Separar props de formField de las props de input
const { formFieldProps, modelValue, ...inputProps } = props
</script>

<template>
  <UFormField v-bind="formFieldProps" class="w-full">
    <UInput
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
      v-bind="inputProps"
      class="w-full"
    />
  </UFormField>
</template>
