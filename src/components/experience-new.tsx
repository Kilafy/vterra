"use client";

import { useLanguage } from "@/components/language-context";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ExperienceSection() {
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
      title: "Live the Vterra Experience",
      subtitle: "Partnership, not just service",
      text: "Working with us is not another vendor relationship. It's partnership. It feels like having someone who actually sees your brand the way you do—someone who sweats the details, so you don't have to. Elegant, precise, boutique. Your business deserves that kind of care.",
      features: [
        "Boutique Approach",
        "Detail-Oriented", 
        "Brand Partnership",
        "Premium Care"
      ]
    },
    es: {
      title: "Vive la Experiencia Vterra",
      subtitle: "Alianza, no solo servicio",
      text: "Trabajar con nosotros no es una relación más con un proveedor. Es una alianza. Se siente como tener a alguien que ve tu marca como tú—alguien que cuida los detalles para que tú no tengas que hacerlo. Elegante, preciso, boutique. Tu negocio merece ese nivel de cuidado.",
      features: [
        "Enfoque Boutique",
        "Orientado al Detalle",
        "Alianza de Marca", 
        "Cuidado Premium"
      ]
    },
  } as const;

  const c = copy[language];

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="py-24 bg-gradient-to-b from-vterra-stone/10 to-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-vterra-wood/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-vterra-terracotta/40 rounded-full animate-pulse delay-1000"></div>
        {/* Additional Wood-colored Elements */}
        <div className="absolute top-1/3 right-1/4 w-2 h-24 bg-gradient-to-b from-transparent via-vterra-wood/30 to-transparent transform rotate-12"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-20 bg-gradient-to-t from-transparent via-vterra-wood/30 to-transparent transform -rotate-12"></div>
        {/* Geometric Accents */}
        <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-vterra-wood/40 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/6 w-4 h-4 bg-vterra-wood/30 rotate-45"></div>
        {/* Blur Circles */}
        <div className="absolute top-1/4 right-1/3 w-12 h-12 bg-vterra-wood/15 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-vterra-terracotta/10 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-on-scroll space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-px bg-vterra-gold"></div>
                <span className="text-vterra-olive font-medium tracking-wider uppercase text-sm">
                  {c.subtitle}
                </span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {c.title}
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              {c.text}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {c.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 animate-on-scroll"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-vterra-gold rounded-full"></div>
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className="animate-on-scroll">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700">
                <Image
                  src="/images/real-state/photo-02.jpg"
                  alt="Vterra Experience - Luxury Property"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-vterra-stone/20 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-vterra-olive rounded-full animate-pulse"></div>
                  <span className="text-gray-800 font-medium text-sm">
                    {language === 'en' ? 'Premium Partnership' : 'Alianza Premium'}
                  </span>
                </div>
              </div>

              {/* Secondary Image */}
              <div className="absolute -top-6 -right-6 w-32 h-32 overflow-hidden rounded-full shadow-lg border-4 border-white transform rotate-6 hover:rotate-12 transition-transform duration-500">
                <Image
                  src="/images/real-state/photo-00.jpg"
                  alt="Vterra Team"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

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