"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ChevronDown } from "lucide-react";
import ScrollReveal from "../Common/ScrollReveal";

const Contact = () => {
    const branches = {
        vilankurichi: {
            label: "Vilankurichi (Peelamedu)",
            lat: 11.035910700270724,
            lng: 77.01562690363187,
        },
        sowripalayam: {
            label: "Sowripalayam",
            lat: 11.006430488320975,
            lng: 76.99673626244041,
        },
    };
    const [mapBranch, setMapBranch] = useState("vilankurichi");
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);


    const mapSrc = `https://maps.google.com/maps?q=${branches[mapBranch].lat},${branches[mapBranch].lng}&z=16&output=embed`;


    const directionsLink = selectedBranch
        ? `https://www.google.com/maps/dir/?api=1&destination=${branches[selectedBranch].lat},${branches[selectedBranch].lng}`
        : "#";


    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
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
                                <div className="space-y-3 p-4 rounded-lg mt-6">
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
                                </div>
                                <div className="space-y-3 p-4 rounded-lg mt-6">
                                    <motion.div
                                        whileHover={{ x: 10 }}
                                        className="flex items-start gap-5"
                                        data-testid="address-info"
                                    >
                                        <MapPin className="text-[#ededed] mt-1 flex-shrink-0" size={28} />
                                        <div>
                                            <p className="text-[#ededed] text-lg leading-relaxed">
                                                25A, Puliyankulam to Sowripalayam road,<br />
                                                Opposite Meena estate busstand, Meena estate,<br />
                                                Coimbatore, Tamil Nadu – 641022
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
                                            href="tel:9361856556"
                                            className="text-[#ededed] hover:text-[#ededed] transition-colors text-xl"
                                        >
                                            93618 56556
                                        </a>
                                    </motion.div>
                                </div>
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-5 mt-2 ml-4"
                                    data-testid="hours-info"
                                >
                                    <Clock className="text-[#ededed]" size={28} />
                                    <p className="text-[#ededed] text-lg">Opens at 7:30 AM</p>
                                </motion.div>
                            </div>

                            <div className="pb-10 relative" ref={dropdownRef}>
                                <a
                                    href={selectedBranch ? directionsLink : "#"}
                                    target={selectedBranch ? "_blank" : undefined}
                                    rel={selectedBranch ? "noopener noreferrer" : undefined}
                                    onClick={(e) => {
                                        if (!selectedBranch) {
                                            e.preventDefault();
                                            setOpen(true);
                                        }
                                    }}
                                    className="flex items-center justify-between gap-4 w-fit border-2 border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] px-6 py-4 rounded-full uppercase tracking-widest font-bold text-sm transition-all duration-300"
                                >
                                    <span>
                                        {selectedBranch ? branches[selectedBranch].label : "Get Directions"}
                                    </span>

                                    <span
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setOpen((prev) => !prev);
                                        }}
                                        className="cursor-pointer"
                                    >
                                        <ChevronDown size={20} />
                                    </span>
                                </a>
                                {open && (
                                    <div className="absolute mt-3 w-full bg-[#121212] border border-white/20 rounded-xl overflow-hidden shadow-xl z-50">
                                        {Object.entries(branches).map(([key, branch]) => (
                                            <button
                                                key={key}
                                                onClick={() => {
                                                    setSelectedBranch(key);
                                                    setMapBranch(key);
                                                    setOpen(false);
                                                }}
                                                className="w-full text-left px-6 py-4 text-sm uppercase tracking-wider text-[#ededed] hover:bg-white/10 transition-colors"
                                            >
                                                {branch.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <iframe
                            src={mapSrc}
                            className="w-full h-full"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            title={`Cut It Salon – ${branches[mapBranch].label}`}
                        />
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;
