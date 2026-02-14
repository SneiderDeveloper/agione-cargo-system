<script setup lang="ts">

interface Config {
  [key: string]: {
    title: string
    isNavBack: boolean
  }
}

const config: Config = {
   'admin': {
      title: 'Operations Control Center',
      isNavBack: false
   },
   'admin-awb-id': {
      title: 'AWB Management',
      isNavBack: true
   },
   'warehouse': {
      title: 'Warehouse Acceptance Operation',
      isNavBack: false
   },
   'warehouse-order-create': {
      title: 'Create Order',
      isNavBack: true
   },
   'warehouse-order-id': {
      title: 'Order Details',
      isNavBack: true
   },
   'warehouse-awb-id': {
      title: 'AWB Details',
      isNavBack: true
   },
   'warehouse-order-history': {
      title: 'Order History',
      isNavBack: true
   },
}

const router = useRouter()
const headerTitle = useState('headerTitle', () => '')
const route = useRoute()

const name = computed(() => typeof route.name === 'string' ? route.name : '')
</script>
<template>
	<header class="flex justify-between p-4 border-b border-slate-200 mb-2">
		<section class="flex gap-2 items-center">
      <Button 
        v-if="config[name]?.isNavBack || false" 
        variant="soft"
        icon="i-lucide-chevron-left"
        color="neutral"
        size="sm"
        @click="router.back()"
     />
			<h2 class="font-semibold">
        {{ config[name]?.title || headerTitle}}
      </h2>
		</section>
		<section class="flex gap-2">
			<Notifications />
			<Menu />
		</section>
	</header>
</template>