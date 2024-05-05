// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  plugins: [
    { src: '~/plugins/vue-confetti.js', mode: 'client' },
  ],
  app: {
    head: {
      htmlAttrs: {
        class: 'scroll-smooth'
      }
    }
  }
});
