<script setup lang="ts">

const isMatchPhotoID = useState<boolean>('isMatchPhotoID')
const isModalOpen = useState<boolean>('isModalOpen')
const checkIn = useState<boolean>('checkIn')

defineProps<{
  licensePhoto: string | undefined
}>()

const handleCheckIn = () => {
  if (isMatchPhotoID.value) {
    checkIn.value = true
  }
  isModalOpen.value = false
}
</script>
<template>
  <Modal
    title="Driver License Verification"
    description="Verify driver's license before check-in"
    v-model="isModalOpen"
  >
    <div class="flex flex-col gap-3">
      <section>
        <span>Driver License on File</span>
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
      <div class="flex gap-2 justify-end">
        <Button 
          variant="outline" 
          @click="isModalOpen = false"
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