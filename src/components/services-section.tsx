import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Hotel,
  Palette,
  TrendingUp,
  FileCheck,
  Users,
  Globe,
  BarChart3,
} from "lucide-react";
import { useLanguage } from "@/components/language-context";

export default function ServicesSection() {
  const { language } = useLanguage();
  const content = {
    en: {
      overline: "WHAT WE DO",
      title: "Four Integrated Solutions",
      subtitle: "A connected ecosystem where every service works in harmony to drive your success across borders.",
      services: [
        {
          id: "real-estate",
          icon: Building2,
          title: "Real Estate Support",
          subtitle: "Transaction Excellence",
          description: "Comprehensive support for cross-border real estate transactions, from coordination to closing management and foreign buyer assistance.",
          features: ["Transaction Coordination", "Title Company Liaison", "Closing Management", "Foreign Buyer Support"],
          image: "/images/modern-glass-office.png",
          color: "vterra-wood",
        },
        {
          id: "hospitality", 
          icon: Hotel,
          title: "Hospitality Operations",
          subtitle: "Guest Experience Focus",
          description: "Full-service management of short-term rentals, restaurants, and hospitality brands with a commitment to profitability and memorable experiences.",
          features: ["Property Management", "Guest Experience", "Revenue Optimization", "Brand Development"],
          image: "/images/luxury-beachfront-penthouse.png", 
          color: "vterra-olive",
        },
        {
          id: "marketing",
          icon: Palette,
          title: "Marketing & Brand Lab",
          subtitle: "Creative & Data-Driven",
          description: "Strategic marketing solutions that build visibility, generate qualified leads, and create lasting brand equity in competitive markets.",
          features: ["Brand Strategy", "Lead Generation", "Creative Campaigns", "Digital Marketing"],
          image: "/images/family-house-garden-patio.png",
          color: "vterra-terracotta",
        },
        {
          id: "consulting",
          icon: TrendingUp,
          title: "Strategic Consulting", 
          subtitle: "Cross-Border Expertise",
          description: "Market entry strategies, investment structuring, and operational optimization for ventures expanding across international markets.",
          features: ["Market Analysis", "Investment Strategy", "Operations Optimization", "Cross-Border Guidance"],
          image: "/images/placeholder-f1zat.png",
          color: "vterra-gold",
        },
      ],
    },
    es: {
      overline: "LO QUE HACEMOS",
      title: "Cuatro Soluciones Integradas", 
      subtitle: "Un ecosistema conectado donde cada servicio trabaja en armonía para impulsar tu éxito a través de fronteras.",
      services: [
        {
          id: "real-estate",
          icon: Building2,
          title: "Soporte Inmobiliario",
          subtitle: "Excelencia en Transacciones",
          description: "Soporte integral para transacciones inmobiliarias transfronterizas, desde coordinación hasta gestión de cierres y asistencia a compradores extranjeros.",
          features: ["Coordinación de Transacciones", "Enlace con Compañías de Títulos", "Gestión de Cierres", "Soporte a Compradores Extranjeros"],
          image: "/images/modern-glass-office.png",
          color: "vterra-wood",
        },
        {
          id: "hospitality",
          icon: Hotel, 
          title: "Operaciones de Hospitalidad",
          subtitle: "Enfoque en Experiencia del Huésped",
          description: "Gestión integral de alquileres a corto plazo, restaurantes y marcas de hospitalidad con compromiso hacia la rentabilidad y experiencias memorables.",
          features: ["Gestión de Propiedades", "Experiencia del Huésped", "Optimización de Ingresos", "Desarrollo de Marca"],
          image: "/images/luxury-beachfront-penthouse.png",
          color: "vterra-olive",
        },
        {
          id: "marketing",
          icon: Palette,
          title: "Laboratorio de Marketing y Marca",
          subtitle: "Creativo e Impulsado por Datos", 
          description: "Soluciones estratégicas de marketing que construyen visibilidad, generan leads calificados y crean valor de marca duradero en mercados competitivos.",
          features: ["Estrategia de Marca", "Generación de Leads", "Campañas Creativas", "Marketing Digital"],
          image: "/images/family-house-garden-patio.png", 
          color: "vterra-terracotta",
        },
        {
          id: "consulting",
          icon: TrendingUp,
          title: "Consultoría Estratégica",
          subtitle: "Expertise Transfronterizo",
          description: "Estrategias de entrada al mercado, estructuración de inversiones y optimización operacional para ventures que se expanden en mercados internacionales.",
          features: ["Análisis de Mercado", "Estrategia de Inversión", "Optimización de Operaciones", "Guía Transfronteriza"],
          image: "/images/placeholder-f1zat.png",
          color: "vterra-gold",
        },
      ],
    },
  } as const;

  return (
    <section id="services" className="py-24 lg:py-32 scroll-mt-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="font-sans text-sm md:text-base tracking-[0.3em] text-vterra-wood font-medium uppercase mb-4">
            {content[language].overline}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 leading-tight">
            {content[language].title}
          </h2>
          <p className="font-sans text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {content[language].subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {content[language].services.map((service, index) => (
            <Card 
              key={service.id} 
              className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-none"
            >
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                
                {/* Service Icon & Number */}
                <div className="absolute top-6 left-6 flex items-center space-x-3">
                  <div className={`p-3 bg-white/90 rounded-full`}>
                    <service.icon className="h-6 w-6 text-gray-900" />
                  </div>
                  <span className="text-white/80 text-sm font-medium tracking-widest">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Service Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/80 text-sm font-medium tracking-wide uppercase mb-2">
                    {service.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl lg:text-3xl font-normal text-white leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              <CardContent className="p-8 lg:p-10">
                <p className="font-sans text-gray-600 text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, featIndex) => (
                    <div key={featIndex} className="flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}`}></div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300"
                >
                  {language === 'en' ? 'Learn More' : 'Conoce Más'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 pt-16 border-t border-gray-200">
          <h3 className="font-serif text-2xl lg:text-3xl font-normal text-gray-900 mb-6">
            {language === 'en' 
              ? 'Ready to build something extraordinary together?'
              : '¿Listo para construir algo extraordinario juntos?'
            }
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-vterra-wood text-white px-8 py-4"
            >
              {language === 'en' ? 'Start Your Project' : 'Inicia Tu Proyecto'}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4"
            >
              {language === 'en' ? 'Schedule Consultation' : 'Agenda Consultoría'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

