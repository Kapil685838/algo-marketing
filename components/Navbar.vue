<template>
  <div class="px-4">
    <nav
      class="container flex flex-row lg:flex-row lg:items-center justify-between mx-auto w-full"
    >
      <div
        class="flex flex-col lg:flex-row lg:items-center w-full justify-between items-start"
      >
        <NuxtLink to="/" class="text-2xl md:text-4xl font-bold w-full">{{
          root.brand
        }}</NuxtLink>
        <ul
          id="navbar-default"
          class="w-full hidden lg:flex flex-col justify-end lg:flex-row items-center space-x-0 lg:space-x-8 space-y-4 lg:space-y-0"
        >
          <li v-for="nav in root.nav.links" :key="nav.id">
            <div v-if="nav.type === 'dropdown'" class="relative flex flex-col lg:flex-row justify-center text-center">
              <button class="flex flex-col items-center group relative peer">
                <img
                  :src="nav.img"
                  class="w-12 -mb-1 group-hover:visible"
                  :class="route.path === nav.to ? '' : 'invisible'"
                  alt=""
                />
                <span
                  class="text-sm font-medium whitespace-nowrap flex items-center gap-1"
                >
                  <span>{{ nav.label.toUpperCase() }}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-6 text-gray-700"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 15.121a.997.997 0 0 1-.707-.293L7.05 10.586a1 1 0 0 1 1.414-1.414L12 12.707l3.536-3.535a1 1 0 0 1 1.414 1.414l-4.243 4.242a.997.997 0 0 1-.707.293"
                    />
                  </svg>
                </span>
              </button>
              <ul
                v-if="nav.dropdownLinks"
                class="lg:absolute lg:top-full lg:-left-1/2 border py-2 bg-white lg:rounded-md hidden hover:block peer-hover:block"
              >
                <li
                  v-for="i in nav.dropdownLinks"
                  :key="i"
                  class="cursor-pointer text-nowrap py-1.5 px-4 [&:not(:last-child)]:border-b"
                >
                  <NuxtLink :to="i.to" class="block w-full">
                    {{ i.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <NuxtLink v-else :to="nav.to" class="flex flex-col items-center group">
              <img
                :src="nav.img"
                class="w-12 -mb-1 group-hover:visible"
                :class="route.path === nav.to ? '' : 'invisible'"
                alt=""
              />
              <span class="text-sm font-medium whitespace-nowrap">
                {{ nav.label.toUpperCase() }}
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="p-2 px-4 w-14 h-12 justify-center text-sm text-gray-700 bg-primary rounded lg:hidden focus:outline-none"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </nav>
  </div>
</template>

<script setup>
const root = useRootStore();

const route = useRoute();
</script>
