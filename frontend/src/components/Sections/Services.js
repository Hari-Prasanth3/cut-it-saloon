"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../Common/ScrollReveal";

const Services = () => {
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
        <section id="services" className="md:py-20 py-8 px-6 bg-[#121212] overflow-hidden" data-testid="services-section">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.4em] text-sm mb-4 font-bold">
                            Our Services
                        </p>
                        <h2 className="md:text-5xl text-3xl font-serif font-bold text-[#ededed]" data-testid="services-heading">
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
                                            ? "border-[#D4AF37] bg-white/5 text-[#ededed] backdrop-blur-sm"
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
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10">
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
                                            className="flex justify-between items-center py-4 border-b border-white/10 hover:border-[#D4AF37]/30 transition-colors group"
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

export default Services;
