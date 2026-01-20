<template>
  <SectionContainer
    title="Container Status Information"
    description="Record the status of the RNK or RAP container"
    :icon="{
      name: 'i-lucide-shield',
      color: 'text-blue-500',
      backgroundColor: 'bg-blue-100'
    }"
  >
    <div class="flex flex-col gap-3">
      <Select 
        :items="[
          {
            label: 'RNK',
            value: 1
          },
          {
            label: 'RAP',
            value: 2
          }
        ]"
        placeholder="Select container type"
        :form-field-props="{
          label: 'Container Type',
        }"
      />
      <Input 
        type="text"
        placeholder="Enter temperature"
        :form-field-props="{
          label: 'Temperature (°C)',
        }"
      />
      <Input 
        type="number"
        placeholder="Battery Percentage"
        :form-field-props="{
          label: 'Battery Percentage (%)',
        }"
      />
    </div>
  </SectionContainer>
</template>