"use client";

import React from "react";
import { motion } from "framer-motion";
import GamerPartCard from "../GamerPartCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: 1,
    title: "Bowers & Flowers",
    description: "High-bandwidth e-commerce engine optimized for floral logistics and elegant UI rendering.",
    imageUrl: "/Bowers&Flowers.png",
    link: "https://bowersandflowers.com.au/",
    techStack: ["Shopify", "Liquid"],
    category: "Websites",
  },
  {
    id: 2,
    title: "Gas Detection Australia",
    description: "Industrial-grade information hub with real-time product filtering and technical spec sheets.",
    imageUrl: "/GDA.png",
    link: "https://www.gasdetectionaustralia.com.au/",
    techStack: ["WordPress", "PHP"],
    category: "Websites",
  },
  {
    id: 6,
    title: "DesignEase Extension",
    description: "System diagnostic tool for web developers to audit consistency, fonts, and responsive breakpoints.",
    imageUrl: "/DesignEaseS.png",
    link: "https://chromewebstore.google.com/detail/designease/bjklbbpkfdjkjnpjdmdbaedpbjbfpcfp",
    category: "Creations",
    techStack: ["React", "Chrome API"],
  },
  {
    id: 7,
    title: "Financial Tracker",
    description: "Real-time data processing unit for personal asset management and expense visualization.",
    imageUrl: "/Updated App Logo.png",
    category: "Creations",
    techStack: ["JavaScript", "GSAP", "Tailwind"],
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-black italic text-white tracking-tighter">
              HARDWARE <span className="text-blue-500">INVENTORY</span>
            </h2>
            <p className="text-gray-500 font-mono mt-2">SELECT COMPONENT CATEGORY TO VIEW SPECS</p>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-gray-900 border border-gray-800 p-1 mb-12 inline-flex">
            <TabsTrigger value="all" className="data-[state=active]:bg-blue-600 font-bold italic px-6">ALL_PARTS</TabsTrigger>
            <TabsTrigger value="Websites" className="data-[state=active]:bg-blue-600 font-bold italic px-6">WEBSITES</TabsTrigger>
            <TabsTrigger value="Creations" className="data-[state=active]:bg-blue-600 font-bold italic px-6">CREATIONS</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <GamerPartCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="Websites" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(p => p.category === "Websites").map((project, index) => (
                <GamerPartCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="Creations" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(p => p.category === "Creations").map((project, index) => (
                <GamerPartCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;