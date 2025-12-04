<script setup lang="ts">
import type { UserProps } from '#shared/types/userProps'

defineProps<UserProps>()
</script>
<template>
  <UUser
    :name="name"
    :avatar="avatar"
    :size="size"
  >
    <template #description>
      <ClientOnly>
        <div v-if="description || chip" class="flex flex-col">
          <span 
            v-if="description" 
            class="text-base text-slate-500"
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
</template>