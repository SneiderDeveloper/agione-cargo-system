<script setup lang="ts">
const PENDING_STATUS = 'pending'

const route = useRoute()
const toash = useToast()
const { data: order, status } = await useLazyFetch<Order>(`/api/order/${route.params.id}`)


const checkIn = useState<boolean>('checkIn', () => false)
const isLicenseModalOpen = useState<boolean>('isLicenseModalOpen', () => false)
const isCheckOutModalOpen = useState<boolean>('isCheckOutModalOpen', () => false)
const isMatchPhotoID = useState<boolean>('isMatchPhotoID', () => false)
const loading = useState<boolean>('loading', () => status.value === 'pending')
const state = reactive<any>({
  isIacCcsf: order.value?.isIacCcsf,
  iacCcsf: {
    sealPhotos: order.value?.iacCcsf?.sealPhotos || [],
    verificationNotes: order.value?.iacCcsf?.verificationNotes || '',
    verified: order.value?.iacCcsf?.verified || false,
    report: order.value?.iacCcsf?.report || false,
  }
})

const sealVerificationButtonsDisabled = computed(() => {
  return !state.isIacCcsf 
    || !state.iacCcsf?.verificationNotes 
    || !state.iacCcsf?.sealPhotos 
    || (state.iacCcsf.sealPhotos.length === 0)
})

const handleCheck = () => {
  if (!checkIn.value) isLicenseModalOpen.value = true
  if (checkIn.value) isCheckOutModalOpen.value = true
}

const handleSubmitIacCcsf = async (status: 'report' | 'verified') => {
  if (sealVerificationButtonsDisabled.value) return
  try {
    if (status === 'verified') {
      state.iacCcsf.verified = true
      state.iacCcsf.report = false
    }
    
    if (status === 'report') {
      state.iacCcsf.report = true
      state.iacCcsf.verified = false
    }

    await saveIacCcsf(state, Number(route.params.id))
    toash.add({
      title: 'Success',
      description: 'IAC-CCSF compliance submitted successfully.',
      color: 'success',
    })
  } catch (error) {
    toash.add({
      title: 'Error',
      description: error.message,
      color: 'error',
    })
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
            fullName: order?.driver?.fullName,
            licensePhoto: order?.driver?.licensePhoto
          }"
          :createdAt="order?.createdAt"
          :verifiedDriver="true"
        />
        <KioskCheckInInformation 
          :createdAt="order?.createdAt"
        />
        <AssignedDoorInformationCard
          :doorName="order?.assignedDoor"
        />
      </div>
    </SectionContainer>
    <SectionContainer
      v-if="checkIn"
      title="IAC-CCSF Compliance"
      description="Does the seal # match the IAC-CCSF?"
      :content="state?.isIacCcsf"
      :icon="{
        name: 'i-lucide-shield',
        color: 'text-blue-500',
        backgroundColor: 'bg-blue-100'
      }"
    >
      <template #actions>
        <Switch 
          v-model="state.isIacCcsf"
          color="secondary"
        />
      </template>
      <div class="flex flex-col gap-3">
        <FileUpload
          v-model="state.iacCcsf.sealPhotos"
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
          v-model="state.iacCcsf.verificationNotes"
          placeholder="Document seal condition, serial numbers, any discrepancies or irregularities observed..."
          :form-field-props="{
            label: 'Verification Notes',
          }"
        />
        <div class="flex gap-3 justify-center">
          <Button
            variant="outline"
            color="error"
            @click="handleSubmitIacCcsf('report')"
            :disabled="sealVerificationButtonsDisabled"
          >
            Report Seal Issues
          </Button>
          <Button
            variant="solid"
            color="success"
            @click="handleSubmitIacCcsf('verified')"
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
          :label="`${order?.awbs?.length} AWB's`"
          color="info"
          variant="soft"
        />
      </template>
      <div class="flex flex-col gap-3">
        <template v-for="awb in order?.awbs" :key="awb.id">
          <AwbCard
            :id="awb.id"
            :title="`AWB #${awb.code}`"
            :description="awb.natureOfGoods"
            :status="awb.status"
          />
        </template>
        <div 
          v-if="order?.awbs?.length === 0"
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
      {{ checkIn ? 'Checked Out' : 'Check In' }}
    </Button>
    <LicenseVerificationModal
      :license-photo="order?.driver?.licensePhoto"
    />
    <CheckOutModal />
  </div>
</template>