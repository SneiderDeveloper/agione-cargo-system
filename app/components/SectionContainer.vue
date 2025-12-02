<script setup lang="ts">
defineProps<{
	title: string
	description?: string
	headerClass?: string
	icon: {
		name: string
		backgroundColor?: string
		color?: string
	}
}>()
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
			<div 
				v-if="icon.name"
				class="
					flex 
					w-10 
					h-10 
					justify-center 
					items-center  
					rounded-lg
				"
				:class="icon.backgroundColor || 'bg-slate-200'"
			>
				<UIcon 
					:name="icon.name" 
					class="size-6" 
					:class="icon.color" 
				/>
			</div>
			<div>
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