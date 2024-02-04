<template>
    <div class="w-1/2 py-4 px-12">
        <h3 v-html="props.title" class=" font-extrabold text-2xl"></h3>
        <p class="text-xl">{{ props.description }}</p>
    </div>

    <div :class="`bg-[url('${props.img}')] hover:bg-[url('${props.gif}')]`" class="w-1/2 bg-cover bg-no-repeat bg-center">
    </div>
</template>

<script setup>
const props = defineProps({
    title: '',
    description: '',
    img: '',
    gif: ''
})
</script>