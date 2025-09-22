import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-context";

export default function WelcomeSection() {
  const { language } = useLanguage();
  const content = {
    en: {
      overline: "ABOUT VTERRA",
      title: "Welcome",
      subtitle: "We deliver innovative and community-driven real estate solutions.",
      body: "Specializing in creating intelligent ecosystems for cross-border business, Vterra Real Estate Solutions provides industry-tailored services that help partners grow and thrive. From initial market strategy to executing final details, our team of dedicated experts holds a shared passion for transforming how business gets done.",
      body2: "Committed to deliberate innovation and crafting scalable solutions, each member of our integrated team is dedicated to providing clients with operational excellence and strategic clarity.",
      highlight: "Rooted in the belief that every market has opportunity to unlock, Vterra strives to create partner-led experiences that resonate deeply with local dynamics and global vision alike.",
      cta: "Learn More",
    },
    es: {
      overline: "ACERCA DE VTERRA",
      title: "Bienvenidos",
      subtitle: "Entregamos soluciones inmobiliarias innovadoras e impulsadas por la comunidad.",
      body: "Especializándose en crear ecosistemas inteligentes para negocios transfronterizos, Vterra Real Estate Solutions proporciona servicios adaptados a la industria que ayudan a los socios a crecer y prosperar. Desde la estrategia inicial del mercado hasta ejecutar los detalles finales, nuestro equipo de expertos dedicados mantiene una pasión compartida por transformar cómo se hacen los negocios.",
      body2: "Comprometido con la innovación deliberada y la creación de soluciones escalables, cada miembro de nuestro equipo integrado se dedica a proporcionar a los clientes excelencia operacional y claridad estratégica.",
      highlight: "Arraigado en la creencia de que cada mercado tiene oportunidades por desbloquear, Vterra se esfuerza por crear experiencias lideradas por socios que resuenan profundamente tanto con dinámicas locales como con visión global.",
      cta: "Conoce Más",
    },
  } as const;

  return (
    <section id="welcome" className="py-24 lg:py-32 bg-vterra-cream scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-sans text-sm md:text-base tracking-[0.3em] text-vterra-wood font-medium uppercase">
                {content[language].overline}
              </p>
              <div className="w-12 h-px bg-vterra-gold"></div>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight">
              {content[language].title}
            </h2>

            <p className="font-sans text-xl md:text-2xl text-vterra-wood leading-relaxed font-medium">
              {content[language].subtitle}
            </p>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            
            {/* Main Image */}
            <div className="relative h-64 lg:h-80 overflow-hidden">
              <img 
                src="/images/luxury-beachfront-penthouse.png" 
                alt="Elegant hospitality space" 
                className="w-full h-full object-cover rounded-bl-[80px] rounded-tr-[80px]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-vterra-wood/10 to-transparent rounded-bl-[80px] rounded-tr-[80px]" />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="font-sans text-base md:text-lg text-gray-700 leading-relaxed">
                {content[language].body}
              </p>
              
              <p className="font-sans text-base md:text-lg text-gray-700 leading-relaxed">
                {content[language].body2}
              </p>

              {/* Highlight Quote */}
              <div className="border-l-3 border-vterra-gold pl-6 py-4 bg-white/50">
                <p className="font-serif text-lg md:text-xl text-gray-800 leading-relaxed italic">
                  {content[language].highlight}
                </p>
              </div>

              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-medium px-8 py-4 transition-colors duration-300"
              >
                {content[language].cta}
              </Button>
            </div>

          </div>
        </div>

        {/* Bottom Visual Elements */}
        <div className="mt-20 lg:mt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Image 1 */}
            <div className="relative h-48 overflow-hidden rounded-tr-[60px]">
              <img 
                src="/images/family-house-garden-patio.png" 
                alt="Property detail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-vterra-olive/20" />
            </div>

            {/* Image 2 */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src="/images/modern-glass-office.png" 
                alt="Modern office space" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-vterra-terracotta/20" />
            </div>

            {/* Image 3 */}
            <div className="relative h-48 overflow-hidden rounded-bl-[60px]">
              <img 
                src="/images/placeholder-f1zat.png" 
                alt="Strategic consulting" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-vterra-wood/20" />
            </div>

          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-32 right-8 w-2 h-16 bg-vterra-gold/40 hidden xl:block"></div>
        <div className="absolute bottom-20 left-12 w-px h-20 bg-vterra-olive/60 hidden xl:block"></div>
      </div>
    </section>
  );
}

