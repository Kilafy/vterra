import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  Hotel,
  Megaphone,
  Users,
  DollarSign,
  TrendingUp,
} from "lucide-react";

interface ServicesSectionProps {
  language: "en" | "es";
}

export default function ServicesSection({ language }: ServicesSectionProps) {
  const content = {
    en: {
      title: "Our Services",
      subtitle:
        "Comprehensive solutions for real estate and hospitality success",
      realEstate: {
        title: "Real Estate Support Services for U.S. Brokers",
        services: [
          {
            icon: Users,
            title: "Communication & Software",
            description:
              "Advanced CRM systems and multilingual communication support",
            revenue: "Monthly retainers: $2,000-$5,000",
          },
          {
            icon: Megaphone,
            title: "Digital Marketing & Campaigns",
            description:
              "Targeted marketing strategies and lead generation campaigns",
            revenue: "Campaign fees: $3,000-$10,000",
          },
          {
            icon: Building2,
            title: "Audiovisual Production",
            description:
              "Professional videos, drone footage, and property photography",
            revenue: "Per project: $1,500-$4,000",
          },
          {
            icon: DollarSign,
            title: "Legal & Administrative Support",
            description: "Transaction coordination and compliance management",
            revenue: "Transaction fees: 0.5-1% of deal value",
          },
        ],
      },
      hospitality: {
        title: "Hospitality Management (U.S. & Colombia)",
        services: [
          {
            icon: Hotel,
            title: "Airbnb & Boutique Hotel Management",
            description:
              "Full-service property management and guest experience optimization",
            revenue: "Revenue sharing: 15-25%",
          },
          {
            icon: Users,
            title: "Restaurant Management",
            description:
              "Operations management and culinary consulting services",
            revenue: "Management fees: $5,000-$15,000/month",
          },
          {
            icon: TrendingUp,
            title: "Strategic Hospitality Consulting",
            description:
              "Market analysis, concept development, and operational optimization",
            revenue: "Consulting retainers: $3,000-$8,000/month",
          },
        ],
      },
    },
    es: {
      title: "Nuestros Servicios",
      subtitle:
        "Soluciones integrales para el éxito en bienes raíces y hospitalidad",
      realEstate: {
        title: "Servicios de Apoyo Inmobiliario para Corredores de EE.UU.",
        services: [
          {
            icon: Users,
            title: "Comunicación y Software",
            description:
              "Sistemas CRM avanzados y soporte de comunicación multilingüe",
            revenue: "Retainers mensuales: $2,000-$5,000",
          },
          {
            icon: Megaphone,
            title: "Marketing Digital y Campañas",
            description:
              "Estrategias de marketing dirigidas y campañas de generación de leads",
            revenue: "Tarifas de campaña: $3,000-$10,000",
          },
          {
            icon: Building2,
            title: "Producción Audiovisual",
            description:
              "Videos profesionales, filmación con drones y fotografía de propiedades",
            revenue: "Por proyecto: $1,500-$4,000",
          },
          {
            icon: DollarSign,
            title: "Soporte Legal y Administrativo",
            description:
              "Coordinación de transacciones y gestión de cumplimiento",
            revenue: "Tarifas de transacción: 0.5-1% del valor del negocio",
          },
        ],
      },
      hospitality: {
        title: "Gestión de Hospitalidad (EE.UU. y Colombia)",
        services: [
          {
            icon: Hotel,
            title: "Gestión de Airbnb y Hoteles Boutique",
            description:
              "Gestión integral de propiedades y optimización de experiencia del huésped",
            revenue: "Participación en ingresos: 15-25%",
          },
          {
            icon: Users,
            title: "Gestión de Restaurantes",
            description:
              "Gestión de operaciones y servicios de consultoría culinaria",
            revenue: "Tarifas de gestión: $5,000-$15,000/mes",
          },
          {
            icon: TrendingUp,
            title: "Consultoría Estratégica en Hospitalidad",
            description:
              "Análisis de mercado, desarrollo de conceptos y optimización operacional",
            revenue: "Retainers de consultoría: $3,000-$8,000/mes",
          },
        ],
      },
    },
  };

  return (
    <section id="services" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="space-y-16">
          {/* Real Estate Services */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              {content[language].realEstate.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content[language].realEstate.services.map((service, index) => (
                <Card
                  key={index}
                  className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <service.icon className="h-12 w-12 text-black mx-auto mb-4" />
                    <CardTitle className="font-serif text-lg">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="mb-4 text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <p className="text-gray-800 font-semibold text-sm">
                        {service.revenue}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Hospitality Services */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              {content[language].hospitality.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content[language].hospitality.services.map((service, index) => (
                <Card
                  key={index}
                  className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <service.icon className="h-12 w-12 text-black mx-auto mb-4" />
                    <CardTitle className="font-serif text-lg">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="mb-4 text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <p className="text-gray-800 font-semibold text-sm">
                        {service.revenue}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
