<script setup lang="ts">
defineProps<{
	text?: string | number
	size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
	color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning'
	inset?: boolean
}>()
</script>
<template>
	<UChip 
		:text="text" 
		:size="size" 
		:color="color"
		:inset="inset"
	>
		<slot />
	</UChip>
</template>