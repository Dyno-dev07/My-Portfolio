"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Import Tabs components
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link?: string; // Link is optional for personal projects
  techStack?: string[]; // Tech stack is optional
  category: "Websites" | "Creations" | "Games";
}

const projects: Project[] = [
  // Websites Category
  {
    id: 1,
    title: "Bowers & Flowers",
    description: "A beautiful e-commerce site for flowers and gifts, focusing on user experience and elegant design.",
    imageUrl: "/placeholder.svg",
    link: "https://bowersandflowers.com.au/",
    techStack: ["Shopify"],
    category: "Websites",
  },
  {
    id: 2,
    title: "Gas Detection Australia",
    description: "Specialized website for gas detection equipment, providing detailed product information and industry solutions.",
    imageUrl: "/placeholder.svg",
    link: "https://www.gasdetectionaustralia.com.au/",
    techStack: ["WordPress"],
    category: "Websites",
  },
  {
    id: 3,
    title: "RSD",
    description: "Corporate website for RSD, showcasing their services and expertise with a professional and clean interface.",
    imageUrl: "/placeholder.svg",
    link: "https://www.rsd.co.nz/",
    techStack: ["WordPress"],
    category: "Websites",
  },
  {
    id: 4,
    title: "Woolstar",
    description: "E-commerce platform for Woolstar, featuring high-quality wool products with a focus on natural comfort and sustainability.",
    imageUrl: "/placeholder.svg",
    link: "https://woolstar.com.au/",
    techStack: ["Shopify"],
    category: "Websites",
  },
  {
    id: 5,
    title: "Homely Flooring",
    description: "Online presence for Homely Flooring, offering a wide range of flooring options with an intuitive browsing experience.",
    imageUrl: "/placeholder.svg",
    link: "https://www.homelyflooring.com.au/",
    techStack: ["WordPress"],
    category: "Websites",
  },
  // Creations Category (Placeholders)
  {
    id: 6,
    title: "Personal Portfolio V1",
    description: "My first iteration of a personal portfolio, built to showcase early web development skills.",
    imageUrl: "/placeholder.svg",
    category: "Creations",
    techStack: ["React", "CSS"],
  },
  {
    id: 7,
    title: "Interactive Art Gallery",
    description: "A web-based interactive gallery exploring modern art forms with dynamic animations.",
    imageUrl: "/placeholder.svg",
    category: "Creations",
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
  },
  {
    id: 8,
    title: "Recipe Finder App",
    description: "A simple application to search and display recipes based on user-input ingredients.",
    imageUrl: "/placeholder.svg",
    category: "Creations",
    techStack: ["React", "API Integration"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto py-12 md:py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
          My <span className="text-blue-400">Projects</span>
        </h2>

        <Tabs defaultValue="Websites" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800 border-gray-700 mb-8">
            <TabsTrigger value="Websites" className="text-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white">Websites</TabsTrigger>
            <TabsTrigger value="Creations" className="text-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white">Creations</TabsTrigger>
            <TabsTrigger value="Games" className="text-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white">Games</TabsTrigger>
          </TabsList>

          <TabsContent value="Websites">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.category === "Websites")
                .map((project) => (
                  <Card key={project.id} className="bg-gray-800 border-gray-700 text-white shadow-xl flex flex-col">
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
                          {project.techStack.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="bg-blue-500 text-white hover:bg-blue-600">
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
                          No Link Available
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="Creations">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.category === "Creations")
                .map((project) => (
                  <Card key={project.id} className="bg-gray-800 border-gray-700 text-white shadow-xl flex flex-col">
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
                          {project.techStack.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="bg-blue-500 text-white hover:bg-blue-600">
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
                          No Link Available
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="Games">
            <div className="flex items-center justify-center h-96 bg-gray-800 border-gray-700 rounded-lg shadow-xl">
              <p className="text-3xl font-bold text-blue-300">Games - Coming Soon!</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;