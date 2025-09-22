import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, DollarSign, Home, ArrowRight, Car } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-context";
import { properties } from "@/data/properties";

export default function PropertiesSection() {
  const { language } = useLanguage();
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
      subtitle: "Descubre oportunidades inmobiliarias premium en mercados clave",
      viewCatalog: "Ver Catálogo Completo",
      featured: "Propiedades Destacadas",
      location: "Ubicación",
      price: "Precio",
      type: "Tipo",
    },
  } as const;

  const featured = properties.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="properties" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content[language].title}</h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto mb-8">{content[language].subtitle}</p>
          <Link href="/properties">
            <Button size="lg" className="bg-black hover:bg-black/80 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              {content[language].viewCatalog}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div>
          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-8 text-center">{content[language].featured}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {featured.map((property) => (
              <Link key={property.id} href={`/properties/${property.slug}`}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <div className="relative h-48">
                    <Image src={property.image} alt={language === "en" ? property.title : property.titleEs} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-serif text-lg">{language === "en" ? property.title : property.titleEs}</CardTitle>
                    <div className="font-semibold text-black text-lg">{property.priceFormatted}</div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Home className="h-4 w-4 mr-2" />
                        <span className="text-sm">{language === "en" ? property.type : property.typeEs}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Car className="h-4 w-4 mr-2" />
                        <span className="text-sm">{language === "en" ? "Parking" : "Parqueadero"}: {property.parking ? (language === "en" ? "Yes" : "Sí") : (language === "en" ? "No" : "No")}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

