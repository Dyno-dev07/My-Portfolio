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
    title: "Software Engineer",
    company: "Elisha & Charles Solutions Inc.",
    date: "APR 2025 - PRESENT",
    status: "ACTIVE",
    desc: "Currently, as a Software Engineer at Elisha & Charles Solutions Inc., I am involved in the full software development lifecycle, from conceptualization to deployment. I design and implement robust, scalable, and efficient software solutions, contributing to innovative projects and leveraging cutting-edge technologies."
  },
  {
    id: "exp-2",
    title: "Quality Assurance Specialist",
    company: "Sites at Scale",
    date: "NOV 2024 - FEB 2025",
    status: "COMPLETED",
    desc: "In my role as a Quality Assurance Specialist at Sites at Scale, I was tasked with ensuring the reliability and functionality of web applications. I developed and executed test plans, identified and documented bugs, and worked closely with development teams to resolve issues. My focus was on delivering a flawless user experience."
  },
  {
    id: "exp-3",
    title: "Shopify Web Developer",
    company: "Chino Mowers & Engine Service",
    date: "JAN - MAR 2024",
    status: "COMPLETED",
    desc: "As a Shopify Web Developer for Chino Mowers & Engine Service, I was responsible for designing, developing, and maintaining their e-commerce store. This included custom theme development, app integration, and optimizing the user experience to drive sales. I ensured the site was responsive and visually appealing across all devices."
  },
  {
    id: "exp-4",
    title: "Technical Developer",
    company: "Sites at Scale",
    date: "JUL 2023 - NOV 2024",
    status: "COMPLETED",
    desc: "At Sites at Scale, I worked as a Technical Developer, focusing on building and customizing websites for various clients. I specialized in implementing complex features, optimizing site performance, and ensuring cross-browser compatibility. My role involved close collaboration with designers and project managers to deliver high-quality web solutions."
  },
  {
    id: "exp-5",
    title: "Software Engineer Intern",
    company: "Mangtas",
    date: "FEB - MAY 2023",
    status: "COMPLETED",
    desc: "As a Software Engineer Intern at Mangtas, I contributed to the development and maintenance of web applications. My responsibilities included writing clean, efficient code, participating in code reviews, and assisting in debugging and testing phases. I gained hands-on experience with modern web technologies and agile development methodologies."
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
          {/* New Metrics Section */}
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
              <p className="mt-8 text-gray-300 text-lg leading-relaxed pl-0 md:pl-20 relative z-10">
                {recent.desc}
              </p>
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
                          <p className="text-sm text-gray-400 leading-relaxed italic">
                            {exp.desc}
                          </p>
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