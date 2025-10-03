import { useLanguage } from "@/components/language-context";
import Image from "next/image";

export default function WelcomeSection() {
  const { language } = useLanguage();
  const content = {
    en: {
      overline: "WHY WE'RE HERE",
      title: "Why we exist",
      subtitle: "Business is hard enough. Endless documents, deadlines, details.",
      body: "That's not where your energy belongs.",
      body2: "Our job is simple: serve your business so you can serve your clients. Because when you're free to focus on the meaningful work, everything changes.",
      highlight: "We provide services to take care of your business. We support brands that are transforming the world.",
    },
    es: {
      overline: "POR QUÉ ESTAMOS AQUÍ",
      title: "Por qué existimos",
      subtitle: "Los negocios ya son suficientemente difíciles. Documentos infinitos, fechas límite, detalles.",
      body: "Ahí no es donde pertenece tu energía.",
      body2: "Nuestro trabajo es simple: servir a tu negocio para que puedas servir a tus clientes. Porque cuando eres libre de enfocarte en el trabajo significativo, todo cambia.",
      highlight: "Proporcionamos servicios para cuidar tu negocio. Apoyamos marcas que están transformando el mundo.",
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

            {/* Left Side Text Content */}
            <div className="space-y-6 pt-8">
              <p className="font-sans text-base md:text-lg text-gray-700 leading-relaxed">
                {content[language].body}
              </p>
              
              <p className="font-sans text-base md:text-lg text-gray-700 leading-relaxed">
                {content[language].body2}
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            
            {/* Main Image */}
            <div className="relative h-64 lg:h-80 overflow-hidden">
              <Image 
                src="/images/real-state/photo-04-vertical.jpg" 
                alt="Elegant hospitality space" 
                fill
                className="object-cover rounded-bl-[80px] rounded-tr-[80px]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-vterra-wood/20 to-transparent rounded-bl-[80px] rounded-tr-[80px]" />
              
              {/* Decorative Elements on Image */}
              <div className="absolute top-4 right-4 w-2 h-16 bg-vterra-gold/60"></div>
              <div className="absolute bottom-4 left-4 w-16 h-2 bg-vterra-wood/60"></div>
            </div>

            {/* Highlight Quote - Now Balanced on Right */}
            <div className="relative">
              <div className="border-l-4 border-vterra-gold pl-8 py-6 bg-gradient-to-r from-white/80 to-vterra-stone/10 rounded-r-lg">
                <div className="absolute left-0 top-0 w-1 h-full bg-vterra-gold rounded-r"></div>
                <p className="font-serif text-lg md:text-xl text-gray-800 leading-relaxed italic mb-3">
                  &ldquo;{content[language].highlight}&rdquo;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-px bg-vterra-gold"></div>
                  <span className="text-vterra-wood font-medium text-sm uppercase tracking-wide">
                    Vterra Mission
                  </span>
                </div>
              </div>
              
              {/* Floating Decorative Element */}
              <div className="absolute -right-4 -top-4 w-8 h-8 bg-vterra-terracotta/20 rounded-full blur-sm"></div>
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

