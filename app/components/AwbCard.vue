<script setup lang="ts">
import type { BadgeProps } from '@nuxt/ui'

const props = defineProps<{
  title?: string
  description?: string
  status?: 'Pending' | 'In progress' | 'Completed'
}>()

const colorStatus = computed(() => {
  if (props.status === 'Pending') return 'warning'
  if (props.status === 'In progress') return 'info'
  if (props.status === 'Completed') return 'success'
})
</script>
<template>
  <div class="border-2 border-slate-100 rounded-2xl p-3">
    <section class="flex justify-between items-center mb-2">
      <div class="flex items-center gap-2">
        <IconContainer
          name="i-lucide-box"
          size="md"
        />
        <div>
          <div class="flex gap-2 items-center">
            <h2 class="uppercase text-slate-500 text-sm font-semibold">
              {{ title }}
            </h2>
            <Chip
              v-if="status"
              :label="status"
              :color="colorStatus"
              variant="soft"
            />
          </div>
          <span>{{ description }}</span>
        </div>
      </div>
      <Button
        trailingIcon="i-lucide-chevron-right"
        variant="soft"
        color="neutral"
        size="sm"
        @click="navigateTo('/warehouse/awb/details/')"
      />
    </section>
    <section class="flex gap-2">
      <MetaTags
        :tags="['12 pcs', '580 kg']"
        variant="chip"
      />
    </section>
  </div>
</template>