<script setup lang="ts">
const career: string = ref("mafia");

const careerQuestions: Record<string, object> = {
  mafia: {
    title: "MAFIA",
    description:
      "Would you be the good old Thakur who’s remembered only in Gabbar’s dialogues or would you rather be Gabbar himself whose name is scary enough to put children to sleep, and whose iconic character is sought after by heroes even till date?",
  },
  how: {
    title: "HOW",
    description:
      "Cause we know how frustrating it is to sit for long hours in boring corporate office cubicles, doing the same thing over and over again, and still going unnoticed, forget getting recognition!",
  },
  why: {
    title: "WHY",
    description:
      "Since we value individuality, creativity, originality and a lil bit of a lot of quirkiness, we promise we will value that… at times more than we value you!",
  },
  what: {
    title: "WHAT",
    description:
      "If you don't want to be a dead fish going with the flow, why won't you drop us a mail? We will get back to you and see what you have got to show.",
  },
};
</script>

<template>
    <div class="">
        <div class="bg-[#F8D200] py-10">
            <div class="max-w-screen-xl flex flex-col md:flex-row">
                <div class="relative w-full md:w-1/2">
                    <ul class="pl-32 text-2xl sm:text-3xl md:text-8xl font-bold flex flex-col gap-2">
                        <li v-for="item in Object.keys(careerQuestions)" class="cursor-pointer"
                            :class="career === item ? 'text-white' : 'stroke-text'" :key="item"
                            @mouseenter="career = item">
                            <span class="relative block" :class="[
                  career === item &&
                    'after:absolute after:border-[1rem] after:border-r-white after:border-transparent after:top-1/2 after:right-0 after:-translate-y-1/2',
                ]">
                                {{ careerQuestions[item].title }}
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="w-full bg-white p-4 rounded-3xl rounded-ss-none max-w-lg md:w-1/2">
                    <div class="p-5 flex justify-center items-center text-center">
                        <div class="flex flex-col items-center gap-2">
                            <p>{{ careerQuestions[career].description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-10">
            <h2 class="text-center text-6xl font-bold mb-10">Open Positions</h2>
            <div></div>
        </div>
    </div>
</template>

<style scoped>
.stroke-text {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #cd121c;
}
</style>
