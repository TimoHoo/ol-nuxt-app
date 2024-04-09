// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vueuse/nuxt'
    ],
  ui: {
    global: true,
    icons: ['heroicons', 'mdi']
  },
  typescript: {
    shim: false
  },
  ssr: false,
  spaLoadingTemplate: 'spa-loading-template.html',

  nitro: {
    preset: 'github-pages'
  },

  devtools: { 
    enabled: true
  }
  
})
