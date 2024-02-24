<script setup>
const hero_image = ref("");
const hero_text_mafia = ref(false);
const hero_text_better = ref(false);
const hero_text_bigger = ref(false);

const raids = {
  manipalHospitals: {
    title: "MANIPAL HOSPITALS",
    backgroundImage: "/images/manipal.png",
    img: "/images/manipal2.jpg",
    description: "An ode to those who protect hope.",
  },
  lifestyle: {
    title: "LIFESTYLE",
    backgroundImage: "/images/lifestyle-bg-img.jpg",
    img: "/images/lifestyle-img.png",
    description: "Dress up your Christmas elfs with your Lifestyle!",
  },
  bengaluruAirport: {
    title: "BENGALURU AIRPORT",
    backgroundImage: "/images/bengaluru-airport-bg-img.png",
    img: "/images/bengaluru-airport-img.png",
    description: "Virtue fruits when you adopt a plant!",
  },
  mamaearth: {
    title: "MAMAEARTH",
    backgroundImage: "/images/mamaearth-bg-img.jpg",
    img: "/images/mamaearth-img.png",
    description: "Goodness redefined in this digital era!",
  },
  tataHealth: {
    title: "TATA HEALTH",
    backgroundImage: "/images/tatahealth-bg-img.png",
    img: "/images/tatahealth-img.png",
    description: "Tailored made treatment plan, tailored made SEO.",
  },
  pepperfry: {
    title: "PEPPERFRY",
    backgroundImage: "/images/pepperfry-bg-img.jpg",
    img: "/images/pepperfry-img.png",
    description: "Celebrate the Wow Womaniyas in your life!",
  },
  curefit: {
    title: "CUREFIT",
    backgroundImage: "/images/curefit-bg-img.jpg",
    img: "/images/curefit-img.png",
    description: "Choose your treat, then burn them on repeat!",
  },
};

const raid = ref("manipalHospitals");
</script>

