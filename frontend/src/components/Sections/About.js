"use client";

import React from "react";
import { Star } from "lucide-react";
import ScrollReveal from "../Common/ScrollReveal";
import AnimatedCounter from "../Common/AnimatedCounter";

const About = () => {
    return (
        <section id="about" className="md:py-20 py-8 px-6 bg-[#0a0a0a] overflow-hidden" data-testid="about-section">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <ScrollReveal>
                        <div className="relative group overflow-hidden">
                            <div className="overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    src="/images/about.png"
                                    alt="Salon Interior"
                                    className="w-full h-[600px] object-cover image-zoom-hover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-40 h-40 border-2 border-[#D4AF37]/30 rounded-2xl hidden md:block"></div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div>
                            <p className="uppercase tracking-[0.4em] text-sm mb-4 font-bold">
                                About Us
                            </p>
                            <h2 className="md:text-5xl text-3xl font-serif font-bold text-[#ededed] mb-8 leading-tight" data-testid="about-heading">
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
                                    <div className="text-[#D4AF37] md:text-5xl text-3xl font-bold font-serif">4.8</div>
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

export default About;
