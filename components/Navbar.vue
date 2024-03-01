<template>
  <div class="px-4">
    <nav class="container flex flex-row lg:flex-row lg:items-center justify-between mx-auto w-full">
      <div class="flex flex-col lg:flex-row lg:items-center w-full justify-between items-start">
        <NuxtLink to="/" class="text-2xl md:text-4xl font-bold w-full">{{ root.brand }}</NuxtLink>
        <ul  id="navbar-default" class="w-full hidden lg:flex flex-col justify-end lg:flex-row items-center space-x-0 lg:space-x-8 space-y-4 lg:space-y-0">
          <li v-for="nav in root.nav.links" :key="nav.id">
            <NuxtLink :to="nav.to" class="flex flex-col items-center group">
              <img :src="nav.img" class="w-12 -mb-1 group-hover:visible" :class="route.path === nav.to ? '' : 'invisible'"
                alt="" />
              <span class="text-sm font-medium whitespace-nowrap">
                {{ nav.label.toUpperCase() }}
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="navbar-default" type="button"
        class="p-2 px-4 w-14 h-12 justify-center text-sm text-gray-700 bg-primary rounded lg:hidden
         focus:outline-none "
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
    </nav>
  </div>
</template>

<script setup>
const root = useRootStore();

const route = useRoute();
</script>
