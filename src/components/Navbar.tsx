"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();

  const navLinks = (
    <>
      <Link to="/" className="text-lg font-medium hover:text-blue-400 transition-colors">
        Home
      </Link>
      <Link to="/about" className="text-lg font-medium hover:text-blue-400 transition-colors">
        About
      </Link>
      <Link to="/projects" className="text-lg font-medium hover:text-blue-400 transition-colors">
        Projects
      </Link>
      <Link to="/contact" className="text-lg font-medium hover:text-blue-400 transition-colors">
        Contact
      </Link>
    </>
  );

  return (
    <nav className="w-full bg-gray-950 p-4 shadow-lg fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
          Deanne Agir
        </Link>
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-950 text-white border-gray-800">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks}
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex space-x-8">
            {navLinks}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;