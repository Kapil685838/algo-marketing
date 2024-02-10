<template>
  <div v-for="service in root.services.cards" :key="service.id" class="flex items-center odd:flex-row-reverse">
    <div class="w-1/2 py-4 px-12">
      <h3 v-html="service.label" class="font-extrabold text-2xl"></h3>
      <p class="text-xl">{{ service.description }}</p>
    </div>

    <div class="w-1/2 h-56 bg-cover bg-no-repeat bg-center" :class="`bg-[url('${service.img}')] border border-1`">
        {{ service.img }}
    </div>
  </div>
</template>

<script setup>
const root = useRootStore();
</script>
