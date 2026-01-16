<script setup lang="ts">
const isOpenModal = useState<boolean>('isOpenModal')
const view = useState<number>('view')

const actions = [
  {
    label: 'Mark cargo as accepted and ready for processing',
    icon: 'i-lucide-package'
  },
  {
    label: 'Update cargo status in the system',
    icon: 'i-lucide-check-circle'
  },
  {
    label: 'No security inspections on record',
    icon: 'i-lucide-shield-check'
  }
]

const handleClose = () => {
  isOpenModal.value = false
  setTimeout(() => {
    // We are waiting to change our perspective.
    view.value = 0
  }, 500);
}
</script>
<template>
  <div class="flex flex-col gap-2">
    <template v-for="index in actions" :key="index.label">
      <div 
        class="
          flex 
          gap-3
          items-center
          bg-slate-100 
          p-3 
          border 
          border-slate-200 
          rounded-2xl
        "
      >
        <IconContainer
          :name="index.icon"
          class-icon="text-green-500"
          class-name="bg-green-100"
          size="sm"
        />
        <span>{{ index.label }}</span>
      </div>
    </template>
  </div>
  <div class="grid grid-cols-2 gap-2">
    <Button size="lg" variant="outline" @click="handleClose">
      Cancel
    </Button>
    <Button size="lg" @click="view = 2">
      Continue
    </Button>
  </div>
</template>