<template>
    <div class="container mx-auto">
        <HeaderV1 :title="root.ourwork.title" :description="root.ourwork.description" />
        <div class="grid grid-cols-4 gap-8 my-12 py-12">
            <div v-for="image in root.ourwork">
                <div>
                    <img :src="image.img" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const root = useRootStore();
</script>