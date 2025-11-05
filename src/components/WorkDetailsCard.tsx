"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, CalendarDays, Building2 } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  dateRange: string;
  startDate: Date;
  description: string;
}

interface WorkDetailsCardProps {
  experience: ExperienceItem;
}

const WorkDetailsCard: React.FC<WorkDetailsCardProps> = ({ experience }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    // Animation for the details card when it appears
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, [experience]); // Re-run animation when a new experience is selected

  return (
    <Card ref={cardRef} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-600 text-white shadow-2xl rounded-xl p-8 ring-2 ring-blue-500/50">
      <CardHeader className="text-center mb-6">
        <Briefcase className="h-16 w-16 text-blue-300 mx-auto mb-4" />
        <CardTitle className="text-4xl md:text-5xl font-extrabold text-blue-200">
          {experience.title}
        </CardTitle>
        <CardDescription className="text-xl text-gray-300 flex items-center justify-center gap-2 mt-3">
          <Building2 className="h-6 w-6 text-blue-400" /> {experience.company}
        </CardDescription>
        <CardDescription className="text-lg text-gray-400 flex items-center justify-center gap-2 mt-1">
          <CalendarDays className="h-5 w-5 text-blue-400" /> {experience.dateRange}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-lg md:text-xl text-gray-200 leading-relaxed text-center">
        <p>{experience.description}</p>
      </CardContent>
    </Card>
  );
};

export default WorkDetailsCard;