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
              <a
                v-else-if="key.includes('source')"
                :href="item.description[key]"
                target="_blank"
                class="text-red-500"
                >Source</a
              >
            </template>
          </div>
        </div>

        <!-- On-Page SEO Services -->
        <div v-if="data.mainContent.onPageServices" class="py-6">
          <p class="text-3xl font-semibold text-center mb-6">
            {{ data.mainContent.onPageServices.title }}
          </p>
          <p
            v-for="item in data.mainContent.onPageServices.description"
            :key="item"
            v-html="item"
            class="leading-loose *:has-[a]:text-red-500"
          ></p>
          <p class="leading-loose pt-4 pb-8 text-center">
            {{ data.mainContent.onPageServices.services.title }}
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="item in data.mainContent.onPageServices.services.list"
              :key="item"
              class="border rounded-lg p-6 hover:shadow-lg"
            >
              <p class="text-3xl font-semibold pb-6">{{ item.heading }}</p>
              <p
                v-for="(description, index) of item.description"
                :key="description"
                class="leading-loose *:has-[a]:text-red-500"
                :class="index !== item.description.length - 1 && 'mb-3'"
                v-html="description"
              ></p>
            </div>
          </div>
        </div>

        <!-- Off-Page SEO Services -->
        <div v-if="data.mainContent.offPageServices" class="py-6">
          <p class="text-3xl font-semibold my-6">
            {{ data.mainContent.offPageServices.title }}
          </p>
          <p
            v-for="item in data.mainContent.offPageServices.description"
            :key="item"
            v-html="item"
            class="leading-loose *:has-[a]:text-red-500"
          ></p>
          <p class="leading-loose pt-4 pb-8">
            {{ data.mainContent.offPageServices.services.title }}
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4">
            <div
              v-for="item in data.mainContent.offPageServices.services.list"
              :key="item"
              class="shrink max-h-min"
            >
              <div v-for="li in item" :key="li">
                <div class="flex items-start gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-5 mt-1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M10.5 15.25A.74.74 0 0 1 10 15l-3-3a.75.75 0 0 1 1-1l2.47 2.47L19 5a.75.75 0 0 1 1 1l-9 9a.74.74 0 0 1-.5.25"
                    />
                    <path
                      fill="currentColor"
                      d="M12 21a9 9 0 0 1-7.87-4.66a8.67 8.67 0 0 1-1.07-3.41a9 9 0 0 1 4.6-8.81a8.67 8.67 0 0 1 3.41-1.07a8.86 8.86 0 0 1 3.55.34a.75.75 0 1 1-.43 1.43a7.62 7.62 0 0 0-3-.28a7.43 7.43 0 0 0-2.84.89a7.5 7.5 0 0 0-2.2 1.84a7.42 7.42 0 0 0-1.64 5.51a7.43 7.43 0 0 0 .89 2.84a7.5 7.5 0 0 0 1.84 2.2a7.42 7.42 0 0 0 5.51 1.64a7.43 7.43 0 0 0 2.84-.89a7.5 7.5 0 0 0 2.2-1.84a7.42 7.42 0 0 0 1.64-5.51a.75.75 0 1 1 1.57-.15a9 9 0 0 1-4.61 8.81A8.67 8.67 0 0 1 12.93 21z"
                    />
                  </svg>
                  <p class="leading-loose">{{ li }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ's -->
        <div v-if="data.mainContent.faqs" class="py-6">
          <p class="text-3xl font-semibold text-center mb-6">
            {{ data.mainContent.faqs.title }}
          </p>
          <div
            id="faqs-accordion"
            data-accordion="collapse"
            data-active-classes="text-black"
          >
            <template
              v-for="(item, index) in data.mainContent.faqs.questions"
              :key="item"
            >
              <h2 :id="'faqs-accordion-' + index">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-gray-200 gap-3"
                  :class="
                    index !== data.mainContent.faqs.questions.length - 1 && 'border-b-0'
                  "
                  :data-accordion-target="'#faqs-accordion-body-' + index"
                  aria-expanded="true"
                  :aria-controls="'faqs-accordion-body-' + index"
                >
                  <span>{{ item.question }}</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                :id="'faqs-accordion-body-' + index"
                class="hidden"
                :aria-labelledby="'faqs-accordion-' + index"
              >
                <div
                  class="p-5 border border-gray-200"
                  :class="
                    index === data.mainContent.faqs.questions.length - 1
                      ? 'border-t-0'
                      : 'border-b-0'
                  "
                >
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components built on
                    top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
                    more.
                  </p>
                  <p class="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to
                    <a
                      href="/docs/getting-started/introduction/"
                      class="text-blue-600 dark:text-blue-500 hover:underline"
                      >get started</a
                    >
                    and start developing websites even faster with components on top of
                    Tailwind CSS.
                  </p>
                </div>
              </div>
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
