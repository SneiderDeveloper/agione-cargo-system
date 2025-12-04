import type { 
  InputProps as UInputProps, 
  FormFieldProps
} from '@nuxt/ui'

export interface InputProps extends UInputProps {
  formFieldProps?: FormFieldProps
}