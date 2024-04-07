<!-- /* filename index.vue  */ -->

<script setup lang="ts">

// import the OpenLayers stylesheet
import 'ol/ol.css'

import { useHead } from '#imports'
useHead({
  title: 'ol-nuxt-app',
  link: [],
  meta: [{
    name: "viewport",
    charset: "UTF-8",
    content: "width=device-width, initial-scale=1.0"
  }],
  script: [],
  style: []
  })

</script>

<template>
  <link rel="icon" type="image/x-icon" href="images/favicon.ico">
  <div class="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
    <main id="fullscreen" role="main" class="w-full flex-grow pt-1 px-3">
      <MapMML />
      <SidePanel>
        <inputField />
        <inputMenu />
      </SidePanel>
    </main>
  </div>

</template>

<style>

</style>
