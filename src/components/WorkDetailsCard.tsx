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
    <Card ref={cardRef} className="bg-gray-800 border-gray-700 text-white shadow-2xl p-6">
      <CardHeader className="text-center mb-4">
        <Briefcase className="h-12 w-12 text-blue-400 mx-auto mb-4" />
        <CardTitle className="text-3xl font-bold text-blue-300">
          {experience.title}
        </CardTitle>
        <CardDescription className="text-lg text-gray-400 flex items-center justify-center gap-2 mt-2">
          <Building2 className="h-5 w-5" /> {experience.company}
        </CardDescription>
        <CardDescription className="text-md text-gray-500 flex items-center justify-center gap-2">
          <CalendarDays className="h-4 w-4" /> {experience.dateRange}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-lg text-gray-300 leading-relaxed">
        <p>{experience.description}</p>
      </CardContent>
    </Card>
  );
};

export default WorkDetailsCard;