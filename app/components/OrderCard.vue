<script setup lang="ts">
import type { OrderCardProps } from '#shared/types/orderCardProps'
import type { Awb } from '#shared/types/order'
import type { BadgeProps } from '@nuxt/ui'
import moment from 'moment';

const props = defineProps<OrderCardProps>()

const showAwbDetails = ref(false)

const colorPriority = computed(() => {
  if (props.priority === 'Low') return 'success'
  if (props.priority === 'Medium') return 'warning'
  if (props.priority === 'High') return 'error'
})

const colorStatus = computed(() => {
  if (props.status === 'Pending') return 'warning'
  if (props.status === 'In progress') return 'info'
  if (props.status === 'Accepted') return 'success'
  if (props.status === 'Rejected') return 'error'
})

interface Chips { 
  label: OrderCardProps['priority'] | OrderCardProps['status']; 
  color: BadgeProps['color'] 
}

const chips: ComputedRef<Chips[]> = computed(() => {
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
  if (!props.dest || (props.dest.length === 0)) return null
  return props?.dest?.join(', ')
})

interface ChipUser {
  label: string,
  color: BadgeProps['color'],
  variant: BadgeProps['variant'],
  icon?: BadgeProps['icon'],
}

const chipUser: ComputedRef<ChipUser | null> = computed(() => {
  if(props.completed) return {
    label: `Completed ${moment(props.completionDate).format('MMMM D, YYYY [at] h:mm A')}`,
    color: 'neutral',
    variant: 'soft',
  }
  if (!props.createdAt) return null
  
  const createdAt = moment(props.createdAt)
  const now = moment()
  const diffInMinutes = now.diff(createdAt, 'minutes')
  
  if (diffInMinutes < 60) {
    return {
      label: `Waiting ${diffInMinutes} min`,
      color: 'success',
      variant: 'subtle',
      icon: 'i-lucide-clock',
    }
  }
  
  const diffInHours = now.diff(createdAt, 'hours')
  if (diffInHours < 24) {
    return {
      label: `Waiting ${diffInHours} h`,
      color: 'warning',
      variant: 'subtle',
      icon: 'i-lucide-clock',
    }
  }
  
  const diffInDays = now.diff(createdAt, 'days')
  return {
    label: `Waiting ${diffInDays} d`,
    color: 'error',
    variant: 'subtle',
    icon: 'i-lucide-clock',
  }
})

const timeTotal = computed(() => {
  const createdAt = moment(props.createdAt)
  const completedAt = moment(props.completionDate)
  const diffInMinutes = completedAt.diff(createdAt)

  return moment(diffInMinutes).format('H[h] mm[m]')
})

const handleShowDetails = () => {
  showAwbDetails.value = !showAwbDetails.value
}

const getAwbTags = (awb: Awb) => ([
  `${awb.totalNumberOfPieces} pieces`, 
  `${awb.totalWeight} kg`,
  `Completed ${moment(awb.warehouseAgentCheck.date).format('MMMM D, YYYY [at] h:mm A')}`,
])
</script>
<template>
  <div class="rounded-2xl">
    <section 
      class="
        flex 
        items-center
        justify-between
        border-t-2
        border-x-2
        border-slate-100 
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
          <span class="text-slate-500 text-xs">
            {{ orderNumber }}
          </span>
        </div>
        <div class="flex gap-3 items-center mt-2">
          <MetaTags 
            :tags="[
              `${totalAwbs} AWBs`, 
              `${totalWeight} kg`
            ]" 
          />
          <div 
            v-if="completed" 
            class="
              flex 
              items-center 
              gap-1 
              font-semibold
            "
          >
            <UIcon name="i-lucide-clock" class="text-slate-500" size="sm"/>
            <span class="text-slate-500 text-sm">
              {{ timeTotal }}
            </span>
          </div>
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
        v-if="detailsLink"
        trailingIcon="i-lucide-chevron-right"
        variant="soft"
        color="neutral"
        size="sm"
        @click="navigateTo(`${detailsLink}${id}`)"
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
    <section 
      class="
        border-2 
        border-slate-100 
        rounded-b-2xl
      "
    >
      <div
        class="
          flex 
          items-start 
          justify-between
          p-3
        "
      >
        <User
          :name="user.name"
          :description="user.description"
          :avatar="{
            alt: user.avatar.alt,
          }"
          size="2xl"
          :chip="{
            label: chipUser?.label,
            icon: chipUser?.icon,
            size: 'md',
            color: chipUser?.color,
            variant: chipUser?.variant,
          }"
        />
        <Chip
          v-if="assignedDoor"
          :label="assignedDoor"
          icon="i-lucide-map-pin"
          size="md"
          color="neutral"
          variant="outline"
        />
        <Button
          v-if="completed"
          trailingIcon="i-lucide-chevron-right"
          variant="soft"
          color="neutral"
          size="sm"
          @click="handleShowDetails"
        >
          AWB Details
        </Button>
      </div>
      <div 
        v-show="showAwbDetails" 
        class="
          border-t-2 
          border-slate-100 
          p-3 
          bg-slate-50
        "
      >
        <SectionHeader
          title="AWB Details"
          :description="`${awbs?.length} items processed`"
          :icon="{
            name: 'i-lucide-package',
            color: 'text-purple-400',
            backgroundColor: 'bg-purple-100'
          }"
          size="sm"
        />
        <div class="flex flex-col gap-3 mt-3">
          <template v-for="awb in awbs" :key="awb.id">
            <div 
              class="
                rounded-2xl 
                border-2 
                border-slate-100 
                p-3 
                bg-white
              "
            >
              <div class="flex gap-3">
                <h2 class="text-base font-semibold">
                  {{ awb.code }}
                </h2>
                <Chip 
                  label="Accepted"
                  color="success"
                  variant="soft"
                />
              </div>
              <p class="text-slate-500 text-sm">
                {{ awb.natureOfGoods }}
              </p>
              <MetaTags 
                :tags="getAwbTags(awb)" 
              />
            </div>
          </template>
        </div>
      </div>
      <div
        v-if="description"
        class="
          bg-slate-50 
          border 
          border-slate-100 
          m-3 
          p-3 
          rounded-2xl
        "
      >
        <h3 
          class="
            text-slate-500 
            font-semibold 
            uppercase
            text-sm
          "
        >
          Cargo description
        </h3>
        <p>{{ description }}</p>
      </div>
    </section>
  </div>
</template>