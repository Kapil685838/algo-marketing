<template>
    <div v-if="data">
        <div v-if="data.hero" class="flex justify-between">
            <div>
                <div v-if="data.hero.tag">
                    <div>Best</div>
                    <p>{{ data.hero.tag }}</p>
                </div>
                <p v-if="data.hero.packageName">{{ data.hero.packageName }}</p>
                <h1 v-if="data.hero.title">{{ data.hero.title }}</h1>
                <div v-if="data.hero.description">
                    <p v-for="item in data.hero.description" :key="item" v-html="item"></p>
                </div>
            </div>
            <div>
                <img class="md:max-w-xs" :src="`/images/${data.hero.img}`" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();

const { data } = await useFetch(`/api/packages/${route.params.package}`);

console.log(data);

</script>