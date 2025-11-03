import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from './client'

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/**
 * Get image URL from Sanity image object
 * Handles both full image objects and asset references
 */
export function getImageUrl(image: SanityImageSource | null | undefined, width = 800, height = 600): string {
  if (!image) return "/images/placeholder-gimsf.png";
  
  try {
    // If image has asset property
    if (typeof image === 'object' && image !== null && 'asset' in image) {
      return urlFor(image.asset as SanityImageSource).width(width).height(height).quality(90).url();
    }
    // If image is the asset itself
    return urlFor(image).width(width).height(height).quality(90).url();
  } catch (error) {
    console.error("Error generating image URL:", error);
    return "/images/placeholder-gimsf.png";
  }
}
