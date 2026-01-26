"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import ScrollReveal from "../Common/ScrollReveal";

const Contact = () => {
    return (
        <section id="contact" className="md:py-20 py-8 px-6 bg-[#121212] overflow-hidden" data-testid="contact-section">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <p className="uppercase tracking-[0.4em] text-sm mb-4 font-bold">
                            Visit Us
                        </p>
                        <h2 className="md:text-5xl text-3xl font-serif font-bold text-[#ededed]">
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

export default Contact;
