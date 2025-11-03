import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import PropertiesFilterClient from "@/components/properties-filter-client";
import { client } from "@/sanity/client";
import { PROPERTIES_QUERY } from "@/sanity/queries";
import type { Property } from "@/types/sanity";

// Enable ISR - revalidate every 60 seconds
export const revalidate = 60;

export default async function PropertiesPage() {
  // Fetch properties from Sanity
  const properties = await client.fetch<Property[]>(PROPERTIES_QUERY, {}, { next: { revalidate: 60 } });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Back to Home Button */}
      <div className="pt-20 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-block hover:opacity-80 transition-opacity duration-200">
            <Button variant="ghost" size="sm" className="text-black hover:bg-black/5 transition-colors duration-200">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Properties Catalog</h1>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our complete portfolio of premium real estate opportunities
          </p>
        </div>

        {/* Pass properties to client component for filtering */}
        <PropertiesFilterClient properties={properties} />
      </div>
    </div>
  );
}
