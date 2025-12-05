<script setup lang="ts">
// const isNavBackVisible = useState('isNavBackVisible', () => false)
// const headerTitle = useState('headerTitle', () => '')

</script>
<template>
  <div class="max-w-2xl my-0 mx-auto">
    <Header />
    <div class="p-2">
      <slot />
    </div>
  </div>
</template>