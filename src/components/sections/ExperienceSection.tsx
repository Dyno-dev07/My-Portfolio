"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Activity, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Elisha & Charles Solutions Inc.",
    date: "2025 - PRESENT",
    status: "ACTIVE",
    desc: "Architecting robust software solutions and leading full-cycle development deployments."
  },
  {
    title: "QA Specialist",
    company: "Sites at Scale",
    date: "2024 - 2025",
    status: "COMPLETED",
    desc: "System-wide debugging and performance optimization for high-traffic web applications."
  },
  {
    title: "Technical Developer",
    company: "Sites at Scale",
    date: "2023 - 2024",
    status: "COMPLETED",
    desc: "Custom component engineering and cross-platform compatibility integration."
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black italic text-white tracking-tighter mb-16 text-center">
          SYSTEM <span className="text-purple-500">LOGS</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/50 border-l-4 border-l-purple-500 border-y-gray-800 border-r-gray-800 p-6 hover:bg-gray-800/50 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-purple-500/10 rounded border border-purple-500/20">
                      <Activity className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{exp.title}</h3>
                      <p className="text-gray-400 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-1">
                      <Calendar className="h-3 w-3" /> {exp.date}
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${exp.status === 'ACTIVE' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-gray-800 text-gray-500 border border-gray-700'}`}>
                      {exp.status}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed pl-14">
                  {exp.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;