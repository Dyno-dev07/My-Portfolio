"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Activity, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Elisha & Charles Solutions Inc.",
    date: "APR 2025 - PRESENT",
    status: "ACTIVE",
    desc: "Currently, as a Software Engineer at Elisha & Charles Solutions Inc., I am involved in the full software development lifecycle, from conceptualization to deployment. I design and implement robust, scalable, and efficient software solutions, contributing to innovative projects and leveraging cutting-edge technologies."
  },
  {
    title: "Quality Assurance Specialist",
    company: "Sites at Scale",
    date: "NOV 2024 - FEB 2025",
    status: "COMPLETED",
    desc: "In my role as a Quality Assurance Specialist at Sites at Scale, I was tasked with ensuring the reliability and functionality of web applications. I developed and executed test plans, identified and documented bugs, and worked closely with development teams to resolve issues. My focus was on delivering a flawless user experience."
  },
  {
    title: "Shopify Web Developer",
    company: "Chino Mowers & Engine Service",
    date: "JAN - MAR 2024",
    status: "COMPLETED",
    desc: "As a Shopify Web Developer for Chino Mowers & Engine Service, I was responsible for designing, developing, and maintaining their e-commerce store. This included custom theme development, app integration, and optimizing the user experience to drive sales. I ensured the site was responsive and visually appealing across all devices."
  },
  {
    title: "Technical Developer",
    company: "Sites at Scale",
    date: "JUL 2023 - NOV 2024",
    status: "COMPLETED",
    desc: "At Sites at Scale, I worked as a Technical Developer, focusing on building and customizing websites for various clients. I specialized in implementing complex features, optimizing site performance, and ensuring cross-browser compatibility. My role involved close collaboration with designers and project managers to deliver high-quality web solutions."
  },
  {
    title: "Software Engineer Intern",
    company: "Mangtas",
    date: "FEB - MAY 2023",
    status: "COMPLETED",
    desc: "As a Software Engineer Intern at Mangtas, I contributed to the development and maintenance of web applications. My responsibilities included writing clean, efficient code, participating in code reviews, and assisting in debugging and testing phases. I gained hands-on experience with modern web technologies and agile development methodologies."
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
                <p className="mt-4 text-gray-400 text-sm leading-relaxed pl-0 md:pl-14">
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