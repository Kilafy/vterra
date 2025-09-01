"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface HeroSectionProps {
  language: "en" | "es";
}

export default function HeroSection({ language }: HeroSectionProps) {
  const content = {
    en: {
      title: "Vterra – Real Estate & Hospitality Solutions",
      subtitle: "Real estate solutions for a world in motion.",
      cta: "View Service Portfolio",
    },
    es: {
      title: "Vterra – Soluciones Inmobiliarias y de Hospitalidad",
      subtitle: "Soluciones inmobiliarias para un mundo en movimiento.",
      cta: "Ver Portafolio de Servicios",
    },
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleVideoReady = () => setVideoReady(true);

      // Si el video ya está listo (por ejemplo, en caché)
      if (video.readyState >= 3) {
        setVideoReady(true);
      }

      video.addEventListener("loadeddata", handleVideoReady);
      video.addEventListener("canplay", handleVideoReady);

      return () => {
        video.removeEventListener("loadeddata", handleVideoReady);
        video.removeEventListener("canplay", handleVideoReady);
      };
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-16">
      {/* Background Video */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/modern-glass-office.png"
          aria-hidden="true">
          <source
            src="/videos/hero-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {content[language].title}
        </h1>
        <p className="font-sans text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          {content[language].subtitle}
        </p>
        <Button
          onClick={scrollToServices}
          size="lg"
          className="bg-black hover:bg-black/80 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
          {content[language].cta}
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white" />
      </div>
    </section>
  );
}
