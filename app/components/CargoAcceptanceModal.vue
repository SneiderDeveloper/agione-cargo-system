<script setup lang="ts">
import CargoAcceptanceReview from './CargoAcceptanceReview.vue';
import CargoAcceptanceSignature from './CargoAcceptanceSignature.vue';
import CargoAcceptanceSuccess from './CargoAcceptanceSuccess.vue';
import PieceCountMismatch from './PieceCountMismatch.vue';

const isOpenModal = useState<boolean>('isOpenModal')
const view = useState<number>('view', () => 0)
const views = [
  {
    title: 'Piece Count Mismatch',
    icon: 'i-lucide-check-circle',
    content: PieceCountMismatch,
    description: 'The piece allocation doesnt match the AWB total. Review the summary below before proceeding.'
  },
  {
    title: 'Cargo Acceptance Review',
    icon: 'i-lucide-shield-check',
    content: CargoAcceptanceReview,
    description: 'Review the cargo details below and confirm acceptance to begin processing.'
  },
  {
    title: 'Warehouse Agent Signature Required',
    icon: 'i-lucide-shield-check',
    content: CargoAcceptanceSignature,
    description: 'As the warehouse agent, provide your digital signature to authorize the cargo acceptance and complete the process.'
  },
  {
    title: 'Cargo Accepted Successfully',
    icon: 'i-lucide-shield-check',
    content: CargoAcceptanceSuccess,
    description: 'The cargo has been officially accepted with digital signature confirmation. Choose your next action below.'
  }
]

onBeforeUnmount(() => {
  // Reset modal state on unmount
  isOpenModal.value = false
  view.value = 0
})
</script>
<template>
  <Modal
    v-model="isOpenModal"
  >
    <template #content>
      <div class="flex flex-col gap-3 p-4">
        <div class="flex flex-col gap-3 items-center">
          <IconContainer
            name="i-lucide-shield-check"
            class-icon="text-green-500"
            class-name="bg-green-100"
            size="lg"
            :round="true"
          />
          <div class="text-center">
            <h3 class="font-semibold text-xl">{{ views[view]?.title }}</h3>
            <Chip 
              color="neutral" 
              class="text-slate-500 rounded-full" 
              variant="soft"
            >
              #AWB-2024-8851
            </Chip>
          </div>
        </div>
        <span class="text-slate-600 text-center">
          {{ views[view]?.description }}
        </span>
        <component :is="views[view]?.content" />
      </div>
    </template>
  </Modal>
</template>
