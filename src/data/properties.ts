export type Property = {
  id: number;
  slug: string;
  title: string;
  titleEs: string;
  location: string;
  country: string;
  price: number;
  priceFormatted: string;
  type: "Condominium" | "Villa" | "House" | "Penthouse" | "Commercial";
  typeEs: "Condominio" | "Villa" | "Casa" | "Penthouse" | "Comercial";
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  image: string;
  featured?: boolean;
  parking?: boolean;
  descriptionEn?: string;
  descriptionEs?: string;
};

export const properties: Property[] = [
  {
    id: 1,
    slug: "modern-downtown-condo",
    title: "Modern Downtown Condo",
    titleEs: "Condominio Moderno en el Centro",
    location: "Miami, FL",
    country: "USA",
    price: 850000,
    priceFormatted: "$850,000",
    type: "Condominium",
    typeEs: "Condominio",
    bedrooms: 2,
    bathrooms: 2,
    areaSqFt: 1200,
    image: "/images/placeholder-gimsf.png",
    featured: true,
    parking: true,
    descriptionEn:
      "Contemporary condo in the heart of downtown Miami with skyline views and amenities.",
    descriptionEs:
      "Condominio contemporáneo en el centro de Miami con vista a la ciudad y amenidades.",
  },
  {
    id: 2,
    slug: "luxury-villa-with-pool",
    title: "Luxury Villa with Pool",
    titleEs: "Villa de Lujo con Piscina",
    location: "Medellín, Colombia",
    country: "Colombia",
    price: 420000,
    priceFormatted: "$420,000",
    type: "Villa",
    typeEs: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqFt: 2800,
    image: "/images/placeholder-f1zat.png",
    featured: true,
    parking: true,
    descriptionEn:
      "Elegant villa nestled in the hills of Medellín with private pool and gardens.",
    descriptionEs:
      "Elegante villa en las colinas de Medellín con piscina privada y jardines.",
  },
  {
    id: 3,
    slug: "investment-apartment-complex",
    title: "Investment Apartment Complex",
    titleEs: "Complejo de Apartamentos de Inversión",
    location: "Orlando, FL",
    country: "USA",
    price: 1200000,
    priceFormatted: "$1,200,000",
    type: "Commercial",
    typeEs: "Comercial",
    bedrooms: 0,
    bathrooms: 0,
    areaSqFt: 15000,
    image: "/images/placeholder-q8ouh.png",
    featured: false,
    parking: false,
    descriptionEn:
      "Stabilized multi-unit investment opportunity near major Orlando attractions.",
    descriptionEs:
      "Oportunidad de inversión multiunidad estabilizada cerca de las atracciones de Orlando.",
  },
  {
    id: 4,
    slug: "beachfront-penthouse",
    title: "Beachfront Penthouse",
    titleEs: "Penthouse Frente al Mar",
    location: "Cartagena, Colombia",
    country: "Colombia",
    price: 680000,
    priceFormatted: "$680,000",
    type: "Penthouse",
    typeEs: "Penthouse",
    bedrooms: 3,
    bathrooms: 3,
    areaSqFt: 2100,
    image: "/images/luxury-beachfront-penthouse.png",
    featured: true,
    parking: true,
    descriptionEn:
      "Boutique penthouse with panoramic sea views and high-end finishes.",
    descriptionEs:
      "Penthouse boutique con vista panorámica al mar y acabados de alto nivel.",
  },
  {
    id: 5,
    slug: "family-house-with-garden",
    title: "Family House with Garden",
    titleEs: "Casa Familiar con Jardín",
    location: "Tampa, FL",
    country: "USA",
    price: 520000,
    priceFormatted: "$520,000",
    type: "House",
    typeEs: "Casa",
    bedrooms: 4,
    bathrooms: 2,
    areaSqFt: 2200,
    image: "/images/family-house-garden-patio.png",
    featured: false,
    parking: true,
    descriptionEn:
      "Bright family home with generous backyard and quiet neighborhood.",
    descriptionEs:
      "Casa familiar luminosa con amplio jardín en un vecindario tranquilo.",
  },
  {
    id: 6,
    slug: "modern-office-building",
    title: "Modern Office Building",
    titleEs: "Edificio de Oficinas Moderno",
    location: "Bogotá, Colombia",
    country: "Colombia",
    price: 2100000,
    priceFormatted: "$2,100,000",
    type: "Commercial",
    typeEs: "Comercial",
    bedrooms: 0,
    bathrooms: 0,
    areaSqFt: 25000,
    image: "/images/modern-glass-office.png",
    featured: false,
    parking: true,
    descriptionEn:
      "Glass-front office building with flexible floors and prime business district location.",
    descriptionEs:
      "Edificio de oficinas con fachada en vidrio, pisos flexibles y ubicación privilegiada.",
  },
];

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
}

