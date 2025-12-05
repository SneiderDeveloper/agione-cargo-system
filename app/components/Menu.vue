<script setup lang="ts">
const items = ref([
  [
    {
      label: 'Benjamin',
      avatar: {
        src: 'https://github.com/benjamincanac.png'
      },
      type: 'label'
    }
  ],
  [
    {
      label: 'View profile',
      icon: 'i-lucide-user'
    },
    {
      label: 'Order history',
      icon: 'i-lucide-history',
      to: '/warehouse/order/history'
    },
    {
      label: 'Settings',
      icon: 'i-lucide-cog',
      kbds: [',']
    },
  ],
  [
    {
      label: 'Report problem',
      icon: 'i-lucide-log-out',
      kbds: ['shift', 'meta', 'q']
    },
    {
      label: 'Logout',
      icon: 'i-lucide-log-out',
      kbds: ['shift', 'meta', 'q']
    }
  ]
])
</script>
<template>
	<Dropdown
		:items="items"
		:badge-props="{
			show: false
		}"
		:avatar-props="{
			alt:'Benjamin Canac',
			size:'md'
		}"
	/>
</template>