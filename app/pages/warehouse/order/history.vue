<script setup lang="ts">
import type { SelectItem } from '@nuxt/ui'

const { data } = await useLazyFetch<Order[]>('/api/orders')

const filters = reactive({
  status: 'backlog',
  priority: 'low',
})
const status = ref<SelectItem[]>([
  {
    label: 'All Statuses',
    value: 'all'
  },
  {
    label: 'Completed',
    value: 'completed'
  },
  {
    label: 'Cancelled',
    value: 'cancelled'
  }
])

const priority = ref<SelectItem[]>([
  {
    label: 'All Priorities',
    value: 'all'
  },
  {
    label: 'High Priority',
    value: 'high'
  },
  {
    label: 'Standard',
    value: 'standard'
  },
  {
    label: 'Low Priority',
    value: 'low'
  }
])

const orders: ComputedRef<Order[]> = computed(() => {
  if (!data.value) return []
  return data.value.filter((order: Order) => order?.completed)
})
</script>
<template>
  <div>
    <section class="flex items-center gap-2 mb-4">
      <Input
        placeholder="Search by order number or driver name" 
        type="text"
        variant="soft"
        icon="i-lucide-search"
        :ui="{ root: 'w-full' }"
      />
      <Dropdown 
        :badge-props="{
          show: false
        }"
        :button-props="{
          variant: 'soft',
          size: 'lg',
          icon: 'i-lucide-filter',
          color: 'neutral',
        }"
      >
        <template #content-top>
          <h2 class="text-base font-semibold mb-2">Filter options</h2>
        </template>
        <template #content-bottom>
          <div class="flex flex-col gap-4">
            <Select
              v-model="filters.status"
              :items="status"
              placeholder="Select date range"
              :form-field-props="{
                label: 'Status'
              }"
            />
            <Select
              v-model="filters.priority"
              :items="priority"
              placeholder="Select date range"
              :form-field-props="{
                label: 'Priority'
              }"
            />
            <Input 
              type="date"
              variant="soft"
              :form-field-props="{
                label: 'Date Range',
                description: 'From Date'
              }"
            />
            <Input 
              type="date"
              variant="soft"
              :form-field-props="{
                description: 'To Date'
              }"
            />
          </div>
        </template>
      </Dropdown>
    </section>
    <section class="flex flex-col gap-4">
      <div class="flex justify-between items-center">
        <div class="flex gap-2 items-center">
          <IconContainer 
            name="i-lucide-package"
            class-name="bg-purple-400"
            size="sm"
          />
          <h2>Historical Orders</h2>
        </div>
        <div>
          <Chip 
            :label="`${orders.length} orders`" 
            variant="soft" 
            class="bg-purple-400 text-white"
          />
        </div>
      </div>
      <div v-if="orders && orders.length" class="flex flex-col gap-3">
        <template v-for="order in orders" :key="order.id">
          <OrderCard
            :title="order.truckCompany"
            :orderNumber="order.code"
            :priority="order.priority"
            :status="order.status"
            :completed="order.completed"
            :completionDate="order.completionDate"
            :totalWeight="order?.awbsSummary?.totalWeight"
            :totalAwbs="order?.awbsSummary?.totalAwbs"
            :awbs="order.awbs"
            :user="{
              name: order?.driver?.fullName,
              avatar: {
                alt: order?.driver?.fullName
              }
            }"
            :seeDetails="false"
          />
        </template>
      </div>
    </section>
  </div>
</template>