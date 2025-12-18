<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = withDefaults(defineProps<{
  width?: number;
  height?: number;
  label: string;
}>(), {
  width: 300,
  height: 150,
})

const emit = defineEmits(['save']);

const canvas = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
let drawing = false;
let lastX = 0;
let lastY = 0;

const isEmpty = ref(true);

onMounted(() => {
  if (canvas.value) {
    ctx = canvas.value.getContext('2d');
    ctx!.lineWidth = 2;
    ctx!.lineCap = 'round';
    ctx!.strokeStyle = '#222';
  }
});

function getCanvasCoords(e: MouseEvent) {
  const rect = canvas.value!.getBoundingClientRect();
  // Ajustar a la escala real del canvas (por si el CSS cambia el tamaño visual)
  const scaleX = canvas.value!.width / rect.width;
  const scaleY = canvas.value!.height / rect.height;
  return {
    x: (e.clientX - rect.left) * scaleX,
    y: (e.clientY - rect.top) * scaleY
  };
}

function startDrawing(e: MouseEvent) {
  drawing = true;
  const { x, y } = getCanvasCoords(e);
  lastX = x;
  lastY = y;
}

function draw(e: MouseEvent) {
  if (!drawing || !ctx) return;
  const { x, y } = getCanvasCoords(e);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();
  lastX = x;
  lastY = y;
  isEmpty.value = !hasSignature();
}

function stopDrawing() {
  drawing = false;
}

// Touch events
function getCanvasCoordsTouch(e: TouchEvent) {
  const rect = canvas.value!.getBoundingClientRect();
  const touch = e.touches[0];
  const scaleX = canvas.value!.width / rect.width;
  const scaleY = canvas.value!.height / rect.height;
  return {
    x: (touch.clientX - rect.left) * scaleX,
    y: (touch.clientY - rect.top) * scaleY
  };
}

function startDrawingTouch(e: TouchEvent) {
  drawing = true;
  const { x, y } = getCanvasCoordsTouch(e);
  lastX = x;
  lastY = y;
}

function drawTouch(e: TouchEvent) {
  if (!drawing || !ctx) return;
  const { x, y } = getCanvasCoordsTouch(e);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();
  lastX = x;
  lastY = y;
  isEmpty.value = !hasSignature();
}

function clear() {
  if (ctx && canvas.value) {
    ctx.clearRect(0, 0, props.width, props.height);
    isEmpty.value = true;
  }
}

function getImage() {
  if (canvas.value) {
    return canvas.value.toDataURL('image/png');
  }
  return null;
}

defineExpose({ getImage });

function hasSignature() {
  if (!canvas.value) return false;
  const data = canvas.value.getContext('2d')!.getImageData(0, 0, props.width, props.height).data;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] !== 0) return true; // alpha channel not transparent
  }
  return false;
}
</script>
<template>
  <div class="w-full">
    <p class="font-semibold mb-2">
      {{ label }}
    </p>
    <div 
      class="
        w-full 
        max-w-md 
        p-0.5
        border-2 
        border-dashed 
        border-gray-300 
        rounded-2xl 
        bg-white
        relative
      "
    >
      <div 
        v-if="isEmpty"
        class="
          absolute 
          inset-0 
          flex 
          flex-col 
          items-center 
          justify-center 
          pointer-events-none
        "
      >
        <span class="text-lg font-medium text-gray-400 mb-1 text-center">
          Sign here to confirm acceptance
        </span>
        <span class="text-xs text-gray-300 text-center">
          Use your mouse or finger to draw
        </span>
      </div>
      <canvas
        ref="canvas"
        :width="width"
        :height="height"
        class="
          w-full 
          h-32 
          bg-white 
          rounded-2xl 
          border-none 
          touch-none 
          cursor-crosshair
        "
        @mousedown="startDrawing"
        @mousemove="draw"
        @mouseup="stopDrawing"
        @mouseleave="stopDrawing"
        @touchstart.prevent="startDrawingTouch"
        @touchmove.prevent="drawTouch"
        @touchend.prevent="stopDrawing"
      />
    </div>
    <div class="w-full max-w-md flex items-center justify-between gap-2 mt-3">
      <span class="text-gray-500 text-xs">
        Your signature as warehouse agent confirms acceptance of this cargo shipment
      </span>
      <Button 
        @click="clear" 
        variant="outline" 
        color="error" 
      >
        Clear
      </Button>
    </div>
  </div>
</template>


