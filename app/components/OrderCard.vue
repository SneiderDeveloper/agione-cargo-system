<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string
  orderNumber: string
  priority: 'Low' | 'Medium' | 'High'
  status: 'Pending' | 'In progress' | 'Completed'
  totalWeight: number | string
  totalAwbs: number | string
  dest: string[]
  assignedDoor?: string
  user: {
    name: string
    description?: string
    avatar: {
      src?: string
      alt?: string
    }
  }
  seeDetails?: boolean
  unassigned?: boolean
}>(), {
  seeDetails: true
})
const colorPriority = computed(() => {
  if (props.priority === 'Low') return 'success'
  if (props.priority === 'Medium') return 'warning'
  if (props.priority === 'High') return 'error'
})

const colorStatus = computed(() => {
  if (props.status === 'Pending') return 'warning'
  if (props.status === 'In progress') return 'info'
  if (props.status === 'Completed') return 'success'
})

const chips = computed(() => {
  return [
    {
      label: props.priority,
      color: colorPriority.value,
    },
    {
      label: props.status,
      color: colorStatus.value,
    }
  ]
})

const destString = computed(() => {
  return props?.dest?.join(', ')
})
</script>
<template>
  <div class="rounded-2xl">
    <section 
      class="
        flex 
        items-center
        justify-between
        border-t 
        border-x 
        border-slate-200 
        rounded-t-2xl 
        p-3
      "
    >
      <div>
        <div>
          <div class="flex gap-2 items-center">
            <h2 class="text-lg font-semibold">{{ title }}</h2>
            <template v-for="chip in chips" :key="chip.label">
              <Chip
                :label="chip.label"
                size="sm"
                :color="chip.color"
                variant="subtle"
                class="rounded-full"
              />
            </template>
          </div>
          <span class="text-slate-500 text-xs">{{ orderNumber }}</span>
        </div>
        <div class="flex gap-3 items-center mt-2">
          <MetaTags :tags="[`${totalAwbs} AWBs`, `${totalWeight} kg`]" />
          <Chip
            v-if="destString"
            :label="destString"
            size="md"
            color="neutral"
            variant="subtle"
          />
        </div>
      </div>
      <Button
        v-if="seeDetails"
        trailingIcon="i-lucide-chevron-right"
        variant="soft"
        color="neutral"
        size="sm"
      />
      <Button
        v-if="unassigned"
        icon="i-lucide-plus-circle"
        variant="soft"
        color="secondary"
        size="sm"
      >
        Take
      </Button>
    </section>
    <section class="flex items-start justify-between border border-slate-200 rounded-b-2xl p-3">
      <div>
        <User
          :name="user.name"
          :description="user.description"
          :avatar="{
            alt: user.avatar.alt,
          }"
          size="2xl"
          :chip="{
            label: 'Waiting 47 min',
            icon: 'i-lucide-clock',
            size: 'md',
            color: 'warning',
            variant: 'subtle',
          }"
        />
      </div>
      <Chip
        v-if="assignedDoor"
        :label="assignedDoor"
        icon="i-lucide-map-pin"
        size="md"
        color="neutral"
        variant="outline"
      />
    </section>
  </div>
</template>