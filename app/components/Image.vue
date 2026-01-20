<script setup lang="ts">
defineProps<{
  src: string | undefined
  alt?: string
}>()
</script>
<template>
  <div>
    <img
      v-if="src"
      :src="src" 
      :alt="alt" 
      class="rounded-2xl object-cover"
    />
    <div 
      class="
        flex 
        items-center 
        justify-center 
        border-2 
        border-dashed 
        border-slate-300 
        rounded-2xl 
        p-7
      " 
      v-else
    >
      <IconContainer
        name="i-lucide-image-off"
        size="md"
      />
    </div>
  </div>
</template>