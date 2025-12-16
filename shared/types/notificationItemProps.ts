export interface NotificationItemProps {
  title: string
	message: string
	icon?: string
	isRead?: boolean
	link?: string
	createdAt?: Date | string
}