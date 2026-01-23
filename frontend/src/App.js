import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
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
  ChevronRight
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

// Fade In Animation Component
const FadeInSection = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-white/10"
          : "bg-transparent"
      }`}
      data-testid="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-3" data-testid="logo-link">
            <h1 className="text-2xl md:text-3xl font-serif font-bold gold-gradient-text">
              Cut It
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#ededed] hover:text-[#D4AF37] transition-colors duration-300 text-sm tracking-wider uppercase"
                data-testid={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="https://dikidi.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-[#D4AF37] text-black hover:bg-[#b5952f] px-6 py-3 uppercase tracking-widest font-bold text-sm transition-all duration-300"
            data-testid="book-now-nav-button"
          >
            Book Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#ededed] hover:text-[#D4AF37] transition-colors"
            data-testid="mobile-menu-toggle"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden mt-4 pb-4"
            data-testid="mobile-menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-[#ededed] hover:text-[#D4AF37] transition-colors text-lg tracking-wider uppercase border-b border-white/10"
                data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://dikidi.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-[#D4AF37] text-black text-center px-6 py-3 uppercase tracking-widest font-bold text-sm"
              data-testid="book-now-mobile-button"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1698864551605-fab9fed03af5?q=80&w=2070&auto=format&fit=crop"
          alt="Cut It Salon Interior"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-sans"
        >
          Experience Luxury
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#ededed] mb-6 leading-tight"
          data-testid="hero-heading"
        >
          Cut It Salon & Spa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-[#ededed]/80 mb-12 max-w-2xl mx-auto font-sans"
        >
          Where style meets sophistication. Premium grooming, styling, and spa services in Coimbatore.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://dikidi.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] text-black hover:bg-[#b5952f] px-8 py-4 uppercase tracking-widest font-bold text-sm transition-all duration-300 w-full sm:w-auto text-center"
            data-testid="hero-book-button"
          >
            Book Appointment
          </a>
          <a
            href="tel:08072016978"
            className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-4 uppercase tracking-widest font-bold text-sm transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2"
            data-testid="hero-call-button"
          >
            <Phone size={18} />
            Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0a]" data-testid="about-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1707250059131-b6f9d7fd6612?q=80&w=2070&auto=format&fit=crop"
                alt="Salon Interior"
                className="w-full h-[500px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#D4AF37]/30"></div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div>
              <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-4">
                About Us
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#ededed] mb-6" data-testid="about-heading">
                Your Trusted Style Partner
              </h2>
              <p className="text-[#ededed]/70 text-lg mb-6 leading-relaxed">
                At Cut It Salon & Spa, we believe grooming is an art. Located in the heart of Coimbatore, 
                our salon combines luxury with professionalism to deliver exceptional beauty and grooming experiences.
              </p>
              <p className="text-[#ededed]/70 text-lg mb-8 leading-relaxed">
                We pride ourselves on our clean, modern ambience and our commitment to inclusivity. 
                As an LGBTQ+ friendly establishment, we welcome everyone with warmth and respect.
              </p>

              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <AnimatedCounter end={5} suffix="+" />
                  <p className="text-[#ededed]/60 text-sm mt-2 uppercase tracking-wider">
                    Years Experience
                  </p>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={84} suffix="+" />
                  <p className="text-[#ededed]/60 text-sm mt-2 uppercase tracking-wider">
                    Happy Clients
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-[#D4AF37] text-5xl font-bold font-serif">4.8</div>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
                    ))}
                  </div>
                  <p className="text-[#ededed]/60 text-sm mt-1 uppercase tracking-wider">
                    Rating
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
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
    <section id="services" className="py-24 px-6 bg-[#121212]" data-testid="services-section">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-4">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#ededed]" data-testid="services-heading">
              Premium Treatments
            </h2>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="space-y-2 sticky top-24">
                {Object.keys(services).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-6 py-4 border-l-2 transition-all duration-300 ${
                      activeCategory === category
                        ? "border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]"
                        : "border-white/10 text-[#ededed]/60 hover:border-[#D4AF37]/50 hover:text-[#ededed]"
                    }`}
                    data-testid={`service-category-${category.toLowerCase().replace(/ /g, '-')}`}
                  >
                    <span className="text-lg font-semibold tracking-wide uppercase">
                      {category}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12">
                <h3 className="text-2xl font-serif font-bold text-[#D4AF37] mb-8" data-testid="active-service-category">
                  {activeCategory}
                </h3>
                <div className="space-y-4">
                  {services[activeCategory].map((service, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-white/5 hover:border-[#D4AF37]/30 transition-colors"
                      data-testid={`service-item-${index}`}
                    >
                      <span className="text-[#ededed] text-base">{service.name}</span>
                      <span className="text-[#D4AF37] font-bold text-lg">
                        ₹{service.price}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-[#ededed]/40 text-sm mt-6 italic">
                  * Hair Wash available at ₹50
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Star size={32} />,
      title: "4.8★ Rating",
      description: "Trusted by 84+ satisfied customers",
    },
    {
      icon: <Award size={32} />,
      title: "Professional Staff",
      description: "Experienced and certified stylists",
    },
    {
      icon: <Heart size={32} />,
      title: "LGBTQ+ Friendly",
      description: "Inclusive and welcoming environment",
    },
    {
      icon: <Users size={32} />,
      title: "Clean & Modern",
      description: "Hygienic space with premium ambience",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]" data-testid="why-choose-us-section">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-4">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#ededed]">
              Excellence in Every Detail
            </h2>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <div
                className="bg-[#121212] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 p-8 text-center group hover:-translate-y-1"
                data-testid={`feature-card-${index}`}
              >
                <div className="text-[#D4AF37] mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#ededed] mb-2 font-serif">
                  {feature.title}
                </h3>
                <p className="text-[#ededed]/60 text-sm">{feature.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const GallerySection = () => {
  const images = [
    "https://images.unsplash.com/photo-1701885183616-cf00e2db1a3b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1722350766824-f8520e9676ac?q=80&w=2070&auto=format&fit=crop",
    "https://images.pexels.com/photos/3993307/pexels-photo-3993307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1666622833860-562f3a5caa59?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520338661084-680395057c93?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542848285-4777eb2a621e?q=80&w=2070&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-[#121212]" data-testid="gallery-section">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-4">
              Gallery
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#ededed]">
              Our Work Speaks
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <div
                className="relative overflow-hidden group cursor-pointer h-80"
                data-testid={`gallery-item-${index}`}
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/20 transition-all duration-500"></div>
              </div>
            </FadeInSection>
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
    <section id="reviews" className="py-24 px-6 bg-[#0a0a0a]" data-testid="reviews-section">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-4">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#ededed]">
              What Our Clients Say
            </h2>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="relative">
            <div className="bg-[#121212] border border-white/5 p-12 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <Star key={i} size={24} fill="#D4AF37" color="#D4AF37" />
                ))}
              </div>
              <p className="text-[#ededed]/80 text-lg italic mb-6 leading-relaxed" data-testid="review-text">
                "{reviews[currentReview].text}"
              </p>
              <p className="text-[#D4AF37] font-bold text-xl font-serif" data-testid="review-author">
                {reviews[currentReview].name}
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevReview}
                className="bg-[#121212] border border-white/10 hover:border-[#D4AF37] text-[#D4AF37] p-3 transition-all"
                data-testid="review-prev-button"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextReview}
                className="bg-[#121212] border border-white/10 hover:border-[#D4AF37] text-[#D4AF37] p-3 transition-all"
                data-testid="review-next-button"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#121212]" data-testid="contact-section">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-4">
              Visit Us
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#ededed]">
              Location & Contact
            </h2>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeInSection>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#D4AF37] mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4" data-testid="address-info">
                    <MapPin className="text-[#D4AF37] mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-[#ededed] text-base leading-relaxed">
                        114 Vilankuruchi Road, Thaneerpandal Rd, Peelamedu,<br />
                        B.R. Puram Industrial Estate, SK Complex<br />
                        Coimbatore, Tamil Nadu – 641004
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4" data-testid="phone-info">
                    <Phone className="text-[#D4AF37]" size={24} />
                    <a
                      href="tel:08072016978"
                      className="text-[#ededed] hover:text-[#D4AF37] transition-colors text-lg"
                    >
                      080720 16978
                    </a>
                  </div>

                  <div className="flex items-center gap-4" data-testid="hours-info">
                    <Clock className="text-[#D4AF37]" size={24} />
                    <p className="text-[#ededed] text-base">Opens at 7:30 AM</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Cut+It+Salon+%26+Spa+Coimbatore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-4 uppercase tracking-widest font-bold text-sm transition-all duration-300 inline-block"
                  data-testid="get-directions-button"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="h-[500px] bg-[#1a1a1a] border border-white/10">
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
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]" data-testid="cta-section">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#ededed] mb-6">
            Book Your Style Today
          </h2>
          <p className="text-[#ededed]/70 text-lg mb-12">
            Experience premium grooming and spa services. Reserve your appointment now.
          </p>
          <a
            href="https://dikidi.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] text-black hover:bg-[#b5952f] px-12 py-5 uppercase tracking-widest font-bold text-base transition-all duration-300 inline-block gold-shadow hover:gold-glow"
            data-testid="cta-book-button"
          >
            Book Appointment Now
          </a>
        </FadeInSection>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-[#121212] border-t border-white/10 py-12 px-6" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold gold-gradient-text mb-4">
              Cut It Salon & Spa
            </h3>
            <p className="text-[#ededed]/60 text-sm">
              Premium grooming and spa services in Coimbatore.
            </p>
          </div>

          <div>
            <h4 className="text-[#D4AF37] uppercase tracking-wider text-sm font-bold mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-[#ededed]/60 hover:text-[#D4AF37] transition-colors text-sm"
                  data-testid={`footer-link-${link.toLowerCase()}`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#D4AF37] uppercase tracking-wider text-sm font-bold mb-4">
              Contact
            </h4>
            <p className="text-[#ededed]/60 text-sm mb-2">SK Complex, Coimbatore</p>
            <p className="text-[#ededed]/60 text-sm mb-2">Tamil Nadu – 641004</p>
            <a
              href="tel:08072016978"
              className="text-[#ededed]/60 hover:text-[#D4AF37] transition-colors text-sm"
            >
              080720 16978
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-[#ededed]/40 text-sm">
            © 2025 Cut It Salon & Spa. All rights reserved. | LGBTQ+ Friendly 🏳️‍🌈
          </p>
        </div>
      </div>
    </footer>
  );
};

// WhatsApp Float Button
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918072016978"
      target="_blank"
      rel="noopener noreferrer"
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
    </a>
  );
};

// Main Home Component
const Home = () => {
  return (
    <div className="relative">
      <div className="grain-overlay"></div>
      <Navigation />
      <HeroSection />
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
