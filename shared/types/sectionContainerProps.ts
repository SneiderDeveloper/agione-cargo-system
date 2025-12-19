export interface SectionContainerProps {
  title: string
	description?: string
	headerClass?: string
	content?: boolean
	size?: 'xs' | 'sm' | 'md' | 'lg'
	icon?: {
		name: string
		backgroundColor?: string
		color?: string
	}
}