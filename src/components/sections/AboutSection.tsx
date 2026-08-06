"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, Cpu, Globe2, Zap, Code2, Database, GraduationCap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const skillCategories = [
  {
    title: "FRONTEND",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript"],
    color: "text-blue-400"
  },
  {
    title: "CMS",
    icon: Globe2,
    skills: ["WordPress", "Shopify"],
    color: "text-purple-400"
  },
  {
    title: "BACKEND",
    icon: Database,
    skills: ["Python", "PostgreSQL", "MySQL", "cPanel"],
    color: "text-green-400"
  },
  {
    title: "AUTOMATION",
    icon: Zap,
    skills: ["GoHighLevel", "HubSpot", "Zapier", "MailChimp"],
    color: "text-pink-400"
  },
  {
    title: "TOOLS_TECH",
    icon: Cpu,
    skills: ["Google Analytics", "Git", "Cloudflare"],
    color: "text-orange-400"
  }
];

const AboutSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Profile Visual - Identity Scan */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated Borders */}
              <div className="absolute -inset-4 border-2 border-blue-500/20 rounded-none skew-x-[-12deg] group-hover:border-blue-500/50 transition-all duration-500" />
              <div className="absolute -inset-2 border border-purple-500/20 rounded-none skew-x-[-12deg] group-hover:border-purple-500/50 transition-all duration-500 delay-100" />
              
              {/* Profile Image Placeholder */}
              <div className="w-full h-full bg-gray-900 skew-x-[-12deg] overflow-hidden relative border-2 border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                <div className="flex items-center justify-center h-full">
                  <User className="w-32 h-32 text-gray-800 group-hover:text-blue-500/50 transition-colors duration-500" />
                </div>
                
                {/* Scanning Line Animation */}
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-0.5 bg-blue-400/50 shadow-[0_0_15px_rgba(96,165,250,0.5)] z-10"
                />
              </div>

              {/* Location Tag */}
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-4 py-2 skew-x-[-12deg] font-black italic text-xs flex items-center gap-2 shadow-xl">
                <MapPin className="h-3 w-3 skew-x-[12deg]" />
                <span className="skew-x-[12deg]">PASAY_CITY, PH</span>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black italic text-white tracking-tighter mb-6">
                SYSTEM <span className="text-blue-500">PROFILE</span>
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed mb-8">
                I'm Deanne Agir, a full-stack web developer experienced in building and optimizing eCommerce and client-facing applications using JavaScript, Python, and PostgreSQL. I specialize in automation and performance optimization across Shopify, WordPress, and GoHighLevel — including custom CRM workflows, webhook integrations, and hand-coded email and landing page builds.
              </p>

              {/* Education Module */}
              <Card className="bg-gray-900/40 border-gray-800 p-4 mb-8 flex items-center gap-4 hover:border-blue-500/30 transition-all">
                <div className="p-2 bg-blue-500/10 rounded border border-blue-500/20 shrink-0">
                  <GraduationCap className="h-5 w-5 text-blue-400" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase block mb-1">
                    EDUCATION
                  </span>
                  <p className="text-white font-bold tracking-tight leading-snug">
                    BS in Information and Technology
                  </p>
                  <p className="text-sm text-gray-500 font-medium">
                    Silliman University <span className="font-mono text-gray-600">// 2019 - 2023</span>
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Skill Modules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillCategories.map((cat, idx) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={!isMobile ? { scale: 1.05 } : {}}
                >
                  <Card className="bg-gray-900/40 border-gray-800 p-4 hover:border-blue-500/30 transition-all group h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <cat.icon className={`h-4 w-4 ${cat.color}`} />
                      <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">{cat.title}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map(skill => (
                        <Badge key={skill} variant="outline" className="bg-transparent border-gray-800 text-[10px] text-gray-400 group-hover:text-white group-hover:border-blue-500/20 transition-colors cursor-default">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;