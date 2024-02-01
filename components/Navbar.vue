<template>
  <div>
    <nav class="container flex items-center justify-between mx-auto">
      <NuxtLink to="/" class="text-4xl font-bold">{{ root.brand }}</NuxtLink>
      <ul class="flex items-center gap-6">
        <li v-for="nav in root.nav.links" :key="nav.id">
          <NuxtLink :to="nav.to" class="flex flex-col items-center group">
            <img :src="nav.img" class="w-12 invisible group-hover:visible" alt="" />
            <span>{{ nav.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const root = useRootStore();
</script>
