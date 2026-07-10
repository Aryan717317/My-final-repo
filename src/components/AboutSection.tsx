import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Download, ArrowRight, Code2, BrainCircuit, Layers, LineChart, Lightbulb, MapPin, Mail } from 'lucide-react';

const AnimatedNumber = ({ value, label }: { value: number, label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = Math.max(duration / end, 10);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / (duration / incrementTime));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="bg-[#111217] border border-white/[0.08] rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[#8B5CF6]/30 transition-colors duration-500 h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-[#6366F1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <span className="text-4xl font-bold text-white mb-2 font-mono relative z-10">{count}+</span>
      <span className="text-sm text-[#A1A1AA] font-medium text-center relative z-10">{label}</span>
    </div>
  );
};

export default function AboutSection() {
  const skills = [
    { name: "Software Engineering", icon: <Code2 className="w-4 h-4" /> },
    { name: "AI & Machine Learning", icon: <BrainCircuit className="w-4 h-4" /> },
    { name: "Full Stack Development", icon: <Layers className="w-4 h-4" /> },
    { name: "Data Analytics", icon: <LineChart className="w-4 h-4" /> },
    { name: "Problem Solving", icon: <Lightbulb className="w-4 h-4" /> }
  ];

  const stats = [
    { label: "Projects Completed", value: 45 },
    { label: "Technologies Learned", value: 20 },
    { label: "Hackathons", value: 12 },
    { label: "Certifications", value: 8 },
    { label: "GitHub Contributions", value: 1200 },
  ];

  return (
    <section id="about" className="relative min-h-screen py-24 px-8 md:px-12 w-full max-w-[1600px] mx-auto z-20 flex flex-col justify-center">
      
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Thin Animated Divider */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-8 right-8 md:left-12 md:right-12 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent origin-left"
      ></motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mt-12 lg:mt-0">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="flex flex-col items-start"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-8">
            About Me<span className="text-[#8B5CF6]">.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed mb-10 font-medium">
            I am a passionate Software Engineer who enjoys solving real-world problems through software development, AI/ML, data analytics, and scalable systems. I thrive at the intersection of design and engineering, crafting experiences that are both robust and beautifully intuitive.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(139, 92, 246, 0.4)", backgroundColor: "rgba(255,255,255,0.06)" }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm font-medium text-slate-200 transition-colors"
              >
                <span className="text-[#A855F7]">{skill.icon}</span>
                {skill.name}
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <motion.a 
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] rounded-2xl text-white font-semibold transition-all backdrop-blur-md relative overflow-hidden group shadow-[0_0_40px_rgba(139,92,246,0.05)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-[#6366F1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <Download className="w-5 h-5 relative z-10" />
              <span className="relative z-10 tracking-wide">Download Resume</span>
            </motion.a>

            <motion.a 
              href="#"
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.02)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border border-transparent rounded-2xl text-[#A1A1AA] hover:text-white font-semibold transition-colors"
            >
              <span className="tracking-wide">Let's Connect</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side: Visuals & Stats */}
        <div className="flex flex-col gap-6 w-full">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#111217]/80 backdrop-blur-xl border border-white/[0.08] rounded-[2rem] p-8 relative overflow-hidden group hover:border-white/[0.12] transition-colors shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#8B5CF6]/10 via-[#6366F1]/5 to-transparent rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60"></div>
            <div className="absolute -inset-[1px] bg-gradient-to-b from-white/[0.08] to-transparent rounded-[2rem] pointer-events-none"></div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 relative z-10">
              <div className="w-28 h-28 rounded-[1.25rem] bg-gradient-to-br from-white/[0.15] to-white/[0.05] p-[1.5px] shrink-0 shadow-xl relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-[#111217] rounded-[1.1rem] overflow-hidden">
                  <img src="/portrait.png" alt="Aryan" className="w-full h-full object-cover opacity-90 scale-[1.3] translate-y-3" />
                </div>
              </div>
              
              <div className="flex flex-col text-center sm:text-left pt-1">
                <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">Aryan Bharat Kumar</h3>
                <p className="text-[#8B5CF6] font-medium mb-5 tracking-wide text-sm uppercase">Software Engineer</p>
                <div className="flex flex-col gap-3 text-[15px] text-[#A1A1AA]">
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                    <MapPin className="w-4 h-4" /> <span>India</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                    <Mail className="w-4 h-4" /> <span>ar22073yan@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-3 mt-1 bg-emerald-500/10 px-3 py-1.5 rounded-full w-fit mx-auto sm:mx-0 border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
                    <span className="text-emerald-400 font-medium text-sm">Open to Opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                className={i === 4 ? "col-span-2 md:col-span-1" : ""}
              >
                <AnimatedNumber value={stat.value} label={stat.label} />
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
