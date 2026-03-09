"use client";

import React from "react";
import { motion, scrollTrigger } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen w-full flex flex-col items-center justify-between relative overflow-hidden pt-32 pb-12 bg-black">
      {/* Background Grid & Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Scroll-triggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          scrollTrigger={{ trigger: { element: "#home" } }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-8 tracking-widest"
        >
          <Terminal className="h-3 w-3" />
          SYSTEM STATUS: ONLINE // CORE_V1.0
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          scrollTrigger={{ trigger: { element: "#home" } }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black italic tracking-tighter text-white mb-8 leading-[0.9] uppercase"
        >
          DEANNE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600 inline-block pr-4">AGIR</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          scrollTrigger={{ trigger: { element: "#home" } }}
          className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
        >
          High-Performance Full-Stack Developer specializing in immersive web architectures and digital components.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          scrollTrigger={{ trigger: { element: "#home" } }}
          className="flex flex-wrap justify-center gap-6 w-full"
        >
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-black italic px-12 py-8 text-xl md:text-2xl skew-x-[-12deg] rounded-none shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105 active:scale-95">
            <a href="#projects">
              <span className="skew-x-[12deg]">VIEW INVENTORY</span>
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        scrollTrigger={{ trigger: { element: "#home" } }}
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