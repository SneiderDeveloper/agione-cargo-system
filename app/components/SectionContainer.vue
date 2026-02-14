<script setup lang="ts">
import type { SectionContainerProps } from '#shared/types/sectionContainerProps'

const props = withDefaults(defineProps<SectionContainerProps>(), {
  content: true
})
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
				'p-3 bg-slate-200',
        props.content ? 'rounded-t-2xl' : 'rounded-2xl',
				headerClass
			]"
		>
      <SectionHeader 
        :title="title" 
        :description="description" 
        :icon="icon"
		    :size="size"
      >
        <template #actions>
          <slot name="actions" />
        </template>
      </SectionHeader>
		</section>
		<section v-if="content" class="p-3 h-full">
			<slot />
		</section>
	</div>
</template>