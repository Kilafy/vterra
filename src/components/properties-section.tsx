import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, DollarSign, Home, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PropertiesSectionProps {
  language: "en" | "es";
}

export default function PropertiesSection({
  language,
}: PropertiesSectionProps) {
  const content = {
    en: {
      title: "Properties for Sale",
      subtitle: "Discover premium real estate opportunities in key markets",
      viewCatalog: "View Complete Catalog",
      featured: "Featured Properties",
      location: "Location",
      price: "Price",
      type: "Type",
    },
    es: {
      title: "Propiedades en Venta",
      subtitle:
        "Descubre oportunidades inmobiliarias premium en mercados clave",
      viewCatalog: "Ver Catálogo Completo",
      featured: "Propiedades Destacadas",
      location: "Ubicación",
      price: "Precio",
      type: "Tipo",
    },
  };

  // Sample properties data - this will be replaced with Sanity CMS data
  const sampleProperties = [
    {
      id: 1,
      title: "Modern Downtown Condo",
      titleEs: "Condominio Moderno en el Centro",
      location: "Miami, FL",
      price: "$850,000",
      type: "Condominium",
      typeEs: "Condominio",
      image: "/images/placeholder-gimsf.png",
    },
    {
      id: 2,
      title: "Luxury Villa with Pool",
      titleEs: "Villa de Lujo con Piscina",
      location: "Medellín, Colombia",
      price: "$420,000",
      type: "Villa",
      typeEs: "Villa",
      image: "/images/placeholder-f1zat.png",
    },
    {
      id: 3,
      title: "Investment Apartment Complex",
      titleEs: "Complejo de Apartamentos de Inversión",
      location: "Orlando, FL",
      price: "$1,200,000",
      type: "Commercial",
      typeEs: "Comercial",
      image: "/images/placeholder-q8ouh.png",
    },
  ];

  return (
    <section id="properties" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {content[language].subtitle}
          </p>
          <Link href="/properties">
            <Button
              size="lg"
              className="bg-black hover:bg-black/80 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              {content[language].viewCatalog}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div>
          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-8 text-center">
            {content[language].featured}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProperties.map((property) => (
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
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">
                        {content[language].location}: {property.location}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2" />
                      <span className="text-sm font-semibold text-black">
                        {property.price}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Home className="h-4 w-4 mr-2" />
                      <span className="text-sm">
                        {content[language].type}:{" "}
                        {language === "en" ? property.type : property.typeEs}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
