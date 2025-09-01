import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";

interface FooterProps {
  language: "en" | "es";
}

export default function Footer({ language }: FooterProps) {
  const content = {
    en: {
      contact: "Contact Information",
      email: "Email",
      phone: "Phone",
      address: "Address",
      social: "Follow Us",
      copyright: "© 2025 Vterra Real Estate Solutions. All rights reserved.",
      tagline: "Real estate solutions for a world in motion.",
    },
    es: {
      contact: "Información de Contacto",
      email: "Correo",
      phone: "Teléfono",
      address: "Dirección",
      social: "Síguenos",
      copyright:
        "© 2025 Vterra Real Estate Solutions. Todos los derechos reservados.",
      tagline: "Soluciones inmobiliarias para un mundo en movimiento.",
    },
  };

  return (
    <footer id="contact" className="bg-[#E6E6E6] text-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="lg:col-span-2">
            <Image
              src="/images/vterra-logo-transparent.png"
              alt="Vterra Logo"
              width={150}
              height={50}
              className="h-12 w-auto mb-4"
            />
            <p className="font-sans text-gray-700 mb-6 max-w-md">
              {content[language].tagline}
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              {content[language].contact}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3" />
                <a
                  href="mailto:info@vterra.com"
                  className="text-gray-800 hover:text-black transition-colors">
                  info@vterra.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3" />
                <a
                  href="https://wa.me/1234567890"
                  className="text-gray-800 hover:text-black transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-1" />
                <div className="text-gray-800">
                  <p>Medellín, Colombia</p>
                  <p>Miami, FL, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              {content[language].social}
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-700 hover:text-black transition-colors"
                aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black transition-colors"
                aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black transition-colors"
                aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black transition-colors"
                aria-label="X/Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-12 pt-8 text-center">
          <p className="font-sans text-gray-700">
            {content[language].copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
