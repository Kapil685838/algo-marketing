<template>
  <div>
    <div class="bg-primary group relative flex flex-col min-h-[100vh] md:flex-row">
      <div
        class="relative container mx-auto flex flex-col -top-20 max-w-screen-md items-center justify-center text-xl font-medium z-10"
      >
        <h1 class="text-6xl font-bold">Mafia</h1>
        <p>/ˈmæf.i.ə/</p>
        <p class="text-center text-lg mt-6 font-semibold">The quintessential villain who brings out the best in the hero and is the sole reason for his existence – the Joker to Batman, the Gabbar Singh to Thakur, the Darth Vader to Luke Skywalker. These are the guys and girls whose punchlines and schemes are remembered forever.</p>
      </div>
       <img class="absolute left-0 bottom-0 " src="/images/about-banner-spacing-1.png" alt="">
    </div>

    <div class="py-24 px-52 flex flex-col text-center gap-4 text-lg font-semibold">
      <h1 class="text-6xl font-bold">Plan, Create and Connect.</h1>
      <p class="px-4">
        We are an award-winning creative marketing and advertising agency. We ideate,
        curate and execute marketing strategies to engage with our clients’ intended
        audience, all while integrating their brand with the digital world.
      </p>
      <p>
        We take thoughts for ideas and create remarkable moments. We are always well
        prepared – with a bunch of crazy people, endless cups of chai and beautiful
        hideouts in Bengaluru, Delhi and Mumbai.
      </p>
      <div class="flex justify-end">
        <NuxtLink class="h-20 w-20 -mt-2 p-6 bg-primary rounded-full" to="/services">
          <img class="w-full h-full" src="/images/arrow-right.svg" alt="" />
        </NuxtLink>
      </div>
    </div>

    <div class="py-24 px-64 flex flex-col text-center gap-4 text-lg font-semibold">
      <h1 class="text-6xl font-bold">Customer Delight</h1>
      <p class="font-extrabold text-2xl">
        We make the customers orgasm when we lay out our ideas and creatives in front of
        them.
      </p>
      <p>
        At Social Panga, we are driven by a strong innate desire to delight the customer
        to an extent that they want to give us virtual hugs (or send virtual kisses to the
        slightly better looking ones among us).
      </p>
      <p>
        BTW, we live for occasional fatty foods, intoxicating liquids, and jalebis (yes,
        we’re a bunch of nice kids!)
      </p>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-20 px-20 font-semibold"
    >
      <div class="flex flex-col gap-4 items-center p-6 bg-[#D7D7D7]">
        <img src="/images/customer-delight-icon-1.png" alt="" />
        <p>We help you share your ideas with the world.</p>
      </div>
      <div class="flex flex-col gap-4 items-center p-6 bg-[#D7D7D7]">
        <img src="/images/customer-delight-icon-2.png" alt="" />
        <p>We give you the resources best suited for your brand.</p>
      </div>
      <div class="flex flex-col gap-4 items-center p-6 bg-[#D7D7D7]">
        <img src="/images/customer-delight-icon-3.png" alt="" />
        <p>We anticipate your needs better than you can.</p>
      </div>
      <div class="flex flex-col gap-4 items-center p-6 bg-[#D7D7D7]">
        <img src="/images/customer-delight-icon-4.png" alt="" />
        <p>We make a mean cup of tea and our coffee is “mwah”</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const about = useAboutStore();
</script>
