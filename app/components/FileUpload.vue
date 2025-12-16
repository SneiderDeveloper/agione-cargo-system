<script setup lang="ts">
import type { FileUploadProps, FormFieldProps } from '@nuxt/ui'

interface FileUploadPropsExtended extends FileUploadProps {
  formFieldProps?: FormFieldProps
}

const props = defineProps<FileUploadPropsExtended>()
</script>
<template>
  <UFormField v-bind="formFieldProps" class="w-full">
    <UFileUpload v-bind="props" :ui="{ base: 'rounded-2xl' }" />
  </UFormField>
</template>