/** <!-- @filename: useMMLGeocodeQueryUrl.ts --> ***/

class MMLAxiosparams {
    method?: string
    responseType?: string
    sources?: string
    options?: string
    size?: number
    crs?: string
    lang?: string
//    apiKey: string
  }
  let parametritAxios: MMLAxiosparams = {
    method: "get", // axios default
    responseType: "json", // axios default
    sources: "geographic-names,cadastral-units,addresses,interpolated-road-addresses", // nls geocoding search attribute
    options: "nowildcard,use_addresses_firsthousenumber, use_any_codelist_lang_match,use_geographic_names_places", // nls geocoding search attribute
    size: 10, // nls geocoding search attribute
    crs: "EPSG:4326", // nls geocoding search attribute = WGS84
    lang: "fi", // nls geocoding search attribute
    }

export function useUrlComposer( text: string ) {
  const params = parametritAxios
  const apiKey = '7cd2ddae-9f2e-481c-99d0-404e7bc7a0b2' //import.meta.env.VITE_MML_ApiKey2
  const authString = '&api-key=' + apiKey 
  const queryString = Object.entries({ text, ...params })
                              .filter(([,value]) => value)
                              .map(([key, value]) => `${key}=${value}`)
                              .join('&')
    
  return "https://avoin-paikkatieto.maanmittauslaitos.fi/geocoding/v2/pelias/search?" + queryString + authString
  }