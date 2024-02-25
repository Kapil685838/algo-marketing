<template>
  <div class="container mx-auto">
    <!-- Hero Section Start -->
    <div class="flex flex-col md:flex-row px-6 py-8">
      <h1
        class="w-full md:w-1/2 p-4 md:p-8 text-4xl md:text-6xl font-bold md:leading-tight"
        v-html="ourWork.getTitle"
      ></h1>
      <p class="w-full md:w-1/2 p-4 md:p-8 text-lg">{{ ourWork.getDescription }}</p>
    </div>
    <!-- Hero Section End -->

    <!-- Projects Section Start -->
    <div class="w-full">
      <!-- Filters -->
      <div>
        <ul class="flex flex-wrap gap-4 font-bold justify-center my-4 text-lg">
          <li
            v-for="filter in ourWork.filters"
            :key="filter.id"
            class="cursor-pointer"
            :class="activeCategory === filter.category ? 'text-red-500' : ''"
            @click="handleActiveCategory(filter.category)"
          >
            {{ filter.category.toUpperCase() }}
          </li>
        </ul>
      </div>
      <!-- Project List -->
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 py-6">
        <div v-for="project in ourWork.filteredProjects" :key="project.id">
          <NuxtLink to="/project">
            <img class="" :src="project.image" alt="" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- Projects Section End -->
  </div>
</template>

<script setup>
const ourWork = useOurWorkStore();
const activeCategory = ref("all");

onMounted(() => {
  ourWork.setFilteredProjects("all");
});

const handleActiveCategory = (category) => {
  activeCategory.value = category;
  ourWork.setFilteredProjects(category);
};
</script>
