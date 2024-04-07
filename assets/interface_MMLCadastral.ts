export interface KiinteistotRootObject {
  type:      string;
  features:  Feature[];
  geocoding: Geocoding;
}

export interface Feature {
  type:       string;
  id:         string;
  properties: Properties;
  geometry:   Geometry;
}

export interface Geometry {
  type:        string;
  coordinates: number[];
}

export interface Properties {
  kiinteistotunnus:               string;
  kiinteistotunnuksenEsitysmuoto: string;
  kuntatunnus:                    string;
  source:                         string;
  gid:                            string;
  distance:                       null;
  rank:                           number;
  country:                        string;
  country_gid:                    string;
  continent:                      string;
  continent_gid:                  string;
  country_a:                      string;
  label:                          string;
  match_type:                     string;
  accuracy:                       string;
  municipality:                   string;
  "label:kuntatunnus":            string;
  "label:municipality":           string;
}

export interface Geocoding {
  status:      string;
  metadata:    Metadatum[];
  sources:     Sources;
  query:       Query;
  version:     string;
  attribution: string;
  engine:      Engine;
  timestamp:   number;
}

export interface Engine {
  name:    string;
  author:  string;
  version: string;
}

export interface Metadatum {
  rawTerm:              string;
  searchTerm:           string;
  searchTermParts:      string[];
  seartchTermPartCount: number;
  matchedParts:         any[];
  matchingCodelists:    ExcludesMaps;
  similarTerms:         any[];
}

export interface ExcludesMaps {
}

export interface Query {
  sources:          string;
  scaleDenominator: number;
  excludesMaps:     ExcludesMaps;
  text:             string;
  querySize:        number;
  crs:              string;
  requestCrs:       string;
}

export interface Sources {
  "cadastral-units": CadastralUnits;
}

export interface CadastralUnits {
  status:   string;
  duration: number;
  links:    any[];
}
