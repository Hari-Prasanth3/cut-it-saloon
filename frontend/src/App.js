import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Layout Components
import Navigation from "./components/Layout/Navigation";
import Footer from "./components/Layout/Footer";

// Common Components
import WhatsAppButton from "./components/Common/WhatsAppButton";

// Section Components
import HeroSection from "./components/Sections/HeroSection";
import About from "./components/Sections/About";
import Services from "./components/Sections/Services";
import WhyChooseUs from "./components/Sections/WhyChooseUs";
import Gallery from "./components/Sections/Gallery";
import Reviews from "./components/Sections/Reviews";
import Contact from "./components/Sections/Contact";
import CTASection from "./components/Sections/CTASection";

// Main Home Component
const Home = () => {
  return (
    <div className="relative">
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
};

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
