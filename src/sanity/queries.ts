// GROQ Queries for Vterra Properties

/**
 * Get all properties with basic info
 * Ordered by priority (desc) and creation date (desc)
 */
export const PROPERTIES_QUERY = `*[_type == "property"] | order(priority desc, _createdAt desc) {
  _id,
  _createdAt,
  title_en,
  title_es,
  slug,
  type,
  status,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  parking,
  images[] {
    asset->,
    caption_en,
    caption_es
  },
  featured,
  priority
}`

/**
 * Get featured properties only
 */
export const FEATURED_PROPERTIES_QUERY = `*[_type == "property" && featured == true] | order(priority desc, _createdAt desc)[0...6] {
  _id,
  _createdAt,
  title_en,
  title_es,
  slug,
  type,
  status,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  parking,
  images[] {
    asset->,
    caption_en,
    caption_es
  },
  featured,
  priority
}`

/**
 * Get a single property by slug with all details
 */
export const PROPERTY_BY_SLUG_QUERY = `*[_type == "property" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title_en,
  title_es,
  slug,
  type,
  status,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  parking,
  images[] {
    asset,
    alt,
    caption_en,
    caption_es
  },
  description_en,
  description_es,
  amenities,
  featured,
  priority,
  seo
}`

/**
 * Get all property slugs for static generation
 */
export const PROPERTY_SLUGS_QUERY = `*[_type == "property" && defined(slug.current)] {
  "slug": slug.current
}`

/**
 * Get properties by type
 */
export const PROPERTIES_BY_TYPE_QUERY = `*[_type == "property" && type == $type] | order(priority desc, _createdAt desc) {
  _id,
  _createdAt,
  title_en,
  title_es,
  slug,
  type,
  status,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  parking,
  "mainImage": images[0],
  featured,
  priority
}`

/**
 * Get properties by status
 */
export const PROPERTIES_BY_STATUS_QUERY = `*[_type == "property" && status == $status] | order(priority desc, _createdAt desc) {
  _id,
  _createdAt,
  title_en,
  title_es,
  slug,
  type,
  status,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  parking,
  "mainImage": images[0],
  featured,
  priority
}`

/**
 * Search properties by location
 */
export const SEARCH_PROPERTIES_QUERY = `*[_type == "property" && (
  location.city match $searchTerm + "*" ||
  location.country match $searchTerm + "*" ||
  title_en match $searchTerm + "*" ||
  title_es match $searchTerm + "*"
)] | order(priority desc, _createdAt desc) {
  _id,
  _createdAt,
  title_en,
  title_es,
  slug,
  type,
  status,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  parking,
  "mainImage": images[0],
  featured,
  priority
}`
