<template>
    <div class="container mx-auto">
        <div class="flex flex-col md:flex-row">
            <div class="pt-6">
                <div class="flex md:flex-row">
                    <div class="">
                        <img class="" :src="root.footer.img" alt="footer-image">
                    </div>
                    <div class="pl-6 max-w-min md:max-w-96 w-96">
                        <p class="max-w-full md:max-w-36">{{ root.footer.description }}</p>
                    </div>
                </div>
            </div>
            <div class="columns-2 flex justify-around">
                <div class="pt-6 text-left md:pl-4">
                    <ul class="mr-0 md:mr-20">
                        <li v-for="link in root.footer.links1" :key="link.id" class="mb-5">
                            <NuxtLink class="font-bold text-xl" :to="link.to">{{ link.label }}</NuxtLink>
                        </li>

                    </ul>
                </div>
                <div class="pt-6 text-left ">
                    <ul class="mr-0 md:mr-20">
                        <li v-for="link in root.footer.links2" :key="link.id" class="mb-5">
                            <NuxtLink class="font-bold text-xl" :to="link.to">{{ link.label }}</NuxtLink>
                        </li>

                    </ul>
                </div>
            </div>
            <div class=" pt-6 flex flex-col flex-grow">
                <ul
                    class="flex flex-row flex- justify-evenly md:flex-col md:justify-center items-center md:justify-end md:items-center">
                    <li v-for="item in root.socialLinks" :key="item.id" class=" mb-5">
                        <NuxtLink :to="item.to" target="_blank" rel="noopener">
                            <img class="w-auto max-h-8 md:max-h-10 md:h-auto h-auto" :src="item.img"
                                alt="social icons" />
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <p class="px-12 md:pl-4 py-4 text-base text-black">{{ root.footer.endDescription }}</p>
    </div>
</template>

<script setup>

const root = useRootStore();

</script>
