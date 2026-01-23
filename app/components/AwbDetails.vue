<script setup lang="ts">
import type { AwbDetails } from '#shared/types/awb'
import IconContainer from './IconContainer.vue';
import Switch from './Switch.vue';

const props = defineProps<{
  data: AwbDetails
}>()

const piece = {
  length: 0,
  width: 0,
  height: 0,
  isCargoDamaged: false,
  damageDescription: '',
}
const shipmentEvidencePhotos = ref<File[]>([])
const awbDetails = reactive<AwbDetails>(JSON.parse(JSON.stringify(props.data)))
const openDrawer = ref(false)
const isOpenModal = ref(false)
const { data: packagingTypes } = await useFetch('/api/packagingType')
const { data: warehouseLocation } = await useFetch('/api/warehouseLocation')

// const dimensions = [
//   { 
//     label: 'Length (in)',
//     value: awbDetails.pieces[0].length,
//     placeholder: '0',
//   },
//   { 
//     label: 'Width (in)',
//     value: awbDetails.pieces[0].width,
//     placeholder: '0',
//   },
//   { 
//     label: 'Height (in)',
//     value: awbDetails.pieces[0].height,
//     placeholder: '0',
//   }
// ]

const hasData = (piece: any) => {
  return piece.length > 0 || piece.width > 0 || piece.height > 0
}

const handleDeletionConfirmation = () => {
  const newVal = awbDetails.numberOfPieces
  
  // awbDetails.pieces = awbDetails.pieces.slice(0, newVal)
  openDrawer.value = false
}

const handleCancellation = () => {
  const currentLength = awbDetails.pieces?.length || 0

  awbDetails.numberOfPieces = currentLength
  openDrawer.value = false
}

watch(
  () => awbDetails.numberOfPieces,
  async (newVal) => {
    if ((newVal > 0) && awbDetails.perPiece) {
      const currentLength = awbDetails.pieces?.length || 0
      const pieces = awbDetails.pieces || []
      
      if (newVal > currentLength) {
        const itemsToAdd = newVal - currentLength
        for (let i = 0; i < itemsToAdd; i++) {
          awbDetails.pieces.push({ ...piece })
        }
      }
      
      if (newVal < currentLength) {      
        const itemsWithData = pieces
          .slice(newVal)
          .filter(hasData)
        
        if (itemsWithData.length > 0) {
          openDrawer.value = true
        } else {
          // awbDetails.pieces = pieces.slice(0, newVal)
        }
      }
    }
  }
)
</script>
<template>
  <div class="flex flex-col gap-3">
    <div class="flex gap-3">
      <Input
        v-model="awbDetails.numberOfPieces"
        type="number"
        :form-field-props="{
          label: 'Number of pieces',
        }"
      />
      <Input
        v-model="awbDetails.weight"
        type="text"
        :form-field-props="{
          label: 'Weight (kg)',
        }"
      />
    </div>
    <UDrawer v-model:open="openDrawer">
      <template #content>
        <div class="p-6">
          <h2 class="text-lg font-semibold mb-4">Confirm Removal</h2>
          <p>
            You have pieces with existing dimension data. Are you sure 
            you want to remove them? This action cannot be undone.
          </p>
          <div class="mt-6 flex justify-end gap-3">
            <Button 
              color="neutral"
              variant="outline"
              @click="handleCancellation()"
            >
              Cancel
            </Button>
            <Button 
              color="primary"
              @click="handleDeletionConfirmation()"
            >
              Confirm
            </Button>
          </div>
        </div>
      </template>
    </UDrawer>
    <UFormField label="Cargo Dimensions">
      <template #hint>
        <Switch 
          v-model="awbDetails.perPiece"
          color="secondary"
          :label="awbDetails.perPiece ? 'Per-Piece mode' : 'Group mode'"
        />
      </template>
      <div class="bg-slate-100 rounded-2xl p-3">
        <span>Single dimension applied to all 1 piece in this group</span>
        <div
          class="scroll-auto overflow-y-auto"
          :class="{
            'h-64': awbDetails.perPiece
          }"
        >
          <template v-for="piece in awbDetails.pieces">
            <div 
              class="
                mt-3
                border-slate-200 
              "
              :class="{
                'bg-white p-3 rounded-2xl border': awbDetails.perPiece
              }"
            >
              <div class="flex justify-between">
                <span>Piece</span>
                <Button 
                  icon="i-lucide-scale"
                  label="Add piece"
                  color="neutral"
                  variant="outline"
                  size="sm"
                />
              </div>
              <div class="flex gap-3">
                <Input
                  v-model="piece.length"
                  label="Length (in)"
                  placeholder="0"
                  :value="piece.length"
                />
                <Input 
                  v-model="piece.width"
                  label="Width (in)"
                  placeholder="0"
                  :value="piece.width"
                />
                <Input 
                  v-model="piece.height"
                  label="Height (in)"
                  placeholder="0"
                  :value="piece.height"
                />
              </div>
              <USeparator class="my-3" />
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-2">
                  <IconContainer name="i-lucide-triangle-alert" size="sm"/>
                  <span>Is the cargo damaged?</span>
                </div>
                <Switch 
                  v-model="piece.isCargoDamaged"
                  color="secondary"
                  :label="piece.isCargoDamaged ? 'Yes' : 'Not'"
                  @update:model-value="(val: boolean) => {
                    if (val) {
                      isOpenModal = true
                    }
                  }"
                />
              </div>
            </div>
          </template>
        </div>
      </div>
      <Button
        variant="soft"
        size="sm"
        icon="i-lucide-plus"
        color="secondary"
        class="mt-3"
        @click="isOpenModal = true"
      >
        Add Dimension
      </Button>
      <Modal 
        v-model="isOpenModal"
        title="Confirm Removal"
        size="md"
      >
        <Textarea
          placeholder="Describe the damage observed..."
          :form-field-props="{
            label: 'Damage Description',
          }"
        />
      </Modal>
      <!-- <SectionContainer
          title="Is the cargo damaged?"
          :content="awbDetails.isCargoDamaged"
          :icon="{
            name: 'i-lucide-triangle-alert',           
          }"
        >
          <template #actions>
            <Switch 
              v-model="awbDetails.isCargoDamaged"
              color="secondary"
              :label="awbDetails.isCargoDamaged ? 'Accepted' : 'Not accepted'"
            />
          </template>
          <Textarea
            placeholder="Describe the damage observed..."
            :form-field-props="{
              label: 'Damage Description',
            }"
          />
        </SectionContainer> -->
    </UFormField>
    <Select 
      v-model="awbDetails.packagingTypeId"
      :items="packagingTypes"
      multiple
      :form-field-props="{
        label: 'Packaging Type',
      }"
    />
    <Select 
      v-model="awbDetails.warehouseLocationId"
      :items="warehouseLocation"
      :form-field-props="{
        label: 'Warehouse Location',
      }"
    />
    <FileUpload
      v-model="shipmentEvidencePhotos"
      accept="image/*"
      multiple
      size="lg"
      label="Upload shipment evidence photos"
      description="Drag and drop files or click to browse"
      icon="i-lucide-upload"
      :form-field-props="{
        label: 'Shipment Evidence Photos',
      }"
    />
    <Textarea
      v-model="awbDetails.additionalNotes"
      placeholder="Enter any additional notes"
      :form-field-props="{
        label: 'Additional Notes',
      }"
    />
  </div>
</template>