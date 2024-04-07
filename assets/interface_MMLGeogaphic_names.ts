export interface RootObjectGeographicNames {
  type?: string;
  features?: Feature[];
  geocoding?: Geocoding;
}

export interface Geocoding {
  status?: string;
  metadata?: Metadatum[];
  sources?: Sources;
  query?: Query;
  version?: string;
  attribution?: string;
  engine?: Engine;
  timestamp?: number;
}

interface Engine {
  name: string;
  author: string;
  version: string;
}

interface Query {
  sources: string;
  crs: string;
  requestCrs: string;
  scaleDenominator: number;
  excludesMaps: MatchingCodelists;
  text: string;
  querySize: number;
}

interface Sources {
  'geographic-names': Geographicnames;
}

interface Geographicnames {
  status: string;
  duration: number;
  links: any[];
}

interface Metadatum {
  rawTerm: string;
  searchTerm: string;
  searchTermParts: string[];
  seartchTermPartCount: number;
  matchedParts: any[];
  matchingCodelists: MatchingCodelists;
  similarTerms: any[];
}

interface MatchingCodelists {
  dummy: string
}

export interface Feature {
  type: string;
  id: string;
  properties?: Properties;
  geometry?: Geometry;
}

interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Properties {
  placeId?: number;
  placeVersionId?: number;
  placeType?: number;
  placeTypeDescription?: number;
  placeTypeCategory?: number;
  placeTypeGroup?: number;
  placeTypeSubgroup?: number;
  placeElevation?: number;
  tm35MapSheet?: string;
  gslsMapSheet?: string;
  rescueGridSquare?: string;
  municipality?: string;
  subregion?: string;
  region?: string;
  scaleRelevance?: number;
  placeCreationTime?: string;
  placeModificationTime?: string;
  placeDeletionTime?: any;
  name?: Name[];
  source?: string;
  gid?: string;
  distance?: any;
  rank?: number;
  country?: string;
  country_gid?: string;
  continent?: string;
  continent_gid?: string;
  country_a?: string;
  label?: string;
  match_type?: string;
  accuracy?: string;
  similarity?: number;
  confidence?: number;
  'label:region'?: string;
  'label:subregion'?: string;
  'label:municipality'?: string;
  'label:placeType'?: string;
  'label:placeTypeDescription'?: string;
  'label:placeTypeCategory'?: string;
  'label:placeTypeGroup'?: string;
  'label:placeTypeSubgroup'?: string;
}

interface Name {
  placeNameId: number;
  placeNameVersionId: number;
  spelling: string;
  language: string;
  languageOfficiality: number;
  languageDominance: number;
  placeNameSource: number;
  placeNameStatus: number;
  placeNameCreationTime: string;
  placeNameModificationTime: string;
  placeNameDeletionTime?: any;
}


