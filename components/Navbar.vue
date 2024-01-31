<template>
    <div>
        <nav>
            <div>Brand</div>
            <div>
                <ul>
                    <li>
                        <NuxtLink to="" >
                            Link
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script setup>
const  root = useRootStore();

console.log(root.getNavLinks)
</script>