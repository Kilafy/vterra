"use client";

import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

interface CatalogSectionProps {
  language: "en" | "es";
}

export default function CatalogSection({ language }: CatalogSectionProps) {
  const content = {
    en: {
      title: "Service Catalog",
      subtitle:
        "Download our comprehensive service catalog to learn more about our offerings",
      description:
        "Get detailed information about our real estate and hospitality services, pricing models, and success stories.",
      downloadButton: "Download Service Catalog",
      viewOnline: "View Online",
    },
    es: {
      title: "Catálogo de Servicios",
      subtitle:
        "Descarga nuestro catálogo completo de servicios para conocer más sobre nuestras ofertas",
      description:
        "Obtén información detallada sobre nuestros servicios inmobiliarios y de hospitalidad, modelos de precios e historias de éxito.",
      downloadButton: "Descargar Catálogo de Servicios",
      viewOnline: "Ver en Línea",
    },
  };

  const handleDownload = () => {
    // Placeholder for Google Drive link
    window.open(
      "https://drive.google.com/file/d/your-catalog-file-id/view",
      "_blank",
    );
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {content[language].title}
        </h2>
        <p className="font-sans text-lg text-gray-600 mb-4">
          {content[language].subtitle}
        </p>
        <p className="font-sans text-gray-600 mb-8 max-w-2xl mx-auto">
          {content[language].description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleDownload}
            size="lg"
            className="bg-black hover:bg-black/80 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
            <Download className="mr-2 h-5 w-5" />
            {content[language].downloadButton}
          </Button>

          <Button
            onClick={handleDownload}
            variant="outline"
            size="lg"
            className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 bg-transparent">
            <ExternalLink className="mr-2 h-5 w-5" />
            {content[language].viewOnline}
          </Button>
        </div>
      </div>
    </section>
  );
}
