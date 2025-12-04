<script setup lang="ts">
const { data } = await useFetch('/api/user/notifications')
</script>
<template>
	<Dropdown
		:badge-props="{ text: 5, size: '3xl', color: 'error', inset: true }"
		:button-props="{ icon:'i-lucide-bell', color:'neutral', variant:'ghost' }"
    	:ui="{ content: 'min-w-xs max-w-sm' }"
	>
		<template #content-top>
			<div class="flex gap-2 justify-between mb-4">
				<h2 class="font-semibold text-lg">Notifications</h2>
				<section class="flex gap-1">
					<Button 
						size="xs" 
						variant="ghost"
					>
						Mark all as read
					</Button>
					<Button 
						size="xs" 
						variant="ghost"
					>
						Clear all
					</Button>
				</section>
			</div>
		</template>
		<template #content-bottom>
			<div class="flex flex-col gap-2">
				<template v-for="notification in data" :key="notification.id">
					<NotificationItem
						:title="notification.title"
						:message="notification.message"
						:icon="notification.icon"
						:is-read="notification.isRead"
						:created-at="notification.createdAt"
					/>
				</template>
			</div>
		</template>
	</Dropdown>
</template>