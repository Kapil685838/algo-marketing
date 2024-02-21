<template>
    <div class="flex flex-col w-full md:flex-row justify-around pt-8">
        <h1 class="md:w-1/2 w-full text-6xl font-extrabold leading-normal px-4" v-html="props.title"></h1>
        <div class="md:w-1/2 w-full text-xl p-6">
            <p>{{ props.description }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    description: String
})
</script>