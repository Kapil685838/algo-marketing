<template>
  <div v-for="service in root.services.cards" :key="service.id" 
  class="flex flex-col space-y-10 md:space-y-0 md:flex-row items-center md:odd:flex-row-reverse">
    <div class="w-full md:w-1/2 py-4 px-6 md:px-12">
      <h3 v-html="service.label" class="font-extrabold text-2xl"></h3>
      <p class="text-xl">{{ service.description }}</p>
    </div>

    <div class="w-full md:w-1/2 relative overflow-hidden bg-cover bg-no-repeat bg-center">
      <img class="mx-auto transition-opacity duration-300 ease-in-out hover:opacity-0" :src="service.img" alt="">
      <img v-if="hovering === service.id" class="mx-auto absolute inset-0" :src="service.gif" alt="">
    </div>
  </div>
</template>


<script setup>
const root = useRootStore();
const hovering = ref(null);
</script>
