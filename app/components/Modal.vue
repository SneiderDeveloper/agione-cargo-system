<script setup lang="ts">
import type { ModalProps, ButtonProps } from '@nuxt/ui'

const modal = defineModel<boolean>()

interface ModalPropsExtended extends ModalProps {
  buttonProps?: ButtonProps
}

const props = withDefaults(defineProps<ModalPropsExtended>(), {
  title: '',
  description: '',
})

const slots = useSlots()
const hasFooter = computed(() => !!slots.footer)
</script>
<template>
  <UModal 
    v-model:open="modal" 
    :title="title" 
    :description="description" 
    :ui="{ content: 'rounded-2xl' }"
  >
    <Button v-if="buttonProps" v-bind="buttonProps" />
    <template v-if="$slots.header" #header>
      <slot name="header" />
    </template>
    <template v-if="$slots.content" #content>
      <slot name="content" />
    </template>
    <template #body>
      <slot />
    </template>
    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
  </UModal>
</template>
