"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const { language } = useLanguage();
  const content = {
    en: {
      subtitle: "VTERRA",
      title: "Real Estate Solutions for a World in Motion",
      description: "An integrated ecosystem that empowers real estate professionals, investors, and hospitality entrepreneurs across borders.",
      highlight: "From Medellín to the U.S., we build intelligent, scalable solutions that transform how you do business.",
      cta: "Discover Our Services",
      ctaSecondary: "Learn More",
    },
    es: {
      subtitle: "VTERRA", 
      title: "Soluciones inmobiliarias para un mundo en movimiento",
      description: "Un ecosistema integrado que empodera a profesionales inmobiliarios, inversionistas y emprendedores de hospitalidad a través de fronteras.",
      highlight: "Desde Medellín hasta EE.UU., construimos soluciones inteligentes y escalables que transforman tu manera de hacer negocios.",
      cta: "Descubre Nuestros Servicios",
      ctaSecondary: "Conoce Más",
    },
  } as const;

  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const ready = () => setVideoReady(true);
    if (video.readyState >= 3) setVideoReady(true);
    video.addEventListener("loadeddata", ready);
    video.addEventListener("canplay", ready);
    return () => {
      video.removeEventListener("loadeddata", ready);
      video.removeEventListener("canplay", ready);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden scroll-mt-16 bg-vterra-cream">
      {/* Main Content Grid */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Subtitle */}
              <div className="space-y-2">
                <p className="font-sans text-sm md:text-base tracking-[0.3em] text-vterra-wood font-medium uppercase">
                  {content[language].subtitle}
                </p>
                <div className="w-12 h-px bg-vterra-gold"></div>
              </div>

              {/* Main Title */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight">
                {content[language].title}
              </h1>

              {/* Description */}
              <p className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
                {content[language].description}
              </p>

              {/* Highlight Text */}
              <p className="font-sans text-base text-vterra-wood leading-relaxed italic max-w-lg border-l-2 border-vterra-gold pl-6">
                {content[language].highlight}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-gray-900 hover:bg-vterra-wood text-white font-medium px-8 py-4 transition-colors duration-300"
                >
                  {content[language].cta}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-medium px-8 py-4 transition-colors duration-300"
                >
                  {content[language].ctaSecondary}
                </Button>
              </div>
            </div>

            {/* Right Visual Content */}
            <div className="relative lg:h-[600px]">
              {/* Main Image */}
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-tr-[120px] rounded-bl-[120px]">
                <div className={`absolute inset-0 transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}>
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster="/images/modern-glass-office.png"
                    aria-hidden="true"
                  >
                    <source src="/videos/hero-video.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-br from-vterra-wood/20 to-gray-900/30" />
                </div>
              </div>

              {/* Floating Accent Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-vterra-gold rounded-full opacity-20 hidden lg:block"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-vterra-olive rounded-full opacity-15 hidden lg:block"></div>
              
              {/* Secondary Image */}
              <div className="absolute bottom-0 left-[-16px] w-96 h-64 bg-vterra-stone/30 rounded-tl-[60px] hidden lg:block overflow-hidden">
                <img 
                  src="/images/family-house-garden-patio.png" 
                  alt="Property detail" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-vterra-wood" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-8 w-2 h-16 bg-vterra-gold/40 hidden xl:block"></div>
      <div className="absolute bottom-32 right-12 w-px h-24 bg-vterra-olive/60 hidden xl:block"></div>
    </section>
  );
}
