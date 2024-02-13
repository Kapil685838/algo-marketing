<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* width */
::-webkit-scrollbar {
    width: 14px;
    height: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #000000;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #f8d200;
    border-radius: 100px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
