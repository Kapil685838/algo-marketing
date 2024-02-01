<template>
  <div>
    <nav>
      <NuxtLink to="/">{{ nav.brand }}</NuxtLink>
      <div>
        <ul>
          <li v-for="nav in nav.links" :key="nav.id">
            <NuxtLink :to="nav.to">
              {{ nav.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
const props = defineProps({
  nav: {
    type: Object,
  },
});
</script>
