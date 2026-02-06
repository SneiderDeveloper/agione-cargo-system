<script setup lang="ts">
const PENDING_STATUS = 'pending'

const route = useRoute()
const { data, status } = await useLazyFetch<Order>(`/api/order/${route.params.id}`)

const checkIn = useState<boolean>('checkIn', () => false)
const isModalOpen = useState<boolean>('isModalOpen', () => false)
const isMatchPhotoID = useState<boolean>('isMatchPhotoID', () => false)
const loading = useState<boolean>('loading', () => status.value === 'pending')
const orderRecord = reactive<Order>(data.value || {})

const sealVerificationButtonsDisabled = computed(() => {
  return !orderRecord.isIacCcsf || !orderRecord.iacCcsf?.verificationNotes
})

const handleCheck = () => {
  if (!checkIn.value) isModalOpen.value = true
  if (checkIn.value) isModalOpen.value = true
}

const fileToBase64 = async (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const handleSubmitIacCcsf = async () => {
  try {
    console.log('seal phone', orderRecord.iacCcsf.sealPhotos)
    const base64Files = await Promise.all(orderRecord.iacCcsf.sealPhotos.map(file => fileToBase64(file)))
    console.log('seal phone base 64', base64Files)
      
    await $fetch(`/api/order/${route.params.id}`, {
      method: 'POST',
      body: {
        isIacCcsf: orderRecord?.isIacCcsf,
        iacCcsf: {
          sealPhotos: orderRecord?.iacCcsf?.sealPhotos || [],
          verificationNotes: orderRecord?.iacCcsf?.verificationNotes,
          verified: true,
          report: false,
          endDate: new Date().toISOString(),
        },
      },
    })
  } catch (error) {
    console.error('Error submitting IAC-CCSF compliance:', error)
  }
}

watch(status, (newStatus) => {
  loading.value = newStatus === PENDING_STATUS
})
</script>
<template>
  <div class="flex flex-col gap-5">
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
            fullName: orderRecord?.driver?.fullName,
            licensePhoto: orderRecord?.driver?.licensePhoto
          }"
          :createdAt="orderRecord?.createdAt"
          :verifiedDriver="true"
        />
        <KioskCheckInInformation 
          :createdAt="orderRecord?.createdAt"
        />
        <AssignedDoorInformationCard
          :doorName="orderRecord?.assignedDoor"
        />
      </div>
    </SectionContainer>
    <SectionContainer
      v-if="checkIn"
      title="IAC-CCSF Compliance"
      description="Does the seal # match the IAC-CCSF?"
      :content="orderRecord.isIacCcsf"
      :icon="{
        name: 'i-lucide-shield',
        color: 'text-blue-500',
        backgroundColor: 'bg-blue-100'
      }"
    >
      <template #actions>
        <Switch 
          v-model="orderRecord.isIacCcsf"
          color="secondary"
        />
      </template>
      <div class="flex flex-col gap-3">
        <FileUpload
          v-model="orderRecord.iacCcsf.sealPhotos"
          accept="image/*"
          label="Click to upload seal photos"
          description="Multiple images • JPG, PNG up to 10MB"
          icon="i-lucide-image"
          multiple
          :form-field-props="{
            label: 'Upload Seal Photos',
          }"
        />
        <Textarea
          v-model="orderRecord.iacCcsf.verificationNotes"
          placeholder="Document seal condition, serial numbers, any discrepancies or irregularities observed..."
          :form-field-props="{
            label: 'Verification Notes',
          }"
        />
        <div class="flex gap-3 justify-center">
          <Button
            variant="outline"
            color="error"
            :disabled="sealVerificationButtonsDisabled"
          >
            Report Seal Issues
          </Button>
          <Button
            variant="solid"
            color="success"
            @click="handleSubmitIacCcsf"
            :disabled="sealVerificationButtonsDisabled"
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
          :label="`${orderRecord?.awbs?.length} AWB's`"
          color="info"
          variant="soft"
        />
      </template>
      <div class="flex flex-col gap-3">
        <template v-for="awb in orderRecord?.awbs" :key="awb.id">
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
      :disabled="loading"
    >
      {{checkIn ? 'Checked Out' : 'Check In'}}
    </Button>
    <LicenseVerificationModal
      :license-photo="orderRecord?.driver?.licensePhoto"
    />
  </div>
</template>