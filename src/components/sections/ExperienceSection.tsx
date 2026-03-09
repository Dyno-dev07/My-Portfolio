"use client";

import React from "react";
import { motion, scrollTrigger } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Activity, Calendar } from "lucide-react";
import ExperienceMetrics from "../ExperienceMetrics";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experiences = [
  // ... (same experiences array as before)
];

const ExperienceSection = () => {
  const [recent, ...others] = experiences;

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black italic text-white tracking-tighter mb-16 text-center">
          SYSTEM <span className="text-purple-500">LOGS</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <ExperienceMetrics />

          {/* Recent Experience - Centered & Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            scrollTrigger={{ trigger: { element: "#experience" } }}
            className="mb-12 flex justify-center"
          >
            <Card className="w-full max-w-4xl bg-gray-900/60 border-l-4 border-l-purple-500 border-y-gray-800 border-r-gray-800 p-8 hover:bg-gray-800/40 transition-all group relative overflow-hidden">
              {/* ... (same card structure as before) */}
            </Card>
          </motion.div>

          {/* Other Experiences - 2x2 Grid with Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                scrollTrigger={{ trigger: { element: "#experience" } }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-gray-900/40 border-gray-800 hover:border-purple-500/30 transition-all group overflow-hidden">
                  {/* ... (same card structure as before) */}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;