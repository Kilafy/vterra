# Sanity CMS Integration - Vterra

## 📋 Overview

This project uses **Sanity CMS** as a headless content management system integrated directly within the Next.js application. The Studio is accessible at `/studio` when running the development server.

## 🚀 Getting Started

### 1. Environment Variables

Make sure `.env.local` contains:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=ivoc1e3r
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 2. Start Development Server

```bash
npm run dev
```

The Sanity Studio will be available at: **http://localhost:3000/studio**

### 3. Access the Studio

1. Navigate to `http://localhost:3000/studio`
2. Login with your Sanity credentials (Google, GitHub, or Email)
3. Start creating content!

## 📁 Project Structure

```
vterra/
├── sanity/
│   ├── schemaTypes/
│   │   ├── propertyType.ts    # Property schema definition
│   │   └── index.ts           # Schema exports
│   └── sanity.config.ts       # Studio configuration
├── src/
│   ├── app/
│   │   └── studio/[[...tool]]/  # Studio route
│   ├── sanity/
│   │   ├── client.ts          # Sanity client config
│   │   ├── image.ts           # Image URL builder
│   │   └── queries.ts         # GROQ queries
│   └── types/
│       └── sanity.ts          # TypeScript types
└── .env.local                 # Environment variables
```

## 🏗️ Content Schema

### Property Type

The main content type for real estate listings with:

**Basic Info:**
- Title (EN/ES)
- Slug
- Type (condominium, villa, house, etc.)
- Status (for-sale, for-rent, sold)
- Price

**Location:**
- City, State, Country
- Full Address

**Details:**
- Bedrooms, Bathrooms
- Area (sq ft)
- Parking spaces

**Media:**
- Multiple images with captions (EN/ES)

**Content:**
- Rich text descriptions (EN/ES)
- Amenities list

**Display:**
- Featured flag
- Priority ordering
- SEO settings

## 📝 GROQ Queries

Common queries available in `src/sanity/queries.ts`:

```typescript
// Get all properties
PROPERTIES_QUERY

// Get featured properties only
FEATURED_PROPERTIES_QUERY

// Get single property by slug
PROPERTY_BY_SLUG_QUERY

// Get all slugs (for static generation)
PROPERTY_SLUGS_QUERY

// Filter by type or status
PROPERTIES_BY_TYPE_QUERY
PROPERTIES_BY_STATUS_QUERY

// Search properties
SEARCH_PROPERTIES_QUERY
```

## 💻 Usage Examples

### Fetch Properties in a Page

```typescript
import { client } from '@/sanity/client'
import { PROPERTIES_QUERY } from '@/sanity/queries'
import type { Property } from '@/types/sanity'

export default async function PropertiesPage() {
  const properties = await client.fetch<Property[]>(
    PROPERTIES_QUERY,
    {},
    { next: { revalidate: 60 } } // ISR: revalidate every 60 seconds
  )

  return (
    <div>
      {properties.map((property) => (
        <div key={property._id}>
          <h2>{property.title_en}</h2>
          <p>${property.price.toLocaleString()}</p>
        </div>
      ))}
    </div>
  )
}
```

### Get Single Property

```typescript
import { client } from '@/sanity/client'
import { PROPERTY_BY_SLUG_QUERY } from '@/sanity/queries'

export default async function PropertyPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  
  const property = await client.fetch(
    PROPERTY_BY_SLUG_QUERY,
    { slug },
    { next: { revalidate: 60 } }
  )

  return <div>{/* Render property */}</div>
}
```

### Display Images

```typescript
import { urlFor } from '@/sanity/image'
import Image from 'next/image'

function PropertyImage({ image }) {
  const imageUrl = urlFor(image)
    .width(800)
    .height(600)
    .url()

  return (
    <Image
      src={imageUrl}
      alt={image.alt || ''}
      width={800}
      height={600}
    />
  )
}
```

### Render Portable Text

```typescript
import { PortableText } from 'next-sanity'

function PropertyDescription({ description }) {
  return (
    <div className="prose">
      <PortableText value={description} />
    </div>
  )
}
```

## 🌐 Bilingual Content

Use the language context to display content in the user's selected language:

```typescript
import { useLanguage } from '@/components/language-context'

function PropertyCard({ property }) {
  const { language } = useLanguage()
  
  const title = language === 'en' ? property.title_en : property.title_es
  const description = language === 'en' 
    ? property.description_en 
    : property.description_es

  return (
    <div>
      <h3>{title}</h3>
      <PortableText value={description} />
    </div>
  )
}
```

## 🚀 Deployment

### Deploy Studio to Sanity

```bash
npm run studio:deploy
```

This will deploy your Studio to: `https://vterra.sanity.studio/`

### Deploy Next.js App

Your Next.js app (including the embedded Studio at `/studio`) deploys normally:

```bash
# Vercel
vercel deploy

# Or build for production
npm run build
npm start
```

## 🔐 Security Notes

- `.env.local` is gitignored automatically
- Never commit API tokens to git
- Use `SANITY_API_READ_TOKEN` only if dataset is private
- Production URLs should use `useCdn: true` for better performance

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [next-sanity Package](https://github.com/sanity-io/next-sanity)
- [Sanity Vision Tool](https://www.sanity.io/docs/the-vision-plugin) - Test queries in the Studio

## 🆘 Troubleshooting

### Studio not loading
- Check that all environment variables are set correctly
- Verify the project ID matches your Sanity project
- Clear `.next` cache: `rm -rf .next && npm run dev`

### Content not updating
- Check ISR revalidation time (`next: { revalidate: 60 }`)
- Force revalidation or disable caching during development
- Verify the query is correct in Vision tool

### TypeScript errors
- Run `npm run build` to check for type issues
- Ensure `@sanity/image-url` types are installed
- Check that Property interface matches schema
