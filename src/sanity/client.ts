import { createClient } from 'next-sanity'

// Public configuration - safe to hardcode
// These values are public by design in Sanity
export const config = {
  projectId: 'ivoc1e3r',
  dataset: 'production',
  apiVersion: '2024-01-01',
} as const

export const client = createClient({
  ...config,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_READ_TOKEN, // Only this is sensitive
})
