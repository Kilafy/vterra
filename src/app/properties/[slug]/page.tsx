import PropertyDetailClient from "@/components/property-detail-client";
import { getPropertyBySlug } from "@/data/properties";

export default async function PropertyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  return <PropertyDetailClient property={property} />;
}

