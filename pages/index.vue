<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const modules = [Navigation];

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

      <div
        class="gun-wrap z-10"
        :class="[(hero_text_bigger || hero_text_better || hero_text_mafia) && 'hidden']"
      >
        <img
          src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/home/banner1/gun.svg"
          class="img-fluid gun w-36"
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
        class="relative container mx-auto min-h-[50vh] md:min-h-[83vh] flex flex-col items-center justify-center"
      >
        <div
          class="text-2xl sm:text-3xl lg:text-5xl text-center font-medium tracking-normal leading-relaxed lg:leading-[4.5rem]"
        >
          <p
            :class="[
              'text-2xl sm:text-3xl lg:text-6xl',
              (hero_text_better || hero_text_bigger) && 'invisible',
            ]"
          >
            <span :class="hero_text_mafia && 'invisible'">We Are </span>
            <span
              :class="[
                'cursor-pointer font-black group-has-hover:bg-black whitespace-nowrap',
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

      <div
        class="coffee-wrap"
        :class="[(hero_text_bigger || hero_text_better || hero_text_mafia) && 'hidden']"
      >
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
        <div class="relative w-full md:w-1/2">
          <img class="w-full" :src="raids[raid].backgroundImage" alt="" />
          <ul
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl font-bold text-center flex flex-col gap-2 md:text-nowrap"
          >
            <li
              v-for="item in Object.keys(raids)"
              class="cursor-pointer"
              :class="raid === item ? 'text-white' : 'raids-title'"
              :key="item"
              @click="raid = item"
            >
              {{ raids[item].title }}
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/2">
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
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4">
          <div
            class="relative rounded-tl-[50px] bg-[#c32126] h-[500px] text-white mb-24 md:mb-0"
          >
            <div class="px-6 py-10">
              <p class="text-lg md:text-2xl font-black leading-5">
                Looking to become the next big name everyone's talking about?
              </p>
              <p class="text-xl mt-2 pb-[20%]">Request a perposal.</p>

              <div class="w-full">
                <img class="w-full" src="/images/infoxbox-ico1.png" alt="" />
              </div>
            </div>
          </div>

          <div
            class="relative rounded-tl-[50px] bg-[#0573B6] h-[500px] text-white mb-24 md:mb-0"
          >
            <div class="px-6 py-10">
              <p class="text-lg md:text-2xl font-black leading-5">
                Excited about the wonderful world of digital storytelling?
              </p>
              <p class="text-xl mt-2 pb-[20%]">Sign up for our newsletter.</p>

              <div class="w-full">
                <img class="w-full" src="/images/infoxbox-ico2.png" alt="" />
              </div>
            </div>
          </div>

          <div
            class="relative rounded-tl-[50px] bg-[#5F2A7C] h-[500px] text-white mb-24 md:mb-0"
          >
            <div class="px-6 py-10">
              <p class="text-lg md:text-2xl font-black leading-5">
                Fear of missing out on the chance to do your life’s greatest work?
              </p>
              <p class="text-xl mt-2 pb-[20%]">Join our team of Mafias.</p>

              <div class="w-full">
                <img class="w-full" src="/images/infoxbox-ico3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/images/single-paperplane.png"
        class="absolute w-[66vw] right-0 bottom-[-190px] -z-10"
        alt=""
      />
    </div>

    <div class="container mx-auto relative min-h-[623px]">
      <div class="awards_creatives">
        <img
          src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/home/award-bg-new.svg"
          class="d-none d-lg-block w-[100vw] hidden md:block"
          alt=""
        />
        <img
          src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/home/award-bg-mob-new.svg"
          class="d-lg-none md:hidden"
          alt=""
        />
      </div>

      <div class="monkey">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 243.2 179.68"
          id="monkey"
          class="filltiewhite filltieprime"
        >
          <defs></defs>
          <title>Award Monkey</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="t">
              <path
                class="tiecls"
                d="M96,100.73c-1-.28-8-.28-8-.28l-2,20,19,13s2-9,0-15.5c-1.07-3.48-1-10.5-1-10.5l.08-7-8,.28"
              ></path>
              <path
                class="tiecls"
                d="M84.92,151.45s1,3,0,5-3,14-2,14,11,6,11,6,14-17,13-18-2-7-2-7l-6-3-4-1-6,2Z"
              ></path>
            </g>
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                class="monkeycls-2"
                d="M96,27.76c-.46-.13-1.2.77-1.38-.38l0,.06,1.44.33Z"
              ></path>
              <path
                class="monkeycls-2"
                d="M96,27.77l-.12.51s-.1-.07-.09-.09.13-.29.2-.43Z"
              ></path>
              <path
                class="monkeycls-2"
                d="M99.93,84.69a22.61,22.61,0,0,0,14.42-5c1.54-1.19,4-2.42,1.83-5.21-.62-.82.36-1.09,1-1a2.5,2.5,0,0,1,2.3,1.8,2.07,2.07,0,0,1-1.18,2.5c-2.3,1.5-3.94,3.74-5.67,5.85a42.24,42.24,0,0,1-2.91,3.46c-5.73,5.69-12.36,6.39-19.33,2.32-5.46-3.2-9.2-8-12.81-13a6.87,6.87,0,0,0-1.21-1.54c-1.85-1.4-1.8-2.86.24-4.06.57-.34,1.22-.75,1.81-.17s.06,1.05-.33,1.44c-.93.92-.14,1.48.39,2.11C84.11,80.93,91.16,84.57,99.93,84.69Zm-12.72-.25c7.24,6,17.34,6,22.2.18C102.05,87.69,95,86.47,87.21,84.44Z"
              ></path>
              <path
                class="monkeycls-2"
                d="M102,68.87c-1.73.21-2.14-.51-2.09-1.45.08-1.43.73-2.6,2.28-2.76A1.53,1.53,0,0,1,104,66.38,2.66,2.66,0,0,1,102,68.87Z"
              ></path>
              <path
                class="monkeycls-2"
                d="M143.48,53.24c3.06.19,4.25,2.35,4.72,4.68a15.8,15.8,0,0,1-1.13,8.85,3.32,3.32,0,0,1-1.72,1.8,1.69,1.69,0,0,1-2.27-.46,1.41,1.41,0,0,1,.28-2,8.65,8.65,0,0,0,1.78-2.52C146.88,59.79,147,56.3,143.48,53.24Z"
              ></path>
              <path class="monkeycls-2" d="M94.59,27.38a.34.34,0,0,0-.06.06h0Z"></path>
              <path
                class="monkeycls-2"
                d="M240.59,61.25c-.58-.65-.4-1.11-.29-1.75.64-4-.22-7.35-4.07-9.38-.84-.44-.89-1-.79-1.86,1.21-11-6.45-17.29-17-14.13-2.08.62-4.18,1.18-6.3,1.63-3.42.74-4.83-.27-5.35-3.75-.8-5.31-.77-10.67-2-16-1.64-7.11-9-10.33-15.5-7.62-3.84,1.59-6.56,6.54-5.42,10.13.73,2.32,1.71,4.56,2.66,6.8,2.45,5.72,4.29,11.5,2.8,17.85C187.62,50.35,186.08,57.56,187,65c.09.71,0,1.3-.85,1.51-1.11.28-1.61,1.26-2.25,2.06a38.35,38.35,0,0,1-8.72,8c-7.77,5.23-16.14,5.78-24.9,3.13-2-.62-2.83-1.37-.75-3.29,6.63-6.1,8-14.11,6.72-22.44-.91-5.79-4.76-9.93-12.29-10.11-1.1,0-2.13.29-2.25-1.56-.77-12.42-7.44-21-17.83-27.22a70.41,70.41,0,0,0-9.91-4.47c.29-1.08,1.12-1.24,1.67-1.71.86-.74,2.64-.7,2.36-2.39-.25-1.53-1.74-1.9-2.94-2.36-4.25-1.6-7.94-.52-11.09,2.66-2.5-4.41-10-7.75-14.78-6.67-.94.22-1.92.5-2,1.69,0,1,.84,1,1.58,1.24,2.46.81,2.7,3.13,2.79,5.09.08,1.79-1.94,1.33-3.08,1.63-12.56,3.43-22.25,10.31-27,22.82-1,2.66-1.64,4.61-4.92,2.73A5,5,0,0,0,54,35.23c-5.56.26-10.38,4.56-12.22,11-2.12,7.47-1,14.57,2.68,21.35.47.87,1.41,1.57,1.25,2.84-8.7,1.6-16,5.8-22.53,12.41-1-5.81-1.42-11.09-.36-16.33,3.31-16.32,12.67-28.41,26.47-37.3,2.73-1.75,5.31-3.65,6.87-6.59,2.13-4.05,2.53-8.17-.27-12s-6.74-4.83-11.28-4.4c-3.39.32-5.74,2.69-8.64,3.93A51.1,51.1,0,0,0,20.69,20.26C7.08,33.18.64,49.39,0,67.85a55.79,55.79,0,0,0,13.51,38.7,3.41,3.41,0,0,1,.83,2A34.83,34.83,0,0,0,20,123.83c7,10.9,17.2,17.58,29,22.16a3.2,3.2,0,0,0,2.5.06c1.26-.59,1.72,0,2.45,1a12.28,12.28,0,0,0,8.17,5.17,5.77,5.77,0,0,1,4.73,3c4.19,6.15,10.81,6.27,15.41.5a1.12,1.12,0,0,1,1.42-.37,66.21,66.21,0,0,1-2.48,14.4c-.36,1.26-.48,2.4.87,2.83A31.46,31.46,0,0,1,93,179a2,2,0,0,0,2.34.48,1.58,1.58,0,0,0,.62-2.21c-.48-1.15.19-1.86,1-2.31a7.66,7.66,0,0,0,2.9-3.38c1.11-2,2-4.18,3.74-5.65,3.72-3.2,4.89-6.87,3-11.5a2.1,2.1,0,0,1,1-2.86c5.9-3.56,6.23-4.59,3.08-10.82A23.45,23.45,0,0,1,108,130a56.36,56.36,0,0,0-2.82-18.42c-1.13-3.23,1.1-6.13.09-9.2-.19-.56.64-.55,1-.68a35.07,35.07,0,0,0,11.4-6.73c.43-.36,1.13-1.34,1.54-.4,1.25,2.87,4.77,4,5.47,7.1.49,2.19,1.35,1.91,2.93,1.08,3.26-1.69,3.74-5,5.11-8a29.38,29.38,0,0,0,10.89,4.74c8.84,2.17,17.78,2,26.77,1.34a103.8,103.8,0,0,0,29.81-6.39c1.14-.44,2.88-1,2.26-2.36-1.2-2.66.7-2.77,2.17-3.22a24.55,24.55,0,0,1,6.3-1.53c2.71,0,5.46-1.67,7.88-.9,6.5,2.06,12.07.14,17.44-3.08,2.79-1.67,4.82-4.29,4.43-7.69a6.68,6.68,0,0,1,.93-4.4C244,67,243.74,64.82,240.59,61.25Zm-3.48-7.94c2.37,2.37,2.34,6.55-.34,9.82A19.47,19.47,0,0,1,223,70.61c-6.44,0-10-2.76-9.86-6.87,0-.81-.26-1.64,1.29-1.32,8.37,1.72,14.31-2.2,18.66-8.82C234.69,51.16,235.68,51.88,237.11,53.31ZM144.67,45.2c6.49,1.08,10.42,5.73,10.48,12.37-.49,9.11-4.58,16-12.72,20.29-2.58,1.36-3.17,1-3.25-1.8-.1-3.46-.7-6.76-3-9.54-1.18-1.45-1.28-2.65,0-4.42a31.57,31.57,0,0,0,5.39-14.75C141.81,44.88,143,44.92,144.67,45.2ZM43.47,56c0-.47,0-.95,0-1.42a20,20,0,0,1,3.34-11.79c2.69-4,6.37-6,11.36-5.27,1.34.21,1.86.52,1.42,1.91a8,8,0,0,0-.31,2.23c0,1.09-.16,1.54-1.56,1.57-4.23.11-7,2.78-8.13,7.34s.48,9.18,3.91,11.24c.77.46,1.72,1.33,2.5.3,1-1.28-.39-1.74-1.15-2.36-2.33-1.91-3.72-4.25-3.21-7.38.54-3.33,1.86-6.09,5.27-7.46,1.58-.64,2.23-.38,2.38,1.39A23.61,23.61,0,0,0,62.63,57c.39.63.65,1.09-.16,1.59-2.63,1.61-3.16,4.31-3.6,7.05-.23,1.49-.44,3-.74,4.46-.67,3.27-1.59,3.85-4.62,2.4C46.63,69.25,44,63.29,43.47,56ZM14.13,103.28A47.64,47.64,0,0,1,4.36,83.21a62.77,62.77,0,0,1,27-67.84q3.92-2.53,8-4.88a14.25,14.25,0,0,1,9.28-1.8c6,.8,9.1,6.3,6.5,11.72a13.29,13.29,0,0,1-5.85,5.9c-16.34,9.07-31.64,28-29.72,49.18a18,18,0,0,0,2,7.31A1.66,1.66,0,0,1,21.36,85a32.94,32.94,0,0,0-7.23,18.25Zm39.5,36.23c1.17,2.87.74,3.35-2.28,3.07a6.23,6.23,0,0,1-1.65-.35c-11.59-4.43-21.54-11-27.94-22-8.44-14.47-4.86-30.33,8.79-40A70.93,70.93,0,0,1,45.93,72.5c.6-.24,1.32-.66,1.9-.22A17.89,17.89,0,0,0,55.35,76c.93.18.56,1,.29,1.63a6.64,6.64,0,0,0-.59,1.28c-.24,1.35-2.62,2-1.5,3.59s3,2,4.69,2.34a13.87,13.87,0,0,0,5.52-.23c.12.33.24.5.22.65-.42,2.51,0,5.86-1.53,7.29s-4.58-.64-7.06-.77a39.64,39.64,0,0,0-14.53,1.76,13.88,13.88,0,0,0-3.52,1.78c-4.58,3.16-4.48,8.3.18,11.39A20.4,20.4,0,0,1,41,109.12a34.83,34.83,0,0,0,22.29,10.57c-2.89,4-2.89,4,.56,6.42a23.41,23.41,0,0,1-4.65,2.22c-2.62.62-2.2,1.82-1,3.38.67.9,1.42,1.74,2.3,2.8-1.49,1.12-3.18.73-4.65,1C53.37,136,52.65,137.11,53.63,139.51Zm8.76-38.41c4.19.63,8.43.75,11.84-2.28,2.82-2.51,5.38-3,8.11-.06a.63.63,0,0,0,.24.14c3.27,1.25,4.45,3,4.23,7-.22,3.85-.53,7.72-.83,11.58-.12,1.56-.45,2.22-2.23,1.47-4.2-1.75-8.52-2.34-13-.77a2.34,2.34,0,0,1-1.67,0c-4.91-2.64-10.65-1.8-15.76-4.08-5.83-2.6-10-7-14.36-11.23-1.23-1.22-.91-2.79.37-4a10.47,10.47,0,0,1,3.33-2.11c6.08-2.53,12.35-1.9,18.89-1.25-.41.67-.63,1.08-.88,1.46C59.16,99.33,59.63,100.68,62.39,101.1Zm42.38,58.34c-4.91,4.2-7.86,9.82-10.9,15.25-2.94-1.65-5.7-3.28-8.55-4.74-1.17-.6-1.32-1.22-1.12-2.44.62-3.82,1-7.67,1.57-11.5.23-1.67,3.74-5.25,5.43-5.59a2.57,2.57,0,0,0,1.08-.3c2.93-2.56,5.41-1,7.89.81a1.57,1.57,0,0,0,.76.36c4.55.18,3.86,3.75,4.27,6.6A1.51,1.51,0,0,1,104.77,159.44Zm4.53-15.17c.55,1.36,1,2.71,0,4a5.26,5.26,0,0,1-4.72,2c-2.85-.34-4.76-2.64-7.27-3.7-.57-.24-.35-.79-.2-1.23,1-3,0-5.63-1.45-8.11a28.6,28.6,0,0,0-8.09-8.63c-1.19-.85-2.56-1.15-4.81-1.13,4.12,2.33,6.76,5.28,9.34,8.3a14.26,14.26,0,0,1,2.79,4.9,5.66,5.66,0,0,1-.85,5.63A3.46,3.46,0,0,1,91,147.78c-1.19-.18-.65-1.55-.89-2.36-1.82-6.09-4.47-11.32-11.94-12a5.21,5.21,0,0,0,2.35,2.19c4,2.17,5.47,6.1,6.92,10a4.75,4.75,0,0,1-.07,3.34c-.12.32-.31.81-.55.87-2.25.51-2.25.48-3.46,2.35-1-1.85-.86-4.15-2.7-5.47-.56-.39-1.15-.95-1.75-.57-.88.55.17,1.1.23,1.68a1.37,1.37,0,0,0,0,.28C81,152,80,155.62,77,156.78a6.92,6.92,0,0,1-8.77-4.64c-.64-2.66-1.65-3.47-4.34-3.3A8.08,8.08,0,0,1,57,145.52c-1.06-1.77.19-5,.6-7.49,0-.25,1.4-.28,2.14-.4,3.76-.65,4.46-2.37,2.16-5.38-.45-.6-1-1.16-1.63-2,1.64-.68,3-1.14,4.23-1.78s3.13-1.08,3.18-2.86-2-1.72-3.13-2.61c3.28-4.12,7.85-3.73,12.2-3.25,3.28.37,6.25,2.14,9.29,3.33a54.58,54.58,0,0,1,9.62,5.41,30.43,30.43,0,0,1,10.7,11C107.21,141.14,108.58,142.51,109.3,144.27ZM105.18,133c-4.82-5.3-10.4-8.48-15.92-11.74-1-.6-1.47-1.09-1.23-2.42a60.29,60.29,0,0,0,.81-7.59c.13-2.41,1.08-2.52,2.76-1.25l2,1.54c3.15,2.32,5.65,2.3,9.4-.16A65.88,65.88,0,0,1,105.18,133ZM88.33,104c.1-1.73.47-2.31,2.35-1.69a23.88,23.88,0,0,0,9.56.63c1.75-.15,2.08.81,2.21,2.09-.44,2.14-.88,4.35-2.93,5.33-1.78.84-3.44-.21-4.88-1.34A14.09,14.09,0,0,0,90,106.44C88.58,106,88.25,105.36,88.33,104Zm14.13-3.79a16.66,16.66,0,0,1-1.94.39c-1.13.1-2.26.12-3.3.17-8.56-.07-15.4-3.72-21.08-9.7-3-3.13-5.75-6.37-7-10.75-2-7,4.38-15.17,11.68-14.82,3.6.17,7.19,1.61,10.83.22.5-.19.87-.13,1,.5a2.18,2.18,0,0,0,.66,1.19c1,.67,2.16,2.3,3.33,1s-.2-2.72-1.33-3.19c-1.75-.73-1.17-1.43-.49-2.45a8,8,0,0,0,1.09-2c0-.1,0-.2,0-.29V55.32a2.89,2.89,0,0,1,.14-.83,7.32,7.32,0,0,1-.87-3,14.1,14.1,0,0,0-1.7-5.35c-2.9-4.72-7.9-6.07-12.76-3.38C73.3,46.9,70,56.65,73.93,63.21c1.15,1.92-.86,2-1.55,2.55-1.27,1-1.36-.55-1.46-1.16C69,53.09,70,42.11,77.7,32.67c3.92-4.84,9.06-7,15.38-5.28.43.12,1,.61,1.45.05-5-2.93-9.82-2-14.33,1C73.32,33,70.58,40.13,69,47.79a44.09,44.09,0,0,0,0,16.63,10.93,10.93,0,0,1-1,7.3,11.63,11.63,0,0,0,.49,11.86,47.91,47.91,0,0,0,7,9.62c1,1,.77,1.52-.32,2.08-3.13,1.61-6.31,2.93-10,2.55-1.4-.15-1.53-.51-1-1.71,1.49-3.67,1.54-7.56,1.61-11.43,0-1.79-.61-2.9-2.73-2.4a8,8,0,0,1-2.54.1c-3.08-.32-3.36-.87-2.14-3.61C60,75,60.53,71,61.1,67c.46-3.21.69-6.5,4.46-7.85.43-.15.66-.28.29-1.12a38.59,38.59,0,0,1-3.64-14.1c-.34-8.26,2.68-15.1,8.45-20.88A39.12,39.12,0,0,1,91.26,12.4c2.88-.58,3.8-1.81,3.14-4.71-.33-1.47-.92-2.88-1.51-4.68a11.93,11.93,0,0,1,8.49,3.65c1.79,1.93,3.27,2.75,5.74.89a7.6,7.6,0,0,1,7.71-.84c-.81,1.35-2.43,1.67-3.41,2.75q-2.52,2.81,1,4c13.35,4.38,22.61,12.91,25.86,26.83a23.53,23.53,0,0,1-4,20.21c-.48.63-.87,2.13-2,1-.9-.91-3.26.17-2.81-2.78,1-6.68.94-13.4-2-19.73a16.8,16.8,0,0,0-10.1-9.34,9.79,9.79,0,0,0-5.59-.23c-4.65,1.17-9.25,2.65-14.67.52,1.59,2.19,3.35,2.45,5.07,2.73,2.77.44,5.44-.4,8.14-.79,7.58-1.08,10.93.78,14,6,5.7,9.78,5,19.85,1,30-.22.54-.25,1.18-1,.63-.5-.35-1.3-.58-.85-1.47s.86-1.48,1.18-2.26c2.93-7-.8-17.33-7.55-20.92-6.25-3.32-13.27.57-14.5,8a5.23,5.23,0,0,1-.55,1.66,28.74,28.74,0,0,1,.53,5.24,9.1,9.1,0,0,1,.64,2,14.38,14.38,0,0,0,2.79,5.19c1.78,2.14,3.72,3.26,6.58,2.22a9.82,9.82,0,0,1,5-.18c8.42,1.49,11.6,8.91,6.63,16.51C119,92.36,112,98.12,102.46,100.21ZM75.06,53.45a10,10,0,0,1,3-6,9,9,0,0,1,8.89-4,6.65,6.65,0,0,1,5.41,5.52,1,1,0,0,1,.2.35c.5,1.83,3,15.21-2.5,13.17-8-3-12,1-13,0S74.06,60.45,75.06,53.45Zm29.79-1.34a4.38,4.38,0,0,1,.25-.79c.84-2.9,2.29-5.37,5.47-6.27s5.92.56,8.16,2.77a11.79,11.79,0,0,1,2.65,3.89,7.34,7.34,0,0,1,.59,1.07c2.92,6.33-.7,13.39-1.91,12.67-5-3-9,0-10,0s-4-3-5-8a16,16,0,0,1-.37-4.1A2.11,2.11,0,0,1,104.85,52.11Zm25.41,35.78c.5,4-.79,7.44-2.51,10.84-.55,1.08-1,2.08-2.25.3a44.13,44.13,0,0,0-4-4.35c-1.11-1.23-1.08-2.3.12-3.67,2.73-3.1,5.53-6.21,6.61-10.39a10.89,10.89,0,0,0-1.7-9.68c-.81-1.08-1.2-1.67,0-2.86.86-.83,1.17-2.34,1.49-3.61.6-2.38,1.79-2.13,3-.65,2.81,3.43,5.63,6.88,5.5,11.73-.09,3.2-.26,6.42.9,9.85-1.74-.07-3.11.22-4.14-.25C129.94,83.64,130,85.7,130.26,87.89Zm55.54,7.87a100.72,100.72,0,0,1-42.16.91,21.12,21.12,0,0,1-7.89-3,26.21,26.21,0,0,1-2.19-1.78,3.44,3.44,0,0,1-.83-3.68c.36-1.36,1.74-.33,2.65-.46a24.06,24.06,0,0,0,3.08-.11c1.62-.47,3.3-1.17,1.47-3.3-1-1.19-.48-1.81.8-2.18a4.56,4.56,0,0,0,1-.51c2.49-1.47,4.65-2.3,7.54-.08,2.51,1.92,5.93,2.18,9.24,1.83,2.81-.3,5.74,0,8.47-.54a30.9,30.9,0,0,0,17.38-10.5c.53-.63.91-1.45,2-1.72.39,2.65,1.73,4.07,4.58,3.36,1.37-.34,1.36.45,1.16,1.42a24.4,24.4,0,0,0-.51,2.79C191.42,80,192,81.41,194,82s4.05,1.1,5.44,3c-1,1.29-3.5,1.13-3.76,2.9-.31,2.16,2.23,2.19,3.51,3.53C194.93,93.75,190.35,94.69,185.8,95.76Zm21.85-10.45a17.42,17.42,0,0,0-6.83,3.07c-.61.5-1.31.73-1.75.18-.74-.93.43-1,.87-1.29,3.26-2,3.23-2.16.39-4.68a14.43,14.43,0,0,0-6.4-2.84c-1.09-.28-1.41-.45-.93-1.6a17,17,0,0,0,.85-3.56c.23-1.35,1.3-3.25-1.59-3-.73.07-.62-.46-.67-.92-.51-3.93-1.46-7.78-1.65-11.77a27,27,0,0,1,1.36-10c3.32-10,.93-19.22-4.35-27.85-2.58-4.2-2.07-7.75,2.27-10.17,5.28-2.95,12.1-.26,13.48,5.25,1.23,4.94,1.07,9.94,1.89,14.86.18,1,.27,2.06.52,3.06,1.08,4.2,2.08,5,6.23,4.39,3.44-.52,6.84-1.36,10.23-2.17,7.77-1.84,13,2.7,12.08,10.59-.87,7.73-8.27,14-15.92,13.58a9.51,9.51,0,0,1-8.91-9.9c.11-2.53,1.92-3.11,3.91-3.13,1.82,0,3.09-.34,4.18-2.11a7.48,7.48,0,0,1,5-3c.77-.17,1.66-.19,1.39-1.27s-1.17-1.18-2.07-1a7.7,7.7,0,0,0-5,3.49,1.93,1.93,0,0,1-2.24,1c-4.26-.32-6.4,1.38-7,5.57-.53,3.86.23,7.41,3.36,10a2.39,2.39,0,0,1,.84,3.15,4.67,4.67,0,0,0,.26,4.39,14.16,14.16,0,0,1,2.86,8.39c0,1.21.51,2.35.07,3.69s.35,2.9,1.35,4.51A67.22,67.22,0,0,0,207.65,85.31Zm29.73-5.12c-4.89,5.1-10.93,5.83-17.41,4.28-2.46-.58-4.08-2.27-4.38-5.3,9,4.72,16.35.9,23.51-4.24C239.75,77.25,238.71,78.8,237.38,80.19ZM240,70.12c-3.32,6.08-12.37,10.3-19.14,8.91-3.55-.72-5.37-2.94-5.31-6.69a19.87,19.87,0,0,0,22.14-7.56c.41-.57.61-1.65,1.44-1.49s1.14,1.17,1.45,2A5.53,5.53,0,0,1,240,70.12Z"
              ></path>
              <path
                class="monkeycls-2"
                d="M84.56,45.45c-2.49,0-4.5,3.13-4.5,7s2,7,4.5,7,4.5-3.14,4.5-7S87,45.45,84.56,45.45Zm-1,6.33c-.83,0-1.5-1.05-1.5-2.33s.67-2.34,1.5-2.34,1.5,1,1.5,2.34S84.38,51.78,83.56,51.78Z"
              ></path>
              <path
                class="monkeycls-2"
                d="M112.56,46.45c-2.49,0-4.5,3.13-4.5,7s2,7,4.5,7,4.5-3.14,4.5-7S115,46.45,112.56,46.45Zm-1,6.33c-.83,0-1.5-1.05-1.5-2.33s.67-2.34,1.5-2.34,1.5,1,1.5,2.34S112.38,52.78,111.56,52.78Z"
              ></path>
            </g>
          </g>
        </svg>
        <img
          src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/home/award-monkey-glass.svg"
          class="monkey-glass active"
          alt=""
        />
      </div>

      <div class="man z-20">
        <img
          src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/home/award-man.svg"
          alt=""
        />
        <img
          src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/home/award-man-glass.svg"
          class="man-glass"
          alt=""
        />
      </div>

      <swiper :navigation="true" :modules="modules" class="mySwiper">
        <!------ Slide 1 --------->
        <swiper-slide class="w-full">
          <div class="flex justify-center">
            <img src="/images/CarouselImage.png" class="!w-10/12" />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="flex justify-center">
            <img src="/images/CarouselImage2.png" class="!w-10/12" />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="flex justify-center">
            <img src="/images/CarouselImage3.png" class="!w-10/12" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
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

