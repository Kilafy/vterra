"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import CatalogSection from "@/components/catalog-section";
import PropertiesSection from "@/components/properties-section";
import Footer from "@/components/footer";

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "es">("en");

  return (
    <main className="min-h-screen pt-16">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <ServicesSection language={language} />
      <CatalogSection language={language} />
      <PropertiesSection language={language} />
      <Footer language={language} />
    </main>
  );
}
