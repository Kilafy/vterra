"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  language: "en" | "es";
  onLanguageChange: (lang: "en" | "es") => void;
}

export default function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
      { label: "About", id: "about" },
      { label: "Services", id: "services" },
      { label: "Properties", id: "properties" },
      { label: "Contact", id: "contact" },
    ],
    es: [
      { label: "Inicio", id: "hero" },
      { label: "Nosotros", id: "about" },
      { label: "Servicios", id: "services" },
      { label: "Propiedades", id: "properties" },
      { label: "Contacto", id: "contact" },
    ],
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#E6E6E6]/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 hover:opacity-80 transition-opacity duration-200">
            <Image
              src="/images/vterra-logo-transparent-cropped.png"
              alt="Vterra Logo"
              width={120}
              height={40}
              className=""
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems[language].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="relative text-black px-3 py-2 text-sm font-medium transition-all duration-300 group">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLanguageChange(language === "en" ? "es" : "en")}
              className="flex items-center space-x-1 text-black hover:bg-black/5 transition-colors duration-200">
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">
                {language.toUpperCase()}
              </span>
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-black hover:bg-black/5 transition-colors duration-200">
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#E6E6E6] shadow-lg rounded-lg mt-2">
              {navItems[language].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="relative text-black block px-3 py-2 text-base font-medium w-full text-left transition-all duration-200 hover:bg-black/5 rounded-md group">
                  {item.label}
                  <span className="absolute bottom-1 left-3 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4"></span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
