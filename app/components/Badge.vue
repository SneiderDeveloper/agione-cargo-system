<script setup lang="ts">
import type { ChipProps } from '@nuxt/ui/'

defineProps<ChipProps>()
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