"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const { language } = useLanguage();
  const content = {
    en: {
      subtitle: "WELCOME TO VTERRA",
      title: "Real Estate Solutions for a World in Motion",
      description: "You don't need more weight on your shoulders. You need a partner who clears the path.",
      highlight: "At Vterra, we show up so you can breathe, focus, and grow. This is your welcome. Not just to a company, but to a way of working where your vision matters and your load gets lighter.",
      cta: "Start the Conversation",
      whatsappNumber: "+573104591255",
    },
    es: {
      subtitle: "BIENVENIDO A VTERRA", 
      title: "Soluciones inmobiliarias para un mundo en movimiento",
      description: "No necesitas más peso sobre tus hombros. Necesitas un aliado que despeje el camino.",
      highlight: "En Vterra, aparecemos para que respires, te enfoques y crezcas. Esta es tu bienvenida. No solo a una empresa, sino a una forma de trabajar donde tu visión importa y tu carga se hace más liviana.",
      cta: "Iniciar la Conversación",
      whatsappNumber: "+573104591255",
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 overflow-x-hidden">
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

              {/* CTA Button */}
              <div className="pt-6">
                <Button 
                  size="lg" 
                  className="bg-gray-900 hover:bg-vterra-wood hover:scale-105 text-white font-medium px-10 py-4 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
                  onClick={() => {
                    const message = language === 'en' 
                      ? "Hi! I'm interested in learning more about Vterra's services." 
                      : "¡Hola! Me interesa conocer más sobre los servicios de Vterra.";
                    window.open(`https://wa.me/${content[language].whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  {content[language].cta}
                </Button>
              </div>
            </div>

            {/* Right Visual Content */}
            <div className="relative lg:h-[600px]">
              {/* Main Video Container */}
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-tr-[120px] rounded-bl-[120px] shadow-2xl">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-vterra-wood/20 via-transparent to-vterra-olive/20" />
                </div>
                
                {/* Video Frame Border */}
                <div className="absolute -inset-1 bg-gradient-to-br from-vterra-gold/30 to-vterra-terracotta/20 rounded-tr-[120px] rounded-bl-[120px] -z-10"></div>
              </div>

              {/* Floating Design Elements */}
              <div className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 w-20 lg:w-28 h-20 lg:h-28 bg-vterra-gold/20 rounded-full blur-sm animate-pulse hidden lg:block"></div>
              <div className="absolute -bottom-8 -left-8 lg:-bottom-12 lg:-left-12 w-28 lg:w-36 h-28 lg:h-36 bg-vterra-olive/15 rounded-full blur-md hidden lg:block"></div>
              
              {/* Geometric Accent Lines */}
              <div className="absolute top-1/4 -right-2 lg:-right-4 w-1 h-20 bg-vterra-gold rotate-12 hidden lg:block"></div>
              <div className="absolute bottom-1/3 -left-3 lg:-left-6 w-8 lg:w-12 h-1 bg-vterra-terracotta rotate-45 hidden lg:block"></div>
              
              {/* Floating Content Card */}
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-white/95 backdrop-blur-sm p-4 lg:p-6 rounded-tl-[40px] rounded-br-[40px] shadow-xl border border-vterra-stone/30 hidden lg:block max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-vterra-gold rounded-full"></div>
                  <span className="text-sm font-medium text-vterra-wood tracking-wide uppercase">Vterra</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {language === 'en' 
                    ? "Transforming real estate across borders" 
                    : "Transformando bienes raíces a través de fronteras"}
                </p>
              </div>
              
              {/* Additional Texture Elements */}
              <div className="absolute top-10 left-8 w-2 h-2 bg-vterra-terracotta rounded-full opacity-60 hidden lg:block"></div>
              <div className="absolute bottom-20 right-16 w-1 h-8 bg-vterra-olive/40 rotate-45 hidden lg:block"></div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-vterra-stone/30">
          <ArrowDown className="h-5 w-5 text-vterra-wood" />
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Background Shapes */}
        <div className="absolute top-1/4 -left-16 sm:-left-32 w-48 sm:w-64 h-48 sm:h-64 bg-vterra-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 sm:-right-40 w-60 sm:w-80 h-60 sm:h-80 bg-vterra-olive/8 rounded-full blur-3xl"></div>
        
        {/* Geometric Lines */}
        <div className="absolute top-20 left-8 w-2 h-20 bg-gradient-to-b from-vterra-gold/60 to-transparent hidden xl:block"></div>
        <div className="absolute top-40 right-20 w-1 h-16 bg-gradient-to-b from-vterra-terracotta/40 to-transparent rotate-12 hidden xl:block"></div>
        <div className="absolute bottom-32 right-12 w-px h-32 bg-gradient-to-t from-vterra-olive/60 to-transparent hidden xl:block"></div>
        <div className="absolute bottom-40 left-16 w-12 h-px bg-gradient-to-r from-vterra-wood/50 to-transparent hidden xl:block"></div>
        
        {/* Floating Dots Pattern */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-vterra-gold/30 rounded-full animate-pulse hidden lg:block"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-vterra-terracotta/40 rounded-full animate-pulse delay-300 hidden lg:block"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-vterra-olive/50 rounded-full animate-pulse delay-700 hidden lg:block"></div>
        
        {/* Abstract Texture Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-vterra-cream/50 via-transparent to-vterra-stone/10"></div>
      </div>
    </section>
  );
}
