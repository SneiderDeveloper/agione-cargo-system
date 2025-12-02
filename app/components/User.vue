<script setup lang="ts">
defineProps<{
  name: string
  description?: string
  avatar: {
    src?: string
    icon?: string
    alt?: string
  }
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | undefined
  chip?: {
    label: string
    icon?: string
    size?: 'sm' | 'md' | 'lg' | 'xs' | 'xl' | undefined
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'error' | 'neutral' | undefined
    variant?: 'solid' | 'outline' | 'soft' | 'subtle' | undefined
  }
}>()
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
          <Chip v-if="chip" v-bind="chip" class="mt-1.5"/>
        </div>
      </ClientOnly>
    </template>
  </UUser>
</template>