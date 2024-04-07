<!-- file: mapMML.vue -->

<script setup lang="ts">

import Map from 'ol/Map'
import View from 'ol/View'
import { Control, FullScreen, defaults as defaultControls } from 'ol/control'
import { MapboxVectorLayer } from 'ol-mapbox-style'
import { fromLonLat } from 'ol/proj'
import Overlay from 'ol/Overlay.js'

import { useSelectedFeatureStore } from "~/stores/SelectedFeatureStore"
const SelectedFeatureStore = useSelectedFeatureStore()
const { SelectedFeatureContent } = storeToRefs( SelectedFeatureStore )

const isOpen = useSidePanelisOpen()
const showSlidepanel = (): void => { isOpen.value = true }

// Declare ref's to hold element references
const maproot = ref<string | HTMLElement | undefined>(undefined)
const nappulaDiv = ref<HTMLElement | undefined>(undefined)
const MapIconDiv = ref<HTMLElement | undefined>(undefined)

// Declare map center coordinates
const locationOulu = fromLonLat([25.50, 65.02])
const viewCenter = ref(locationOulu)

onMounted( () =>
{
  // create control element for search side panel
  const menuControl = new Control({element: nappulaDiv.value})

  // create startpoint view for OpenLayers map
  const mapView = new View({
      center: viewCenter.value,
      zoom: 15
    })

// Create vector layer based on nls style def
  const layerMML = new MapboxVectorLayer({
    styleUrl: 'json/nls_basemap4.json',
    })

// Create the OpenLayers map
  const map = new Map({
    layers: [ layerMML ],
    target: maproot.value,
    controls: defaultControls({attribution: true}).extend([
      new FullScreen({
        source: 'fullscreen',
      }),
    ]),
    view: mapView,
  })
  map.addControl(menuControl)

const attributions =
  [
    'Contains data from the © National Land Survey of Finland', 
    'topographic database 03/2024',
    '<a href="https://www.maanmittauslaitos.fi/en/opendata-licence-cc40">Licence-cc40</a>',
  ]
  
  // Create attributions values for layer / source
  layerMML.getSource()?.setAttributions(attributions)

  // Add location point icon for search result
  const MapIconOverLay = new Overlay({
        element: MapIconDiv.value,
        })
  map.addOverlay(MapIconOverLay)

  // Watch the changes in searchresult Feature object -> center and add icon
  watch(SelectedFeatureContent, (newValue, oldValue) => {
    if (oldValue !== undefined) {
      viewCenter.value = fromLonLat(newValue.geometry.coordinates)
      map.getView().setCenter(viewCenter.value)
      MapIconOverLay.setPosition(viewCenter.value)

      map.render()
    }
  })

}) // End of onMounted()

</script>

<template>
  <div id="mml-kartta" ref="maproot"> </div>

  <div ref="nappulaDiv" class="z-20 absolute top-12 right-2">
      <UButton 
        @click="showSlidepanel()"
        title="Search"
        icon="i-heroicons-magnifying-glass"
        size="xs"
        color="white"
        variant="solid"
      />
    </div>
    <slot></slot>
  
  <div ref="MapIconDiv" >
    <mapIcon />
  </div>

</template>

<style>

#mml-kartta {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
