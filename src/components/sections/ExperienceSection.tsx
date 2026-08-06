"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Activity, Calendar } from "lucide-react";
import ExperienceMetrics from "../ExperienceMetrics";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experiences = [
  {
    id: "exp-1",
    title: "Shopify Web Developer | GHL Specialist",
    company: "Freelance",
    date: "JAN 2024 - PRESENT",
    status: "ACTIVE",
    bullets: [
      "Developed responsive Shopify web pages from Figma designs, ensuring pixel-accurate implementation and cross-device compatibility.",
      "Built and integrated custom “Contact Us” and newsletter forms beyond theme limitations, improving lead capture functionality.",
      "Built automated lead-scoring and email workflows in GHL that tracked website visitors, ranked leads by interest, and routed each one into the right follow-up sequence automatically.",
      "Designed and coded responsive marketing emails that displayed correctly across all major email apps, with clear calls-to-action that drove more demo bookings."
    ]
  },
  {
    id: "exp-2",
    title: "IT Specialist",
    company: "Elisha & Charles Solutions, Inc.",
    date: "APR 2025 - MAY 2026",
    status: "COMPLETED",
    bullets: [
      "Assisted in maintaining and optimizing company systems and web assets.",
      "Integrated Google reCAPTCHA into web forms, significantly reducing spam and bot-generated submissions.",
      "Configured and deployed Cloudflare services, improving website security, DNS management, and performance optimization.",
      "Integrated SMTP services for reliable email delivery, enabling automated notifications and improving form communication workflows."
    ]
  },
  {
    id: "exp-3",
    title: "Technical Developer / QA Engineer",
    company: "Sites at Scale",
    date: "JUL 2023 - FEB 2025",
    status: "COMPLETED",
    bullets: [
      "Built and managed client automation workflows using GoHighLevel, HubSpot, and Zapier, streamlining lead capture and follow-up processes.",
      "Developed a Python automation script to collect and process image and product data, reducing manual workload by 25%.",
      "Built a Chrome extension to automate site element validation and mobile responsiveness checks, reducing pre-launch QA time by 57%."
    ]
  },
  {
    id: "exp-4",
    title: "Software Engineer Intern",
    company: "Mangtas",
    date: "FEB - MAY 2023",
    status: "COMPLETED",
    bullets: [
      "Contributed to the development and maintenance of web applications.",
      "Wrote clean code, participated in code reviews, and assisted in debugging and testing phases using modern web technologies."
    ]
  }
];

const ExperienceSection = () => {
  const [recent, ...others] = experiences;

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black italic text-white tracking-tighter mb-16 text-center">
          SYSTEM <span className="text-purple-500">LOGS</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <ExperienceMetrics />

          {/* Recent Experience - Centered & Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex justify-center"
          >
            <Card className="w-full max-w-4xl bg-gray-900/60 border-l-4 border-l-purple-500 border-y-gray-800 border-r-gray-800 p-8 hover:bg-gray-800/40 transition-all group relative overflow-hidden">
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-purple-500/20 rounded border border-purple-500/30">
                    <Activity className="h-8 w-8 text-purple-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl md:text-3xl font-black italic text-white group-hover:text-purple-300 transition-colors">
                        {recent.title}
                      </h3>
                      <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded border border-green-500/30 animate-pulse">
                        {recent.status}
                      </span>
                    </div>
                    <p className="text-xl text-gray-400 font-bold tracking-tight">{recent.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-mono text-gray-500 bg-black/40 px-4 py-2 rounded border border-gray-800">
                  <Calendar className="h-4 w-4" /> {recent.date}
                </div>
              </div>
              <ul className="mt-8 space-y-3 pl-0 md:pl-20 relative z-10">
                {recent.bullets.map((bullet, i) => (
                  <li key={i} className="text-gray-300 text-lg leading-relaxed flex gap-3">
                    <span className="text-purple-500 mt-1.5">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Other Experiences - 2x2 Grid with Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-gray-900/40 border-gray-800 hover:border-purple-500/30 transition-all group overflow-hidden">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={exp.id} className="border-none">
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-2 bg-gray-800 rounded border border-gray-700 group-hover:border-purple-500/20 transition-colors">
                            <Activity className="h-4 w-4 text-gray-400 group-hover:text-purple-400" />
                          </div>
                          <div className="text-[10px] font-mono text-gray-600 flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {exp.date}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium mb-4">{exp.company}</p>
                        
                        <AccordionTrigger className="py-2 text-xs font-mono text-purple-400 hover:text-purple-300 hover:no-underline justify-start gap-2 uppercase tracking-widest">
                          View Log Details
                        </AccordionTrigger>
                      </div>
                      
                      <AccordionContent className="px-6 pb-6">
                        <div className="pt-4 border-t border-gray-800">
                          <ul className="space-y-2">
                            {exp.bullets.map((bullet, i) => (
                              <li key={i} className="text-sm text-gray-400 leading-relaxed flex gap-2">
                                <span className="text-purple-500">•</span>
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;