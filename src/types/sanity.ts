// Sanity CMS Interface Types for Vterra
// These interfaces define the structure of data that will be managed through Sanity CMS

// Base interface for Sanity documents
interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

// Image asset structure from Sanity
interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

// Localized string for multi-language support
interface LocalizedString {
  en: string;
  es: string;
}

// Hero Section Content
export interface HeroContent extends SanityDocument {
  _type: 'heroSection';
  subtitle: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  highlight: LocalizedString;
  ctaPrimary: LocalizedString;
  ctaSecondary: LocalizedString;
  backgroundVideo?: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  heroImage?: SanityImage;
}

// Business Service/Division
export interface BusinessService extends SanityDocument {
  _type: 'businessService';
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  features: LocalizedString[];
  image: SanityImage;
  colorTheme: 'vterra-wood' | 'vterra-olive' | 'vterra-terracotta' | 'vterra-gold';
  order: number;
  isActive: boolean;
}

// Services Section Content
export interface ServicesContent extends SanityDocument {
  _type: 'servicesSection';
  overline: LocalizedString;
  title: LocalizedString;
  subtitle: LocalizedString;
  ctaTitle: LocalizedString;
  ctaPrimary: LocalizedString;
  ctaSecondary: LocalizedString;
}

// Welcome/About Section Content
export interface WelcomeContent extends SanityDocument {
  _type: 'welcomeSection';
  overline: LocalizedString;
  title: LocalizedString;
  subtitle: LocalizedString;
  body: LocalizedString;
  body2: LocalizedString;
  highlight: LocalizedString;
  cta: LocalizedString;
  mainImage: SanityImage;
  galleryImages: SanityImage[];
}

// Property listing
export interface Property extends SanityDocument {
  _type: 'property';
  title: LocalizedString;
  description: LocalizedString;
  price?: number;
  currency?: string;
  location: {
    city: LocalizedString;
    country: LocalizedString;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  propertyType: 'residential' | 'commercial' | 'hospitality' | 'mixed-use';
  images: SanityImage[];
  features: LocalizedString[];
  isActive: boolean;
  isFeatured: boolean;
  slug: {
    current: string;
  };
}

// Experience/Portfolio item
export interface ExperienceItem extends SanityDocument {
  _type: 'experienceItem';
  title: LocalizedString;
  description: LocalizedString;
  category: 'real-estate' | 'hospitality' | 'marketing' | 'consulting';
  image: SanityImage;
  stats?: {
    label: LocalizedString;
    value: string;
  }[];
  order: number;
  isActive: boolean;
}

// Contact CTA Section
export interface ContactCTA extends SanityDocument {
  _type: 'contactCTA';
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  ctaPrimary: LocalizedString;
  ctaSecondary: LocalizedString;
  backgroundImage?: SanityImage;
}

// Navigation Menu
export interface NavigationMenu extends SanityDocument {
  _type: 'navigationMenu';
  items: {
    label: LocalizedString;
    id: string;
    order: number;
    isActive: boolean;
  }[];
}

// Site Settings
export interface SiteSettings extends SanityDocument {
  _type: 'siteSettings';
  siteName: LocalizedString;
  siteDescription: LocalizedString;
  logo: SanityImage;
  favicon?: SanityImage;
  socialMedia?: {
    platform: string;
    url: string;
  }[];
  contactInfo: {
    email: string;
    phone?: string;
    address?: LocalizedString;
  };
  seoSettings?: {
    defaultMetaTitle: LocalizedString;
    defaultMetaDescription: LocalizedString;
    ogImage?: SanityImage;
  };
}

// Footer Content
export interface FooterContent extends SanityDocument {
  _type: 'footerContent';
  companyDescription: LocalizedString;
  quickLinks: {
    label: LocalizedString;
    url: string;
    isExternal: boolean;
  }[];
  services: {
    title: LocalizedString;
    description: LocalizedString;
  }[];
  copyrightText: LocalizedString;
}

// Utility type for fetching content with specific locale
export type LocalizedContent<T> = T & {
  locale: 'en' | 'es';
};

// API response wrapper
export interface SanityResponse<T> {
  data: T[];
  total: number;
  hasMore: boolean;
}

// Query parameters for Sanity API calls
export interface QueryParams {
  locale?: 'en' | 'es';
  limit?: number;
  offset?: number;
  filter?: string;
}