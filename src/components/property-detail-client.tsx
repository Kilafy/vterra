"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { useLanguage } from "@/components/language-context";
import { Button } from "@/components/ui/button";
import { MapPin, Home, BedDouble, Bath, Square, ArrowLeft, Car, CheckCircle, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import type { Property } from "@/types/sanity";
import { urlFor } from "@/sanity/image";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { useState, useEffect } from "react";

function toM2(sqft: number) {
  return Math.round(sqft * 0.092903);
}

export default function PropertyDetailClient({ property }: { property: Property }) {
  const { language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const title = language === "en" ? property.title_en : property.title_es;
  const type = property.type.charAt(0).toUpperCase() + property.type.slice(1);
  const description = language === "en" ? property.description_en : property.description_es;
  
  // Prepare all images for the gallery
  const allImages = property.images?.length
    ? property.images.map((img) => ({
        url: urlFor(img.asset).width(1920).height(1080).quality(90).url(),
        caption: language === "en" ? img.caption_en : img.caption_es,
      }))
    : [{ url: "/images/placeholder-gimsf.png", caption: title }];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") previousImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allImages.length]);

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

      {/* Property Header with Title */}
      <div className="bg-gradient-to-b from-vterra-stone/5 to-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-3 text-gray-900">{title}</h1>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-5 w-5 text-vterra-terracotta" />
            <p className="text-lg font-medium">
              {property.location.city}, {property.location.country}
            </p>
          </div>
        </div>
      </div>

      {/* Image Gallery Carousel */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative group">
            {/* Main Image Container */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-2xl">
              <Image
                src={allImages[currentImageIndex].url}
                alt={allImages[currentImageIndex].caption || title}
                fill
                className="object-cover"
                priority
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Zoom Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg backdrop-blur-sm"
                aria-label="View full screen"
              >
                <Maximize2 className="h-5 w-5" />
              </button>
              
              {/* Navigation Arrows */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
              
              {/* Image Counter */}
              {allImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  {currentImageIndex + 1} / {allImages.length}
                </div>
              )}
            </div>
            
            {/* Thumbnail Grid */}
            {allImages.length > 1 && (
              <div className="mt-4 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                {allImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentImageIndex
                        ? "ring-4 ring-vterra-gold scale-105 shadow-lg"
                        : "ring-2 ring-gray-200 hover:ring-vterra-gold/50 opacity-70 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <Image
                      src={img.url}
                      alt={img.caption || `${title} - ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={(e) => {
            // Close modal when clicking on the background
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          {/* Close Button - Outside the image container */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
          
          {/* Image Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={allImages[currentImageIndex].url}
              alt={allImages[currentImageIndex].caption || title}
              fill
              className="object-contain pointer-events-none"
              quality={100}
            />
          </div>
          
          {/* Navigation in Modal */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  previousImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
              
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-medium">
                {currentImageIndex + 1} / {allImages.length}
              </div>
            </>
          )}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Key facts */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg border p-4">
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <Home className="w-4 h-4" />
                {language === "en" ? "Type" : "Tipo"}
              </div>
              <div className="font-semibold">{type}</div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {language === "en" ? "Location" : "Ubicación"}
              </div>
              <div className="font-semibold">
                {property.location.city}, {property.location.country}
              </div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <BedDouble className="w-4 h-4" />
                {language === "en" ? "Bedrooms" : "Habitaciones"}
              </div>
              <div className="font-semibold">{property.bedrooms}</div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <Bath className="w-4 h-4" />
                {language === "en" ? "Bathrooms" : "Baños"}
              </div>
              <div className="font-semibold">{property.bathrooms}</div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <Square className="w-4 h-4" />
                {language === "en" ? "Area" : "Área"}
              </div>
              <div className="font-semibold">
                {language === "en"
                  ? `${property.area.toLocaleString()} sq ft`
                  : `${toM2(property.area).toLocaleString()} m²`}
              </div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <Car className="w-4 h-4" />
                {language === "en" ? "Parking" : "Parqueadero"}
              </div>
              <div className="font-semibold">
                {property.parking ? (language === "en" ? "Yes" : "Sí") : language === "en" ? "No" : "No"}
              </div>
            </div>
          </div>

          {/* Description */}
          {description && description.length > 0 && (
            <div className="bg-white rounded-lg border p-6">
              <h2 className="font-serif text-xl mb-3">{language === "en" ? "Description" : "Descripción"}</h2>
              <div className="text-gray-700 leading-relaxed prose prose-lg max-w-none">
                <PortableText value={description as PortableTextBlock[]} />
              </div>
            </div>
          )}

          {/* Amenities */}
          {property.amenities && property.amenities.length > 0 && (
            <div className="bg-white rounded-lg border p-6">
              <h2 className="font-serif text-xl mb-4">{language === "en" ? "Amenities" : "Amenidades"}</h2>
              <div className="grid grid-cols-2 gap-3">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <div className="bg-white rounded-lg border p-6">
            <div className="text-gray-500 text-sm mb-1">{language === "en" ? "Asking Price" : "Precio"}</div>
            <div className="text-2xl font-bold">${property.price.toLocaleString()}</div>
            <div className="mt-4 text-sm text-gray-600">
              <div className="flex justify-between py-2 border-b">
                <span>{language === "en" ? "Status" : "Estado"}</span>
                <span className="font-semibold capitalize">{property.status.replace("-", " ")}</span>
              </div>
            </div>
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

