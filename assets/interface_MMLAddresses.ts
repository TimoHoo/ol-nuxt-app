export interface AddressesMMLrootObject {
  type:      string;
  features:  Feature[];
  geocoding: Geocoding;
}

export interface Feature {
  type:       string;
  properties: Properties;
  geometry:   Geometry;
}

export interface Geometry {
  type:        string;
  coordinates: number[];
}

export interface Properties {
  rakennustunnus:       string;
  kiinteistotunnus:     string;
  katunimi:             string;
  katunumero:           string;
  postinumero:          string;
  kuntanimiFin:         string;
  kuntanimiSwe:         string;
  kuntatunnus:          string;
  source:               string;
  gid:                  string;
  distance:             null;
  rank:                 number;
  country:              string;
  country_gid:          string;
  continent:            string;
  continent_gid:        string;
  country_a:            string;
  label:                string;
  match_type:           string;
  accuracy:             string;
  municipality:         string;
  "label:kuntatunnus":  string;
  "label:municipality": string;
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
  matchedParts:         string[];
  matchingCodelists:    MatchingCodelists;
  similarTerms:         SimilarTerm[];
}

export interface MatchingCodelists {
  municipality: Municipality;
  subregion:    Subregion;
}

export interface Municipality {
  "091": The091;
}

export interface The091 {
  value:         string;
  label:         string;
  status:        string;
  lang:          string;
  codelist:      string;
  codelistgroup: string;
}

export interface Subregion {
  "011": The091;
}

export interface SimilarTerm {
  text:            string;
  similarity:      number;
  word_similarity: number;
  count:           number;
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

export interface ExcludesMaps {
}

export interface Sources {
  addresses: Addresses;
}

export interface Addresses {
  status:   string;
  duration: number;
  links:    any[];
}
