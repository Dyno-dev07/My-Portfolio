"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const skillsSectionRef = useRef(null); // Renamed to reflect it wraps multiple cards

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
      skillsSectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" }
    );
  }, []);

  const categorizedSkills = {
    "Web Development": [
      "WordPress", "Shopify", "Elementor", "Divi"
    ],
    "Game Development": [
      "Unity 3D", "Unreal Engine 5", "Godot"
    ],
    "SEO": [
      "Google Analytics", "SureRank", "RankMath", "Yoast SEO"
    ],
    "Automation": [
      "GoHighLevel", "MailChimp", "Zapier", "Active Campaign"
    ],
    "Tech Stack": [
      "C#", "C++", "CSS", "TypeScript", "Tailwind", "React", "Laravel", "Next.js", "GSAP"
    ]
  };

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
              I'm Deanne Agir, a dedicated and innovative developer with expertise in both web and game development.
              Leveraging a strong problem-solving mindset and a passion for technology, I craft dynamic digital experiences that push boundaries.
            </p>
            <p className="text-md md:text-lg text-gray-400">
              Committed to continuous learning, I stay ahead of industry trends, including AI-driven development and prompt engineering, to build future-ready solutions.
              I thrive in collaborative environments where creativity meets technical excellence. Let's connect and build something great together! 🚀
            </p>
          </div>
        </div>

        <div ref={skillsSectionRef} className="mt-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 leading-tight">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(categorizedSkills).map(([category, skills]) => (
              <Card key={category} className="bg-gray-800 border-gray-700 text-white shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-300">{category}</CardTitle>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;