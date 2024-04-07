<!-- file: inputMenu.vue -->

<script setup lang="ts">
import { useSearchResultStore } from "~/stores/SearchResultStore"
import type { Feature } from "~/assets/interface_MMLGeogaphic_names"

const SearchResultStore = useSearchResultStore()
const SelectedFeaturestore = useSelectedFeatureStore()
const { ResultsFeatures, isLoading } = storeToRefs( SearchResultStore )

const HakutulosPinia = computed(() => ResultsFeatures.value)

const TargetListisOpen = ref(true)

const sidePanelisOpen = useSidePanelisOpen()
const closeSlidepanel = (): void => { sidePanelisOpen.value = false }

const SearchisLoading = computed(() => isLoading.value)

function selectTheFeature(singleFeature: Ref<Feature>) {
  const riviUnWrapped = toValue(singleFeature)
  SelectedFeaturestore.storeSelectedFeature(riviUnWrapped)
  closeSlidepanel()

  return
}

</script>

<template>
  <slot></slot>

  <div v-if="SearchisLoading">Ladataan...
    <LoadingSpinner />
  </div>
  <div ref="searchTargetList" v-if="TargetListisOpen" >
  <UButtonGroup class="w-full" size="lg" orientation="vertical">
    <UButton
      label="Action"
      color="black"
      variant="outline"
      trailing-icon="i-heroicons-chevron-down-20-solid"
      v-for="selected in HakutulosPinia"
      :key="selected.id"
      @click="selectTheFeature(selected)"
      >
      {{ selected.properties.label }}, 
      {{ selected.properties['label:municipality'] }} --
      {{ selected.properties['label:placeType'] }}
    </Ubutton>
  </UButtonGroup>
  </div>

</template>
