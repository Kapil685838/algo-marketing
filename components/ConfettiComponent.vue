<template>
  <Confetti v-if="size" :numberOfPieces="150" :gravity="0.01" :width="size.width" :height="size.height * 1.5" />
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useWindowSize } from "vue-window-size";
import Confetti from "vue-confetti";

const { width, height } = useWindowSize();
const size = ref({ width, height });

watchEffect(size, () => {
  size.value = { width, height };
})


</script>
