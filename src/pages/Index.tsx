"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

const Index = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 0.6, ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
          Hi, I'm <span className="text-blue-400">Your Name</span>
        </h1>
        <p ref={descriptionRef} className="text-lg md:text-xl text-gray-300 mb-8">
          A passionate developer crafting engaging web experiences with modern technologies.
        </p>
        <div ref={ctaRef}>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            View My Work
          </Button>
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;