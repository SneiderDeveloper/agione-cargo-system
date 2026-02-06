<script setup lang="ts">
defineProps<{
  doorName: string | number | undefined
}>()

interface DockDoor {
  label: string
  value: number
}

const { 
  data: dockDoors, 
  status 
} = useLazyFetch<DockDoor[]>('/api/dock-doors')

const edit = ref(false)
const loading = useState<boolean>('loading')

const loadingDockDoor = computed(() => status.value === 'pending')
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