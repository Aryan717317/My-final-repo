import React from 'react';
import { motion } from 'motion/react';

export default function ManifestoSection() {
  const manifestoPoints = [
    "REAL-TIME PIPELINES",
    "RETRIEVAL-AUGMENTED LLMS",
    "PRODUCTION CATALOGUES",
    "MULTI-AGENT SYSTEMS",
    "PROVIDER-AGNOSTIC CLIENTS",
    "DISTRIBUTED THINKING",
  ];

  return (
    <section id="manifesto" className="relative w-full bg-[#09090B] border-t border-white/[0.05] text-white py-24 md:py-32 overflow-hidden flex flex-col justify-center">
      {/* Immersive background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Huge Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
        <span className="text-[28vw] font-black tracking-tight text-[#8B5CF6]/[0.02] leading-none select-none">
          PRAGMA
        </span>
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Left Side: Headline */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs md:text-sm font-mono tracking-[0.3em] uppercase mb-8 text-[#8B5CF6]"
          >
            [ MANIFESTO ]
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="text-5xl md:text-6xl lg:text-[76px] font-black tracking-tighter leading-[0.9] text-left uppercase text-white"
          >
            CODE THAT
            <br />
            SHIPS.
            <br />
            SYSTEMS
            <br />
            THAT HOLD.
          </motion.h2>
        </div>

        {/* Right Side: Philosophy & Bullet Points */}
        <div className="lg:col-span-6 lg:pt-16 flex flex-col justify-center">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="text-xl md:text-2xl lg:text-3xl font-medium leading-normal tracking-tight text-slate-300 mb-12 lg:max-w-[90%]"
          >
            I don't believe in clever abstractions for their own sake. I believe in clear interfaces, swappable providers, and pipelines that survive Monday morning. Every project here was built with that bias.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {manifestoPoints.map((point, index) => (
              <motion.div 
                key={point}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                className="flex items-center gap-3 text-sm font-mono font-semibold tracking-wider text-slate-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] block shrink-0"></span>
                <span>{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
