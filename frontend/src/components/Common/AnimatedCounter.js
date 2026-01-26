"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const increment = end / (duration * 60);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 1000 / 60);
            return () => clearInterval(timer);
        }
    }, [inView, end, duration]);

    return (
        <span ref={ref} className="text-[#D4AF37] md:text-5xl text-3xl font-bold font-serif">
            {count}{suffix}
        </span>
    );
};

export default AnimatedCounter;
