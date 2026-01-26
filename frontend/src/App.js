import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Users,
  Award,
  Heart,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Scissors,
  ShieldCheck,
  Coffee,
  Zap,
  Sparkles
} from "lucide-react";
import "./App.css";

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="text-[#D4AF37] text-5xl font-bold font-serif">
      {count}{suffix}
    </span>
  );
};

// Scroll Reveal Animation Component
const ScrollReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? "backdrop-blur-xl bg-black/60 border-b border-white/10"
        : "bg-transparent"
        }`}
      data-testid="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-3" data-testid="logo-link">
            <img src="/images/logo-removebg-preview.png" alt="Logo" className="w-64 h-16" />

          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#ededed] hover:text-[#ededed] transition-colors duration-300 text-sm tracking-wider uppercase"
                data-testid={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/918072016978?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Cut%20It%20Salon%20%26%20Spa.%20Please%20share%20the%20available%20slots.%20%F0%9F%98%8A"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full uppercase tracking-widest font-bold text-sm transition-all duration-300 blue-glow blue-glow-hover"
            data-testid="book-now-nav-button"
          >
            Book Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#ededed] hover:text-[#ededed] transition-colors"
            data-testid="mobile-menu-toggle"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
              data-testid="mobile-menu"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-[#ededed] hover:text-[#ededed] transition-colors text-lg tracking-wider uppercase border-b border-white/10"
                  data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/918072016978?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Cut%20It%20Salon%20%26%20Spa.%20Please%20share%20the%20available%20slots.%20%F0%9F%98%8A"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 bg-blue-600 text-white text-center px-6 py-3 rounded-full uppercase tracking-widest font-bold text-sm"
                data-testid="book-now-mobile-button"
              >
                Book Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// Cinematic Shutter Hero Section
const ShutterHero = () => {
  const [shutterComplete, setShutterComplete] = useState(false);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10"></div>
        <img
          src="/images/hero.png"
          alt="Cut It Salon Interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Shutter Panels */}
      <motion.div
        initial={{ width: "50%" }}
        animate={{ width: "0%" }}
        transition={{
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
          delay: 0.2
        }}
        onAnimationComplete={() => setShutterComplete(true)}
        className="fixed top-0 left-0 h-full bg-black z-50"
        style={{ transformOrigin: "left" }}
      />
      <motion.div
        initial={{ width: "50%" }}
        animate={{ width: "0%" }}
        transition={{
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
          delay: 0.2
        }}
        className="fixed top-0 right-0 h-full bg-black z-50"
        style={{ transformOrigin: "right" }}
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="relative z-20 text-center px-6 max-w-5xl"
      >
        <motion.p
          className="text-[#D4AF37] uppercase tracking-[0.4em] text-sm md:text-base mb-6 font-sans"
          data-testid="hero-tagline"
        >
          Experience Luxury & Precision
        </motion.p>
        <motion.h1
          className="text-5xl md:text-6xl lg:text-8xl font-serif font-bold text-[#ededed] mb-8 leading-tight"
          data-testid="hero-heading"
        >
          Cut It <span className="italic gold-gradient-text">Salon & Spa</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl  mb-12 max-w-3xl mx-auto font-sans leading-relaxed"
        >
          Where style meets sophistication. Premium grooming, styling, and spa services in Coimbatore.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* <a
            href="https://dikidi.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full uppercase tracking-widest font-bold text-base transition-all duration-300 w-full sm:w-auto text-center blue-glow blue-glow-hover transform hover:scale-105"
            data-testid="hero-book-button"
          >
            Book Appointment
          </a> */}
          <a
            href="tel:08072016978"
            className="border-2 border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] px-10 py-5 rounded-full uppercase tracking-widest font-bold text-base transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-3"
            data-testid="hero-call-button"
          >
            <Phone size={20} />
            Call Now
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#0a0a0a]" data-testid="about-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/about.png"
                  alt="Salon Interior"
                  className="w-full h-[600px] object-cover image-zoom-hover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 border-2 border-[#D4AF37]/30 rounded-2xl"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <p className="uppercase tracking-[0.4em] text-sm mb-4 font-bold">
                About Us
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#ededed] mb-8 leading-tight" data-testid="about-heading">
                Your <span className="italic text-[#D4AF37]">Trusted</span> Style Partner
              </h2>
              <p className="text-[#a1a1aa] text-lg mb-6 leading-relaxed">
                At Cut It Salon & Spa, we believe grooming is an art. Located in the heart of Coimbatore,
                our salon combines luxury with professionalism to deliver exceptional beauty and grooming experiences.
              </p>
              <p className="text-[#a1a1aa] text-lg mb-12 leading-relaxed">
                Our team of skilled professionals stays updated with the latest men’s haircut trends, beard styles, and grooming innovations to deliver consistent, high-quality results. Customer satisfaction, attention to detail, and personalized service are at the heart of everything we do.
              </p>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center group">
                  <AnimatedCounter end={5} suffix="+" />
                  <p className="text-[#ededed]/60 text-sm mt-3 uppercase tracking-wider">
                    Years Experience
                  </p>
                </div>
                <div className="text-center group">
                  <AnimatedCounter end={1000} suffix="+" />
                  <p className="text-[#ededed]/60 text-sm mt-3 uppercase tracking-wider">
                    Happy Clients
                  </p>
                </div>
                <div className="text-center group">
                  <div className="text-[#D4AF37] text-5xl font-bold font-serif">4.8</div>
                  <div className="flex justify-center mt-3 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#D4AF37" color="#D4AF37" />
                    ))}
                  </div>
                  <p className="text-[#ededed]/60 text-sm mt-2 uppercase tracking-wider">
                    Rating
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const services = {
    "Hair Services": [
      { name: "Haircut", price: 100 },
      { name: "Beard trim", price: 50 },
      { name: "Beard design", price: 70 },
      { name: "Change of style Haircut", price: 150 },
      { name: "Head Shave", price: 120 },
    ],
    "Colours": [
      { name: "Fashion colour streak", price: 200 },
      { name: "Hair dye (henna)", price: 250 },
      { name: "Fruit gel hair colour", price: 350 },
      { name: "Black Hair colour (raga)", price: 400 },
      { name: "Amonia free hair colour", price: 600 },
      { name: "Fashion Hair colour", price: 600 },
    ],
    "Hair Spa": [
      { name: "Damage hair spa", price: 600 },
      { name: "Dandruff hair spa", price: 600 },
      { name: "Hair loss hair spa", price: 650 },
      { name: "Hair straightening", price: "2000 onwards" },
    ],
    "Head Massage": [
      { name: "Coconut oil", price: 200 },
      { name: "Navaratna oil", price: 200 },
      { name: "Almond oil", price: 250 },
      { name: "Olive oil", price: 250 },
    ],
    "Facials": [
      { name: "Dtan Face and neck", price: 300 },
      { name: "Dtan half hand", price: "450/hand" },
      { name: "Scrub", price: 400 },
      { name: "Peel off mask", price: 350 },
      { name: "Fruit Facial", price: 850 },
      { name: "Charcoal Facial", price: 900 },
      { name: "Gold Facial", price: 1300 },
      { name: "Diamond Facial", price: 1500 },
      { name: "Face wash", price: 50 },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("Hair Services");

  return (
    <section id="services" className="py-32 px-6 bg-[#121212]" data-testid="services-section">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-sm mb-4 font-bold">
              Our Services
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#ededed]" data-testid="services-heading">
              Premium <span className="italic text-[#D4AF37]">Treatments</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <div className="space-y-3 sticky top-32">
                {Object.keys(services).map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    whileHover={{ x: 10 }}
                    className={`w-full text-left px-8 py-5 border-l-4 transition-all duration-300 rounded-r-lg ${activeCategory === category
                      ? "border-[#3B82F6] bg-white/5 text-[#ededed] backdrop-blur-sm"
                      : "border-white/10 text-[#ededed]/60 hover:border-[#D4AF37]/50 hover:text-[#ededed] hover:bg-white/5"
                      }`}
                    data-testid={`service-category-${category.toLowerCase().replace(/ /g, '-')}`}
                  >
                    <span className="text-lg font-semibold tracking-wide uppercase">
                      {category}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 md:p-14">
                <h3 className="text-3xl font-serif font-bold text-[#D4AF37] mb-10" data-testid="active-service-category">
                  {activeCategory}
                </h3>
                <div className="space-y-5">
                  {services[activeCategory].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex justify-between items-center py-4 border-b border-white/10 hover:border-[#3B82F6]/30 transition-colors group"
                      data-testid={`service-item-${index}`}
                    >
                      <span className="text-[#ededed] text-base group-hover:text-[#ededed] transition-colors">
                        {service.name}
                      </span>
                      <span className="text-[#D4AF37] font-bold text-xl">
                        ₹{service.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-[#ededed]/40 text-sm mt-8 italic">
                  * Hair Wash available at ₹50
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Star size={36} />,
      title: "4.8★ Rating",
      description: "Trusted by 84+ satisfied customers for excellence.",
    },
    {
      icon: <Scissors size={36} />,
      title: "Master Stylists",
      description: "Expert hands with international training and precision.",
    },
    {
      icon: <Sparkles size={36} />,
      title: "Luxury Products",
      description: "We use only premium brands like L'Oreal & Schwarzkopf.",
    },
    {
      icon: <ShieldCheck size={36} />,
      title: "Hygiene First",
      description: "Hospital-grade sterilization for all tools and space.",
    },
    {
      icon: <Heart size={36} />,
      title: "Inclusive Space",
      description: "Warm, respectful, and LGBTQ+ friendly environment.",
    },
    {
      icon: <Zap size={36} />,
      title: "Premium Ambience",
      description: "Modern, comfortable, and luxurious salon interiors.",
    },
    {
      icon: <Coffee size={36} />,
      title: "Refreshment Bar",
      description: "Complimentary gourmet coffee and tea for all clients.",
    },
    {
      icon: <Award size={36} />,
      title: "Global Trends",
      description: "Stay ahead with the latest international style trends.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-[#0a0a0a]" data-testid="why-choose-us-section">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-sm mb-4 font-bold">
              Why Choose Us
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#ededed]">
              Excellence in <span className="italic text-[#D4AF37]">Every Detail</span>
            </h2>
            <p className="mt-6 text-[#a1a1aa] text-lg max-w-2xl mx-auto">
              We redefine the salon experience by combining traditional craftsmanship with modern luxury and unmatched hospitality.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 rounded-2xl p-10 text-center group cursor-pointer"
                data-testid={`feature-card-${index}`}
              >
                <div className="text-[#D4AF37] mb-6 flex justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#ededed] mb-3 font-serif">
                  {feature.title}
                </h3>
                <p className="text-[#a1a1aa] text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const GallerySection = () => {
  const images = [
    "https://images.unsplash.com/photo-1698864551605-fab9fed03af5?crop=entropy&cs=srgb&fm=jpg&q=85",
    "https://images.pexels.com/photos/12464841/pexels-photo-12464841.jpeg",
    "https://images.unsplash.com/photo-1719123045765-08ca3c27991b?crop=entropy&cs=srgb&fm=jpg&q=85",
    "https://images.unsplash.com/photo-1758887260983-c171388cf56f?crop=entropy&cs=srgb&fm=jpg&q=85",
    "https://images.pexels.com/photos/12464843/pexels-photo-12464843.jpeg",
    "https://images.unsplash.com/photo-1722350766824-f8520e9676ac?crop=entropy&cs=srgb&fm=jpg&q=85",
  ];

  return (
    <section id="gallery" className="py-32 px-6 bg-[#121212]" data-testid="gallery-section">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-sm mb-4 font-bold">
              Gallery
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#ededed]">
              Our <span className="italic text-[#D4AF37]">Work</span> Speaks
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative overflow-hidden rounded-2xl group cursor-pointer h-96"
                data-testid={`gallery-item-${index}`}
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// Reviews Section
const ReviewsSection = () => {
  const reviews = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Exceptional service! The staff is professional and the ambience is top-notch. Best salon in Coimbatore.",
    },
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Love the inclusive environment. They made me feel so comfortable. The facial treatment was amazing!",
    },
    {
      name: "Arjun Patel",
      rating: 5,
      text: "Great haircut and beard styling. Very clean place with friendly staff. Highly recommend!",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-32 px-6 bg-[#0a0a0a]" data-testid="reviews-section">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className=" uppercase tracking-[0.4em] text-sm mb-4 font-bold">
              Testimonials
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#ededed]">
              What Our <span className="italic text-[#D4AF37]">Clients</span> Say
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-14 text-center"
              >
                <div className="flex justify-center mb-6 gap-2">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} size={28} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>
                <p className="text-[#ededed]/90 text-xl italic mb-8 leading-relaxed font-serif" data-testid="review-text">
                  "{reviews[currentReview].text}"
                </p>
                <p className="text-[#ededed] font-bold text-2xl font-serif" data-testid="review-author">
                  {reviews[currentReview].name}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-6 mt-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevReview}
                className="bg-white/5 border border-white/10 hover:border-[#3B82F6] text-[#ededed] p-4 rounded-full transition-all"
                data-testid="review-prev-button"
              >
                <ChevronLeft size={28} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextReview}
                className="bg-white/5 border border-white/10 hover:border-[#3B82F6] text-[#ededed] p-4 rounded-full transition-all"
                data-testid="review-next-button"
              >
                <ChevronRight size={28} />
              </motion.button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-[#121212]" data-testid="contact-section">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-sm mb-4 font-bold">
              Visit Us
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#ededed]">
              Location & <span className="italic text-[#D4AF37]">Contact</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-serif font-bold text-[#D4AF37] mb-8">
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-5"
                    data-testid="address-info"
                  >
                    <MapPin className="text-[#ededed] mt-1 flex-shrink-0" size={28} />
                    <div>
                      <p className="text-[#ededed] text-lg leading-relaxed">
                        114 Vilankuruchi Road, Thaneerpandal Rd, Peelamedu,<br />
                        B.R. Puram Industrial Estate, SK Complex<br />
                        Coimbatore, Tamil Nadu – 641004
                      </p>
                      <br />
                      <p className="text-[#ededed] text-lg leading-relaxed">
                        25A Puliyankulam to Sowripalayam Road, <br />
                        Opposite Meena Estate Busstand <br />
                        Coimbatore, Tamil Nadu – 641028
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-5"
                    data-testid="phone-info"
                  >
                    <Phone className="text-[#ededed]" size={28} />
                    <a
                      href="tel:08072016978"
                      className="text-[#ededed] hover:text-[#ededed] transition-colors text-xl"
                    >
                      080720 16978
                    </a>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-5"
                    data-testid="hours-info"
                  >
                    <Clock className="text-[#ededed]" size={28} />
                    <p className="text-[#ededed] text-lg">Opens at 7:30 AM</p>
                  </motion.div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Cut+It+Salon+%26+Spa+Coimbatore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] px-10 py-5 rounded-full uppercase tracking-widest font-bold text-base transition-all duration-300 inline-block"
                  data-testid="get-directions-button"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="h-[600px] rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3682682744!2d77.0064!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjUiTiA3N8KwMDAnMjMuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Cut It Salon Location"
                data-testid="google-map"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a]" data-testid="cta-section">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#ededed] mb-8 leading-tight">
            Book Your <span className="italic text-[#D4AF37]">Style</span> Today
          </h2>
          <p className="text-[#a1a1aa] text-xl mb-14 leading-relaxed">
            Experience premium grooming and spa services. Reserve your appointment now.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/918072016978?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Cut%20It%20Salon%20%26%20Spa.%20Please%20share%20the%20available%20slots.%20%F0%9F%98%8A"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white px-14 py-6 rounded-full uppercase tracking-widest font-bold text-lg transition-all duration-300 inline-block blue-glow blue-glow-hover"
            data-testid="cta-book-button"
          >
            Book Appointment Now
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-[#121212] border-t border-white/10 py-8 px-6" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/images/logo-removebg-preview.png" alt="Logo" className="w-96 h-24" />
            </div>
            <p className="text-[#a1a1aa] text-base leading-relaxed">
              Premium grooming and spa services in Coimbatore. Experience luxury, style, and sophistication.
            </p>
          </div>

          <div>
            <h4 className="text-[#ededed] uppercase tracking-wider text-sm font-bold mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-[#a1a1aa] hover:text-[#ededed] transition-colors text-base"
                  data-testid={`footer-link-${link.toLowerCase()}`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#ededed] uppercase tracking-wider text-sm font-bold mb-6">
              Contact
            </h4>
            <p className="text-[#a1a1aa] text-base mb-3 leading-relaxed">114 thanner panthal, vilankurichi road</p>
            <p className="text-[#a1a1aa] text-base mb-3">Coimbatore – 641004</p>
            <a
              href="tel:08072016978"
              className="text-[#a1a1aa] hover:text-[#ededed] transition-colors text-base"
            >
              080720 16978
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center">
          <p className="text-[#a1a1aa] text-sm">
            © {new Date().getFullYear()} Cut It Salon & Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// WhatsApp Float Button
const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/918072016978?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Cut%20It%20Salon%20%26%20Spa.%20Please%20share%20the%20available%20slots.%20%F0%9F%98%8A"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      data-testid="whatsapp-float-button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="30"
        height="30"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </motion.a>
  );
};

// Main Home Component
const Home = () => {
  return (
    <div className="relative">
      <div className="grain-overlay"></div>
      <Navigation />
      <ShutterHero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
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
