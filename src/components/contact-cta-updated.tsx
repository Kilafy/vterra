"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-context";
import { useEffect, useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function ContactCtaSection() {
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

  const copy = {
    en: {
      title: "Ready to move forward?",
      subtitle: "Your vision deserves the right partner",
      text: "The choice is simple: carry the load alone, or share it with someone who's built to help. We're ready when you are.",
      mainCta: "Start the Conversation",
      ctaDescription: "Connect with our team today",
      whatsappButton: "Chat on WhatsApp",
      partnershipText: "Premium partnership awaits"
    },
    es: {
      title: "¿Listo para avanzar?",
      subtitle: "Tu visión merece el socio correcto",
      text: "La decisión es simple: llevar la carga solo, o compartirla con alguien creado para ayudarte. Estamos listos cuando tú lo estés.",
      mainCta: "Iniciar la conversación",
      ctaDescription: "Conecta con nuestro equipo hoy",
      whatsappButton: "Conversar por WhatsApp",
      partnershipText: "Alianza premium te espera"
    },
  } as const;

  const c = copy[language];

  return (
    <section 
      ref={sectionRef}
      id="cta" 
      className="py-24 relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/real-state/photo-01.jpg"
          alt="Vterra Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>
        <div className="absolute inset-0 bg-vterra-wood/30"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-24 sm:w-32 h-24 sm:h-32 border border-vterra-gold rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-20 sm:w-24 h-20 sm:h-24 border border-white rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-on-scroll text-white space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-px bg-vterra-gold"></div>
                <span className="text-vterra-gold font-medium tracking-wider uppercase text-sm">
                  {c.subtitle}
                </span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                {c.title}
              </h2>
            </div>

            <p className="text-xl text-white/90 leading-relaxed">
              {c.text}
            </p>
          </div>

          {/* Right CTA Cards */}
          <div className="animate-on-scroll space-y-6">
            {/* Main CTA Card */}
            <div className="bg-white/98 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-vterra-gold via-vterra-terracotta to-vterra-olive rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                    {c.mainCta}
                  </h3>
                  <p className="text-gray-700 text-base font-medium">
                    {c.ctaDescription}
                  </p>
                </div>

                <a 
                  href="https://wa.me/573104591255" 
                  target="_blank" 
                  rel="noreferrer"
                  className="block"
                >
                  <Button 
                    size="lg" 
                    className="w-full bg-vterra-wood hover:bg-vterra-olive text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-vterra-wood/20 hover:border-vterra-olive/30"
                  >
                    <MessageCircle className="mr-3 h-5 w-5" />
                    {c.whatsappButton}
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
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