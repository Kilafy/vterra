"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { useLanguage } from "@/components/language-context";
import { Button } from "@/components/ui/button";
import { MapPin, Home, BedDouble, Bath, Square, ArrowLeft, Car } from "lucide-react";
import type { Property } from "@/data/properties";

function toM2(sqft: number) {
  return Math.round(sqft * 0.092903);
}

export default function PropertyDetailClient({ property }: { property: Property | undefined }) {
  const { language } = useLanguage();

  if (!property) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-24 text-center">Property not found.</div>
      </div>
    );
  }

  const title = language === "en" ? property.title : property.titleEs;
  const type = language === "en" ? property.type : property.typeEs;
  const description = language === "en" ? property.descriptionEn : property.descriptionEs;

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/properties" className="inline-block hover:opacity-80 transition-opacity duration-200">
            <Button variant="ghost" size="sm" className="text-black hover:bg-black/5 transition-colors duration-200">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {language === "en" ? "Back to Catalog" : "Volver al Catálogo"}
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-[45vh] w-full">
        <Image src={property.image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 text-white">
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-2">{title}</h1>
            <p className="text-lg opacity-90">{property.location}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Key facts */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg border p-4">
              <div className="text-sm text-gray-500 flex items-center gap-2"><Home className="w-4 h-4" />{language === "en" ? "Type" : "Tipo"}</div>
              <div className="font-semibold">{type}</div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <div className="text-sm text-gray-500 flex items-center gap-2"><MapPin className="w-4 h-4" />{language === "en" ? "Location" : "Ubicación"}</div>
              <div className="font-semibold">{property.location}</div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <div className="text-sm text-gray-500 flex items-center gap-2"><BedDouble className="w-4 h-4" />{language === "en" ? "Bedrooms" : "Habitaciones"}</div>
              <div className="font-semibold">{property.bedrooms}</div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <div className="text-sm text-gray-500 flex items-center gap-2"><Bath className="w-4 h-4" />{language === "en" ? "Bathrooms" : "Baños"}</div>
              <div className="font-semibold">{property.bathrooms}</div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <div className="text-sm text-gray-500 flex items-center gap-2"><Square className="w-4 h-4" />{language === "en" ? "Area" : "Área"}</div>
              <div className="font-semibold">{language === "en" ? `${property.areaSqFt.toLocaleString()} sq ft` : `${toM2(property.areaSqFt).toLocaleString()} m²`}</div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <div className="text-sm text-gray-500 flex items-center gap-2"><Car className="w-4 h-4" />{language === "en" ? "Parking" : "Parqueadero"}</div>
              <div className="font-semibold">{property.parking ? (language === "en" ? "Yes" : "Sí") : (language === "en" ? "No" : "No")}</div>
            </div>
          </div>

          {/* Description */}
          {description && (
            <div className="bg-white rounded-lg border p-6">
              <h2 className="font-serif text-xl mb-3">{language === "en" ? "Description" : "Descripción"}</h2>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <div className="bg-white rounded-lg border p-6">
            <div className="text-gray-500 text-sm mb-1">{language === "en" ? "Asking Price" : "Precio"}</div>
            <div className="text-2xl font-bold">{property.priceFormatted}</div>
          </div>
          <a href="https://wa.me/573104591255" target="_blank" rel="noreferrer">
            <Button className="w-full bg-black hover:bg-black/80 text-white">
              {language === "en" ? "Start the Conversation" : "Iniciar la conversación"}
            </Button>
          </a>
        </aside>
      </div>
    </div>
  );
}

