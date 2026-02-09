<script setup lang="ts">

const isMatchPhotoID = useState<boolean>('isMatchPhotoID')
const isLicenseModalOpen = useState<boolean>('isLicenseModalOpen')
const checkIn = useState<boolean>('checkIn')

const route = useRoute()

defineProps<{
  licensePhoto: string | undefined
}>()

const sudmitCheckIn = async () => {
  try {     
    return await $fetch(`/api/order/${route.params.id}`, {
      method: 'POST',
      body: {
        verifiedDriver: true,
        driverCheckIn: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error('Error submitting driver check-in:', error)
    throw Error('Failed to submit driver check-in. Please try again.')
  }
}

const handleCheckIn = async () => {
  if (isMatchPhotoID.value) {
    checkIn.value = true
    // await sudmitCheckIn()
  }
  isLicenseModalOpen.value = false
}
</script>
<template>
  <Modal
    title="Driver License Verification"
    description="Verify driver's license before check-in"
    v-model="isLicenseModalOpen"
  >
    <div class="flex flex-col gap-4">
      <section>
        <p class="mb-2 text-sm text-slate-500">
          Driver License on File
        </p>
        <Image 
          :src="licensePhoto" 
          alt="Driver License"
        />
      </section>
      <SectionHeader
        title="Driver match photo ID"
        :content="false"
        description="Does the license shown above match the driver physical photo ID?"
      >
        <template #actions>
          <Switch 
            v-model="isMatchPhotoID"
            color="secondary"
          />
        </template>
      </SectionHeader>
      <div class="flex gap-2 justify-end w-full">
        <Button 
          variant="outline" 
          @click="isLicenseModalOpen = false"
          color="neutral"
        >
          Cancel
        </Button>
        <Button
          :color="isMatchPhotoID ? 'success' : 'error'"
          @click="handleCheckIn"
        >
          {{ isMatchPhotoID ? 'Confirm & Check In' : 'Confirm No Match' }}
        </Button>
      </div>
    </div>
  </Modal>
</template>