<script setup lang="ts">
const isOpenModal = useState<boolean>('isOpenModal')
const view = useState<number>('view')

const summay = ref([
  {
    label: 'AWB total',
    value: '24'
  },
  {
    label: 'Allocated',
    value: '1'
  },
  {
    label: 'Difference',
    value: '23'
  }
])

const handleClose = () => {
  isOpenModal.value = false
  setTimeout(() => {
    view.value = 0
  }, 500);
}
</script>
<template>
  <div class="flex flex-col gap-6 p-3">
    <div class="flex flex-col gap-2">
      <template v-for="index in summay" :key="index.label">
        <div 
          class="
            flex 
            justify-between
            items-center
            bg-slate-100 
            p-3 border 
            border-slate-200 
            rounded-2xl
          "
        >
          <span>{{ index.label }}</span>
          <span>{{ index.value }}</span>
        </div>
      </template>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <Button variant="outline" @click="handleClose">
        Review again
      </Button>
      <Button @click="view = 1">
        Proceed anyway
      </Button>
    </div>
  </div>
</template>
