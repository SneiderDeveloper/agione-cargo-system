<script setup lang="ts">
const router = useRouter()
const headerTitle = useState('headerTitle', () => '')
const isNavBack = useState('isNavBack', () => false)
const route = useRoute()

interface Config {
  [key: string]: {
    title: string
    isNavBack: boolean
  }
}

const config: Config = {
   '/admin': {
      title: 'Operations Control Center',
      isNavBack: false
   },
   '/warehouse': {
      title: 'Warehouse Acceptance Operation',
      isNavBack: false
   },
   '/warehouse/order/create': {
      title: 'Create Order',
      isNavBack: true
   },
   '/warehouse/order/': {
      title: 'Order Details',
      isNavBack: true
   },
   '/warehouse/order/history': {
      title: 'Order History',
      isNavBack: true
   },
   '/warehouse/awb/details/': {
      title: 'AWB Details',
      isNavBack: true
   },
}

</script>
<template>
	<header class="flex justify-between p-4 border-b border-slate-200 mb-2">
		<section class="flex gap-2 items-center">
      <Button 
        v-if="config[route.path]?.isNavBack || false" 
        variant="soft"
        icon="i-lucide-chevron-left"
        color="neutral"
        size="sm"
        @click="router.back()"
     />
			<h2 class="font-semibold">
        {{ config[route.path]?.title || headerTitle}}
      </h2>
		</section>
		<section class="flex gap-2">
			<Notifications />
			<Menu />
		</section>
	</header>
</template>