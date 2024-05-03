<template>
    <div class="container mx-auto">
      <HeaderV1 :title="root.team.title" :description="root.team.description" />
  
      <teamCard/>
    </div>
  </template>
  
  <script setup>
  const root = useRootStore();
  </script>
  