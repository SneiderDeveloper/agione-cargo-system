<script setup lang="ts">
const { data } = await useFetch('/api/order')
const isIACCCSF = ref(false)
const checkIn = useState<boolean>('checkIn', () => false)
const isModalOpen = useState<boolean>('isModalOpen', () => false)
const isMatchPhotoID = useState<boolean>('isMatchPhotoID', () => false)
const route = useRoute()

const handleCheck = () => {
  if (!checkIn.value) isModalOpen.value = true
  if (checkIn.value) isModalOpen.value = true
}
</script>
<template>
  <div class="flex flex-col gap-5">
    {{ route.params.id }}
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
          label="23 AWB's"
          color="info"
          variant="soft"
        />
      </template>
      <div class="flex flex-col gap-3">
        <template v-for="value in [1,2,3]">
          <AwbCard 
            title="AWB #1234567890"
            description="Electronics - 15 kg"
            status="In progress"
          />
        </template>
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