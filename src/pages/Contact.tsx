"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Radio, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "EMAIL_LINK",
    value: "deanneagir@example.com",
    link: "mailto:deanneagir@example.com",
    label: "DIRECT_MESSAGE",
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
    buttonText: "CONNECT"
  },
  {
    icon: Phone,
    title: "VOICE_COMMS",
    value: "+63 912 345 6789",
    link: "tel:+639123456789",
    label: "MOBILE_UPLINK",
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    buttonText: "CONNECT"
  },
  {
    icon: MapPin,
    title: "GEO_LOCATION",
    value: "Pasay City, Philippines",
    link: "https://www.google.com/maps/place/Pasay+City,+Metro+Manila,+Philippines",
    label: "BASE_STATION",
    color: "text-green-400",
    borderColor: "border-green-500/30",
    buttonText: "LOCATE"
  },
  {
    icon: Linkedin,
    title: "NET_PROFILE",
    value: "Deanne Agir",
    link: "https://www.linkedin.com/in/deanneagir",
    label: "PROFESSIONAL_NODE",
    color: "text-pink-400",
    borderColor: "border-pink-500/30",
    buttonText: "CONNECT"
  },
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
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[10px] font-mono mb-4 tracking-[0.3em] uppercase"
          >
            <Radio className="h-3 w-3 animate-pulse" />
            Establishing Connection...
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black italic text-white tracking-tighter uppercase"
          >
            LET'S <span className="text-pink-500">CONNECT</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`group bg-gray-900/40 border ${item.borderColor} p-8 hover:bg-gray-800/40 transition-all relative overflow-hidden`}>
                  {/* Skewed Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent skew-x-[45deg] translate-x-12 -translate-y-12" />
                  
                  <div className="flex items-start gap-6 relative z-10">
                    <div className={`p-4 rounded bg-gray-800 border border-gray-700 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">
                          {item.label}
                        </span>
                        <div className="h-px flex-1 bg-gray-800" />
                      </div>
                      <h3 className="text-xl font-black italic text-white mb-4 tracking-tight">
                        {item.title}
                      </h3>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <span className="text-gray-400 font-medium truncate max-w-[200px] sm:max-w-none">
                          {item.value}
                        </span>
                        <Button 
                          asChild 
                          variant="outline" 
                          size="sm" 
                          className="border-gray-700 hover:bg-white hover:text-black font-bold italic skew-x-[-12deg] rounded-none h-8"
                        >
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <span className="skew-x-[12deg] flex items-center gap-2">
                              {item.buttonText} <Send className="h-3 w-3" />
                            </span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Status */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
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