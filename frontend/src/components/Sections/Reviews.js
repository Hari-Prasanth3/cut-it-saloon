"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "../Common/ScrollReveal";

const Reviews = () => {
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
        <section id="reviews" className="md:py-20 py-8 px-6 bg-[#0a0a0a]" data-testid="reviews-section">
            <div className="max-w-4xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <p className=" uppercase tracking-[0.4em] text-sm mb-4 font-bold">
                            Testimonials
                        </p>
                        <h2 className="md:text-5xl text-3xl font-serif font-bold text-[#ededed]">
                            What Our <span className="italic text-[#D4AF37]">Clients</span> Say
                        </h2>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentReview}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-14 text-center"
                            >
                                <div className="flex justify-center mb-6 gap-2">
                                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                                        <Star key={i} size={28} fill="#D4AF37" color="#D4AF37" />
                                    ))}
                                </div>
                                <p className="text-[#ededed]/90 text-xl italic mb-8 leading-relaxed font-serif" data-testid="review-text">
                                    "{reviews[currentReview].text}"
                                </p>
                                <p className="text-[#ededed] font-bold text-2xl font-serif" data-testid="review-author">
                                    {reviews[currentReview].name}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex justify-center gap-6 mt-10">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={prevReview}
                                className="bg-white/5 border border-white/10 hover:border-[#3B82F6] text-[#ededed] p-4 rounded-full transition-all"
                                data-testid="review-prev-button"
                            >
                                <ChevronLeft size={28} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={nextReview}
                                className="bg-white/5 border border-white/10 hover:border-[#3B82F6] text-[#ededed] p-4 rounded-full transition-all"
                                data-testid="review-next-button"
                            >
                                <ChevronRight size={28} />
                            </motion.button>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Reviews;
