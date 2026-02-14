<script setup lang="ts">

const route = useRoute()

const { data: awb } = useLazyFetch<Awb>(`/api/awb/${route.params.id}`)

const sections = computed(() => [
  {
    title: 'AWB-2024-8847',
    description: awb.value?.natureOfGoods,
    icon: {
      name: 'i-lucide-file-text',
      color: 'green'
    },
    actions: [
      {
        label: awb.value?.status,
        color: 'error'
      },
      {
        label: awb.value?.order?.priority,
        color: 'warning'
      }
    ]
  },
  {
    title: 'Flight Information',
    icon: {
      name: 'i-lucide-plane',
      color: 'blue'
    },
    content: [
      {
        label: 'Flight Number',
        value: awb.value?.flightNumber
      },
      {
        label: 'Origin',
        value: awb.value?.route.org
      },
      {
        label: 'Destination',
        value: awb.value?.route.dest
      }
    ]
  },
  {
    title: 'Cargo Details',
    icon: {
      name: 'i-lucide-box',
      color: 'orange'
    },
    content: [
      {
        label: 'Weight',
        value: awb.value?.totalWeight
      },
      {
        label: 'Number of Pieces',
        value: awb.value?.totalNumberOfPieces
      },
      {
        label: 'Warehouse Agent',
        value: awb.value?.order.warehouseAgent?.fullName
      }
    ]
  }
])

const inspectionMethods = [
  {
    name: 'X-Ray Screening',
    icon: 'i-lucide-zap',
    status: 'Pending'
  },
  {
    name: 'ETD (Explosive Trace Detection)',
    icon: 'i-lucide-bomb',
    status: 'Pending'
  },
  {
    name: 'K9 Unit Inspection',
    icon: 'i-lucide-dog',
    status: 'Pending'
  },
  {
    name: '3rd Party K9 Inspection',
    icon: 'i-lucide-hand',
    status: 'Completed'
  },
]
</script>
<template>
  <div class="grid gap-5">
    <template v-for="section in sections">
      <SectionContainer
        :title="section.title"
        :description="section?.description"
        :icon="section.icon"
        :content="!!section?.content"
      >
        <template #actions>
          <div class="flex gap-2">
            <template v-for="action in section.actions">
              <Chip
                :color="action.color"
                variant="soft"
              >
                {{ action.label }}
              </Chip>
            </template>
          </div>
        </template>
        <div class="grid gap-3">
          <template v-for="info in section.content">
            <div class="flex justify-between">
              <span class="text-slate-400">{{ info.label }}</span>
              <span class="font-semibold">{{ info.value }}</span>
            </div>
          </template>
        </div>
      </SectionContainer>
    </template>
    <ScreeningDetailsSection />
    <div class="flex gap-2">
      <Button class="w-full" color="error" variant="outline">Flag for Review</Button>
      <Button class="w-full" color="primary">Clear Cargo</Button>
    </div>
    <SectionContainer
      title="Inspection Methods"
      description="Available security inspection methods"
      :icon="{
        name: 'i-lucide-clock',
        backgroundColor: 'slate-100'
      }"
    >
      <div class="grid gap-3">
        <template v-for="method in inspectionMethods">
          <div class="border border-slate-100 rounded-2xl p-3">
            <div class="flex justify-between items-center">
              <section class="flex items-center gap-3">
                <IconContainer
                  :name="method.icon"
                />
                <span class="font-semibold">
                  {{ method.name }}
                </span>
              </section>
              <span class="font-semibold text-slate-400">
                {{ method.status }}
              </span>
            </div>
          </div>
        </template>
      </div>
    </SectionContainer>
  </div>
</template>