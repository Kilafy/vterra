// Utility functions for Sanity CMS integration
import type { 
  SanityImage, 
  LocalizedString, 
  LocalizedContent,
  QueryParams 
} from '@/types/sanity';

/**
 * Get localized text based on current language
 */
export function getLocalizedText(
  content: LocalizedString, 
  locale: 'en' | 'es' = 'en'
): string {
  return content[locale] || content.en || '';
}

/**
 * Build Sanity image URL with transformations
 */
export function buildSanityImageUrl(
  image: SanityImage | undefined,
  {
    width,
    height,
    quality = 85,
    format = 'webp',
    fit = 'crop',
  }: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'jpg' | 'png';
    fit?: 'crop' | 'fill' | 'max' | 'min';
  } = {}
): string {
  if (!image?.asset?._ref) return '';
  
  // This will be configured with your actual Sanity project details
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  
  if (!projectId || !dataset) {
    console.warn('Sanity project configuration missing');
    return '';
  }

  const assetId = image.asset._ref;
  const url = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${assetId}`;

  const params = new URLSearchParams();
  if (width) params.append('w', width.toString());
  if (height) params.append('h', height.toString());
  if (quality) params.append('q', quality.toString());
  if (format) params.append('fm', format);
  if (fit) params.append('fit', fit);

  const queryString = params.toString();
  return queryString ? `${url}?${queryString}` : url;
}

/**
 * Get image alt text with fallback
 */
export function getSanityImageAlt(
  image: SanityImage | undefined,
  fallback: string = 'Image'
): string {
  return image?.alt || fallback;
}

/**
 * Build GROQ query for localized content
 */
export function buildLocalizedQuery(
  baseQuery: string,
  locale: 'en' | 'es' = 'en'
): string {
  // This can be extended based on how you structure localization in Sanity
  // For now, we return the base query since our schema has separate _en/_es fields
  console.log(`Building query for locale: ${locale}`);
  return `${baseQuery}`;
}

/**
 * Transform Sanity document to include locale-specific content
 */
export function localizeContent<T>(
  content: T,
  locale: 'en' | 'es'
): LocalizedContent<T> {
  return {
    ...content,
    locale
  };
}

/**
 * Default image placeholder for development
 */
export function getPlaceholderImage(
  type: 'hero' | 'service' | 'property' | 'experience' = 'hero'
): string {
  const placeholders = {
    hero: '/images/modern-glass-office.png',
    service: '/images/luxury-beachfront-penthouse.png',
    property: '/images/family-house-garden-patio.png',
    experience: '/images/placeholder-f1zat.png'
  };
  
  return placeholders[type];
}

/**
 * Format currency for property prices
 */
export function formatCurrency(
  amount: number,
  currency: string = 'USD',
  locale: 'en' | 'es' = 'en'
): string {
  const localeCode = locale === 'es' ? 'es-ES' : 'en-US';
  
  return new Intl.NumberFormat(localeCode, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Validate required environment variables for Sanity
 */
export function validateSanityConfig(): boolean {
  const requiredVars = [
    'NEXT_PUBLIC_SANITY_PROJECT_ID',
    'NEXT_PUBLIC_SANITY_DATASET'
  ];
  
  const missing = requiredVars.filter(
    varName => !process.env[varName]
  );
  
  if (missing.length > 0) {
    console.warn(
      `Missing Sanity configuration: ${missing.join(', ')}`
    );
    return false;
  }
  
  return true;
}

/**
 * Mock data for development when Sanity is not yet configured
 */
export const mockSanityData = {
  hero: {
    _id: 'hero-1',
    _type: 'heroSection',
    subtitle: { en: 'VTERRA', es: 'VTERRA' },
    title: { 
      en: 'Real Estate Solutions for a World in Motion', 
      es: 'Soluciones inmobiliarias para un mundo en movimiento' 
    },
    description: { 
      en: 'An integrated ecosystem that empowers real estate professionals, investors, and hospitality entrepreneurs across borders.',
      es: 'Un ecosistema integrado que empodera a profesionales inmobiliarios, inversionistas y emprendedores de hospitalidad a través de fronteras.'
    },
    highlight: { 
      en: 'From Medellín to the U.S., we build intelligent, scalable solutions that transform how you do business.',
      es: 'Desde Medellín hasta EE.UU., construimos soluciones inteligentes y escalables que transforman tu manera de hacer negocios.'
    },
    ctaPrimary: { en: 'Discover Our Services', es: 'Descubre Nuestros Servicios' },
    ctaSecondary: { en: 'Learn More', es: 'Conoce Más' }
  }
};

/**
 * Build query parameters for Sanity API calls
 */
export function buildQueryParams(params: QueryParams = {}): string {
  const searchParams = new URLSearchParams();
  
  if (params.locale) searchParams.append('locale', params.locale);
  if (params.limit) searchParams.append('limit', params.limit.toString());
  if (params.offset) searchParams.append('offset', params.offset.toString());
  if (params.filter) searchParams.append('filter', params.filter);
  
  return searchParams.toString();
}