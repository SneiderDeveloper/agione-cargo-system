<script setup lang="ts">
const route = useRoute()
const { data, status } = await useLazyFetch<Order>(`/api/order/${route.params.id}`, {
  // Desactiva el cache para ver el delay real
  key: `order-${route.params.id}-${Date.now()}`,
  // O usa esto para refrescar en cada visita:
  // server: false,
  // lazy: true,
})
const isIACCCSF = ref(false)
const checkIn = useState<boolean>('checkIn', () => false)
const isModalOpen = useState<boolean>('isModalOpen', () => false)
const isMatchPhotoID = useState<boolean>('isMatchPhotoID', () => false)

const handleCheck = () => {
  if (!checkIn.value) isModalOpen.value = true
  if (checkIn.value) isModalOpen.value = true
}

// Observa el cambio de status
watch(status, (newStatus) => {
  console.log('Status changed:', newStatus)
})

console.log({ initialStatus: status.value, hasData: !!data.value })
</script>
<template>
  <!-- Loading State -->
  <div v-if="status === 'pending'" class="flex flex-col items-center justify-center p-8 gap-4">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    <p class="text-slate-600">Loading order information...</p>
  </div>

  <!-- Content -->
  <div v-else class="flex flex-col gap-5">
    <OrderStatusBanner 
      v-if="checkIn"
      total-awbs="23"
      assigned-door="B-03"
    />
    <SectionContainer
      title="Driver Information"
      description="Driver is parked and ready for cargo unloading"
      :icon="{
        name: 'i-lucide-user',
        color: 'text-blue-500',
        backgroundColor: 'bg-blue-100'
      }"
    >
      <div class="flex flex-col gap-3">
        <DriverInformationCard 
          :driver="{
            fullName: data?.driver?.fullName,
            licensePhoto: data?.driver?.licensePhoto
          }"
          :createdAt="data?.createdAt"
          :verifiedDriver="true"
        />
        <KioskCheckInInformation 
          :createdAt="data?.createdAt"
        />
        <AssignedDoorInformationCard
          :doorName="data?.assignedDoor"
        />
      </div>
    </SectionContainer>
    <SectionContainer
      v-if="checkIn"
      title="IAC-CCSF Compliance"
      description="Does the seal # match the IAC-CCSF?"
      :content="isIACCCSF"
      :icon="{
        name: 'i-lucide-shield',
        color: 'text-blue-500',
        backgroundColor: 'bg-blue-100'
      }"
    >
      <template #actions>
        <Switch 
          v-model="isIACCCSF"
          color="secondary"
        />
      </template>
      <div class="flex flex-col gap-3">
        <FileUpload
          accept="image/*"
          label="Click to upload seal photos"
          description="Multiple images • JPG, PNG up to 10MB"
          icon="i-lucide-image"
          :form-field-props="{
            label: 'Upload Seal Photos',
          }"
        />
        <Textarea
          placeholder="Document seal condition, serial numbers, any discrepancies or irregularities observed..."
          :form-field-props="{
            label: 'Verification Notes',
          }"
        />
        <div class="flex gap-3 justify-center">
          <Button
            variant="outline"
            color="error"
          >
            Report Seal Issues
          </Button>
          <Button
            variant="solid"
            color="success"
          >
            Verify Seals Intact
          </Button>
        </div>
      </div>
    </SectionContainer>
    <SectionContainer
      v-if="checkIn"
      title="AWB's List"
      :icon="{
        name: 'i-lucide-package',
        color: 'text-blue-500',
        backgroundColor: 'bg-blue-100'
      }"
    >
      <template #actions>
        <Chip
          :label="`${data?.awbs?.length} AWB's`"
          color="info"
          variant="soft"
        />
      </template>
      <div class="flex flex-col gap-3">
        <template v-for="awb in data?.awbs" :key="awb.id">
          <AwbCard
            :id="awb.id"
            :title="`AWB #${awb.code}`"
            :description="awb.natureOfGoods"
            :status="awb.status"
          />
        </template>
        <div 
          v-if="data?.awbs?.length === 0"
          class="text-slate-500 font-semibold p-4 text-center"
        >
          There are no AWBs assigned to this order.
        </div>
      </div>
    </SectionContainer>
    <Button
      variant="solid"
      color="primary"
      size="lg"
      @click="handleCheck"
    >
      {{checkIn ? 'Checked Out' : 'Check In'}}
    </Button>
    <LicenseVerificationModal
      :license-photo="data?.driver?.licensePhoto"
    />
  </div>
</template>