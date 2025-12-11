<script setup lang="ts">
const props = defineProps<{
  name: string | undefined,
  classIcon?: string
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
}>()

const sizeClasses = computed(() => {
  if (props.size == 'xs') return { sizeContainer: 'size-6', sizeIcon: 'size-4', rounded: 'rounded-md' }
  if (props.size == 'sm') return { sizeContainer: 'size-8', sizeIcon: 'size-5', rounded: 'rounded-lg' }
  if (props.size == 'md') return { sizeContainer: 'size-10', sizeIcon: 'size-7',  rounded: 'rounded-xl' }
  if (props.size == 'lg') return { sizeContainer: 'size-12', sizeIcon: 'size-9', rounded: 'rounded-xl' }
  return { sizeContainer: 'size-10', sizeIcon: 'size-6', rounded: 'rounded-xl' }
})
</script>
<template>
  <div 
    v-if="name"
    class="
      flex
      justify-center 
      items-center
      bg-slate-400
    "
    :class="`${sizeClasses.sizeContainer} ${sizeClasses.rounded} ${className ?? ''}`"
  >
    <UIcon 
      :name="name" 
      class="text-white"
      :class="`${sizeClasses.sizeIcon} ${classIcon ?? ''}`"
    />
  </div>
</template>