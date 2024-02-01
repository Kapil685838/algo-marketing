<template>
  <div>
    <nav class="container flex items-center justify-between mx-auto">
      <NuxtLink to="/" class="text-4xl font-bold">{{ root.brand }}</NuxtLink>
      <ul class="flex items-center gap-6">
        <li v-for="nav in root.nav.links" :key="nav.id">
          <img :src="nav.img" alt="">
          <NuxtLink :to="nav.to">
            {{ nav.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const root = useRootStore();
</script>
