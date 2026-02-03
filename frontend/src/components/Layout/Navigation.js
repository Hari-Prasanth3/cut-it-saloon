"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300
    ${(scrolled || (isMobile && isOpen))
                    ? "backdrop-blur-xl bg-black/60 border-b border-white/10"
                    : "bg-transparent"
                }
  `}
            data-testid="main-navigation"

        >
            <div className="max-w-7xl mx-auto px-6 md:pt-2 py-2">
                <div className="flex items-center justify-between">
                    <a href="#home" className="flex items-center space-x-3" data-testid="logo-link">
                        <img src="/images/logo-removebg-preview.png" alt="Logo" className="w-32 md:w-48 h-12 md:h-16 max-w-full" />
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
                            className="md:hidden mt-4 pb-4 px-2 "
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

export default Navigation;
