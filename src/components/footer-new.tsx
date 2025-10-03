"use client";

import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  Linkedin,
  ArrowRight,
  Star
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/language-context";
import { useEffect, useRef } from "react";

export default function Footer() {
  const { language } = useLanguage();
  const footerRef = useRef<HTMLElement>(null);

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

    const elements = footerRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const content = {
    en: {
      connect: "Connect With Us",
      email: "Email",
      whatsapp: "WhatsApp",
      address: "Locations",
      social: "Follow Our Journey",
      copyright: "© 2025 Vterra Real Estate Solutions. All rights reserved.",
      tagline: "Boutique real estate & hospitality solutions for discerning clients.",
      quickLinks: "Quick Links",
      services: ["Real Estate", "Hospitality", "Investment", "Consulting"],
      locations: {
        medellin: "Medellín, Colombia",
        miami: "Miami, FL, USA"
      },
      newsletter: "Stay Updated",
      newsletterText: "Get exclusive insights and premium property updates",
      subscribe: "Subscribe"
    },
    es: {
      connect: "Conéctate Con Nosotros",
      email: "Correo",
      whatsapp: "WhatsApp",
      address: "Ubicaciones",
      social: "Sigue Nuestro Camino",
      copyright: "© 2025 Vterra Real Estate Solutions. Todos los derechos reservados.",
      tagline: "Soluciones boutique inmobiliarias y de hospitalidad para clientes exigentes.",
      quickLinks: "Enlaces Rápidos",
      services: ["Inmobiliario", "Hospitalidad", "Inversión", "Consultoría"],
      locations: {
        medellin: "Medellín, Colombia",
        miami: "Miami, FL, USA"
      },
      newsletter: "Mantente Actualizado",
      newsletterText: "Recibe insights exclusivos y actualizaciones de propiedades premium",
      subscribe: "Suscribirse"
    },
  } as const;

  return (
    <footer 
      ref={footerRef}
      id="contact" 
      className="relative bg-gradient-to-b from-vterra-cream to-white text-gray-900 overflow-hidden"
    >

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-32 sm:w-40 h-32 sm:h-40 border border-vterra-wood rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-20 w-24 sm:w-32 h-24 sm:h-32 border border-vterra-olive/40 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 animate-on-scroll space-y-8">
            <div>
              <Image
            src="/images/vterra-logo-transparent-cropped.png"
            alt="Vterra Logo"
            width={240}
            height={80}
            className="h-20 w-auto mb-6"
              />
              <p className="text-xl text-gray-700 max-w-md leading-relaxed font-medium">
            {content[language].tagline}
              </p>
            </div>

            <div className="bg-vterra-cream/80 backdrop-blur-sm rounded-xl p-6 border border-vterra-wood/20 max-w-md shadow-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-vterra-gold fill-current" />
                  ))}
                </div>
                <span className="text-vterra-gold font-semibold text-sm">Premium Service</span>
              </div>
              <p className="text-gray-700 text-sm font-medium">
                {language === 'en' 
                  ? 'Delivering excellence in every partnership since 2023' 
                  : 'Entregando excelencia en cada alianza desde 2023'
                }
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-on-scroll space-y-6">
            <h3 className="font-serif text-2xl font-bold text-vterra-gold mb-6">
              {content[language].connect}
            </h3>
            
            <div className="space-y-4">
              <a
                href="mailto:info@vterra.com"
                className="flex items-center space-x-4 text-gray-700 hover:text-vterra-gold transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-vterra-gold/20 rounded-full flex items-center justify-center group-hover:bg-vterra-gold/30 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-vterra-gold" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">info@vterra.com</div>
                  <div className="text-sm text-gray-600">{content[language].email}</div>
                </div>
              </a>
              
              <a
                href="https://wa.me/573104591255"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-4 text-gray-700 hover:text-vterra-gold transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-vterra-gold/20 rounded-full flex items-center justify-center group-hover:bg-vterra-gold/30 transition-colors duration-300">
                  <MessageCircle className="h-5 w-5 text-vterra-gold" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">+57 310 459 1255</div>
                  <div className="text-sm text-gray-600">{content[language].whatsapp}</div>
                </div>
              </a>
              
              <div className="flex items-start space-x-4 text-gray-700">
                <div className="w-12 h-12 bg-vterra-terracotta/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-vterra-terracotta" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{content[language].address}</div>
                  <div className="text-sm text-gray-600 space-y-1 font-medium">
                    <p>{content[language].locations.medellin}</p>
                    <p>{content[language].locations.miami}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Social */}
          <div className="animate-on-scroll space-y-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-xl font-bold text-vterra-gold mb-4">
                {content[language].quickLinks}
              </h3>
              <div className="space-y-3">
                {content[language].services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-700 hover:text-vterra-wood transition-colors duration-300 cursor-pointer group">
                    <ArrowRight className="h-4 w-4 text-vterra-gold transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-serif text-xl font-bold text-vterra-gold mb-4">
                {content[language].social}
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-vterra-gold hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-vterra-gold hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/573104591255"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 animate-on-scroll">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-700 text-sm font-medium">
              {content[language].copyright}
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <span className="hover:text-vterra-gold transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-vterra-gold transition-colors cursor-pointer">Terms of Service</span>
              <span className="text-vterra-gold font-semibold">
                {language === 'en' ? 'Made with ♡ by Kilafy and Vterra' : 'Hecho con ♡ por Kilafy y Vterra'}
              </span>
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
    </footer>
  );
}