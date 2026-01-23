<script setup lang="ts">
import moment from 'moment'
import type { Awb, Group } from '#shared/types/awb'

const route = useRoute()
const { data } = await useFetch<Awb>(`/api/awb/${route.params.id}`)
const expan = ref(false)
const groupMode = ref(false)
const isOpenModal = useState<boolean>('isOpenModal', () => false)
const awbRecord = useState<Awb>('awbRecord', () => data.value || {} as Awb)

const shipmentDetails = [
  {
    label: 'Pieces',
    value: data.value?.totalNumberOfPieces,
    icon: 'i-lucide-box'
  },
  {
    label: 'Weight',
    value: data.value?.totalWeight + ' kg',
    icon: 'i-lucide-weight'
  },
  {
    label: 'Cubic Meters',
    value: data.value?.cubicMeters + ' m³',
    icon: 'i-lucide-ruler'
  },
  {
    label: 'Nature of Goods',
    value: data.value?.natureOfGoods,
    icon: 'i-lucide-file-text'
  }
]

const flightDetails = [
  {
    label: 'Carrier',
    value: data.value?.flightNumber,
    icon: 'i-lucide-plane'
  },
  {
    label: 'Flight/Date',
    value: `${data.value?.flightNumber}/${moment(data.value?.departureDate).format('DDMMMYYYY')}`,
    icon: 'i-lucide-plane'
  },
  {
    label: 'Route',
    value: 'ORD → BOG',
    icon: 'i-lucide-map-pin'
  },
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
]

const group: Group = {
  id: 0,
  statusId: 0,
  numberUld: '',
  contourId: 0,
  numberOfPieces: 0,
  weight: 0,
  cargoDimensions: {
    length: 0,
    width: 0,
    height: 0,
    perPiece: false,
    dimensions: [
      {
        length: 0,
        width: 0,
        height: 0,
        isCargoDamaged: false,
      }
    ]
  },
  packagingTypeId: 0,
  warehouseLocationId: 0,
  shipmentEvidencePhotos: [],
  isCargoDamaged: false,
  damageDescription: '',
  additionalNotes: '',
  ticket: '',
  status: '',
  expan: false
}

const groups = ref<Groups[]>(awbRecord.value?.groups || [ { ...group } ])


const addGroup = () => {
  awbRecord.value.groups.push({ ...group })
}

const lessGroup = () => {
  if (groups.value.length > 1) {
    groups.value.pop()
  }
}
</script>
<template>
  <div>
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
        :content="awbRecord.isBUP"
        :icon="{
          name: 'i-lucide-shield',
          color: 'text-blue-500',
          backgroundColor: 'bg-blue-100'
        }"
      >
        <template #actions>
          <Switch 
            v-model="awbRecord.isBUP"
            color="secondary"
          />
        </template>
        <div class="flex justify-between items-center">
          <span>Active Container</span>
          <Switch 
            v-model="awbRecord.isActiveContainer"
            color="secondary"
          />
        </div>
      </SectionContainer>
      <ContainerStatusInformationSection 
        v-show="awbRecord.isBUP && awbRecord.isActiveContainer" 
      />
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
          <AwbDetails :data="awbRecord?.acceptanceDetails" />
        </div>
        <div v-if="groupMode">
          <section class="flex justify-between items-center mb-3">
            <span class="text-slate-500 font-semibold">{{ awbRecord.groups.length }} Group</span>
            <div class="flex gap-2">
              <Button
                variant="soft"
                color="neutral"
                size="sm"
                icon="i-lucide-minus"
                @click="lessGroup"
              />
              <Button
                variant="soft"
                color="neutral"+
                size="sm"
                icon="i-lucide-plus"
                @click="addGroup"
              />
            </div>
          </section>
          <section class="flex flex-col gap-2">
            <template v-for="group in awbRecord.groups">
              <SectionContainer
                title="Group #1"
                :description="`${group.numberOfPieces} pieces • ${group.weight} kg`"
                size="sm"
                :content="group.expan"
              >
                <template #actions>
                  <Button
                    variant="soft"
                    size="sm"
                    :icon="`i-lucide-${group.expan ? 'chevron-up' : 'chevron-down'}`"
                    color="neutral"
                    @click="group.expan = !group.expan"
                  />
                </template>
                <div class="flex flex-col gap-3">
                  <AwbDetails :data="group" />
                </div>
              </SectionContainer>
            </template>
          </section>
        </div>
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
  </div>
</template>