"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../Common/ScrollReveal";

const Gallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1698864551605-fab9fed03af5?crop=entropy&cs=srgb&fm=jpg&q=85",
        "https://images.pexels.com/photos/12464841/pexels-photo-12464841.jpeg",
        "https://images.unsplash.com/photo-1719123045765-08ca3c27991b?crop=entropy&cs=srgb&fm=jpg&q=85",
        "https://images.unsplash.com/photo-1758887260983-c171388cf56f?crop=entropy&cs=srgb&fm=jpg&q=85",
        "https://images.pexels.com/photos/12464843/pexels-photo-12464843.jpeg",
        "https://images.unsplash.com/photo-1722350766824-f8520e9676ac?crop=entropy&cs=srgb&fm=jpg&q=85",
    ];

    return (
        <section id="gallery" className="md:py-20 py-8 px-6 bg-[#121212] overflow-hidden" data-testid=" overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.4em] text-sm mb-4 font-bold">
                            Gallery
                        </p>
                        <h2 className="md:text-5xl text-3xl font-serif font-bold text-[#ededed]">
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

export default Gallery;
