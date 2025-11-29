<script setup lang="ts">
defineProps<{
	title: string
	message: string
	icon?: string
	isRead?: boolean
	link?: string
	createdAt?: Date
}>()
</script>
<template>
	<div 
		class="p-2 hover:bg-slate-50 cursor-pointer rounded-xl w-full"
		:class="isRead ? 'bg-white' : 'bg-primary/10'"
	>
		<Badge size="md" inset :show="!isRead">
			<div class="flex gap-2 bg-amber-100 w-full">
				<section>
					<div class="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full">
						<UIcon :name="icon ?? 'i-lucide-truck'" />
					</div>
				</section>
				<section>
					<h2 class="font-semibold">{{ title }}</h2>
					<p class="text-sm text-neutral-500">{{ message }}</p>
					<span class="text-xs text-neutral-500">
						{{ createdAt ? new Date(createdAt).toLocaleString('en-US', { 
							hour: '2-digit', 
							minute: '2-digit', 
							hour12: true,
							month: 'short',
							day: '2-digit'
						}).replace(',', ' -') : '' }}
					</span>
				</section>
			</div>
		</Badge>
	</div>
</template>