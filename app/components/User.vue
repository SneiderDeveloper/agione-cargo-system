<script setup lang="ts">
import type { UserProps } from '#shared/types/userProps'

withDefaults(defineProps<UserProps>(), {
  isLoading: false,
  name: '',
  size: 'md',
  avatar: {
    alt: '',
  }
})
</script>
<template>
  <div>
    <div v-if="!isLoading">
      <ClientOnly>
        <UUser
          :name="name"
          :avatar="avatar"
          :size="size"
        >
          <template #description>
              <div v-show="description || chip" class="flex flex-col">
                <span 
                  v-show="description" 
                  class="text-slate-500"
                >
                  {{ description }}
                </span>
                <Chip 
                  v-show="chip.label || chip.icon" 
                  v-bind="chip" 
                  class="mt-1.5"
                />
              </div>
          </template>
        </UUser>
      </ClientOnly>
    </div>
    <div 
      v-if="isLoading"
      class="flex items-center gap-4"
    >
      <USkeleton class="h-12 w-12 rounded-full" />
      <div class="grid gap-2">
        <USkeleton class="h-5 w-32" />
        <USkeleton class="h-4 w-24" />
      </div>
    </div>
  </div>
</template>