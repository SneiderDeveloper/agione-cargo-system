<script setup lang="ts">
const isBUP = ref(false)
const activeContainer = ref(false)
const expan = ref(false)
const groupMode = ref(false)
const isOpenModal = useState<boolean>('isOpenModal', () => false)

const shipmentDetails = [
  {
    label: 'Pieces',
    value: '24',
    icon: 'i-lucide-box'
  },
  {
    label: 'Weight',
    value: '320 kg',
    icon: 'i-lucide-weight'
  },
  {
    label: 'Cubic Meters',
    value: '1.00 m³',
    icon: 'i-lucide-ruler'
  }
]

const flightDetails = [
  {
    label: 'Route',
    value: 'ORD → BOG',
    icon: 'i-lucide-map-pin'
  },
  {
    label: 'Flight Number',
    value: 'CX880',
    icon: 'i-lucide-plane'
  },
  {
    label: 'Departure Date',
    value: 'Oct 25, 2025',
    icon: 'i-lucide-clock'
  }
]

const informationCards = [
  {
    title: 'Shipment Details',
    details: shipmentDetails
  },
  {
    title: 'Flight Details',
    details: flightDetails
  },
  {
    title: 'Nature of Goods',
    details: [
      {
        label: null,
        value: 'Textile Products',
        icon: 'i-lucide-file-text'
      }
    ]
  }
]
</script>
<template>
  <div class="flex flex-col gap-4">
    <template v-for="card in informationCards" :key="card.title">
      <InformationCard :title="card.title">
        <div class="flex justify-between items-center">
          <template v-for="value in card.details" :key="value.value">
            <DataWidget 
              :label="value?.label"
              :value="value.value"
              :iconName="value.icon"
            />
          </template>
        </div>
      </InformationCard>
    </template>
    <SectionContainer
      title="Is this cargo a BUP?"
      :content="isBUP"
      :icon="{
        name: 'i-lucide-shield',
        color: 'text-blue-500',
        backgroundColor: 'bg-blue-100'
      }"
    >
      <template #actions>
        <Switch 
          v-model="isBUP"
          color="secondary"
        />
      </template>
      <div class="flex justify-between items-center">
        <span>Active Container</span>
        <Switch 
          v-model="activeContainer"
          color="secondary"
        />
      </div>
    </SectionContainer>
    <SectionContainer
      v-if="activeContainer"
      title="Container Status Information"
      description="Record the status of the RNK or RAP container"
      :icon="{
        name: 'i-lucide-shield',
        color: 'text-blue-500',
        backgroundColor: 'bg-blue-100'
      }"
    >
      <div class="flex flex-col gap-3">
        <Select 
          :items="[
            {
              label: 'RNK',
              value: 1
            },
            {
              label: 'RAP',
              value: 2
            }
          ]"
          placeholder="Select container type"
          :form-field-props="{
            label: 'Container Type',
          }"
        />
        <Input 
          type="text"
          placeholder="Enter temperature"
          :form-field-props="{
            label: 'Temperature (°C)',
          }"
        />
        <Input 
          type="number"
          placeholder="Battery Percentage"
          :form-field-props="{
            label: 'Battery Percentage (%)',
          }"
        />
      </div>
    </SectionContainer>
    <SectionContainer
      title="Warehouse Acceptance Details"
      description="Enter cargo details for warehouse acceptance"
      :icon="{
        name: 'i-lucide-map-pin',
        color: 'text-blue-500',
        backgroundColor: 'bg-blue-100'
      }"
    >
      <template #actions>
        <Button
          variant="soft"
          size="sm"
          icon="i-lucide-boxes"
          color="secondary"
          @click="groupMode = !groupMode"
        />
      </template>
      <div v-if="!groupMode" class="flex flex-col gap-3">
        <AwbForm />
      </div>
      <SectionContainer
        v-if="groupMode"
        title="Group #1"
        description="1pieces - 20kg"
        :content="expan"
      >
        <template #actions>
          <Button
            variant="soft"
            size="sm"
            icon="i-lucide-plus"
            color="neutral"
            @click="expan = !expan"
          />
        </template>
        <div class="flex flex-col gap-3">
          <AwbForm />
        </div>
      </SectionContainer>
    </SectionContainer>
    <div class="grid grid-cols-2 items-center gap-3">
      <Button
        variant="outline"
        color="error"
        size="lg"
      >
        Reject Cargo
      </Button>
      <Button
        variant="solid"
        color="success"
        size="lg"
        @click="isOpenModal = !isOpenModal"
      >
        Completed Cargo Acceptance
      </Button>
    </div>
  </div>
  <CargoAcceptanceModal />
</template>