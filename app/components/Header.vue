<script setup lang="ts">
const router = useRouter()
const headerTitle = useState('headerTitle', () => '')
const isNavBack = useState('isNavBack', () => false)
</script>
<template>
	<header class="flex justify-between p-4 border-b border-slate-200 mb-2">
		<section class="flex gap-2 items-center">
      <Button 
        v-if="isNavBack" 
        variant="soft"
        icon="i-lucide-chevron-left"
        color="neutral"
        size="sm"
        @click="router.back()"
     />
			<h2 class="font-semibold">
        {{ headerTitle }}
      </h2>
		</section>
		<section class="flex gap-2">
			<Notifications />
			<Menu />
		</section>
	</header>
</template>