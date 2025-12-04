<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

const props = defineProps<ButtonProps>()
</script>
<template>
	<UButton 
		v-bind="{ ...props }" 
		:class="`rounded-lg ${props.class ?? ''}`"
	>
		<slot />
	</UButton>
</template>