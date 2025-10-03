"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, DollarSign, Home, ArrowRight, Car, Bath, Bed } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-context";
import { properties } from "@/data/properties";
import { useEffect, useRef } from "react";

export default function PropertiesSection() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const content = {
    en: {
      title: "Properties for Sale",
      subtitle: "Curated collection of premium properties",
      description: "Each property in our portfolio represents an investment in luxury, quality, and exceptional lifestyle. Discover spaces that embody sophistication and comfort.",
      viewCatalog: "Explore Complete Portfolio",
      featured: "Featured Properties",
      location: "Location",
      price: "Price",
      type: "Type",
      exclusiveTag: "Exclusive",
      viewDetails: "View Details"
    },
    es: {
      title: "Propiedades en Venta",
      subtitle: "Colección curada de propiedades premium",
      description: "Cada propiedad en nuestro portafolio representa una inversión en lujo, calidad y estilo de vida excepcional. Descubre espacios que encarnan sofisticación y comodidad.",
      viewCatalog: "Explorar Portafolio Completo", 
      featured: "Propiedades Destacadas",
      location: "Ubicación",
      price: "Precio",
      type: "Tipo",
      exclusiveTag: "Exclusiva",
      viewDetails: "Ver Detalles"
    },
  } as const;

  const featured = properties.filter((p) => p.featured).slice(0, 3);

  return (
    <section 
      ref={sectionRef}
      id="properties" 
      className="py-24 bg-gradient-to-b from-white to-vterra-stone/5 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-20 w-40 h-40 border-2 border-vterra-wood/30 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-20 w-28 h-28 border-2 border-vterra-gold/30 rounded-full animate-pulse delay-1000"></div>
        {/* Vertical Lines */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-vterra-wood/40 to-transparent"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-40 bg-gradient-to-t from-transparent via-vterra-wood/40 to-transparent"></div>
        {/* Horizontal Lines */}
        <div className="absolute top-1/2 left-0 h-px w-24 bg-gradient-to-r from-transparent via-vterra-wood/40 to-transparent"></div>
        <div className="absolute top-1/3 right-0 h-px w-32 bg-gradient-to-l from-transparent via-vterra-wood/40 to-transparent"></div>
        {/* Floating Blur Elements */}
        <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-vterra-wood/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-vterra-terracotta/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-px bg-vterra-gold"></div>
            <span className="text-vterra-olive font-medium tracking-widest uppercase text-sm">
              {content[language].subtitle}
            </span>
            <div className="w-16 h-px bg-vterra-gold"></div>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {content[language].title}
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
            {content[language].description}
          </p>

          <Link href="/properties">
            <Button 
              size="lg" 
              className="bg-vterra-wood hover:bg-vterra-olive text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-vterra-wood/20 hover:border-vterra-olive/30"
            >
              {content[language].viewCatalog}
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Featured Properties Grid */}
        <div className="animate-on-scroll">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-vterra-olive rounded-full"></div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                {content[language].featured}
              </h3>
              <div className="w-3 h-3 bg-vterra-olive rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {featured.map((property, index) => (
              <div 
                key={property.id} 
                className="animate-on-scroll group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Link href={`/properties/${property.slug}`}>
                  <Card className="h-full pt-0 overflow-hidden hover:shadow-2xl transition-all duration-700 flex flex-col bg-white border-vterra-stone/20 group-hover:border-vterra-gold/40 group-hover:transform group-hover:scale-[1.02] rounded-xl">
                    <div className="relative h-72 overflow-hidden rounded-t-xl">
                      <Image 
                        src={property.image} 
                        alt={language === "en" ? property.title : property.titleEs} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      
                      {/* Exclusive Badge */}
                      <div className="absolute top-4 right-4 bg-vterra-gold backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                        {content[language].exclusiveTag}
                      </div>
                      
                      {/* Price Overlay */}
                      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-lg border border-white/20">
                        <div className="font-serif font-bold text-gray-900 text-lg">
                          {property.priceFormatted}
                        </div>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="font-serif text-xl font-bold text-gray-900 group-hover:text-vterra-olive transition-colors duration-300">
                        {language === "en" ? property.title : property.titleEs}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-1 pt-0">
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <MapPin className="h-4 w-4 mr-3 text-vterra-terracotta" />
                          <span className="text-sm font-medium">{property.location}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <Home className="h-4 w-4 mr-3 text-vterra-olive" />
                          <span className="text-sm font-medium">{language === "en" ? property.type : property.typeEs}</span>
                        </div>
                        
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center space-x-4 text-gray-500">
                            <div className="flex items-center">
                              <Bed className="h-4 w-4 mr-1" />
                              <span className="text-xs">3</span>
                            </div>
                            <div className="flex items-center">
                              <Bath className="h-4 w-4 mr-1" />
                              <span className="text-xs">2</span>
                            </div>
                            <div className="flex items-center">
                              <Car className="h-4 w-4 mr-1" />
                              <span className="text-xs">{property.parking ? "2" : "0"}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* View Details Button */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between text-vterra-olive group-hover:text-vterra-gold transition-colors duration-300">
                          <span className="font-medium text-sm">{content[language].viewDetails}</span>
                          <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}

