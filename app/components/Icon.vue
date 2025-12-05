<script setup lang="ts">
const props = defineProps<{
  name: string,
  classIcon?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}>()

const sizeProp = computed(() => {
  if (props.size == 'sm') return { sizeContainer: 'size-8', sizeIcon: 'size-5' }
  if (props.size == 'md') return { sizeContainer: 'size-10', sizeIcon: 'size-6' }
  if (props.size == 'lg') return { sizeContainer: 'size-12', sizeIcon: 'size-7' }
  return { sizeContainer: 'size-10', sizeIcon: 'size-6' }
})
</script>
<template>
  <div 
    v-if="name"
    class="
      flex
      justify-center 
      items-center  
      rounded-xl
      bg-slate-400
    "
    :class="`${sizeProp.sizeContainer} ${className ?? ''}`"
  >
    <UIcon 
      :name="name" 
      class="text-white"
      :class="`${sizeProp.sizeIcon} ${classIcon ?? ''}`"
    />
  </div>
</template>