import type { Awb } from './order'
export interface OrderCardProps {
  id?: number
  title: string
  orderNumber: string
  priority?: 'Low' | 'Medium' | 'High'
  status?: 'Pending' | 'In progress' | 'Accepted' | 'Rejected',
  totalWeight: number | string
  totalAwbs: number | string
  awbs?: Awb[]
  dest?: string[]
  assignedDoor?: string
  createdAt?: string
  description?: string
  user: {
    name: string
    description?: string
    avatar: {
      src?: string
      alt?: string
    }
  }
  detailsLink?: string
  unassigned?: boolean
  completed?: boolean
  completionDate?: string
}