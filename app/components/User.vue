<script setup lang="ts">
import type { UserProps } from '#shared/types/userProps'

defineProps<UserProps>()
</script>
<template>
  <div>
    <UUser
      :name="name"
      :avatar="avatar"
      :size="size"
      v-if="!isLoading"
    >
      <template #description>
        <ClientOnly>
          <div v-if="description || chip" class="flex flex-col">
            <span 
              v-if="description" 
              class="text-slate-500"
            >
              {{ description }}
            </span>
            <Chip 
              v-if="chip" 
              v-bind="chip" 
              class="mt-1.5"
            />
          </div>
        </ClientOnly>
      </template>
    </UUser>
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