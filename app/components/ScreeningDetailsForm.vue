<script setup lang="ts">

defineProps<{
  scan?: boolean
}>()

const methodScreen = [
  {
    label: 'X-Ray Screening',
    value: 1,
  },
  {
    label: 'ETD (Explosive Trace Detection)',
    value: 2,
  },
  {
    label: 'K9 Unit Inspection',
    value: 3,
  },
  {
    label: '3rd Party K9 Inspection',
    value: 4,
  },
]

const statusScreen = [
  {
    label: 'Clear',
    value: 'pending',
  },
  {
    label: 'Completed',
    value: 'completed',
  },
  {
    label: 'In Progress',
    value: 'in_progress',
  },
]
</script>
<template>
  <div class="grid gap-3">
    <Select
      :form-field-props="{
        label: 'Security Method'
      }"
      :items="methodScreen"
      placeholder="Select Inspection Method"
      variant="soft"
    />
    <Select
      :form-field-props="{
        label: 'Status'
      }"
      :items="statusScreen"
      placeholder="Status"
      variant="soft"
    />
    <Input
      v-if="scan"
      type="text"
      :form-field-props="{
        label: 'Scan Group Barcode',
      }"
      placeholder="Scan or enter group barcode"
      variant="soft"
      class="uppercase"
    >
      <Button 
        class="ml-2"
        color="secondary"
        icon="i-lucide-scan"
      />
    </Input>
    <Input
      v-if="!scan"
      type="number"
      :form-field-props="{
        label: 'Pieces',
      }"
      variant="soft"
    />
    <Textarea
      placeholder="Inspection notes..."
      :form-field-props="{
        label: 'Notes',
      }"
    />
  </div>
</template>