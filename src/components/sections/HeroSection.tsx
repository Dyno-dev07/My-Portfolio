"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen w-full flex flex-col items-center justify-between relative overflow-hidden pt-32 pb-12 bg-black">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Top Spacer to help center the middle content */}
      <div className="hidden md:block" />

      {/* Main Content Wrapper */}
      <div className="w-full px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-8 tracking-widest"
        >
          <Terminal className="h-3 w-3" />
          SYSTEM STATUS: ONLINE // CORE_V1.0
        </motion.div>

        <div className="w-full max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black italic tracking-tighter text-white mb-8 leading-[0.9] uppercase"
          >
            DEANNE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600 inline-block pr-4">AGIR</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
        >
          Full-Stack Developer building and optimizing eCommerce and client-facing applications with JavaScript, Python, and PostgreSQL.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 w-full"
        >
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-black italic px-12 py-8 text-xl md:text-2xl skew-x-[-12deg] rounded-none shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105 active:scale-95">
            <a href="#projects">
              <span className="skew-x-[12deg]">VIEW INVENTORY</span>
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator - Now part of the flex flow for perfect centering */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{ 
          opacity: { duration: 1, delay: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative z-10 text-blue-500/30 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
};

export default HeroSection;