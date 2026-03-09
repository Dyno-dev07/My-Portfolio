"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Cpu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "PROFILE", href: "#about" },
    { name: "INVENTORY", href: "#projects" },
    { name: "LOGS", href: "#experience" },
    { name: "SIGNAL", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-3 border-b border-blue-500/20" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="flex items-center gap-2 group">
          <div className="p-1.5 bg-blue-600 rounded skew-x-[-12deg] group-hover:bg-blue-500 transition-colors">
            <Cpu className="h-5 w-5 text-white skew-x-[12deg]" />
          </div>
          <span className="text-xl font-black italic tracking-tighter text-white">
            DEANNE<span className="text-blue-500">AGIR</span>
          </span>
        </a>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-950 text-white border-gray-800">
              <div className="flex flex-col space-y-6 mt-12">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-2xl font-black italic hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2 text-sm font-bold italic text-gray-400 hover:text-white hover:bg-blue-600/10 rounded transition-all"
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="ml-4 bg-blue-600 hover:bg-blue-500 text-white font-bold italic skew-x-[-12deg] rounded-none">
              <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                <span className="skew-x-[12deg]">CONNECT</span>
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;