/* interface RootObject {
openapi: string;
info: Info;
servers: Server[];
security: Security[];
paths: Paths;
components: Components;
}

interface Components {
schemas: Schemas;
securitySchemes: SecuritySchemes;
}

interface SecuritySchemes {
httpBasic: HttpBasic;
apiKey: ApiKey;
}

interface ApiKey {
type: string;
name: string;
in: string;
}

interface HttpBasic {
type: string;
scheme: string;
}

interface Schemas {
SearchTerm: SearchTerm;
SearchTermResponse: SearchTermResponse;
exception: Exception;
extent: Extent;
link: Link;
pointGeoJSON: PointGeoJSON;
peliasResponseFeatureCollectionGeoJSON: PeliasResponseFeatureCollectionGeoJSON;
featureCollectionGeoJSON: FeatureCollectionGeoJSON;
multilinestringGeoJSON: MultilinestringGeoJSON;
geometryGeoJSON: GeometryGeoJSON;
polygonGeoJSON: MultilinestringGeoJSON;
multipointGeoJSON: MultipointGeoJSON;
featureGeoJSON: FeatureGeoJSON;
linestringGeoJSON: LinestringGeoJSON;
multipolygonGeoJSON: MultipolygonGeoJSON;
geometrycollectionGeoJSON: GeometrycollectionGeoJSON;
}

interface GeometrycollectionGeoJSON {
required: string[];
type: string;
properties: Properties15;
}

interface Properties15 {
type: Type;
geometries: Terms;
}

interface MultipolygonGeoJSON {
required: string[];
type: string;
properties: Properties14;
}

interface Properties14 {
type: Type;
coordinates: Coordinates4;
}

interface Coordinates4 {
type: string;
items: Coordinates2;
}

interface LinestringGeoJSON {
required: string[];
type: string;
properties: Properties13;
}

interface Properties13 {
type: Type;
coordinates: Items3;
}

interface FeatureGeoJSON {
required: string[];
type: string;
properties: Properties12;
}

interface Properties12 {
type: Type;
geometry: Schema2;
properties: Properties11;
id: Id;
links: Terms;
}

interface Id {
oneOf: Codelist[];
}

interface Properties11 {
type: string;
nullable: boolean;
}

interface MultipointGeoJSON {
required: string[];
type: string;
properties: Properties10;
}

interface Properties10 {
type: Type;
coordinates: Coordinates3;
}

interface Coordinates3 {
type: string;
items: Coordinates;
}

interface GeometryGeoJSON {
oneOf: Schema2[];
}

interface MultilinestringGeoJSON {
required: string[];
type: string;
properties: Properties9;
}

interface Properties9 {
type: Type;
coordinates: Coordinates2;
}

interface Coordinates2 {
type: string;
items: Items3;
}

interface Items3 {
minItems: number;
type: string;
items: Coordinates;
}

interface FeatureCollectionGeoJSON {
required: string[];
type: string;
properties: Properties8;
}

interface Properties8 {
type: Type;
features: Terms;
links: Terms;
timeStamp: Items2;
numberMatched: Count;
numberReturned: Count;
}

interface PeliasResponseFeatureCollectionGeoJSON {
required: string[];
type: string;
properties: Properties7;
}

interface Properties7 {
type: Type;
features: Terms;
geocoding: Codelist;
links: Terms;
timeStamp: Items2;
numberMatched: Count;
numberReturned: Count;
}

interface PointGeoJSON {
required: string[];
type: string;
properties: Properties6;
}

interface Properties6 {
type: Type;
coordinates: Coordinates;
}

interface Coordinates {
minItems: number;
type: string;
items: Codelist;
}

interface Type {
type: string;
enum: string[];
}

interface Link {
required: string[];
type: string;
properties: Properties5;
}

interface Properties5 {
href: Codelist;
rel: Rel;
type: Rel;
title: Codelist;
hreflang: Rel;
}

interface Rel {
type: string;
example: string;
}

interface Extent {
type: string;
properties: Properties4;
}

interface Properties4 {
crs: Crs;
spatial: Spatial;
trs: Crs;
temporal: Temporal;
}

interface Temporal {
maxItems: number;
minItems: number;
type: string;
items: Items2;
}

interface Items2 {
type: string;
format: string;
}

interface Spatial {
maxItems: number;
minItems: number;
type: string;
items: Items;
}

interface Items {
maximum: number;
minimum: number;
type: string;
}

interface Crs {
type: string;
default: string;
enum: string[];
}

interface Exception {
required: string[];
type: string;
properties: Properties3;
}

interface Properties3 {
code: Codelist;
description: Codelist;
}

interface SearchTermResponse {
required: string[];
type: string;
properties: Properties2;
}

interface Properties2 {
terms: Terms;
}

interface Terms {
type: string;
items: Schema2;
}

interface SearchTerm {
type: string;
properties: Properties;
}

interface Properties {
codelist: Codelist;
text: Codelist;
similarity: Codelist;
word_similarity: Codelist;
count: Count;
}

interface Count {
minimum: number;
type: string;
format: string;
}

interface Codelist {
type: string;
}

interface Paths {
'/geocoding/v1/pelias/reverse': Geocodingv1peliasreverse;
'/geocoding/v1/pelias/search': Geocodingv1peliassearch;
'/geocoding/v1/searchterm/decode': Geocodingv1searchtermdecode;
'/geocoding/v1/searchterm/similar': Geocodingv1searchtermsimilar;
'/geocoding/v2/pelias/reverse': Geocodingv1peliasreverse;
'/geocoding/v2/pelias/search': Geocodingv1peliassearch;
'/geocoding/v2/searchterm/decode': Geocodingv1searchtermdecode;
'/geocoding/v2/searchterm/similar': Geocodingv2searchtermsimilar;
}

interface Geocodingv2searchtermsimilar {
get: Get5;
}

interface Get5 {
summary: string;
operationId: string;
parameters: Parameter4[];
responses: Responses2;
}

interface Parameter4 {
name: string;
in: string;
description: string;
required?: boolean;
schema: Schema;
}

interface Geocodingv1searchtermsimilar {
get: Get4;
}

interface Get4 {
summary: string;
operationId: string;
parameters: Parameter3[];
responses: Responses2;
}

interface Responses2 {
default: Default;
}

interface Parameter3 {
name: string;
in: string;
description: string;
required?: boolean;
schema: Schema3;
}

interface Schema3 {
maxLength?: number;
minLength?: number;
type: string;
maximum?: number;
minimum?: number;
format?: string;
default?: number;
}

interface Geocodingv1searchtermdecode {
get: Get3;
}

interface Get3 {
summary: string;
operationId: string;
parameters: Parameter[];
responses: Responses;
}

interface Geocodingv1peliassearch {
get: Get2;
}

interface Get2 {
summary: string;
externalDocs: ExternalDocs;
operationId: string;
parameters: Parameter2[];
responses: Responses;
}

interface Parameter2 {
name: string;
in: string;
description?: string;
schema: Schema;
}

interface Geocodingv1peliasreverse {
get: Get;
}

interface Get {
summary: string;
externalDocs: ExternalDocs;
operationId: string;
parameters: Parameter[];
responses: Responses;
}

interface Responses {
'503': _503;
'504': _503;
default: Default;
}

interface Default {
description: string;
content: Content;
}

interface Content {
'application/json;charset=UTF-8': ApplicationjsoncharsetUTF8;
}

interface ApplicationjsoncharsetUTF8 {
schema: Schema2;
}

interface Schema2 {
'$ref': string;
}

interface _503 {
description: string;
}

interface Parameter {
name: string;
in: string;
description: string;
schema: Schema;
}

interface Schema {
maxLength?: number;
minLength?: number;
type: string;
maximum?: number;
minimum?: number;
format?: string;
default?: number | string;
}

interface ExternalDocs {
description: string;
url: string;
}

interface Security {
httpBasic?: any[];
apiKey?: any[];
}

interface Server {
url: string;
variables: Variables;
}

interface Variables {
servicechannel: Servicechannel;
}

interface Servicechannel {
default: string;
enum: string[];
}

interface Info {
title: string;
description: string;
contact: Contact;
license: License;
version: string;
}

interface License {
name: string;
url: string;
}

interface Contact {
name: string;
url: string;
email: string;
}

*/