<script setup lang="ts">
const props = defineProps<{
  doorName: string | number | undefined
}>()

interface DockDoor {
  label: string
  value: number
}

const route = useRoute()

const { 
  data: dockDoors, 
  status 
} = useLazyFetch<DockDoor[]>('/api/dock-doors')

const edit = ref(false)
const loading = useState<boolean>('loading')
const doorName = ref<string | number>(props.doorName || '')

const loadingDockDoor = computed(() => status.value === 'pending')

const handleChangeDoor = async () => {

  // try {     
  //   return await $fetch(`/api/order/${route.params.id}`, {
  //     method: 'POST',
  //     body: {
  //       assignedDoor: doorName.value,
  //     },
  //   })
  // } catch (error) {
  //   console.error('Error submitting driver check-in:', error)
  //   throw Error('Failed to submit driver check-in. Please try again.')
  // }
}
</script>
<template>
  <InformationCard title="Assigned Dock Door">
    <div v-if="!edit" class="flex items-center">
      <DataWidget 
        iconName="i-lucide-door-closed"
        :value="doorName"
        label="Door"
        :isLoading="loading"
      />
      <Button 
        icon="i-lucide-pencil"
        variant="soft"
        color="neutral"
        size="sm"
        class="ml-auto"
        @click="edit = !edit"
        :disabled="loading"
      />
    </div>
    <div v-if="edit">
      <Select
        v-model="doorName"
        :items="dockDoors"
        placeholder="Select date range"
        variant="soft"
        :loading="loadingDockDoor"
      />
      <div class="flex gap-2 justify-center mt-3">
        <Button
          variant="solid"
          size="md"
          class="w-full"
          color="secondary"
          @click="handleChangeDoor"
        >
          Save Changes
        </Button>
        <Button
          variant="outline"
          size="md"
          class="w-full"
          color="neutral"
          @click="edit = false"
        >
          Cancel
        </Button>
      </div>
    </div>
  </InformationCard>
</template>