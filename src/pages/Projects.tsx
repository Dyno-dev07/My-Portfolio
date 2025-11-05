"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Bowers & Flowers",
    description: "A beautiful e-commerce site for flowers and gifts, focusing on user experience and elegant design.",
    imageUrl: "/placeholder.svg", // Using a generic placeholder image
    link: "https://bowersandflowers.com.au/",
  },
  {
    id: 2,
    title: "Gas Detection Australia",
    description: "Specialized website for gas detection equipment, providing detailed product information and industry solutions.",
    imageUrl: "/placeholder.svg",
    link: "https://www.gasdetectionaustralia.com.au/",
  },
  {
    id: 3,
    title: "RSD",
    description: "Corporate website for RSD, showcasing their services and expertise with a professional and clean interface.",
    imageUrl: "/placeholder.svg",
    link: "https://www.rsd.co.nz/",
  },
  {
    id: 4,
    title: "Woolstar",
    description: "E-commerce platform for Woolstar, featuring high-quality wool products with a focus on natural comfort and sustainability.",
    imageUrl: "/placeholder.svg",
    link: "https://woolstar.com.au/",
  },
  {
    id: 5,
    title: "Homely Flooring",
    description: "Online presence for Homely Flooring, offering a wide range of flooring options with an intuitive browsing experience.",
    imageUrl: "/placeholder.svg",
    link: "https://www.homelyflooring.com.au/",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto py-12 md:py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
          My <span className="text-blue-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Visit Site
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;