import type { UserProps as UUserProps, BadgeProps } from '@nuxt/ui';

export interface UserProps extends UUserProps {
  chip?: BadgeProps,
  isLoading?: boolean,
}