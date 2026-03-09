"use client";

import React from "react";
import { motion, scrollTrigger } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Radio, Send } from "lucide-react";

const contactInfo = [
  // ... (same contact info as before)
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      {/* Background Grid & Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            scrollTrigger={{ trigger: { element: "#contact" } }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[10px] font-mono mb-4 tracking-[0.3em] uppercase"
          >
            <Radio className="h-3 w-3 animate-pulse" />
            Establishing Connection...
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            scrollTrigger={{ trigger: { element: "#contact" } }}
            className="text-4xl md:text-7xl font-black italic text-white tracking-tighter uppercase"
          >
            LET'S <span className="text-pink-500">CONNECT</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              scrollTrigger={{ trigger: { element: "#contact" } }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`group bg-gray-900/40 border ${item.borderColor} p-8 hover:bg-gray-800/40 transition-all relative overflow-hidden`}>
                {/* ... (same card structure as before) */}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer Status */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          scrollTrigger={{ trigger: { element: "#contact" } }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-4 bg-gray-900/60 border border-gray-800 rounded-none skew-x-[-12deg]">
            <p className="text-[10px] font-mono text-gray-500 skew-x-[12deg] tracking-widest">
              ENCRYPTED_CHANNEL_SECURED // AWAITING_INPUT
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;