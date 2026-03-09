"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cpu, Zap, Box, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  techStack?: string[];
  category: string;
}

const GamerPartCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="bg-gray-900/80 border-2 border-blue-500/30 hover:border-blue-400 transition-all duration-500 overflow-hidden group relative">
        {/* RGB Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
        
        <CardHeader className="p-0 relative">
          <div className="absolute top-2 right-2 z-10">
            <Badge className="bg-blue-600/80 backdrop-blur-md border-none text-[10px] uppercase tracking-widest">
              {project.category}
            </Badge>
          </div>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-900 to-transparent" />
        </CardHeader>

        <CardContent className="p-6 relative">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="h-4 w-4 text-blue-400" />
            <span className="text-[10px] text-blue-400 font-mono uppercase tracking-tighter">Model: {project.title.replace(/\s+/g, '-').toLowerCase()}</span>
          </div>
          <CardTitle className="text-xl font-black italic text-white mb-3 tracking-tight group-hover:text-blue-300 transition-colors">
            {project.title}
          </CardTitle>
          <p className="text-sm text-gray-400 line-clamp-2 mb-4 font-medium">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-1.5">
            {project.techStack?.map((tech) => (
              <span key={tech} className="text-[10px] font-mono bg-gray-800 text-blue-300 px-2 py-0.5 rounded border border-blue-900/50">
                {tech}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex gap-2">
          {project.link ? (
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold italic skew-x-[-12deg] rounded-none">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <span className="skew-x-[12deg] flex items-center gap-2">
                  LAUNCH <ExternalLink className="h-4 w-4" />
                </span>
              </a>
            </Button>
          ) : (
            <Button disabled className="w-full bg-gray-800 text-gray-500 font-bold italic skew-x-[-12deg] rounded-none">
              <span className="skew-x-[12deg]">OUT OF STOCK</span>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default GamerPartCard;