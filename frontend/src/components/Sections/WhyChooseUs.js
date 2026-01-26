"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Scissors, Sparkles, ShieldCheck, Heart, Zap, Coffee, Award } from "lucide-react";
import ScrollReveal from "../Common/ScrollReveal";

const WhyChooseUs = () => {
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
        <section className="md:py-20 py-8 px-6 bg-[#0a0a0a] overflow-hidden" data-testid="why-choose-us-section">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.4em] text-sm mb-4 font-bold">
                            Why Choose Us
                        </p>
                        <h2 className="md:text-5xl text-3xl font-serif font-bold text-[#ededed]">
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

export default WhyChooseUs;
