"use client";

import React from "react";
import { motion, scrollTrigger } from "framer-motion";
import GamerPartCard from "../GamerPartCard";

const projects = [
  // ... (same projects array as before)
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black">
      {/* Background Grid & Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            scrollTrigger={{ trigger: { element: "#projects" } }}
            className="text-4xl md:text-6xl font-black italic text-white tracking-tighter uppercase"
          >
            HARDWARE <span className="text-blue-500">INVENTORY</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              scrollTrigger={{ trigger: { element: "#projects" } }}
              transition={{ delay: index * 0.1 }}
            >
              <GamerPartCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;