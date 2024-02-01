<template>
  <div>
    <header>
      <Navbar :nav="root.getNavData"  />
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
const root = useRootStore();
</script>