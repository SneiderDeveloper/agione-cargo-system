<script setup lang="ts">
import type { InputProps } from '#shared/types/InputProps'

const model = defineModel<string | number>()

const props = withDefaults(defineProps<InputProps>(), {
  variant: 'subtle',
  size: 'lg',
})

const { formFieldProps, modelValue, ...inputProps } = props
</script>
<template>
  <UFormField v-bind="formFieldProps" class="w-full">
    <UInput
      v-model="model"
      v-bind="inputProps"
      class="w-full"
      :ui="{ base: 'rounded-lg' }"
    >
      <slot />
      <template v-if="$slots.leading" #leading>
        <slot name="leading" />
      </template>
      <template v-if="$slots.trailing" #trailing>
        <slot name="trailing" />
      </template>
    </UInput>
  </UFormField>
</template>
