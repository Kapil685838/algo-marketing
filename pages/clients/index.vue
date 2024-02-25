<template>
  <div>
    <h1 class="flex items-center justify-center gap-4 text-6xl font-extrabold py-10">
      {{ clients.getTitle }}
      <img src="/images/clients/Heart-emoji.png" alt="" />
    </h1>
    <!-- Clients List -->
    <div
      class="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 py-6"
    >
      <div v-for="client in clients.clients" :key="client.id">
        <img class="mx-auto" :src="client.logo" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const clients = useClientsStore();
</script>
