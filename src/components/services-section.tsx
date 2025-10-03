import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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
          image: "/images/real-state/photo-00.jpg",
          color: "vterra-wood",
        },
        {
          id: "hospitality",
          icon: Hotel,
          title: "Hospitality Operations",
          subtitle: "Guest Experience Focus",
          description: "Full-service management of short-term rentals, restaurants, and hospitality brands with a commitment to profitability and memorable experiences.",
          features: ["Property Management", "Guest Experience", "Revenue Optimization", "Brand Development"],
          image: "/images/real-state/photo-01.jpg",
          color: "vterra-olive",
        },
        {
          id: "marketing",
          icon: Palette,
          title: "Marketing & Brand Lab",
          subtitle: "Creative & Data-Driven",
          description: "Strategic marketing solutions that build visibility, generate qualified leads, and create lasting brand equity in competitive markets.",
          features: ["Brand Strategy", "Lead Generation", "Creative Campaigns", "Digital Marketing"],
          image: "/images/real-state/photo-02.jpg",
          color: "vterra-terracotta",
        },
        {
          id: "consulting",
          icon: TrendingUp,
          title: "Strategic Consulting",
          subtitle: "Cross-Border Expertise",
          description: "Market entry strategies, investment structuring, and operational optimization for ventures expanding across international markets.",
          features: ["Market Analysis", "Investment Strategy", "Operations Optimization", "Cross-Border Guidance"],
          image: "/images/real-state/photo-03.jpg",
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
          image: "/images/real-state/photo-00.jpg",
          color: "vterra-wood",
        },
        {
          id: "hospitality",
          icon: Hotel,
          title: "Operaciones de Hospitalidad",
          subtitle: "Enfoque en Experiencia del Huésped",
          description: "Gestión integral de alquileres a corto plazo, restaurantes y marcas de hospitalidad con compromiso hacia la rentabilidad y experiencias memorables.",
          features: ["Gestión de Propiedades", "Experiencia del Huésped", "Optimización de Ingresos", "Desarrollo de Marca"],
          image: "/images/real-state/photo-01.jpg",
          color: "vterra-olive",
        },
        {
          id: "marketing",
          icon: Palette,
          title: "Laboratorio de Marketing y Marca",
          subtitle: "Creativo e Impulsado por Datos",
          description: "Soluciones estratégicas de marketing que construyen visibilidad, generan leads calificados y crean valor de marca duradero en mercados competitivos.",
          features: ["Estrategia de Marca", "Generación de Leads", "Campañas Creativas", "Marketing Digital"],
          image: "/images/real-state/photo-02.jpg",
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
              className="group pb-0 overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-none"
            >
              <div className="relative h-48 overflow-hidden">
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

                {/* Service Quality Indicator */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full bg-${service.color}`}></div>
                    <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                      {language === 'en' ? 'Premium Service' : 'Servicio Premium'}
                    </span>
                  </div>
                  <span className="text-xs text-vterra-wood font-medium">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action with Vertical Image */}
        <div className="relative mt-20 pt-16">
          {/* Background Accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-vterra-cream via-white to-vterra-cream rounded-3xl"></div>

          <div className="relative py-16 px-8">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <p className="font-sans text-sm tracking-[0.3em] text-vterra-wood font-medium uppercase">
                  {language === 'en' ? 'Ready to Transform' : 'Listo para Transformar'}
                </p>
              </div>

              {/* Grid Layout with Vertical Image */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Content - Vertical Image */}
                <div className="lg:col-span-1 flex justify-center">
                  <div className="relative w-full max-w-xs">
                    <div className="relative h-96 sm:h-[420px] lg:h-[452px] w-full overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700">
                      <Image
                        src="/images/real-state/photo-04-vertical.jpg"
                        alt="Premium Property"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>

                      {/* Decorative Frame Elements */}
                      <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-vterra-gold"></div>
                      <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-vterra-gold"></div>
                      <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-vterra-gold"></div>
                      <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-vterra-gold"></div>
                    </div>
                  </div>
                </div>

                {/* Right - Text */}
                <div className="lg:col-span-1 space-y-6">
                  <h3 className="font-serif text-3xl lg:text-4xl font-normal text-gray-900 leading-tight">
                    {language === 'en'
                      ? 'The choice is simple: carry the load alone, or share it with someone who\'s built to help.'
                      : 'La elección es simple: cargar el peso solo, o compartirlo con alguien construido para ayudar.'
                    }
                  </h3>
                  <p className="font-sans text-lg text-gray-700 leading-relaxed">
                    {language === 'en'
                      ? 'We\'re ready when you are.'
                      : 'Estamos listos cuando tú lo estés.'
                    }
                  </p>

                  {/* CTA */}
                  <div className="lg:col-span-1 text-center lg:text-left">
                    <Button
                      size="lg"
                      className="bg-gray-900 hover:bg-vterra-wood hover:scale-105 text-white font-medium px-12 py-4 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
                      onClick={() => {
                        const message = language === 'en'
                          ? "Hi! I'm interested in Vterra's integrated services and would like to start a conversation."
                          : "¡Hola! Me interesan los servicios integrados de Vterra y me gustaría iniciar una conversación.";
                        window.open(`https://wa.me/573104591255?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                    >
                      {language === 'en' ? 'Start the Conversation' : 'Iniciar la Conversación'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