@media (max-width: 786px) {
  .gun-wrap {
    top: 10%;
    left: 50%;
    width: 10%;
    height: auto;
    transform: translate(-50%, 10px);
  }
}

.gun:hover {
  position: relative;
  z-index: 1;
  cursor: pointer;
  animation-name: AnimOtd;
  animation-duration: 2s;
  animation-iteration-count: 3;
  transform-origin: left bottom;
}

.gun:hover + .bullet-trials {
  animation-name: AnimS;
  animation-duration: 2s;
  animation-iteration-count: 3;
}

.gun:hover + .bullet-trials + .bullet-exit {
  animation-name: AnimS;
  animation-duration: 2s;
  animation-delay: 0.2s;
  animation-iteration-count: 3;
}

.bullet-trials {
  position: absolute;
  z-index: 0;
  opacity: 0;
  top: -38%;
  right: -55%;
  width: 90%;
}

.bullet-exit {
  position: absolute;
  z-index: 0;
  opacity: 0;
  top: -47%;
  right: -68%;
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

@media (max-width: 786px) {
  .coffee-wrap {
    position: absolute;
    bottom: 9%;
    right: 45%;
    width: 6%;
    height: auto;
    transform: translate(-50%, 10px);
  }
}

.raids-title {
  text-stroke: 1px white;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px white;
  -moz-text-fill-color: transparent;
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

@keyframes AnimOtd {
  10% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-25deg);
  }

  45% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

@keyframes AnimS {
  0% {
    transform: translate(-180px, 70px);
    opacity: 0;
  }

  50% {
    transform: translate(0px, 0px);
    opacity: 1;
  }
}

.awards_creatives {
  position: absolute;
  width: 95%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 10;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.awards-item_content {
  padding: 14vw 0 0 50px;
  text-align: left;
}

.monkey {
  position: absolute;
  width: 17vw;
  max-width: 268px;
  top: 1.65vw;
  left: 1.2vw;
  z-index: 2;
}

.monkey-glass {
  position: absolute;
  width: 24%;
  top: 27%;
  left: 28.5%;
  transform: translateY(0);
  transform-origin: top;
  transition: 0.5s;
  transition-delay: 0.2s;
}

.man {
  position: absolute;
  width: 15.1vw;
  bottom: 2.2vw;
  right: 3.5vw;
  max-width: 238px;
}

.man-glass {
  position: absolute;
  width: 40%;
  bottom: 62%;
  right: 15%;
  transform-origin: top;
  transform: translateY(0);
  transition: 0.5s;
  transition-delay: 0.2s;
}
</style>
