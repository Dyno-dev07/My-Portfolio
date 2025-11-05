"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  dateRange: string;
  startDate: Date; // Used for sorting
  description?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Mangtas",
    dateRange: "Feb - May 2023",
    startDate: new Date("2023-02-01"),
    description: "Assisted in the development and maintenance of web applications, contributing to various stages of the software development lifecycle.",
  },
  {
    title: "Technical Developer",
    company: "Sites at Scale",
    dateRange: "Jul 2023 - Nov 2024",
    startDate: new Date("2023-07-01"),
    description: "Developed and implemented technical solutions for client websites, focusing on performance, scalability, and custom features.",
  },
  {
    title: "Shopify Web Developer",
    company: "Chino Mowers & Engine Service",
    dateRange: "Jan - Mar 2024",
    startDate: new Date("2024-01-01"),
    description: "Designed and developed custom Shopify themes and functionalities, enhancing e-commerce capabilities and user experience.",
  },
  {
    title: "Quality Assurance Specialist",
    company: "Sites at Scale",
    dateRange: "Nov 2024 - Feb 2025",
    startDate: new Date("2024-11-01"),
    description: "Ensured the quality and reliability of web applications through comprehensive testing, bug reporting, and validation processes.",
  },
  {
    title: "Software Engineer",
    company: "Elisha & Charles Solutions Inc.",
    dateRange: "Apr 2025 - PRESENT",
    startDate: new Date("2025-04-01"),
    description: "Currently involved in designing, developing, and deploying robust software solutions, contributing to innovative projects.",
  },
];

// Sort experiences by start date in descending order (latest first)
experiences.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

const Experience = () => {
  const titleRef = useRef(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    timelineRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          { opacity: 1, x: 0, duration: 0.8, delay: 0.2 * index + 0.5, ease: "power3.out" }
        );
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto py-12 md:py-20">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
          My <span className="text-blue-400">Experience</span>
        </h2>

        <div className="relative pl-8 md:pl-16">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-blue-600 rounded-full"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (timelineRefs.current[index] = el)}
              className="mb-8 flex items-center w-full"
            >
              {/* Circle for timeline point */}
              <div className="absolute left-1.5 md:left-5 z-10 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                <Briefcase className="h-4 w-4 text-gray-900" />
              </div>

              {/* Experience Card */}
              <Card className="ml-12 md:ml-20 bg-gray-800 border-gray-700 text-white shadow-xl w-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-300">
                    {exp.title}
                  </CardTitle>
                  <p className="text-lg text-gray-400">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.dateRange}</p>
                </CardHeader>
                {exp.description && (
                  <CardContent className="text-gray-300">
                    {exp.description}
                  </CardContent>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;