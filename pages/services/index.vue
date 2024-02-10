<template>
    <div class="container mx-auto">
       
        <HeaderV1 :title="root.services.title" :description="root.services.description" />

        <ServicesCard />
        
    </div>
</template>

<script setup>
const root = useRootStore();
</script>