import SLHeader from "@/components/SLHeader";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContentBlocks from "@/components/ContentBlocks";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import SLFooter from "@/components/SLFooter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";

const Index = () => {
  useScrollReveal();

  useEffect(() => {
    // Load form embed script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen">
      <a href="#home" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:bg-primary focus:text-primary-foreground focus:p-3 focus:z-[100]">
        Skip to content
      </a>
      <SLHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <ContentBlocks />
        <AboutSection />
        <StatsSection />
        <TestimonialsSection />
        <TeamSection />
        <FAQSection />
        <ContactSection />
      </main>
      <SLFooter />
    </div>
  );
};

export default Index;
