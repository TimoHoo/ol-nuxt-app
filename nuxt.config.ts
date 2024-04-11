// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
//    app: {
//      baseURL: '/ol-nuxt-app/',
//      buildAssetsDir: "/_nuxt/"
//    },

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


devtools: { 
    enabled: true
  }
  
})
