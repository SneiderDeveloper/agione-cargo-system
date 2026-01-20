<script setup lang="ts">
const awbRecord = useState<any>('awbRecord')

const awbDetails = ref({
  pieces: '',
  weight: '',
  packagingType: [] as string[],
  warehouseLocation: '',
  shipmentEvidencePhotos: [] as File[],
  damageDescription: '',
  additionalNotes: ''
})
</script>
<template>
  <div>
    <Input 
      type="text"
      :form-field-props="{
        label: 'Number of pieces',
      }"
    />
    <Input 
      type="text"
      :form-field-props="{
        label: 'Weight (kg)',
      }"
    />
    <Select 
      :items="[
        { label: 'Basket' , value: 'basket' },
        { label: 'Box' , value: 'box' },
        { label: 'Bundle' , value: 'bundle' },
        { label: 'Carton' , value: 'carton' },
        { label: 'Crate' , value: 'crate' },
        { label: 'Drum' , value: 'drum' },
        { label: 'Suitcase' , value: 'suitcase' },
      ]"
      v-model="awbRecord.packagingType"
      multiple
      :form-field-props="{
        label: 'Packaging Type',
      }"
    />
    <Input 
      type="text"
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
    <!-- <SectionContainer
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
    </SectionContainer> -->
    <Textarea
      placeholder="Enter any additional notes"
      :form-field-props="{
        label: 'Additional Notes',
      }"
    />
  </div>
</template>