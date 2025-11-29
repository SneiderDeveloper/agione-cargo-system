<template>
  <div class="max-w-2xl my-0 mx-auto">
    <header class="flex justify-between p-4 border-b border-slate-200 mb-4">
      <section class="flex">
        <h2 class="font-semibold">Agione Cargo System</h2>
      </section>
      <section class="flex gap-2">
        <Notifications />
        <Menu />
      </section>
    </header>
    <slot />
  </div>
</template>