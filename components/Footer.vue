<template>
    <div class="bg-primary pt-12">
        <div class="container mx-auto">
            <div class="flex">
                <div class="pt-6">
                    <div class="flex flex-col md:flex-row">
                        <div class="flex-shrink-0 columns-auto">
                            <img class="w-auto h-12 md:h-auto" :src="root.footer.img" alt="footer-image">
                        </div>
                        <div class="columns-1 pl-6 max-w-96 w-96">
                            <p class="max-w-36">{{ root.footer.description }}</p>
                        </div>
                    </div>
                </div>
                <div class="columns-2 flex">
                    <div class="pt-6 text-left pl-4 ">
                        <ul class="mr-20">
                            <li v-for="link in root.footer.links1" class="mb-5">
                                <NuxtLink class="font-bold text-xl" :to="link.to">{{ link.label }}</NuxtLink>
                            </li>

                        </ul>
                    </div>
                    <div class=" pt-6 text-left ">
                        <ul class="mr-20">
                            <li v-for="link in root.footer.links2" class="mb-5">
                                <NuxtLink class="font-bold text-xl" :to="link.to">{{ link.label }}</NuxtLink>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class=" pt-6 flex flex-col flex-grow">
                    <ul
                        class="flex flex-row flex-wrap  md:flex-col justify-center items-center md:justify-end md:items-center">
                        <li v-for="item in root.socialLinks" class=" mb-5">
                            <NuxtLink :to="item.to" target="_blank" rel="noopener">
                                <img class="w-auto max-h-8 md:max-h-10 md:h-auto h-auto" :src="item.img"
                                    alt="social icons" />
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <p class="pl-4 py-4 text-base text-black">{{ root.footer.endDescription }}</p>
        </div>
    </div>
</template>
<script setup>
const root = useRootStore();
</script>