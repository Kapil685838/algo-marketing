<template>
    <div class="container mx-auto">
        <div class="flex justify-around pt-8">
            <h1 class="w-1/2 text-6xl font-extrabold leading-normal px-4" v-html="root.service.title"></h1>
            <div class="w-1/2 text-xl p-6">
                <p>{{ root.service.description }}</p>
            </div>
        </div>

        <div v-for="item in root.service.card" class="flex odd:flex-row-reverse mx-auto ">
            <ServicesCard :key="item.id" :title="item.label" :description="item.description" :img="item.img" :gif="item.gif"/>
        </div>
    </div>
</template>

<script setup>
const root = useRootStore()
</script>