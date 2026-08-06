"use client";

import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Contact from "@/pages/Contact";

const Index = () => {
  return (
    <div className="bg-black min-h-screen selection:bg-blue-500 selection:text-white">
      <HeroSection />
      
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <AboutSection />
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <ExperienceSection />
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <ProjectsSection />
      </div>

      <div id="contact" className="relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
        <Contact />
      </div>

      <footer className="py-12 border-t border-gray-900 text-center">
        <p className="text-gray-600 font-mono text-xs tracking-widest uppercase">
          © 2026 DEANNE AGIR // ALL SYSTEMS OPERATIONAL
        </p>
      </footer>
    </div>
  );
};

export default Index;