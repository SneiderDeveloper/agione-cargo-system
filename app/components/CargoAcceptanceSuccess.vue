<script setup lang="ts">
const view = useState<number>('view')
const isOpenModal = useState<boolean>('isOpenModal')

</script>
<template>
  <div>
    <SectionHeader 
      title="Cargo Accepted Successfully"
      description="Cargo successfully accepted"
      :icon="{
        name: 'i-lucide-shield-check',
      }"
    />

  </div>
  <div class="flex gap-4 items-center border border-slate-200 bg-slate-100 p-3 rounded-2xl w-full">
    <SectionHeader 
      title="Proof of acceptance"
      description="Get the official acceptance certificate in PDF format"
      :icon="{
        name: 'i-lucide-download',
      }"
    />
  </div>
  <div class="grid grid-cols-2 gap-2 w-full">
    <Button size="lg" variant="outline">
      Return to list
    </Button>
    <Button size="lg" @click="isOpenModal = false">
      Continue here
    </Button>
  </div>
</template>