<script setup lang="ts">
defineProps<{
	label: string
	icon?: string
	size?: 'sm' | 'md' | 'lg' | 'xs' | 'xl' | undefined
	color?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'error' | 'neutral' | undefined
	variant?: 'solid' | 'outline' | 'soft' | 'subtle' | undefined
	trailingIcon?: string
	avatar?: any
	class?: string
}>()
</script>
<template>
  <UBadge 
		:icon="icon" 
		:size="size" 
		:color="color" 
		:variant="variant"
		:trailing-icon="trailingIcon"
		:avatar="avatar"
		:class="class"
	>
		{{ label }}
	</UBadge>
</template>
