<template>
  <div>
    <AtomsButton  />
    <MoleculesDropdown />
    <NuxtPage />
  </div>
</template>

<script setup>
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>
