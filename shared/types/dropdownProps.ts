import type { 
    ChipProps, 
    ButtonProps, 
    AvatarProps, 
    DropdownMenuItem, 
    DropdownMenuProps 
} from '@nuxt/ui/'

export interface DropdownProps {
    items?: DropdownMenuItem[]
	ui?: DropdownMenuProps['ui']
	badgeProps?: ChipProps
	buttonProps?: ButtonProps
	avatarProps?: AvatarProps
}