<script setup lang="ts">
const isCheckOutModalOpen = useState<boolean>('isCheckOutModalOpen')
const checkOut = useState<boolean>('checkOut')

const handleCheckOut = () => {
  checkOut.value = true
  isCheckOutModalOpen.value = false
}
</script>
<template>
  <Modal
    title="Check Out"
    v-model="isCheckOutModalOpen"
  >
    <h1 class="mb-4">
      Are you sure you want to check out this order?
    </h1>
    <div class="flex gap-2 justify-end">
      <Button
        variant="outline" 
        @click="isCheckOutModalOpen = false"
        color="neutral"
      >
        Cancel
      </Button>
      <Button
        color="error"
        @click="handleCheckOut"
      >
          Confirm Check Out
      </Button>
    </div>
  </Modal>
</template>