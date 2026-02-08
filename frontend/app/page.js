"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";
import WhatsAppButton from "@/components/Common/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full animate-pulse"></div>
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/5 blur-[120px] rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="grain-overlay opacity-[0.03]"></div>

      <div className="z-10 text-center max-w-4xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 to-blue-500/20 rounded-full blur-2xl group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative p-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl">
              <Image
                src="/images/cut-it-saloon-logo-removebg-preview.png"
                alt="Cut It Saloon Logo"
                width={160}
                height={160}
                className="relative rounded-full hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-8xl font-serif gold-gradient-text mb-6 tracking-tight leading-tight">
            Coming Soon
          </h1>

          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-10"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-2xl text-white/70 font-sans mb-14 tracking-wide font-light max-w-2xl mx-auto leading-relaxed"
        >
          We're creating a sanctuary where style meets relaxation. Soon,
          Chennai's finest grooming experience will be open for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16"
        >
          <div className="flex items-center gap-4 text-white/50 hover:text-[#D4AF37] transition-all duration-300 group">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#D4AF37]/30 transition-all shadow-lg group-hover:shadow-[#D4AF37]/5">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-[#D4AF37]/70 font-bold mb-1">
                Our Location
              </p>
              <p className="text-sm font-medium text-white/90">
                Coming to Coimbatore, India
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white/50 hover:text-blue-400 transition-all duration-300 group">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-400/30 transition-all shadow-lg group-hover:shadow-blue-400/5">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-blue-400/70 font-bold mb-1">
                Contact
              </p>
              <p className="text-sm font-medium text-white/90">
                Available via WhatsApp
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center gap-10"
        >
          <div className="relative w-full max-w-md group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-blue-500 rounded-full blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
              <input
                type="email"
                placeholder="Join the exclusive launch list"
                className="bg-transparent border-none outline-none px-6 py-3 flex-grow text-white placeholder:text-white/30 text-base"
              />
              <button className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-bold text-sm hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-[#D4AF37]/10">
                Notify Me
              </button>
            </div>
          </div>

          <div className="flex gap-10 items-center mt-4">
            <div className="h-[1px] w-16 bg-gradient-to-l from-white/20 to-transparent"></div>
            <div className="flex gap-6">
              <a
                href="#"
                className="p-4 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all duration-500 hover:bg-[#D4AF37]/5 hover:scale-110 shadow-lg"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-4 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-blue-500 hover:border-blue-500/50 transition-all duration-500 hover:bg-blue-500/5 hover:scale-110 shadow-lg"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            <div className="h-[1px] w-16 bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-10 left-0 right-0 text-center"
      >
        <p className="text-white/10 text-[10px] font-sans tracking-[0.6em] uppercase font-bold">
          Luxury Grooming Redefined &bull; Since 2024
        </p>
      </motion.div>

      <WhatsAppButton />
    </main>
  );
}
