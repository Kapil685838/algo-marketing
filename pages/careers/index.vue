<script setup>
const careerStore = useCareerStore();

const career = ref("mafia");

const activeTabLocation = ref("");

onMounted(() => {
  handleOpenPositions(careerStore.getAvailableLocations[0]);
});

const careerQuestions = {
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

const handleOpenPositions = (location) => {
  activeTabLocation.value = location;
  careerStore.getJobs(location);
};
</script>

<template>
  <div class="">
    <div class="bg-[#F8D200] py-10">
      <div class="max-w-screen- flex flex-col justify-center gap-4 md:gap-0 md:flex-row">
        <div class="relative w-full md:w-1/2">
          <ul class="pl-32 text-2xl sm:text-3xl md:text-8xl font-bold flex flex-col gap-2">
            <li v-for="item in Object.keys(careerQuestions)" class="cursor-pointer"
              :class="career === item ? 'text-white' : 'stroke-text'" :key="item" @mouseenter="career = item">
              <span class="relative block" :class="[
                  career === item &&
                    'md:after:absolute md:after:border-[1rem] md:after:border-r-white md:after:border-transparent md:after:top-1/2 md:after:right-0 md:after:-translate-y-1/2',
                ]">
                {{ careerQuestions[item].title }}
              </span>
            </li>
          </ul>
        </div>
        <div class="w-full p-4 md:p-0 max-w-lg md:w-1/2">
          <div class="p-6 md:p-12 bg-white rounded-3xl max-w-[320px] rounded-ss-none h-full flex justify-center">
            <div class="flex flex-col items-center gap-2">
              <p>{{ careerQuestions[career].description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-10">
      <h2 class="text-center text-6xl font-bold mb-10">Open Positions</h2>

      <div class="w-full max-w-screen-xl mx-auto">
        <div>
          <ul class="flex flex-wrap gap-4 font-bold justify-center my-4 text-lg">
            <li v-for="item in careerStore.getAvailableLocations" :key="item" class="cursor-pointer text-black"
              :class="activeTabLocation === item ? 'text-red-500' : ''" @click="handleOpenPositions(item)">
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="w-full py-6 px-4">
          <div v-for="item in careerStore.getOpenPositions" :key="item"
            class="flex items-center flex-col gap-2 justify-between border-b-2 border-gray-300 py-6 md:flex-row">
            <div class="text-center">
              <p class="text-xl font-bold mb-2">{{ item.designation }} ({{ item.experience }})</p>
              <div class="flex items-center justify-center md:justify-start gap-4">
                <span>{{ item.type }}</span>
                <div class="flex items-center gap-1">
                  <span class="h-1.5 w-1.5 bg-black rounded-full"></span>
                  <span>{{ item.field }}</span>
                </div>
              </div>
            </div>
            <button
              class="min-w-max pl-8 pr-3 py-2 bg-[#e1bb08] hover:bg-[#f8d200] rounded-full flex items-center gap-2"><span>Apply
                Now</span> <svg class="rotate-90 ml-2" height="24" width="24" version="1.1" id="Layer_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 51.9 53.5" style="enable-background: new 0 0 51.9 53.5" xml:space="preserve">
                <path class="st0" d="M22,49.4c-9.9-1-18.6-9.2-19.9-19.2c-1-10,4.7-19.4,13.9-23.2c5.8-2.3,12.4-3.4,18.5-1.7
	c2.7,0.6,5.3,1.8,7.5,3.5c1.9,1.6,3.4,3.5,4.5,5.6c5,9.6,3.4,23.4-4.9,30.7c-2.2,1.9-4.8,3.3-7.7,4.1c-2.4,0.6-6.9,1.5-8.2-1.4
	c-0.5-1.4-0.8-2.8-0.8-4.3c-0.2-1.6-0.4-3.3-0.5-4.9c-0.2-3.2-0.2-6.4-0.1-9.6l-1.2,0.9c0.8,0.1,2.8,0.3,3,1.3c0.2,1.3-2.7,1-3.3,1
	C20.9,32.3,19,32.2,17,32s-1.2-2-0.4-3.2c1.1-1.5,2.3-2.9,3.5-4.3c1.2-1.4,2.1-2.7,3.3-3.9c0.9-0.9,2.4-2.4,3.5-1.1
	c1.1,1.5,2,3,2.8,4.6c1.8,3,3.4,6.1,4.8,9.4l0.9-1.5c-1.7,0.1-3.3,0-5-0.1c-1.4-0.1-1.8,2-0.4,2.1c1.8,0.2,3.7,0.2,5.5,0.1
	c0.6-0.1,1-0.6,1-1.2c0-0.1,0-0.2-0.1-0.2c-1.7-4.1-3.8-8.1-6.2-11.9c-1-1.7-2-4.1-4.3-4.1c-2,0-3.5,1.6-4.8,3
	c-1.8,2-3.4,4.1-5.1,6.2c-1.2,1.5-2.7,3.1-2.6,5.1c0.1,2.3,2.2,2.9,4.1,3.1c2.4,0.2,5,0.7,7.4,0.3c1.9-0.3,3.8-1.7,3.1-3.8
	c-0.6-1.9-2.9-2.6-4.6-2.7c-0.5-0.1-1.2,0.3-1.2,0.9c-0.2,3.2-0.2,6.4,0,9.6c0.1,3,0.5,6,1.1,9c0.3,1.2,0.9,2.4,1.8,3.2
	c1.2,0.9,2.8,1.4,4.3,1.3c2.9,0,5.7-0.6,8.3-1.8c11.7-5.4,16-19.8,12.7-31.6C49.1,13.3,45.9,8.3,41,5.5c-2.9-1.5-6-2.6-9.2-3
	C28.4,2.1,25,2.3,21.7,3.2c-5.8,1.3-11.2,3.5-15.2,8c-3.7,4-6,9.2-6.5,14.6c-1.1,12.7,9.2,24.4,21.7,25.7C23,51.6,23.4,49.5,22,49.4
	z" />
              </svg></button>
          </div>
        </div>
      </div>
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
