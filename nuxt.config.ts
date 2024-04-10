// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vueuse/nuxt'
    ],

    app: {
    baseURL: '/ol-nuxt-app/',
    buildAssetsDir: 'assets'
  },

  ui: {
    global: true,
    icons: ['heroicons', 'mdi']
  },
  typescript: {
    shim: false
  },

  ssr: false,
  spaLoadingTemplate: 'spa-loading-template.html',

//  nitro: {
//    preset: 'github-pages'
//  },
//  vite: {
//    base: "https://timohoo.github.io/ol-nuxt-app/",
//  },
  devtools: { 
    enabled: true
  }
  
})
