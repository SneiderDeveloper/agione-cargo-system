<script setup lang="ts">
defineProps<{
	icon?: string
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning'
	variant?: 'outline' | 'solid' | 'soft' | 'subtle' | 'ghost' | 'link'
	trailingIcon?: string
}>()
</script>
<template>
	<UButton 
		:icon="icon" 
		:color="color" 
		:variant="variant" 
		:size="size"
		:trailing-icon="trailingIcon"
	>
		<slot />
	</UButton>
</template>