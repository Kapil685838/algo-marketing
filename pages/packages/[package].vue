<template>
    <div v-if="data">
        {{ data.description }}
    </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/package");

</script>