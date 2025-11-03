"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Home, Search, Filter, Car } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-context";
import type { Property } from "@/types/sanity";
import { getImageUrl } from "@/sanity/image";

function toM2(sqft: number) {
  return Math.round(sqft * 0.092903);
}

interface PropertiesFilterClientProps {
  properties: Property[];
}

export default function PropertiesFilterClient({ properties }: PropertiesFilterClientProps) {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterLocation, setFilterLocation] = useState("all");
  const [filterPriceRange, setFilterPriceRange] = useState("all");
  const [filterBedrooms, setFilterBedrooms] = useState("all");
  const [filterBathrooms, setFilterBathrooms] = useState("all");
  const [filterAreaRange, setFilterAreaRange] = useState("all");
  const [filterParking, setFilterParking] = useState("all");

  // Extract unique locations from properties
  const uniqueLocations = Array.from(
    new Set(properties.map((p) => `${p.location.city}, ${p.location.state || p.location.country}`))
  ).sort();

  const content = {
    en: {
      search: "Search properties...",
      filterType: "Property Type",
      filterLocation: "Location",
      filterPrice: "Price Range",
      filterBedrooms: "Bedrooms",
      filterBathrooms: "Bathrooms",
      filterArea: "Area Range",
      allTypes: "All Types",
      allLocations: "All Locations",
      allPrices: "All Prices",
      allBedrooms: "Any Bedrooms",
      allBathrooms: "Any Bathrooms",
      allAreas: "All Areas",
      parking: "Parking",
      allParking: "Any Parking",
      withParking: "With Parking",
      withoutParking: "Without Parking",
      clearFilters: "Clear All Filters",
      noResults: "No properties found matching your criteria.",
      location: "Location",
      price: "Price",
      type: "Type",
      bedrooms: "Bedrooms",
      bathrooms: "Bathrooms",
      area: "Area",
    },
    es: {
      search: "Buscar propiedades...",
      filterType: "Tipo de Propiedad",
      filterLocation: "Ubicación",
      filterPrice: "Rango de Precio",
      filterBedrooms: "Habitaciones",
      filterBathrooms: "Baños",
      filterArea: "Rango de Área",
      allTypes: "Todos los Tipos",
      allLocations: "Todas las Ubicaciones",
      allPrices: "Todos los Precios",
      allBedrooms: "Cualquier Habitación",
      allBathrooms: "Cualquier Baño",
      allAreas: "Todas las Áreas",
      parking: "Parqueadero",
      allParking: "Cualquier Parqueadero",
      withParking: "Con Parqueadero",
      withoutParking: "Sin Parqueadero",
      clearFilters: "Limpiar Filtros",
      noResults: "No se encontraron propiedades que coincidan con tus criterios.",
      location: "Ubicación",
      price: "Precio",
      type: "Tipo",
      bedrooms: "Habitaciones",
      bathrooms: "Baños",
      area: "Área",
    },
  } as const;

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      (language === "en" ? property.title_en : property.title_es)
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      property.location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.country.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterType === "all" || property.type.toLowerCase() === filterType.toLowerCase();

    const propertyLocation = `${property.location.city}, ${property.location.state || property.location.country}`;
    const matchesLocation = filterLocation === "all" || propertyLocation === filterLocation;

    const matchesPrice = (() => {
      if (filterPriceRange === "all") return true;
      const price = property.price;
      switch (filterPriceRange) {
        case "under-500k":
          return price < 500000;
        case "500k-1m":
          return price >= 500000 && price < 1000000;
        case "1m-2m":
          return price >= 1000000 && price < 2000000;
        case "over-2m":
          return price >= 2000000;
        default:
          return true;
      }
    })();

    const matchesBedrooms = (() => {
      if (filterBedrooms === "all") return true;
      if (filterBedrooms === "studio") return property.bedrooms === 0;
      return property.bedrooms === parseInt(filterBedrooms);
    })();

    const matchesBathrooms = (() => {
      if (filterBathrooms === "all") return true;
      return property.bathrooms === parseInt(filterBathrooms);
    })();

    const matchesArea = (() => {
      if (filterAreaRange === "all") return true;
      const area = property.area;
      switch (filterAreaRange) {
        case "under-1500":
          return area < 1500;
        case "1500-3000":
          return area >= 1500 && area < 3000;
        case "3000-5000":
          return area >= 3000 && area < 5000;
        case "over-5000":
          return area >= 5000;
        default:
          return true;
      }
    })();

    const matchesParking = (() => {
      if (filterParking === "all") return true;
      return filterParking === "yes" ? !!property.parking : !property.parking;
    })();

    return (
      matchesSearch &&
      matchesType &&
      matchesLocation &&
      matchesPrice &&
      matchesBedrooms &&
      matchesBathrooms &&
      matchesArea &&
      matchesParking
    );
  });

  const clearAllFilters = () => {
    setSearchTerm("");
    setFilterType("all");
    setFilterLocation("all");
    setFilterPriceRange("all");
    setFilterBedrooms("all");
    setFilterBathrooms("all");
    setFilterAreaRange("all");
    setFilterParking("all");
  };

  // Helper function to format property type
  const formatType = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <>
      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        {/* Search */}
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder={content[language].search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Filters row (horizontal scroll) */}
        <div className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:'none'] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="shrink-0">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger>
                <SelectValue placeholder={content[language].filterType} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{content[language].allTypes}</SelectItem>
                <SelectItem value="condominium">Condominium</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="shrink-0">
            <Select value={filterLocation} onValueChange={setFilterLocation}>
              <SelectTrigger>
                <SelectValue placeholder={content[language].filterLocation} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{content[language].allLocations}</SelectItem>
                {uniqueLocations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="shrink-0">
            <Select value={filterParking} onValueChange={setFilterParking}>
              <SelectTrigger>
                <SelectValue placeholder={content[language].parking} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{content[language].allParking}</SelectItem>
                <SelectItem value="yes">{content[language].withParking}</SelectItem>
                <SelectItem value="no">{content[language].withoutParking}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="shrink-0">
            <Select value={filterPriceRange} onValueChange={setFilterPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder={content[language].filterPrice} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{content[language].allPrices}</SelectItem>
                <SelectItem value="under-500k">{language === "en" ? "Under $500K" : "Menos de $500K"}</SelectItem>
                <SelectItem value="500k-1m">{language === "en" ? "$500K - $1M" : "$500K - $1M"}</SelectItem>
                <SelectItem value="1m-2m">{language === "en" ? "$1M - $2M" : "$1M - $2M"}</SelectItem>
                <SelectItem value="over-2m">{language === "en" ? "Over $2M" : "Más de $2M"}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="shrink-0">
            <Select value={filterBedrooms} onValueChange={setFilterBedrooms}>
              <SelectTrigger>
                <SelectValue placeholder={content[language].filterBedrooms} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{content[language].allBedrooms}</SelectItem>
                <SelectItem value="studio">{language === "en" ? "Studio" : "Estudio"}</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="shrink-0">
            <Select value={filterBathrooms} onValueChange={setFilterBathrooms}>
              <SelectTrigger>
                <SelectValue placeholder={content[language].filterBathrooms} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{content[language].allBathrooms}</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="shrink-0">
            <Select value={filterAreaRange} onValueChange={setFilterAreaRange}>
              <SelectTrigger>
                <SelectValue placeholder={content[language].filterArea} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{content[language].allAreas}</SelectItem>
                <SelectItem value="under-1500">
                  {language === "en" ? "Under 1,500 sq ft" : "Menos de 140 m²"}
                </SelectItem>
                <SelectItem value="1500-3000">
                  {language === "en" ? "1,500 - 3,000 sq ft" : "140 - 280 m²"}
                </SelectItem>
                <SelectItem value="3000-5000">
                  {language === "en" ? "3,000 - 5,000 sq ft" : "280 - 465 m²"}
                </SelectItem>
                <SelectItem value="over-5000">{language === "en" ? "Over 5,000 sq ft" : "Más de 465 m²"}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="shrink-0">
            <Button
              variant="outline"
              onClick={clearAllFilters}
              className="text-black border-black hover:bg-black hover:text-white transition-colors duration-200"
            >
              {content[language].clearFilters}
            </Button>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      {filteredProperties.length === 0 ? (
        <div className="text-center py-12">
          <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">{content[language].noResults}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProperties.map((property) => {
            const imageUrl = getImageUrl(property.images?.[0], 600, 400);

            return (
              <Link key={property._id} href={`/properties/${property.slug.current}`} className="group">
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-700 hover:transform hover:scale-[1.02] flex flex-col pt-0">
                  <div className="relative h-72 overflow-hidden rounded-t-xl">
                    <Image 
                      src={imageUrl} 
                      alt={language === "en" ? property.title_en : property.title_es} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-serif text-lg">
                      {language === "en" ? property.title_en : property.title_es}
                    </CardTitle>
                    <CardDescription className="font-semibold text-black text-lg">
                      ${property.price.toLocaleString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">
                          {property.location.city}, {property.location.country}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Home className="h-4 w-4 mr-2" />
                        <span className="text-sm">{formatType(property.type)}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Car className="h-4 w-4 mr-2" />
                        <span className="text-sm">
                          {language === "en" ? "Parking" : "Parqueadero"}:{" "}
                          {property.parking
                            ? language === "en"
                              ? "Yes"
                              : "Sí"
                            : language === "en"
                              ? "No"
                              : "No"}
                        </span>
                      </div>
                      {property.bedrooms > 0 && (
                        <div className="grid grid-cols-3 gap-2 text-sm text-gray-600 mt-3">
                          <div>
                            {property.bedrooms} {content[language].bedrooms}
                          </div>
                          <div>
                            {property.bathrooms} {content[language].bathrooms}
                          </div>
                          <div>
                            {language === "en"
                              ? `${property.area.toLocaleString()} sq ft`
                              : `${toM2(property.area).toLocaleString()} m²`}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
