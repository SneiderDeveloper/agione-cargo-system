<script setup lang="ts">
const showLicense = ref(false)
defineProps<{
  driver: {
    fullName: string | undefined
    licensePhoto: string | undefined
  }
  createdAt: string
  verifiedDriver: boolean
}>()
</script>
<template>
  <InformationCard 
    title="Driver"
    :chip="{
      label: 'Verified',
      color: 'success',
      variant: 'subtle',
    }"
  >
    <div class="flex flex-col gap-3">
      <div class="flex justify-between items-center">
        <User
          :name="driver.fullName"
          :avatar="{
            alt: driver.fullName,
          }"
          size="2xl"
          :chip="{
            label: 'Waiting 47 min',
            icon: 'i-lucide-clock',
            size: 'md',
            color: 'warning',
            variant: 'subtle',
          }"
        />
        <Button
          icon="i-lucide-message-circle"
          variant="soft"
          color="secondary"
          size="sm" 
        />
      </div>
      <Button
        class="flex justify-center"
        variant="soft"
        color="neutral"
        size="sm"
        @click="showLicense = !showLicense"
      >
        Show license
      </Button>
      <Image 
        v-if="showLicense"
        :src="driver.licensePhoto" 
        alt="Driver License"
      />
    </div>
  </InformationCard>
</template>