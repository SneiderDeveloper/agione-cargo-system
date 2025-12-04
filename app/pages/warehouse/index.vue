<script setup lang="ts">
const { data } = await useFetch('/api/orders')

const activeOrder = computed(() => {
  const active = data?.value?.find((order: any) => order.active && order.warehouseAgentId)
  return [active]
})

const assignedOrders = computed(() => {
  return data?.value?.filter((order: any) => !order.active && order.warehouseAgentId)
})

const unassignedOrders = computed(() => {
  return data?.value?.filter((order: any) => !order.warehouseAgentId && !order.active)
})

const sections = computed(() => ([
  {
    title: 'Active Order',
    description: 'Your currently assigned order for processing',
    icon: {
      name: 'i-lucide-box',
    },
    data: activeOrder.value,
    actions: true,
  },
  {
    title: 'Next Driver Inline',
    description: 'View-only list of all your assigned orders',
    icon: {
      name: 'i-lucide-box',
    },
    seeDetails: false,
    data: assignedOrders.value,
  },
  {
    title: 'Available Orders',
    description: 'Orders waiting to be claimed by warehouse agents',
    icon: {
      name: 'i-lucide-box',
    },
    seeDetails: false,
    unassigned: true,
    data: unassignedOrders.value,
  },
]))
</script>
<template>
  <div class="flex flex-col gap-5">
    <div class="grid grid-cols-2 gap-2">
      <Ticker 
        value="5" 
        label="Assigned orders" 
        icon="i-lucide-box" 
      />
      <Ticker 
        value="4" 
        label="Total AWBs" 
        icon="i-lucide-box" 
        color="green"
      />
    </div>
    <template v-for="section in sections">
      <SectionContainer 
        :title="section.title"
        :description="section.description"
        headerClass="bg-red-500"
        :icon="{
          name: 'i-lucide-box',
        }"
      >
        <template #actions>
          <div v-if="section.actions">
            <Button
              trailingIcon="i-lucide-plus"
              variant="soft"
              color="neutral"
              size="sm"
              @click="navigateTo('/warehouse/createorder')"
            />
          </div>
        </template>
        <div v-if="section.data && section.data.length" class="flex flex-col gap-3">
          <template v-for="order in section.data" :key="order.id">
            <OrderCard
              :title="order.truckCompany"
              :orderNumber="order.code"
              :priority="order.priority"
              :status="order.status"
              :totalWeight="order?.awbsSummary?.totalWeight"
              :totalAwbs="order?.awbsSummary?.totalAwbs"
              :dest="order?.awbsSummary?.dest"
              :assignedDoor="order.assignedDoor"
              :user="{
                name: order?.driver?.fullName,
                description: 'Arrived 08:30 AM',
                avatar: {
                  alt: order?.driver?.fullName
                }
              }"
              :seeDetails="section.seeDetails"
              :unassigned="section.unassigned"
            />
          </template>
        </div>
      </SectionContainer>
    </template>
  </div>
</template>