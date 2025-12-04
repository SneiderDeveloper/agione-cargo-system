<script setup lang="ts">
import type { DropdownProps } from '#shared/types/dropdownProps'

defineProps<DropdownProps>()
</script>
<template>
	<Badge v-bind="badgeProps">
		<UDropdownMenu 
			:items="items" 
			:ui="{ ...ui, content: `rounded-2xl p-2 ${ui?.content ?? ''}` }"
		>
			<Avatar v-if="avatarProps" v-bind="avatarProps" />
			<Button v-else v-bind="buttonProps" />
			<template #content-top>
				<slot name="content-top" />
			</template>
			<template #content-bottom>
				<slot name="content-bottom" />
			</template>
		</UDropdownMenu>
	</Badge>
</template>