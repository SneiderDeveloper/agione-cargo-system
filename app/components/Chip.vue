<script setup lang="ts">
import type { BadgeProps } from '@nuxt/ui';

defineProps<BadgeProps>()
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
		:label="label"
	>
		<slot />
	</UBadge>
</template>
