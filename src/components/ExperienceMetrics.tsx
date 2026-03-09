"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Globe, Clock, Database, ShieldAlert } from "lucide-react";

const metrics = [
  {
    label: "WEBSITES_MAINTAINED",
    value: "50+ SITES",
    icon: Globe,
    color: "text-blue-400",
    borderColor: "border-blue-500/30"
  },
  {
    label: "TOTAL_EXPERIENCE",
    value: "3+ YEARS",
    icon: Clock,
    color: "text-purple-400",
    borderColor: "border-purple-500/30"
  },
  {
    label: "MANUAL_WORKLOAD",
    value: "-25% REDUCTION",
    icon: Database,
    color: "text-green-400",
    borderColor: "border-green-500/30"
  },
  {
    label: "VULNERABILITIES",
    value: "20+ MITIGATED",
    icon: ShieldAlert,
    color: "text-pink-400",
    borderColor: "border-pink-500/30"
  }
];

const ExperienceMetrics = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`bg-gray-900/40 border ${metric.borderColor} p-4 flex flex-col items-center text-center group hover:bg-gray-800/40 transition-all`}>
              <div className={`p-2 rounded-full bg-gray-800 mb-3 group-hover:scale-110 transition-transform`}>
                <Icon className={`h-5 w-5 ${metric.color}`} />
              </div>
              <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase mb-1">
                {metric.label}
              </span>
              <span className="text-lg font-black italic text-white tracking-tight">
                {metric.value}
              </span>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ExperienceMetrics;