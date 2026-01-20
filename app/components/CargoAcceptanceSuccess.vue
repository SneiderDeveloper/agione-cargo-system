<script setup lang="ts">
const view = useState<number>('view')
const isOpenModal = useState<boolean>('isOpenModal')

</script>
<template>
  <div>
    <div class="p-3 border border-green-200 bg-green-100 rounded-2xl">
      <SectionHeader 
        title="Cargo Accepted Successfully"
        description="Cargo successfully accepted"
        :icon="{
          name: 'i-lucide-shield-check',
          backgroundColor: 'bg-green-100',
          color: 'text-green-500'
        }"
      />
      <div class="flex flex-col gap-3 mt-4">
        <div class="p-3 bg-white rounded-2xl">
          <User 
            name="John Doe"
            role="Warehouse Agent"
            description="Warehouse Agent"
            :avatar="{
              src: 'https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70._SX1080_FMjpg_.jpg',
              alt: 'Warehouse Agent Avatar'
            }"
          />
        </div>
        <div class="p-3 bg-white rounded-2xl">
           <SectionHeader 
            title="Proof of acceptance"
            description="Get the official acceptance certificate in PDF format"
            size="xs"
            :icon="{
              name: 'i-lucide-download',
            }"
          />
        </div>
      </div>
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
      <Button 
        size="lg" 
        variant="outline"
        @click="navigateTo('/warehouse/order/details/')"
      >
        Return to list
      </Button>
      <Button size="lg" @click="isOpenModal = false">
        Continue here
      </Button>
    </div>
  </div>
</template>