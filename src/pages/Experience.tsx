"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Import ScrollToPlugin
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile"; // Import the useIsMobile hook
import WorkDetailsCard from "@/components/WorkDetailsCard"; // Import the new WorkDetailsCard

// Register ScrollToPlugin once
gsap.registerPlugin(ScrollToPlugin);

interface ExperienceItem {
  title: string;
  company: string;
  dateRange: string;
  startDate: Date; // Used for sorting
  description: string; // Re-introducing description for the details card
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Mangtas",
    dateRange: "Feb - May 2023",
    startDate: new Date("2023-02-01"),
    description: "As a Software Engineer Intern at Mangtas, I contributed to the development and maintenance of web applications. My responsibilities included writing clean, efficient code, participating in code reviews, and assisting in debugging and testing phases. I gained hands-on experience with modern web technologies and agile development methodologies.",
  },
  {
    title: "Technical Developer",
    company: "Sites at Scale",
    dateRange: "Jul 2023 - Nov 2024",
    startDate: new Date("2023-07-01"),
    description: "At Sites at Scale, I worked as a Technical Developer, focusing on building and customizing websites for various clients. I specialized in implementing complex features, optimizing site performance, and ensuring cross-browser compatibility. My role involved close collaboration with designers and project managers to deliver high-quality web solutions.",
  },
  {
    title: "Shopify Web Developer",
    company: "Chino Mowers & Engine Service",
    dateRange: "Jan - Mar 2024",
    startDate: new Date("2024-01-01"),
    description: "As a Shopify Web Developer for Chino Mowers & Engine Service, I was responsible for designing, developing, and maintaining their e-commerce store. This included custom theme development, app integration, and optimizing the user experience to drive sales. I ensured the site was responsive and visually appealing across all devices.",
  },
  {
    title: "Quality Assurance Specialist",
    company: "Sites at Scale",
    dateRange: "Nov 2024 - Feb 2025",
    startDate: new Date("2024-11-01"),
    description: "In my role as a Quality Assurance Specialist at Sites at Scale, I was tasked with ensuring the reliability and functionality of web applications. I developed and executed test plans, identified and documented bugs, and worked closely with development teams to resolve issues. My focus was on delivering a flawless user experience.",
  },
  {
    title: "Software Engineer",
    company: "Elisha & Charles Solutions Inc.",
    dateRange: "Apr 2025 - PRESENT",
    startDate: new Date("2025-04-01"),
    description: "Currently, as a Software Engineer at Elisha & Charles Solutions Inc., I am involved in the full software development lifecycle, from conceptualization to deployment. I design and implement robust, scalable, and efficient software solutions, contributing to innovative projects and leveraging cutting-edge technologies.",
  },
];

// Sort experiences by start date in descending order (latest first)
experiences.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

const Experience = () => {
  const isMobile = useIsMobile();
  const titleRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]); // For desktop timeline items
  const detailsCardRef = useRef<HTMLDivElement>(null); // Ref for the details card section

  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    if (isMobile) {
      cardRefs.current.forEach((el, index) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.8, delay: 0.2 * index + 0.5, ease: "back.out(1.7)" }
          );
        }
      });
    } else {
      timelineRefs.current.forEach((el, index) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, x: index % 2 === 0 ? -100 : 100 }, // Animate from left/right
            { opacity: 1, x: 0, duration: 0.8, delay: 0.2 * index + 0.5, ease: "power3.out" }
          );
        }
      });
    }
  }, [isMobile]); // Re-run animations when isMobile changes

  const handleCardClick = (exp: ExperienceItem) => {
    setSelectedExperience(exp);
    // Scroll to the details card after a short delay to allow rendering
    setTimeout(() => {
      if (detailsCardRef.current) {
        gsap.to(window, {
          duration: 0.8,
          scrollTo: { y: detailsCardRef.current.offsetTop, offsetY: 20 }, // Adjust offsetY as needed
          ease: "power2.out",
        });
      }
    }, 100); // Small delay to ensure the card is rendered before scrolling
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto py-12 md:py-20">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
          My <span className="text-blue-400">Experience</span>
        </h2>

        {isMobile ? (
          // Mobile Grid Layout
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="bg-gray-800 border-gray-700 text-white shadow-xl flex flex-col items-center text-center p-6 cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() => handleCardClick(exp)}
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
        ) : (
          // Desktop Timeline Layout
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-blue-600 rounded-full"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (timelineRefs.current[index] = el)}
                className={`mb-8 flex items-center w-full ${
                  index % 2 === 0 ? "justify-start pr-16" : "justify-end pl-16"
                }`}
              >
                {/* Circle for timeline point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-gray-900" />
                </div>

                {/* Experience Card */}
                <Card
                  className="bg-gray-800 border-gray-700 text-white shadow-xl w-full max-w-sm p-6 cursor-pointer hover:scale-105 transition-transform duration-200"
                  onClick={() => handleCardClick(exp)}
                >
                  <CardHeader className="p-0 text-center">
                    <CardTitle className="text-2xl font-bold text-blue-300 mb-1">
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg text-gray-400 mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.dateRange}</p>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        )}

        {selectedExperience && (
          <div ref={detailsCardRef} className="mt-16"> {/* Removed max-w-3xl mx-auto */}
            <WorkDetailsCard experience={selectedExperience} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;