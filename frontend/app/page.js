"use client";

import React from "react";

// Layout Components
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";

// Common Components
import WhatsAppButton from "@/components/Common/WhatsAppButton";

// Section Components
import HeroSection from "@/components/Sections/HeroSection";
import About from "@/components/Sections/About";
import Services from "@/components/Sections/Services";
import WhyChooseUs from "@/components/Sections/WhyChooseUs";
import Gallery from "@/components/Sections/Gallery";
import Reviews from "@/components/Sections/Reviews";
import Contact from "@/components/Sections/Contact";
import CTASection from "@/components/Sections/CTASection";

export default function Home() {
  return (
    <div 
      className="relative overflow-x-hidden w-full max-w-full" 
      style={{ 
        width: '100%', 
        maxWidth: '100vw', 
        overflowX: 'hidden',
        position: 'relative'
      }}
    >
      <div className="grain-overlay"></div>
      <Navigation />
      <HeroSection />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Reviews />
      <Contact />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