<template>
  <div>
    <div class="bg-primary group relative flex flex-col md:flex-row">
      <img
        v-if="hero_image"
        class="absolute top-0 left-0 z-0 h-full w-full"
        :src="hero_image"
        alt=""
      />

      <!---------------------- GUN ------------------------>

      <div class="gun-wrap">
        <img
          src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/home/banner1/gun.svg"
          class="img-fluid gun"
          alt=""
        />

        <img
          src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/home/banner1/bullet-trials.svg"
          class="img-fluid bullet-trials"
          alt=""
        />

        <img
          src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/home/banner1/bullet.svg"
          class="img-fluid bullet-exit"
          alt=""
        />
      </div>

      <!------------- Headings & Backgrounds --------------->

      <div
        class="relative z-10 container mx-auto min-h-[83vh] flex flex-col items-center justify-center"
      >
        <div
          class="text-3xl lg:text-5xl text-center font-medium tracking-normal leading-relaxed lg:leading-[4.5rem]"
        >
          <p
            :class="[
              'text-3xl lg:text-6xl',
              (hero_text_better || hero_text_bigger) && 'invisible',
            ]"
          >
            <span :class="hero_text_mafia && 'invisible'">We Are </span>
            <span
              :class="[
                'cursor-pointer font-black group-has-hover:bg-black',
                hero_text_mafia &&
                  'text-white bg-primary px-2 transition-all duration-200',
              ]"
              @mouseenter="
                () => {
                  hero_image = '/images/home-hero-slider-banner-2.jpg';
                  hero_text_mafia = true;
                }
              "
              @mouseleave="
                () => {
                  hero_image = '';
                  hero_text_mafia = false;
                }
              "
            >
              Marketing Mafias
            </span>
          </p>
          <p :class="(hero_text_mafia || hero_text_bigger) && 'invisible'">
            <span :class="hero_text_better && 'invisible'">Skilled enough to know </span>
            <span
              :class="[
                'cursor-pointer font-black',
                hero_text_better &&
                  'text-white bg-primary px-2 transition-all duration-200',
              ]"
              @mouseenter="
                () => {
                  hero_image = '/images/Home-Hero-Awards-Banner-2.jpg';
                  hero_text_better = true;
                }
              "
              @mouseleave="
                () => {
                  hero_image = '';
                  hero_text_better = false;
                }
              "
            >
              better
            </span>
          </p>
          <p :class="(hero_text_mafia || hero_text_better) && 'invisible'">
            <span :class="hero_text_bigger && 'invisible'">Wild enough to think </span>
            <span
              :class="[
                'cursor-pointer font-black',
                hero_text_bigger &&
                  'text-white bg-primary px-2 transition-all duration-200',
              ]"
              @mouseenter="
                () => {
                  hero_image = '/images/Home-Hero-Banner3-1.jpg';
                  hero_text_bigger = true;
                }
              "
              @mouseleave="
                () => {
                  hero_image = '';
                  hero_text_bigger = false;
                }
              "
            >
              bigger
            </span>
          </p>
        </div>
      </div>

      <!------------------ coffee cup ----------------------->

      <div class="coffee-wrap">
        <img
          src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/home/banner1/coffee-cup.svg"
          class="img-fluid coffee-cup"
          alt=""
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="coffee-flames"
          viewBox="0 0 62.69 130.63"
        >
          <defs></defs>
          <g id="flame1">
            <path
              class="cls-1"
              d="M17.19,45.72a47.55,47.55,0,0,0-7.58,6.37,39.63,39.63,0,0,0-5.68,7.29A26.88,26.88,0,0,0,.27,69.12a22.06,22.06,0,0,0-.11,6.09,23.6,23.6,0,0,0,1.73,6.43,101.2,101.2,0,0,0,4.82,9.61,128.2,128.2,0,0,1,6.33,12,24.57,24.57,0,0,1,1.59,5.2,15.31,15.31,0,0,1,.08,5A17.36,17.36,0,0,1,13,118.54a30.18,30.18,0,0,1-4.09,6,3.16,3.16,0,1,0,4.81,4.09,37,37,0,0,0,4.92-7.24,23.43,23.43,0,0,0,2.3-7,22.4,22.4,0,0,0-.58-9.3,37.83,37.83,0,0,0-2.44-6.42c-1.49-3.14-3.3-6.21-5.1-9.41A102.19,102.19,0,0,1,7.7,79.17a17.13,17.13,0,0,1-1.28-4.71,15.91,15.91,0,0,1,.09-4.37,20.59,20.59,0,0,1,2.83-7.47,36.76,36.76,0,0,1,7.25-8.46c1.16-1,2.18-1.82,2.91-2.35.36-.27.65-.47.84-.6l.21-.14,0,0h0L19.9,50,20.6,51h0L19.9,50,20.6,51a3.16,3.16,0,0,0-3.41-5.32Z"
            ></path>
            <path
              class="cls-2"
              d="M23,46.62A47.55,47.55,0,0,0,15.4,53a39.63,39.63,0,0,0-5.68,7.29A27.07,27.07,0,0,0,6.06,70,22.46,22.46,0,0,0,6,76.11a23.28,23.28,0,0,0,1.74,6.43,98.89,98.89,0,0,0,4.81,9.61,128.2,128.2,0,0,1,6.33,11.95,24.57,24.57,0,0,1,1.59,5.2,15.31,15.31,0,0,1,.08,5,17.08,17.08,0,0,1-1.71,5.13,30.18,30.18,0,0,1-4.09,6,3.16,3.16,0,1,0,4.81,4.09,37.3,37.3,0,0,0,4.92-7.24,23.53,23.53,0,0,0,2.3-7,22.4,22.4,0,0,0-.58-9.3,37.83,37.83,0,0,0-2.44-6.42c-1.49-3.14-3.3-6.21-5.1-9.41a102.19,102.19,0,0,1-5.12-10.08,17.13,17.13,0,0,1-1.28-4.71A15.91,15.91,0,0,1,12.3,71a20.59,20.59,0,0,1,2.83-7.47,36.76,36.76,0,0,1,7.25-8.46c1.16-1,2.19-1.82,2.91-2.35.36-.27.65-.47.84-.6l.21-.14,0,0h0l-.7-1.08.7,1.09h0l-.7-1.08.7,1.09A3.16,3.16,0,0,0,23,46.62Z"
            ></path>
          </g>
          <g id="flame2">
            <path
              class="cls-1"
              d="M52,.5a47.55,47.55,0,0,0-7.58,6.37,40.35,40.35,0,0,0-5.69,7.28,27.18,27.18,0,0,0-3.65,9.75A22,22,0,0,0,35,30a23.76,23.76,0,0,0,1.73,6.44A102.4,102.4,0,0,0,41.56,46,129.41,129.41,0,0,1,47.89,58a24.65,24.65,0,0,1,1.59,5.21,15,15,0,0,1,.07,5,17,17,0,0,1-1.7,5.13,30.77,30.77,0,0,1-4.09,6,3.16,3.16,0,1,0,4.81,4.09,37.05,37.05,0,0,0,4.92-7.25,23.38,23.38,0,0,0,2.3-7,22.4,22.4,0,0,0-.58-9.3,39.13,39.13,0,0,0-2.44-6.43c-1.49-3.13-3.3-6.21-5.1-9.4a101.27,101.27,0,0,1-5.12-10.09,17.07,17.07,0,0,1-1.28-4.7,16.32,16.32,0,0,1,.08-4.37,20.8,20.8,0,0,1,2.84-7.47,37,37,0,0,1,7.25-8.47c1.16-1,2.18-1.82,2.91-2.35L55.19,6l.21-.15,0,0h0l-.7-1.08.7,1.08h0l-.7-1.08.7,1.08A3.16,3.16,0,0,0,52,.5Z"
            ></path>
            <path
              class="cls-2"
              d="M57.83,1.4a47.55,47.55,0,0,0-7.58,6.37,39.88,39.88,0,0,0-5.68,7.28,26.93,26.93,0,0,0-3.66,9.75,22,22,0,0,0-.11,6.08,23.6,23.6,0,0,0,1.73,6.43,101.41,101.41,0,0,0,4.82,9.62,129.41,129.41,0,0,1,6.33,11.94,24.65,24.65,0,0,1,1.59,5.21,15.31,15.31,0,0,1,.08,5,17.45,17.45,0,0,1-1.71,5.13,30.77,30.77,0,0,1-4.09,6,3.16,3.16,0,1,0,4.81,4.09,37.05,37.05,0,0,0,4.92-7.25,23.38,23.38,0,0,0,2.3-7,22.4,22.4,0,0,0-.58-9.3,37.93,37.93,0,0,0-2.44-6.43c-1.49-3.13-3.3-6.21-5.1-9.4a101.27,101.27,0,0,1-5.12-10.09,17,17,0,0,1-1.28-4.71,15.85,15.85,0,0,1,.09-4.36A20.59,20.59,0,0,1,50,18.3a36.82,36.82,0,0,1,7.25-8.47c1.16-1,2.18-1.82,2.91-2.35L61,6.89l.21-.15,0,0h0l-.7-1.08.7,1.08h0l-.7-1.08.7,1.08A3.16,3.16,0,0,0,57.83,1.4Z"
            ></path>
          </g>
        </svg>
      </div>
    </div>

    <div class="">
      <div class="flex flex-col md:flex-row">
        <div
          class="relative w-1/2 before:content-[''] before:w-full before:h-full before:bg-[#00000055] before:block overflow-hidden"
        >
          <img
            class="absolute top-0 left-0 w-full h-full lg:h-auto"
            :src="raids[raid].backgroundImage"
            alt=""
          />
          <ul
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-center flex flex-col gap-2 md:text-nowrap"
          >
            <li
              v-for="item in Object.keys(raids)"
              class="cursor-pointer"
              :class="raid === item ? 'text-white' : 'text-white'"
              :key="item"
              @click="raid = item"
            >
              {{ raids[item].title }}
            </li>
          </ul>
        </div>
        <div class="w-1/2">
          <div class="p-5 h-full flex justify-center items-center text-center">
            <div class="flex flex-col items-center gap-2">
              <p>{{ raids[raid].title }}</p>
              <img :src="raids[raid].img" alt="" />
              <p>{{ raids[raid].description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-72 relative">
      <img src="/images/two-paperplane.png" class="img-fluid" alt="" />
      <div class="container mx-auto">
        <div class="grid grid-cols-3 gap-8">
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
      </div>
      <img
        src="/images/single-paperplane.png"
        class="absolute w-[66vw] right-0 bottom-[-190px] -z-10"
        alt=""
      />
    </div>

    <Carousel />
  </div>
</template>
<style>
.gun-wrap {
  position: absolute;
  top: 26%;
  left: 2%;
  width: 15%;
  height: auto;
}

.bullet-trials {
  position: absolute;
  z-index: 0;
  opacity: 0;
  top: -28%;
  right: -79%;
  width: 90%;
}

.bullet-exit {
  position: absolute;
  z-index: 0;
  opacity: 0;
  top: -37%;
  right: -98%;
  width: 22%;
}

.coffee-wrap {
  position: absolute;
  bottom: 10%;
  right: 2%;
  width: 9%;
  height: auto;
}

.coffee-cup {
  position: relative;
}

.coffee-flames {
  position: absolute;
  z-index: 0;
  top: -75%;
  right: 27%;
  width: 41%;
  animation: move_wave 2s linear 0.5s infinite;
  opacity: 0;
}

@keyframes move_wave {
  0% {
    transform: translateX(0) translateY(0) translateZ(0);
    opacity: 1;
  }

  50% {
    transform: translateX(0) translateY(-25%) translateZ(0);
    opacity: 0.5;
  }

  100% {
    transform: translateX(0) translateY(-50%) translateZ(0);
    opacity: 0;
  }
}
</style>
