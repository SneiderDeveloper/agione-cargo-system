<script setup lang="ts">
  const isCargoDamaged = ref(false)
</script>
<template>
  <SectionContainer
    title="Warehouse Acceptance Details"
    description="Enter cargo details for warehouse acceptance"
    :icon="{
      name: 'i-lucide-map-pin',
      color: 'text-blue-500',
      backgroundColor: 'bg-blue-100'
    }"
  >
    <template #actions>
      <Button
        variant="soft"
        size="sm"
        icon="i-lucide-boxes"
        color="secondary"
      />
    </template>
    <div class="flex flex-col gap-3">
      <Input 
        type="text"
        variant="subtle"
        size="lg"
        :form-field-props="{
          label: 'Number of pieces',
        }"
      />
      <Input 
        type="text"
        variant="subtle"
        size="lg"
        :form-field-props="{
          label: 'Weight (kg)',
        }"
      />
      <Input 
        type="text"
        variant="subtle"
        size="lg"
        :form-field-props="{
          label: 'Packaging Type',
        }"
      />
      <Input 
        type="text"
        variant="subtle"
        size="lg"
        :form-field-props="{
          label: 'Warehouse Location',
        }"
      />
      <FileUpload
        accept="image/*"
        label="Upload shipment evidence photos"
        description="Drag and drop files or click to browse"
        icon="i-lucide-upload"
        :form-field-props="{
          label: 'Shipment Evidence Photos',
        }"
      />
      <SectionContainer
        title="Is the cargo damaged?"
        :content="isCargoDamaged"
        :icon="{
          name: 'i-lucide-triangle-alert',           
        }"
      >
        <template #actions>
          <Switch 
            v-model="isCargoDamaged"
            color="secondary"
            :label="isCargoDamaged ? 'Accepted' : 'Not accepted'"
          />
        </template>
        <Textarea
          placeholder="Describe the damage observed..."
          :form-field-props="{
            label: 'Damage Description',
          }"
        />
      </SectionContainer>
      <Textarea
        placeholder="Enter any additional notes"
        :form-field-props="{
          label: 'Additional Notes',
        }"
      />
    </div>
  </SectionContainer>
</template>