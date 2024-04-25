// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',

  css: [
    '~/assets/css/global/normalize.css',
    '~/assets/css/global/fonts.scss'
  ],

  modules: ["@nuxt/image"]
})