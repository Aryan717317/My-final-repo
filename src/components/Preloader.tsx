import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
  key?: string;
}

const WORDS = [
  "INITIALIZING PORTFOLIO",
  "LOADING SYSTEMS",
  "PRAGMA ENGAGED",
  "COMPILING INTERFACES",
  "ESTABLISHING PROTOCOLS",
  "ARYAN BHARAT KUMAR",
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  // Smoothly increment the loader progress
  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Add random small increments to make the load feel organic and premium
      const increment = Math.floor(Math.random() * 8) + 2;
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        // Wait a small moment at 100% for impact, then trigger complete
        setTimeout(() => {
          onComplete();
        }, 600);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Stagger cycle through greetings/loading phrases
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 350);

    return () => clearInterval(wordInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-50 bg-[#09090B] flex flex-col justify-between p-8 md:p-16 select-none overflow-hidden"
    >
      {/* Decorative top-left branding / system info */}
      <div className="flex justify-between items-start w-full font-mono text-[10px] text-[#A1A1AA]/40 tracking-widest uppercase">
        <div>
          <span>SYSTEM: ACTIVE</span>
          <br />
          <span>LOC: SECURE_CONTAINER</span>
        </div>
        <div className="text-right">
          <span>ABK_V2.0</span>
          <br />
          <span>©2026</span>
        </div>
      </div>

      {/* Center Counter and Word Showcase */}
      <div className="flex flex-col items-center justify-center relative my-auto">
        {/* Subtle background glow */}
        <div className="absolute w-[350px] h-[350px] bg-[#8B5CF6]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        {/* Big Premium Monospace Number */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-7xl md:text-9xl font-black text-white font-mono tracking-tighter mb-6 relative"
        >
          {progress}
          <span className="text-3xl md:text-4xl text-[#8B5CF6] font-bold select-none ml-1">%</span>
        </motion.div>

        {/* Changing Developer/Pragma phrases */}
        <div className="h-6 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={WORDS[wordIndex]}
              initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="text-xs md:text-sm font-mono tracking-[0.4em] text-[#A1A1AA] uppercase text-center font-bold"
            >
              {WORDS[wordIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom glowing loading indicator layout */}
      <div className="w-full flex flex-col gap-4 max-w-xl mx-auto items-center">
        {/* Progress bar tracks */}
        <div className="w-full h-[3px] bg-white/[0.04] rounded-full overflow-hidden relative">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#6366F1]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
          {/* Subtle trail spotlight cursor */}
          <motion.div 
            className="absolute top-0 h-full w-20 bg-white/40 blur-sm"
            style={{ left: `calc(${progress}% - 40px)` }}
          />
        </div>

        <div className="flex justify-between w-full font-mono text-[10px] text-[#A1A1AA]/30 tracking-widest">
          <span>SHIPPING CODE</span>
          <span>COMPLETING BOOT_SEQUENCE</span>
        </div>
      </div>

    </motion.div>
  );
}
