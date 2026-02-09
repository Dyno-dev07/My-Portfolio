"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link?: string;
    techStack?: string[];
    category: "Websites" | "Creations" | "Games";
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, delay: index * 0.1, ease: "power3.out" }
    );
  }, [index]); // Re-run animation if index changes (e.g., tab switch)

  return (
    <Card ref={cardRef} className="bg-gray-800 border-gray-700 text-white shadow-xl flex flex-col">
      <CardHeader className="p-0">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="text-2xl font-bold text-blue-300 mb-2">
          {project.title}
        </CardTitle>
        <CardDescription className="text-gray-300 mb-4">
          {project.description}
        </CardDescription>
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, techIndex) => (
              <Badge key={techIndex} variant="secondary" className="bg-blue-500 text-white hover:bg-blue-600">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0">
        {project.link ? (
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Visit Site
            </a>
          </Button>
        ) : (
          <Button disabled className="w-full bg-gray-600 text-white text-lg px-8 py-6 rounded-md">
            Under Development
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;