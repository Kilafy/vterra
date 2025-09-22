Sanity CMS – Integración Vterra (guía rápida)

1) Instalar dependencias

- npm i next-sanity @sanity/client @sanity/image-url groq
- Opcional Studio (monorepo o standalone): npm i -D sanity

2) Variables de entorno

- SANITY_PROJECT_ID=xxxxx
- SANITY_DATASET=production
- SANITY_API_VERSION=2025-01-01
- SANITY_READ_TOKEN=(opcional si dataset privado)

3) Esquema Property (bilingüe simple)

// ./sanity/schemas/property.ts
export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    { name: 'title_en', title: 'Title (EN)', type: 'string', validation: (R: any) => R.required() },
    { name: 'title_es', title: 'Título (ES)', type: 'string', validation: (R: any) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title_en' }, validation: (R: any) => R.required() },
    { name: 'type', title: 'Type', type: 'string', options: { list: ['Condominium','Villa','House','Penthouse','Commercial'] } },
    { name: 'price', title: 'Price (USD)', type: 'number' },
    { name: 'location', title: 'Location (City, State/Country)', type: 'string' },
    { name: 'bedrooms', title: 'Bedrooms', type: 'number' },
    { name: 'bathrooms', title: 'Bathrooms', type: 'number' },
    { name: 'area', title: 'Area (sq ft)', type: 'number' },
    { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'description_en', title: 'Description (EN)', type: 'text' },
    { name: 'description_es', title: 'Descripción (ES)', type: 'text' },
    { name: 'featured', title: 'Featured', type: 'boolean' },
  ],
}

4) next-sanity helper

// ./src/lib/sanity.ts
// export const client = createClient({ projectId, dataset, apiVersion, useCdn: true, token })
// export const urlFor = (src) => imageUrlBuilder(client).image(src)

5) GROQ para listado y detalle

- Listado: *[_type == "property"] | order(_createdAt desc){
  _id, title_en, title_es, slug, type, price, location, bedrooms, bathrooms, area, images[0]}
- Por slug: *[_type == "property" && slug.current == $slug][0]{..., images[]}

6) Wire en Next.js (App Router)

- Listado (`/properties`): fetch con `client.fetch(listQuery)` y mapear al grid (reemplaza sampleProperties)
- Detalle (`/properties/[slug]`): página dinámica con `generateStaticParams` + `client.fetch(detailQuery)`
- i18n: usar `useLanguage()` para escoger `title_en/title_es` y `description_en/description_es`

7) Futuro: i18n plugin de Sanity

- Si prefieren campos localizados nativos: usar plugin oficial `@sanity/document-internationalization` o `@sanity/language-filter` y definir `title`/`description` como objetos localizados `{ en: string, es: string }`.

