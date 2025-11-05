"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    cardsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8, delay: 0.2 * index + 0.5, ease: "back.out(1.7)" }
        );
      }
    });
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Me",
      value: "deanneagir@example.com", // Placeholder email
      link: "mailto:deanneagir@example.com",
      description: "Reach out for inquiries or collaborations.",
    },
    {
      icon: Phone,
      title: "Call Me",
      value: "+63 912 345 6789", // Placeholder phone number
      link: "tel:+639123456789",
      description: "Available for a quick chat.",
    },
    {
      icon: MapPin,
      title: "My Location",
      value: "Pasay City, Philippines",
      link: "https://www.google.com/maps/place/Pasay+City,+Metro+Manila,+Philippines", // Google Maps link
      description: "Based in the heart of Pasay City.",
    },
    {
      icon: Linkedin,
      title: "LinkedIn Profile",
      value: "Deanne Agir",
      link: "https://www.linkedin.com/in/deanneagir", // Placeholder LinkedIn profile
      description: "Connect with me professionally.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto py-12 md:py-20 relative z-10">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
          Get In <span className="text-blue-400">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white shadow-lg rounded-xl flex flex-col items-center text-center p-6 hover:scale-105 hover:shadow-2xl hover:border-blue-600 transition-all duration-300 ease-in-out"
              >
                <CardHeader className="p-0 mb-4">
                  <Icon className="h-12 w-12 text-blue-400 mx-auto group-hover:text-blue-300 transition-colors duration-300" />
                  <CardTitle className="text-3xl font-bold text-blue-300 mt-4 group-hover:text-blue-200 transition-colors duration-300">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-0">
                  <p className="text-lg text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </p>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.title === "My Location" ? "View on Map" : `Go to ${item.title.split(" ")[0]}`}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;