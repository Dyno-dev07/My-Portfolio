"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardHeader, CardTitle } from "@/components/ui/card"; // Removed CardContent as descriptions are removed
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  dateRange: string;
  startDate: Date; // Used for sorting
  // description?: string; // Removed description
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Mangtas",
    dateRange: "Feb - May 2023",
    startDate: new Date("2023-02-01"),
  },
  {
    title: "Technical Developer",
    company: "Sites at Scale",
    dateRange: "Jul 2023 - Nov 2024",
    startDate: new Date("2023-07-01"),
  },
  {
    title: "Shopify Web Developer",
    company: "Chino Mowers & Engine Service",
    dateRange: "Jan - Mar 2024",
    startDate: new Date("2024-01-01"),
  },
  {
    title: "Quality Assurance Specialist",
    company: "Sites at Scale",
    dateRange: "Nov 2024 - Feb 2025",
    startDate: new Date("2024-11-01"),
  },
  {
    title: "Software Engineer",
    company: "Elisha & Charles Solutions Inc.",
    dateRange: "Apr 2025 - PRESENT",
    startDate: new Date("2025-04-01"),
  },
];

// Sort experiences by start date in descending order (latest first)
experiences.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

const Experience = () => {
  const titleRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    cardRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8, delay: 0.2 * index + 0.5, ease: "back.out(1.7)" }
        );
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto py-12 md:py-20">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
          My <span className="text-blue-400">Experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-gray-800 border-gray-700 text-white shadow-xl flex flex-col items-center text-center p-6"
            >
              <Briefcase className="h-10 w-10 text-blue-400 mb-4" />
              <CardHeader className="p-0">
                <CardTitle className="text-2xl font-bold text-blue-300 mb-1">
                  {exp.title}
                </CardTitle>
                <p className="text-lg text-gray-400 mb-1">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.dateRange}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;