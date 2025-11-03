import HomeClient from "@/components/home-client";
import { client } from "@/sanity/client";
import { FEATURED_PROPERTIES_QUERY } from "@/sanity/queries";
import type { Property } from "@/types/sanity";

// Enable ISR - revalidate every 60 seconds
export const revalidate = 60;

export default async function HomePage() {
  // Fetch featured properties from Sanity
  const featuredProperties = await client.fetch<Property[]>(
    FEATURED_PROPERTIES_QUERY,
    {},
    { next: { revalidate: 60 } }
  );

  return <HomeClient featuredProperties={featuredProperties} />;
}
