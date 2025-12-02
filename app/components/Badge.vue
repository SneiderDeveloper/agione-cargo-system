<script setup lang="ts">
defineProps<{
	text?: string | number
	size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
	color?: 'warning' | 'neutral' | 'primary' | 'secondary' | 'success' | 'info' | 'error' | undefined
	inset?: boolean
	ui?: Record<string, unknown>
}>()
</script>
<template>
	<UChip 
		:text="text" 
		:size="size" 
		:color="color"
		:inset="inset"
		:ui="ui"
	>
		<slot />
	</UChip>
</template>