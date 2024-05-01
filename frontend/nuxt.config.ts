// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',

  css: [
    '~/assets/css/global/fonts.scss',
    '~/assets/css/global/normalize.css',
  ],

  modules: ["@nuxt/image", "@pinia/nuxt", "nuxt-icon", "nuxt-viewport", /*"nuxt-delay-hydration",*/ "@unocss/nuxt"],

  image: {
    screens: {
      xs: 599,
      sm: 959,
      md: 1279,
      lg: 1919,
      xl: 2559,
      xxl: 2560
    },
    quality: 80,
    format: ['webp'],
    provider: "imagekit",
    densities: [1, 2, 3],

    imagekit: {
      baseURL: 'https://ik.imagekit.io/vdk8w7x8i'
    }
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

  delayHydration: {
    mode: 'mount'
  }
})