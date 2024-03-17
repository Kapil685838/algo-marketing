<template>
  <div v-if="data">
    <div v-if="data.hero" class="py-8 bg-primary">
      <div
        class="flex flex-col md:flex-row justify-between gap-6 lg:gap-36 max-w-screen-lg mx-auto px-4"
      >
        <div>
          <div
            v-if="data.hero.tag"
            class="flex items-center gap-5 border rounded-full max-w-[24rem] bg-[#FFF4D7] py-2 px-4 mb-4"
          >
            <div class="bg-[#33F0AE] px-6 py-1 rounded-full text-white text-sm">Best</div>
            <p class="text-sm leading-none font-medium">{{ data.hero.tag }}</p>
          </div>
          <p v-if="data.hero.packageName" class="text-xl font-semibold mb-2">
            {{ data.hero.packageName }}
          </p>
          <h1 v-if="data.hero.title" class="text-3xl font-bold leading-normal mb-2">
            {{ data.hero.title }}
          </h1>
          <div v-if="data.hero.description" class="leading-relaxed">
            <p
              v-for="item in data.hero.description"
              class="mb-2"
              :key="item"
              v-html="item"
            ></p>
          </div>
          <div class="mt-6">
            <button
              class="py-2 min-w-[10rem] px-6 bg-[#FF0000] font-medium text-white rounded-md hover:bg-black hover:text-white"
            >
              Request Proposal
            </button>
            <button
              class="py-2 min-w-[10rem] px-6 bg-[#FFffff] font-medium rounded-md hover:bg-black hover:text-white"
            >
              SEO Packages
            </button>
          </div>
        </div>
        <div class="w-full mx-auto sm:w-1/2">
          <img class="md:max-w-xs" :src="`/images/${data.hero.img}`" alt="" />
        </div>
      </div>
    </div>
    <div v-if="data.mainContent" class="max-w-screen-lg mx-auto px-4 py-12">
      <div v-if="data.mainContent.packagesBenefits">
        <div>
          <h2
            v-if="data.mainContent.packagesBenefits.title"
            class="text-4xl font-bold text-center mb-6"
          >
            {{ data.mainContent.packagesBenefits.title }}
          </h2>
          <p
            v-if="data.mainContent.packagesBenefits.subtitle"
            class="text-2xl font-bold text-center mb-6"
          >
            {{ data.mainContent.packagesBenefits.subtitle }}
          </p>
          <div v-if="data.mainContent.packagesBenefits.description">
            <p
              v-for="(item, index) in data.mainContent.packagesBenefits.description"
              :key="`packagesBenefits-description-${index}`"
              class="text-center mb-4 leading-loose"
              v-html="item"
            ></p>
          </div>
        </div>
        <div v-if="data.mainContent.packagesBenefits.benefitsDetailing" class="py-8">
          <p class="text-2xl font-semibold leading-normal my-4">
            {{ data.mainContent.packagesBenefits.benefitsDetailing.title }}
          </p>
          <div
            v-for="item in data.mainContent.packagesBenefits.benefitsDetailing.list"
            :key="item"
            class="relative"
          >
            <p class="text-2xl font-semibold leading-normal my-4">{{ item.title }}</p>
            <template v-for="key in Object.keys(item.description)" :key="key">
              <p
                v-if="key.includes('para')"
                v-html="item.description[key]"
                class="leading-loose my-4"
              ></p>
              <img
                v-else-if="key.includes('image')"
                :src="item.description[key].url"
                :class="[
                  item.description[key].position === 'center' && 'w-full py-6',
                  item.description[key].position === 'left' &&
                    'float-left w-72 mr-8 mb-8',
                  item.description[key].position === 'right' &&
                    'float-right w-72 ml-8 mb-8',
                ]"
                alt=""
              />
              <a v-else-if="key.includes('source')" :href="item.description[key]" target="_blank" class="text-red-500"
                >Source</a
              >
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const { data } = await useFetch(`/api/packages/${route.params.package}`);
</script>
