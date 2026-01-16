export interface OrderCardProps {
  id: number
  title: string
  orderNumber: string
  priority: 'Low' | 'Medium' | 'High'
  status: 'Pending' | 'In progress' | 'Completed'
  totalWeight: number | string
  totalAwbs: number | string
  dest: string[]
  assignedDoor?: string
  createdAt?: string
  user: {
    name: string
    description?: string
    avatar: {
      src?: string
      alt?: string
    }
  }
  seeDetails?: boolean
  unassigned?: boolean
}