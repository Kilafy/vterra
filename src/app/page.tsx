"use client";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import WelcomeSection from "@/components/welcome-section";
import ServicesSection from "@/components/services-section";
import ExperienceSection from "@/components/experience-section";
import PropertiesSection from "@/components/properties-section";
import ContactCtaSection from "@/components/contact-cta-section";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <ExperienceSection />
      <PropertiesSection />
      <ContactCtaSection />
      <Footer />
    </main>
  );
}
