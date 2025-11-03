import PropertyDetailClient from "@/components/property-detail-client";
import { client } from "@/sanity/client";
import { PROPERTY_BY_SLUG_QUERY, PROPERTY_SLUGS_QUERY } from "@/sanity/queries";
import type { Property } from "@/types/sanity";
import { notFound } from "next/navigation";

// Enable ISR - revalidate every 60 seconds
export const revalidate = 60;

// Generate static params for all properties
export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(PROPERTY_SLUGS_QUERY);
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export default async function PropertyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Fetch property from Sanity
  const property = await client.fetch<Property>(
    PROPERTY_BY_SLUG_QUERY,
    { slug },
    { next: { revalidate: 60 } }
  );

  // If property not found, show 404
  if (!property) {
    notFound();
  }

  return <PropertyDetailClient property={property} />;
}

