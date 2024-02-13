<template>
    <div class="flex justify-around pt-8">
        <h1 class="w-1/2 text-6xl font-extrabold leading-normal px-4" v-html="props.title"></h1>
        <div class="w-1/2 text-xl p-6">
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