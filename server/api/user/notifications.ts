export default defineEventHandler(async (event) => {
  return [
    {
      id: 1,
      title: 'Door Assigned',
      message: 'You have been assigned to Gate A-05',
      icon: 'i-lucide-shopping-cart',
      isRead: false,
      link: '/messages/123',
      createdAt: new Date(),
    },
    {
      id: 2,
      title: 'New Order Assigned',
      message: 'Order ORD-2025-001 has been assigned to you',
      icon: 'i-lucide-shopping-cart',
      isRead: false,
      link: '/messages/123',
      createdAt: new Date(),
    }
  ]
})