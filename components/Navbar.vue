<template>
  <div class="py-2">
    <nav class="container flex items-center justify-between mx-auto">
      <NuxtLink to="/" class="text-4xl font-bold">{{ root.brand }}</NuxtLink>
      <ul class="flex items-center gap-6">
        <li v-for="nav in root.nav.links" :key="nav.id">
          <NuxtLink :to="nav.to" class="flex flex-col items-center group">
            <img
              :src="nav.img"
              class="w-12 -mb-1 group-hover:visible"
              :class="route.path === nav.to ? '' : 'invisible'"
              alt=""
            />
            <span class="text-sm font-semibold">
              {{ nav.label.toUpperCase() }}
            </span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const root = useRootStore();

const route = useRoute();
</script>
