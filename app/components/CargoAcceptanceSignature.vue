<script setup lang="ts">
import { ref } from 'vue';

const view = useState<number>('view');
const firmaInputRef = ref();

const handleCompleted = () => {
  const image = firmaInputRef.value?.getImage();
  if (!image) {
    alert('Por favor ingresa tu firma antes de completar.');
    return;
  }
  // Lógica para completar el proceso con la firma
  console.log('Firma guardada:', image);
  view.value = 3;
}
</script>
<template>
  <div class="flex flex-col gap-4">
    <div class="bg-slate-100 border border-slate-200 rounded-2xl p-3">
      <User 
        name="John Doe"
        size="lg"
        role="Warehouse Agent"
        description="Warehouse Agent"
        :avatar="{
          src: 'https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70._SX1080_FMjpg_.jpg',
          alt: 'Warehouse Agent Avatar'
        }"
      />
    </div>
    <SignatureInput 
      ref="firmaInputRef" 
      label="Digital Signature" 
    />
    <div class="grid grid-cols-2 gap-2 w-full">
      <Button size="lg" variant="outline" @click="view = 1">
        Back
      </Button>
      <Button size="lg" @click="handleCompleted">
        Complete
      </Button>
    </div>
  </div>
</template>