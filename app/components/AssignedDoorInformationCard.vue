<script setup lang="ts">
const edit = ref(false)
defineProps<{
  doorName: string | number | undefined
}>()
</script>
<template>
  <InformationCard title="Assigned Dock Door">
    <div v-if="!edit" class="flex items-center">
      <DataWidget 
        iconName="i-lucide-door-closed"
        :value="doorName"
        label="Door"
      />
      <Button 
        icon="i-lucide-pencil"
        variant="soft"
        color="neutral"
        size="sm"
        class="ml-auto"
        @click="edit = !edit"
      />
    </div>
    <div v-if="edit">
      <Select
        :items="[
          { label: 'Dock Door 1', value: 'dock-door-1' },
          { label: 'Dock Door 2', value: 'dock-door-2' },
          { label: 'Dock Door 3', value: 'dock-door-3' },
          { label: 'Dock Door 4', value: 'dock-door-4' },
          { label: 'Dock Door 5', value: 'dock-door-5' },
        ]"
        placeholder="Select date range"
        variant="soft"
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