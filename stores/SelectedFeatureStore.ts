/* <!-- file: SelectedFeatureStore.ts --> */

import { defineStore, acceptHMRUpdate } from 'pinia'
import type { Feature } from "~/assets/interface_MMLGeogaphic_names"

export const useSelectedFeatureStore: any = defineStore('SelectedFeatureStore', () => {

  const SelectedFeatureContent = ref({})

  const storeSelectedFeature = (SelectedFeature:Feature): void => {
    if (SelectedFeatureContent.value !== null) {
      SelectedFeatureContent.value = unref(SelectedFeature)
    } else SelectedFeatureContent.value = {}
  }
  return { 
    SelectedFeatureContent,
    storeSelectedFeature, 
  }

})

// make sure to pass the right store definition, `useSelectedFeatureStore` in this case.
   if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSelectedFeatureStore, import.meta.hot))
    }
