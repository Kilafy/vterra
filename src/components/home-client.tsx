"use client";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import WelcomeSection from "@/components/welcome-section";
import ServicesSection from "@/components/services-section";
import ExperienceSection from "@/components/experience-new";
import PropertiesSection from "@/components/properties-section";
import ContactCtaSection from "@/components/contact-cta-updated";
import Footer from "@/components/footer-new";
import type { Property } from "@/types/sanity";

interface HomeClientProps {
  featuredProperties: Property[];
}

export default function HomeClient({ featuredProperties }: HomeClientProps) {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <ExperienceSection />
      <PropertiesSection featuredProperties={featuredProperties} />
      <ContactCtaSection />
      <Footer />
    </main>
  );
}
