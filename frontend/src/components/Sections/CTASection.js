"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../Common/ScrollReveal";

const CTASection = () => {
    return (
        <section className="md:py-20 py-8 px-6 bg-[#0a0a0a]" data-testid="cta-section">
            <div className="max-w-4xl mx-auto text-center">
                <ScrollReveal>
                    <h2 className="md:text-5xl text-3xl font-serif font-bold text-[#ededed] mb-8 leading-tight">
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
                        className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 md:px-8 md:py-4 rounded-full uppercase tracking-widest font-bold text-base md:text-lg transition-all duration-300 inline-block blue-glow blue-glow-hover"
                        data-testid="cta-book-button"
                    >
                        Book Appointment Now
                    </motion.a>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default CTASection;
