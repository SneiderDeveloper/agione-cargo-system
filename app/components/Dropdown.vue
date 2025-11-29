<script setup lang="ts">
import type { DropdownMenuItem, DropdownMenuProps } from '@nuxt/ui/'

defineProps<{
	items?: DropdownMenuItem[]
	ui?: DropdownMenuProps['ui']
	badgeProps?: {
		text?: string | number
		size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
		color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning'
		inset?: boolean
		show?: boolean
	}
	buttonProps?: {
		icon?: string
		color?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning'
		variant?: 'outline' | 'solid' | 'soft' | 'subtle' | 'ghost' | 'link'
	}
	avatarProps?: {
		alt?: string
		size?: 	'md' | '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '3xs' | '2xl' | '3xl'
	}
}>()
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