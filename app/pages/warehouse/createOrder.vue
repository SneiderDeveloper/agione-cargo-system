<template>
  <SectionContainer 
    title="Search AWB"
    description="Find and select an Air Waybill to create order"
    headerClass="bg-red-500"
    :icon="{
      name: 'i-lucide-box',
    }"
  >
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
  </SectionContainer>
</template>