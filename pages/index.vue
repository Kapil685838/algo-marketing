<script setup>
const hero_image = ref("");
const hero_text_mafia = ref(false);
const hero_text_better = ref(false);
const hero_text_bigger = ref(false);
</script>

<template>
  <div>
    <div class="bg-primary group relative">
      <img
        v-if="hero_image"
        class="absolute top-0 left-0 z-0 h-full w-full"
        :src="hero_image"
        alt=""
      />
      <div
        class="relative z-10 container mx-auto h-[83vh] flex flex-col items-center justify-center"
      >
        <div class="text-5xl text-center font-medium tracking-normal">
          <p :class="[
            'text-6xl',
            (hero_text_better || hero_text_bigger) && 'invisible'
            ]">
            <span :class="hero_text_mafia && 'invisible'">We Are </span>
            <span
              :class="[
                'cursor-pointer font-black group-has-hover:bg-black',
                hero_text_mafia && 'text-white bg-primary px-2',
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
                hero_text_better && 'text-white bg-primary px-2'
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
                hero_text_bigger && 'text-white bg-primary px-2'
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
    </div>

    <div class="">
      <div class="flex min-h-[80vh]">
        <div
          class="w-1/2 bg-[url('/images/manipal.png')] bg-cover bg-no-repeat bg-center before:content-[''] before:w-full before:h-full before:bg-[#00000055] before:block"
        ></div>
        <div class="w-1/2">
          <div class="p-5 h-full flex justify-center items-center text-center">
            <div>
              <p>MANIPAL HOSPITALS</p>
              <img src="/images/manipal2.jpg" alt="" />
              <p>An ode to those who protect hope.</p>
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
  </div>
</template>

<style>
[rel="active-featuredproject-1"] {
  background: url("https://socialpanga.com/wp-content/uploads/2021/07/manipal.png")
    no-repeat center/ cover;
}

[rel="active-featuredproject-2"] {
  background: url("https://socialpanga.com/wp-content/uploads/2020/12/SP-HomePage-Design-Images-11.jpg")
    no-repeat center/ cover;
}

[rel="active-featuredproject-3"] {
  background: url("https://socialpanga.com/wp-content/uploads/2021/04/bengaluru.png")
    no-repeat center/ cover;
}

[rel="active-featuredproject-4"] {
  background: url("https://socialpanga.com/wp-content/uploads/2021/07/MamaEarth_LeftSide-1.jpg")
    no-repeat center/ cover;
}

[rel="active-featuredproject-5"] {
  background: url("https://socialpanga.com/wp-content/uploads/2021/08/tint.png") no-repeat
    center/ cover;
}

[rel="active-featuredproject-6"] {
  background: url("https://socialpanga.com/wp-content/uploads/2021/04/SP-HomePage-Design-Images-09.jpg")
    no-repeat center/ cover;
}

[rel="active-featuredproject-7"] {
  background: url("https://socialpanga.com/wp-content/uploads/2021/02/cult-featured-large.jpg")
    no-repeat center/ cover;
}
</style>
