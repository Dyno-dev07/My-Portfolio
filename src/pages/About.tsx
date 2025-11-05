"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );
    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" }
    );
  }, []);

  const skills = [
    "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js",
    "Express", "MongoDB", "PostgreSQL", "Docker", "AWS", "Git",
    "REST APIs", "GraphQL", "Figma", "UI/UX Design",
    "Laravel", "JavaScript", "CSS", "HTML", "Java",
    "C#", "C++", "Unity", "Unreal Engine",
    "AI-driven Development", "Prompt Engineering"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-8">
      <div ref={heroRef} className="max-w-4xl mx-auto py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div ref={imageRef} className="flex-shrink-0">
            {/* Placeholder for profile picture */}
            <div className="w-48 h-48 md:w-64 md:h-64 bg-blue-500 rounded-full flex items-center justify-center overflow-hidden shadow-lg border-4 border-blue-400">
              <span className="text-6xl font-bold text-white">DA</span>
              {/* You can replace this div with an actual <img> tag */}
              {/* <img src="/path/to/your/profile-pic.jpg" alt="Deanne Agir" className="w-full h-full object-cover" /> */}
            </div>
          </div>
          <div ref={textRef} className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              About <span className="text-blue-400">Me</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              I'm Deanne Agir, a dedicated and innovative developer passionate about crafting dynamic digital experiences.
              With expertise in both web and game development, I leverage a strong problem-solving mindset to build solutions that push boundaries.
            </p>
            <p className="text-md md:text-lg text-gray-400 mb-6">
              My toolkit includes technologies like Laravel, JavaScript, CSS, HTML, Java for web, and C#, C++, Unity, Unreal Engine for games.
              Committed to continuous learning, I stay ahead of industry trends, including AI-driven development and prompt engineering, to deliver future-ready projects.
            </p>
            <p className="text-md md:text-lg text-gray-400">
              I thrive in collaborative environments where creativity meets technical excellence. Let's connect and build something great together! 🚀
            </p>
          </div>
        </div>

        <Card ref={skillsRef} className="mt-12 bg-gray-800 border-gray-700 text-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-blue-400">My Skills</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-blue-600 hover:bg-blue-700 text-white text-md px-4 py-2 rounded-full transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                {skill}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;