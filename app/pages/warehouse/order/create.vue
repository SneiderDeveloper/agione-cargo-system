<script setup lang="ts">
const results = ref([])

</script>
<template>
  <SectionContainer 
    title="Search AWB"
    description="Find and select an Air Waybill to create order"
    headerClass="bg-red-500"
    :icon="{
      name: 'i-lucide-box',
    }"
  >
    <div class="flex flex-col gap-3">
      <div class="flex gap-2">
        <Input
          placeholder="Enter AWB Number" 
          type="text"
          variant="subtle"
          icon="i-lucide-search"
          size="lg"
          :ui="{ root: 'w-full' }"
        />
        <Button 
          variant="soft"
          icon="i-lucide-search"
          color="secondary"
          class="rounded-xl"
        />
      </div>
      <div class="flex gap-2">
        <h3>Available for AWBs</h3>
        <Chip 
          label="1 result"
        />
      </div>
      <div class="rounded-2xl border border-slate-100 p-4">
        <div class="flex gap-2">
          <Chip label="0101020202" />
          <Chip label="EK235" />
        </div>
        <h2>Electronic Equipment and Machinery</h2>
      </div>
      <div class="flex gap-2">
        <Button variant="outline">
          Cancel
        </Button>
        <Button>
          Add order to queue
        </Button>
      </div>
    </div>
  </SectionContainer>
</template>