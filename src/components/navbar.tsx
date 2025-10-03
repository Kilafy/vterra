"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-context";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleNavClick = (item: { label: string; id: string }) => {
    if (pathname === "/") {
      // Si estamos en home, hacer scroll
      scrollToSection(item.id);
    } else {
      // Si estamos en otra página, ir a home con el anchor
      window.location.href = `/#${item.id}`;
    }
  };

  const navItems = {
    en: [
      { label: "Home", id: "hero" },
      { label: "About", id: "welcome" },
      { label: "Services", id: "services" },
      { label: "Experience", id: "experience" },
      { label: "Properties", id: "properties" },
      { label: "Contact", id: "contact" },
    ],
    es: [
      { label: "Inicio", id: "hero" },
      { label: "Acerca", id: "welcome" },
      { label: "Servicios", id: "services" },
      { label: "Experiencia", id: "experience" },
      { label: "Propiedades", id: "properties" },
      { label: "Contacto", id: "contact" },
    ],
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 hover:opacity-80 transition-opacity duration-300">
            <Image
              src="/images/vterra-logo-transparent-cropped.png"
              alt="Vterra Logo"
              width={140}
              height={45}
              className=""
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-12">
              {navItems[language].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="relative text-gray-800 hover:text-vterra-wood px-1 py-2 text-sm font-medium transition-all duration-300 group font-sans tracking-wide">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-vterra-gold transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="group flex items-center space-x-2 text-gray-700 hover:text-vterra-wood hover:bg-vterra-cream/80 hover:scale-105 transition-all duration-300 px-4 py-2 rounded-full border border-transparent hover:border-vterra-gold/30">
              <Globe className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-sm font-medium tracking-wider">
                {language.toUpperCase()}
              </span>
            </Button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-vterra-wood hover:bg-vterra-cream/50 transition-all duration-300 p-2">
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl border-t border-gray-200/50">
              {navItems[language].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="relative text-gray-800 hover:text-vterra-wood block px-4 py-3 text-base font-medium w-full text-left transition-all duration-300 hover:bg-vterra-cream/30 rounded-xl group">
                  {item.label}
                  <span className="absolute bottom-2 left-4 w-0 h-px bg-vterra-gold transition-all duration-300 group-hover:w-6"></span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
