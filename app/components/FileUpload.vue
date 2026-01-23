<script setup lang="ts">
import type { FileUploadProps, FormFieldProps } from '@nuxt/ui'

const model = defineModel()

interface FileUploadPropsExtended extends FileUploadProps {
  formFieldProps?: FormFieldProps
}

defineProps<FileUploadPropsExtended>()

</script>
<template>
  <UFormField v-bind="formFieldProps" class="w-full">
    <UFileUpload 
      v-model="model"
      :multiple="multiple"
      :accept="accept"
      :required="required"
      :label="label"
      :description="description"
      :layout="layout"
      :size="size"
      :icon="icon"
      :ui="{ base: 'rounded-2xl' }" 
    >
      <template #files-top="{ open, files }">
        <div v-if="files?.length" class="mb-2 flex items-center justify-between">
          <p class="font-bold">Files ({{ files?.length }})</p>
          <Button
            icon="i-lucide-plus"
            label="Add more"
            color="neutral"
            variant="outline"
            class="-my-2"
            @click.stop="open()"
          />
        </div>
      </template>
    </UFileUpload>
  </UFormField>
</template>