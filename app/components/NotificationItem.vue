<script setup lang="ts">
import moment from 'moment'
import type { NotificationItemProps } from '#shared/types/notificationItemProps'

defineProps<NotificationItemProps>()
</script>
<template>
	<div 
		class="p-2 hover:bg-slate-50 cursor-pointer rounded-xl"
		:class="isRead ? 'bg-white' : 'bg-primary/10'"
	>
		<Badge size="md" inset :show="!isRead" :ui="{ root: 'w-full justify-start' }">
			<div class="flex gap-2">
				<section>
					<div class="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full">
						<UIcon :name="icon ?? 'i-lucide-truck'" />
					</div>
				</section>
				<section>
					<h2 class="font-semibold">{{ title }}</h2>
					<p class="text-sm text-neutral-500">{{ message }}</p>
					<span class="text-xs text-neutral-500">
						{{ createdAt ? moment(createdAt).format('MMM DD - hh:mm A') : '' }}
					</span>
				</section>
			</div>
		</Badge>
	</div>
</template>