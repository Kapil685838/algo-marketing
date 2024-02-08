<template>
    <div class="container mx-auto">
       
        <HeaderV1 :title="root.service.title" :description="root.service.description" />

        <div v-for="item in root.service.card" class="flex odd:flex-row-reverse mx-auto ">
            <ServicesCard :key="item.id" :title="item.label" :description="item.description" :img="item.img" :gif="item.gif"/>
        </div>
    </div>
</template>

<script setup>
const root = useRootStore()
</script>