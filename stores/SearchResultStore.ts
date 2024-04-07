/* <!-- file: SearchResultStore.ts --> */

import { ref } from "vue"
import { useUrlComposer } from "~/composables/useMMLGeocodeQueryUrl"
import { useAxios } from "@vueuse/integrations/useAxios"
//import type { RootObjectGeographicNames, Feature } from "~/assets/interface_MMLGeogaphic_names"
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useSearchResultStore: any = defineStore('SearchResultStore', () => {
    const ResultsFeatures = ref([])
    const ResultsGeocoding = ref(null)

    const { isLoading, isFinished, execute } = useAxios()

    async function getResults(searchText:string) {
        let searchUrl = ''

        if (searchText.length > 1) {
            searchUrl = useUrlComposer( searchText )
            const result = await execute( searchUrl )
            ResultsFeatures.value = result.data.value.features
            ResultsGeocoding.value = result.data.value.geocoding
            isLoading.value = result.isLoading.value
            isFinished.value = result.isFinished.value
        }
        else {
            ResultsFeatures.value = []
            ResultsGeocoding.value = null
        }
        return { ResultsFeatures, ResultsGeocoding, isLoading, isFinished }
    }
return { ResultsFeatures, ResultsGeocoding, isLoading, isFinished, getResults }
})

// make sure to pass the right store definition, `acceptHMRUpdate` in this case.
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSearchResultStore, import.meta.hot))
}
