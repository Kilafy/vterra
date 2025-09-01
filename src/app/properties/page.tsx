"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Home, Search, Filter, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function PropertiesPage() {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterLocation, setFilterLocation] = useState("all");
  const [filterPriceRange, setFilterPriceRange] = useState("all");
  const [filterBedrooms, setFilterBedrooms] = useState("all");
  const [filterBathrooms, setFilterBathrooms] = useState("all");
  const [filterAreaRange, setFilterAreaRange] = useState("all");

  const content = {
    en: {
      title: "Properties Catalog",
      subtitle:
        "Explore our complete portfolio of premium real estate opportunities",
      backHome: "Back to Home",
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
      title: "Catálogo de Propiedades",
      subtitle:
        "Explora nuestro portafolio completo de oportunidades inmobiliarias premium",
      backHome: "Volver al Inicio",
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
      clearFilters: "Limpiar Filtros",
      noResults:
        "No se encontraron propiedades que coincidan con tus criterios.",
      location: "Ubicación",
      price: "Precio",
      type: "Tipo",
      bedrooms: "Habitaciones",
      bathrooms: "Baños",
      area: "Área",
    },
  };

  // Sample properties data - this will be replaced with Sanity CMS data
  const sampleProperties = [
    {
      id: 1,
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
      area: 1200,
      areaFormatted: "1,200 sq ft",
      image: "/images/placeholder-gimsf.png",
    },
    {
      id: 2,
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
      area: 2800,
      areaFormatted: "2,800 sq ft",
      image: "/images/placeholder-f1zat.png",
    },
    {
      id: 3,
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
      area: 15000,
      areaFormatted: "15,000 sq ft",
      image: "/images/placeholder-q8ouh.png",
    },
    {
      id: 4,
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
      area: 2100,
      areaFormatted: "2,100 sq ft",
      image: "/images/luxury-beachfront-penthouse.png",
    },
    {
      id: 5,
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
      area: 2200,
      areaFormatted: "2,200 sq ft",
      image: "/images/family-house-garden-patio.png",
    },
    {
      id: 6,
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
      area: 25000,
      areaFormatted: "25,000 sq ft",
      image: "/images/modern-glass-office.png",
    },
  ];

  const filteredProperties = sampleProperties.filter((property) => {
    const matchesSearch =
      (language === "en" ? property.title : property.titleEs)
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      filterType === "all" ||
      property.type.toLowerCase() === filterType.toLowerCase();

    const matchesLocation =
      filterLocation === "all" || property.location.includes(filterLocation);

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

    return (
      matchesSearch &&
      matchesType &&
      matchesLocation &&
      matchesPrice &&
      matchesBedrooms &&
      matchesBathrooms &&
      matchesArea
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
  };

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLanguage} />

      {/* Back to Home Button */}
      <div className="pt-20 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-block hover:opacity-80 transition-opacity duration-200">
            <Button
              variant="ghost"
              size="sm"
              className="text-black hover:bg-black/5 transition-colors duration-200">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {content[language].backHome}
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h1>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          {/* First Row - Search and Primary Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder={content[language].search}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger>
                <SelectValue placeholder={content[language].filterType} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {content[language].allTypes}
                </SelectItem>
                <SelectItem value="condominium">Condominium</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterLocation} onValueChange={setFilterLocation}>
              <SelectTrigger>
                <SelectValue placeholder={content[language].filterLocation} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {content[language].allLocations}
                </SelectItem>
                <SelectItem value="Miami">Miami, FL</SelectItem>
                <SelectItem value="Orlando">Orlando, FL</SelectItem>
                <SelectItem value="Tampa">Tampa, FL</SelectItem>
                <SelectItem value="Medellín">Medellín, Colombia</SelectItem>
                <SelectItem value="Cartagena">Cartagena, Colombia</SelectItem>
                <SelectItem value="Bogotá">Bogotá, Colombia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Second Row - Additional Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Select
              value={filterPriceRange}
              onValueChange={setFilterPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder={content[language].filterPrice} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {content[language].allPrices}
                </SelectItem>
                <SelectItem value="under-500k">
                  {language === "en" ? "Under $500K" : "Menos de $500K"}
                </SelectItem>
                <SelectItem value="500k-1m">
                  {language === "en" ? "$500K - $1M" : "$500K - $1M"}
                </SelectItem>
                <SelectItem value="1m-2m">
                  {language === "en" ? "$1M - $2M" : "$1M - $2M"}
                </SelectItem>
                <SelectItem value="over-2m">
                  {language === "en" ? "Over $2M" : "Más de $2M"}
                </SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterBedrooms} onValueChange={setFilterBedrooms}>
              <SelectTrigger>
                <SelectValue placeholder={content[language].filterBedrooms} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {content[language].allBedrooms}
                </SelectItem>
                <SelectItem value="studio">
                  {language === "en" ? "Studio" : "Estudio"}
                </SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterBathrooms} onValueChange={setFilterBathrooms}>
              <SelectTrigger>
                <SelectValue placeholder={content[language].filterBathrooms} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {content[language].allBathrooms}
                </SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterAreaRange} onValueChange={setFilterAreaRange}>
              <SelectTrigger>
                <SelectValue placeholder={content[language].filterArea} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {content[language].allAreas}
                </SelectItem>
                <SelectItem value="under-1500">
                  {language === "en"
                    ? "Under 1,500 sq ft"
                    : "Menos de 1,500 pies²"}
                </SelectItem>
                <SelectItem value="1500-3000">
                  {language === "en"
                    ? "1,500 - 3,000 sq ft"
                    : "1,500 - 3,000 pies²"}
                </SelectItem>
                <SelectItem value="3000-5000">
                  {language === "en"
                    ? "3,000 - 5,000 sq ft"
                    : "3,000 - 5,000 pies²"}
                </SelectItem>
                <SelectItem value="over-5000">
                  {language === "en"
                    ? "Over 5,000 sq ft"
                    : "Más de 5,000 pies²"}
                </SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              onClick={clearAllFilters}
              className="text-black border-black hover:bg-black hover:text-white transition-colors duration-200">
              {content[language].clearFilters}
            </Button>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">
              {content[language].noResults}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <Card
                key={property.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={property.image}
                    alt={language === "en" ? property.title : property.titleEs}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-lg">
                    {language === "en" ? property.title : property.titleEs}
                  </CardTitle>
                  <CardDescription className="font-semibold text-black text-lg">
                    {property.priceFormatted}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Home className="h-4 w-4 mr-2" />
                      <span className="text-sm">
                        {language === "en" ? property.type : property.typeEs}
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
                        <div>{property.areaFormatted}</div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* CMS Integration Note */}
        {/* Placeholder retained for future CMS wiring without colored accents */}
      </div>
    </div>
  );
}
