<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

const props = defineProps<ButtonProps>()
</script>
<template>
	<UButton 
		v-bind="{ ...props }" 
		:class="`rounded-lg cursor-pointer text-center ${props.class ?? ''}`"
	>
    <div class="flex w-full justify-center">
      <slot />
    </div>
	</UButton>
</template>