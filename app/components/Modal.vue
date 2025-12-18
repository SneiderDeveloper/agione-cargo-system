<script setup lang="ts">
import type { ModalProps, ButtonProps } from '@nuxt/ui'

const modal = defineModel<boolean>()

interface ModalPropsExtended extends ModalProps {
  buttonProps?: ButtonProps
}

const props = withDefaults(defineProps<ModalPropsExtended>(), {

})
</script>
<template>
  <UModal 
    v-model:open="modal" 
    :title="title" 
    :description="description" 
    :ui="{ content: 'rounded-2xl' }"
  >
    <Button v-if="buttonProps" v-bind="buttonProps" />
    <template #header>
      <slot name="header" />
    </template>
    <template #content>
      <slot name="content" />
    </template>
    <template #body>
      <slot />
    </template>
    <template #footer>
      <slot name="footer" />
    </template>
  </UModal>
</template>
