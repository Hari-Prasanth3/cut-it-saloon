"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const HeroSection = () => {
    const [shutterComplete, setShutterComplete] = useState(false);

    return (
        <section
            id="home"
            className="relative min-h-[70vh] md:h-screen flex items-start md:items-center justify-center overflow-hidden pt-24 md:pt-0 pb-12 md:pb-0"
            data-testid="hero-section"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10"></div>
                <img
                    src="/images/hero.png"
                    alt="Cut It Salon Interior"
                    className="w-full h-full object-cover object-center min-w-full min-h-full"
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
                style={{ transformOrigin: "left", maxWidth: "100vw", width: "50%" }}
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
                style={{ transformOrigin: "right", maxWidth: "100vw", width: "50%" }}
            />

            {/* Hero Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
                className="relative z-20 text-center px-4 md:px-6 max-w-5xl w-full mx-auto"
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

export default HeroSection;
