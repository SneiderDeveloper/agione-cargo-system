<script setup lang="ts">
import type { SectionContainerProps } from '#shared/types/sectionContainerProps'

defineProps<SectionContainerProps>()
</script>
<template>
	<div class="
		flex 
		flex-col
		border
		border-slate-100 
		shadow-slate-100 
		shadow-xl 
		rounded-2xl"
	>
		<section 
			:class="[
				'flex items-center gap-3 p-3 bg-slate-200 rounded-t-2xl',
				headerClass
			]"
		>
      <Icon 
        v-if="icon.name"
        :name="icon.name"
        :class-icon="icon.color"
        :class-name="icon.backgroundColor"
      />
			<div class="flex w-full justify-between items-center">
				<div>
					<h3 class="text-lg leading-5">{{ title }}</h3>
					<span class="text-slate-500 text-sm">{{ description }}</span>
				</div>
				<div>
					<slot name="actions" />
				</div>
			</div>
		</section>
		<section class="p-3">
			<slot />
		</section>
	</div>
</template>