import Image from "next/image";

interface AboutSectionProps {
  language: "en" | "es";
}

export default function AboutSection({ language }: AboutSectionProps) {
  const content = {
    en: {
      title: "About Us",
      description:
        "From Medellín to the U.S., we build a smart, scalable ecosystem that empowers real estate brokers, investors, and hospitality entrepreneurs.",
      vision: "Our Vision",
      visionText:
        "To be the leading integrated platform connecting Latin American expertise with North American opportunities in real estate and hospitality.",
      mission: "Our Mission",
      missionText:
        "We provide comprehensive solutions that bridge markets, cultures, and opportunities, enabling our clients to thrive in a globalized economy.",
    },
    es: {
      title: "Sobre Nosotros",
      description:
        "Desde Medellín hasta Estados Unidos, construimos un ecosistema inteligente y escalable que empodera a corredores de bienes raíces, inversionistas y emprendedores de hospitalidad.",
      vision: "Nuestra Visión",
      visionText:
        "Ser la plataforma integrada líder que conecta la experiencia latinoamericana con las oportunidades norteamericanas en bienes raíces y hospitalidad.",
      mission: "Nuestra Misión",
      missionText:
        "Proporcionamos soluciones integrales que conectan mercados, culturas y oportunidades, permitiendo que nuestros clientes prosperen en una economía globalizada.",
    },
  };

  return (
    <section
      id="about"
      className="py-20 scroll-mt-16" /* brand bg inherited from body */
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {content[language].title}
            </h2>
            <p className="font-sans text-lg text-gray-700 mb-8 leading-relaxed">
              {content[language].description}
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                  {content[language].vision}
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  {content[language].visionText}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                  {content[language].mission}
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  {content[language].missionText}
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96">
            <Image
              src="/images/family-house-garden-patio.png"
              alt="About Vterra"
              fill
              className="object-cover rounded-lg shadow-lg bg-white"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
