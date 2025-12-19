<script setup lang="ts">
const props = defineProps<{
  title: string
  description?: string
  icon?: {
    name: string
    color?: string
    backgroundColor?: string
  }
  size?: 'xs' | 'sm' | 'md' | 'lg'
}>()

const sizeClass = computed(() => {
  if (props.size === 'xs') return { title: 'text-sm leading-2', description: 'text-xs' }
  if (props.size === 'sm') return { title: 'text-base leading-3', description: 'text-sm' }
  if (props.size === 'md') return { title: 'text-lg leading-5', description: 'text-sm' }
  if (props.size === 'lg') return { title: 'text-xl leading-6', description: 'text-lg' }
  return { title: 'text-lg leading-5', description: 'text-sm' }
})
</script>
<template>
  <div>
    <div class="flex gap-3">
      <IconContainer
        v-if="icon"
        :name="icon.name"
        :class-icon="icon.color"
        :class-name="icon.backgroundColor"
        :size="size"
      />
      <div class="flex gap-2 w-full justify-between items-center">
        <div>
          <p class="font-semibold" :class="sizeClass.title">{{ title }}</p>
          <span class="text-slate-500" :class="sizeClass.description">{{ description }}</span>
        </div>
        <div>
          <slot name="actions" />
        </div>
      </div>
    </div>
  </div>
</template>
