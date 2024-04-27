// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',

  css: [
    '~/assets/css/global/normalize.css',
    '~/assets/css/global/fonts.scss'
  ],

  modules: ["@nuxt/image", "@pinia/nuxt", "nuxt-icon", "nuxt-viewport"],

  image: {
    screens: {
      xs: 599,
      sm: 959,
      md: 1279,
      lg: 1919,
      xl: 2559,
      xxl: 2560
    },
    quality: 90,
    format: ['avif', 'webp'],
    densities: [1, 2, 3]
  },

  viewport: {
    cookie: {
      name: 'viewport'
    },

    breakpoints: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      xxl: 2560
    },

    defaultBreakpoints: {
      desktop: 'lg',
      mobile: 'xs',
      tablet: 'sm',
    }
  },


})