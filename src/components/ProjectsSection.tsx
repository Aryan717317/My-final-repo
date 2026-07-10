import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Github, ExternalLink, ArrowRight, Layers, Shield, Cpu, Share2, BookOpen, X, Code2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  tags: string[];
  github?: string;
  demo?: string;
  color: string; // Tailwind glow class
  borderColor: string;
  gradient: string;
  icon: React.ReactNode;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: "flow-state",
      title: "Flow State",
      subtitle: "AI-Powered Focus Monitoring Pipeline",
      description: "A real-time event pipeline assessing browser activity against stated goals with custom LLM evaluation.",
      details: [
        "Inbuilt real-time event pipeline using custom Chrome extension.",
        "Flask event server feeding into local activity processors.",
        "Provider-agnostic LLM layer supporting Ollama & AWS Bedrock.",
        "Local dashboard persisting historical metrics and analytics."
      ],
      tags: ["Python", "Flask", "Claude API", "Ollama", "Chrome Extension"],
      github: "https://github.com/Aryan717317/Flow-State",
      color: "rgba(14, 165, 233, 0.15)", // Sky blue
      borderColor: "border-sky-500/30",
      gradient: "from-sky-500/20 via-indigo-500/5 to-transparent",
      icon: <Shield className="w-8 h-8 text-sky-400" />
    },
    {
      id: "doceader",
      title: "Doceader",
      subtitle: "Retrieval-Augmented Generation Pipeline",
      description: "An end-to-end document Q&A pipeline tuning ingest-to-generation pipeline stages for minimal latency.",
      details: [
        "Ingestion, chunking, and metadata extraction pipelines.",
        "Vector search engine powered by LangChain and ChromaDB.",
        "FastAPI service serving optimized Python HTTP entrypoints.",
        "Relevance-tuned retrieval stage ensuring robust answering."
      ],
      tags: ["FastAPI", "LangChain", "ChromaDB", "Python", "Docker"],
      github: "https://github.com/Aryan717317/Doceader",
      color: "rgba(139, 92, 246, 0.15)", // Purple
      borderColor: "border-violet-500/30",
      gradient: "from-violet-500/20 via-purple-500/5 to-transparent",
      icon: <Layers className="w-8 h-8 text-violet-400" />
    },
    {
      id: "synoptic-ai",
      title: "Synoptic AI",
      subtitle: "Multi-Agent Orchestration Platform",
      description: "A concurrent orchestrator coordinating multiple specialized agents working on shared complex tasks.",
      details: [
        "Built with Google ADK, Gemini, and FastAPI.",
        "Sophisticated inter-agent message routing and routing system.",
        "Parallelized task solving with structured evaluation filters.",
        "Responsive visual console to track live agent communications."
      ],
      tags: ["Google ADK", "Gemini API", "FastAPI", "Python", "Asyncio"],
      github: "https://github.com/Aryan717317/Synoptic-AI",
      color: "rgba(244, 63, 94, 0.15)", // Rose/Pink
      borderColor: "border-rose-500/30",
      gradient: "from-rose-500/20 via-pink-500/5 to-transparent",
      icon: <Cpu className="w-8 h-8 text-rose-400" />
    },
    {
      id: "gestureshare",
      title: "GestureShare",
      subtitle: "P2P File Sharing with Gesture Control",
      description: "Peer-to-peer secure file sharing powered by localized camera-based hand-gesture control.",
      details: [
        "Local P2P transfer protocol built in Go.",
        "Camera state-machine trackers for smooth hand gesture detection.",
        "Tauri & SvelteKit custom client wrapper for multiplatform support.",
        "9-document protocol specification mapping error state transitions."
      ],
      tags: ["Tauri", "Go", "SvelteKit", "OpenCV", "P2P"],
      github: "https://github.com/Aryan717317/GestureShare",
      color: "rgba(16, 185, 129, 0.15)", // Emerald
      borderColor: "border-emerald-500/30",
      gradient: "from-emerald-500/20 via-teal-500/5 to-transparent",
      icon: <Share2 className="w-8 h-8 text-emerald-400" />
    },
    {
      id: "cogverse",
      title: "CogVerse",
      subtitle: "Living Fiction Memory & Cognitive Agent Architecture",
      description: "A platform for constructing living, breathing fiction realms with deep, persistent cognitive agent architectures and contextual memory recall.",
      details: [
        "Autonomous narrative agent loop utilizing deep custom memory structures.",
        "Vector-based cognitive memory indexing and dynamic recollection protocols.",
        "Interactive world state tracking with multi-character alignment evaluations.",
        "Generative text mechanics that adapt storylines in real-time to user decisions."
      ],
      tags: ["LLM Agents", "Vector DB", "Cognitive Architecture", "Storytelling", "Python"],
      github: "https://github.com/Aryan717317/CogRealm-Living-Fiction-Memory",
      color: "rgba(168, 85, 247, 0.15)", // Purple glow
      borderColor: "border-purple-500/30",
      gradient: "from-purple-500/20 via-fuchsia-500/5 to-transparent",
      icon: <BookOpen className="w-8 h-8 text-purple-400" />
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className="relative min-h-screen py-24 px-8 md:px-12 w-full max-w-[1600px] mx-auto z-20 flex flex-col justify-center overflow-hidden">
      
      {/* Immersive changing background overlay based on selected project */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out pointer-events-none opacity-40 z-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px]"
          style={{ backgroundColor: activeProject.color }}
        />
      </div>

      <div className="flex flex-col items-start mb-16 relative z-10">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#8B5CF6] mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>PORTFOLIO</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
          Featured Projects<span className="text-[#8B5CF6]">.</span>
        </h2>
        <p className="text-[#A1A1AA] text-lg max-w-[600px] mt-4 font-medium">
          A collection of research, system pipelines, and production platforms built with absolute pragmatism.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Col: Dynamic Description */}
        <div className="lg:col-span-5 flex flex-col justify-between min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-start"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] shadow-inner">
                {activeProject.icon}
              </div>

              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#A1A1AA] mb-2">
                0{activeIndex + 1} / 0{projects.length}
              </span>

              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
                {activeProject.title}
              </h3>
              
              <p className="text-base text-[#8B5CF6] font-semibold tracking-wide mb-6">
                {activeProject.subtitle}
              </p>

              <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed mb-8 font-medium">
                {activeProject.description}
              </p>

              <div className="flex flex-col gap-3 w-full mb-8">
                {activeProject.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] block mt-2.5 shrink-0"></span>
                    <span className="text-sm text-slate-300 font-medium leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {activeProject.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-semibold text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Action buttons + Controls */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/[0.06]">
            <div className="flex items-center gap-4">
              {activeProject.github && (
                <motion.a 
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-white text-sm font-semibold transition-all shadow-md"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </motion.a>
              )}
              
              <motion.button 
                onClick={() => setSelectedProject(activeProject)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#8B5CF6]/10 hover:bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 text-[#A78BFA] text-sm font-semibold transition-all shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Details</span>
              </motion.button>
            </div>

            {/* Slider Navigation Dots & Arrows */}
            <div className="flex items-center gap-4">
              <button 
                onClick={prevProject}
                className="p-3 rounded-full bg-[#111217] border border-white/[0.08] hover:border-white/[0.2] text-slate-400 hover:text-white transition-all shadow-lg active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-350 ${
                      idx === activeIndex ? "w-8 bg-[#8B5CF6]" : "w-1.5 bg-white/20"
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextProject}
                className="p-3 rounded-full bg-[#111217] border border-white/[0.08] hover:border-white/[0.2] text-slate-400 hover:text-white transition-all shadow-lg active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Col: Awesome 3D Rotating Stack Carousel */}
        <div className="lg:col-span-7 flex justify-center items-center relative h-[500px] select-none">
          <div className="relative w-full max-w-[440px] aspect-[4/5] flex items-center justify-center perspective-[1500px] transform-style-3d">
            
            {/* Displaying Projects as tilted 3D offset card sliders stack */}
            {projects.map((project, idx) => {
              // Calculate offset index relative to the active one
              let offset = idx - activeIndex;
              if (offset < 0) offset += projects.length;
              
              // Only render the active, previous, and next to prevent performance drain
              const isVisible = offset === 0 || offset === 1 || offset === projects.length - 1;
              if (!isVisible) return null;

              const isActive = offset === 0;
              const isNext = offset === 1;
              const isPrev = offset === projects.length - 1;

              // Compute perspective styles matching a luxurious card fan/arc
              let translateZ = 0;
              let rotateY = -12;
              let rotateX = 8;
              let translateX = 0;
              let opacity = 0;
              let scale = 1;
              let zIndex = 10;

              if (isActive) {
                translateZ = 60;
                rotateY = -5;
                rotateX = 5;
                translateX = 0;
                opacity = 1;
                scale = 1.05;
                zIndex = 30;
              } else if (isNext) {
                translateZ = -60;
                rotateY = 15;
                rotateX = 3;
                translateX = 180;
                opacity = 1;
                scale = 0.9;
                zIndex = 20;
              } else if (isPrev) {
                translateZ = -60;
                rotateY = -25;
                rotateX = 3;
                translateX = -180;
                opacity = 1;
                scale = 0.9;
                zIndex = 20;
              }

              return (
                <motion.div
                  key={project.id}
                  style={{
                    perspective: 1200,
                    transformStyle: 'preserve-3d',
                    zIndex: zIndex,
                  }}
                  animate={{
                    x: translateX,
                    z: translateZ,
                    rotateY: rotateY,
                    rotateX: rotateX,
                    opacity: opacity,
                    scale: scale,
                    zIndex: zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 24,
                  }}
                  whileHover={isActive ? {
                    y: -15,
                    scale: 1.08,
                    rotateX: 10,
                    transition: { duration: 0.3 }
                  } : {}}
                  onClick={() => {
                    if (!isActive) {
                      setActiveIndex(idx);
                    } else {
                      setSelectedProject(project);
                    }
                  }}
                  className={`absolute w-[300px] md:w-[320px] aspect-[3.2/4] rounded-[2.5rem] bg-[#111217] border border-white/[0.08] backdrop-blur-2xl p-8 flex flex-col justify-between shadow-[0_30px_100px_rgba(0,0,0,0.8)] cursor-pointer group transition-colors duration-500 overflow-hidden ${
                    isActive ? "hover:border-[#8B5CF6]/40 shadow-[0_25px_60px_-15px_rgba(139,92,246,0.15)] cursor-zoom-in" : "hover:bg-[#111217] pointer-events-auto"
                  }`}
                >
                  {/* Subtle inner card border gradient */}
                  <div className="absolute -inset-[1px] bg-gradient-to-b from-white/[0.05] to-transparent rounded-[2.5rem] pointer-events-none"></div>

                  {/* Top header glow */}
                  <div className={`absolute top-0 inset-x-0 h-40 bg-gradient-to-b ${project.gradient} opacity-80 pointer-events-none transition-opacity duration-500`}></div>

                  {/* Interactive inner reflections */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  {/* Card Content Wrapper */}
                  <div 
                    className="flex flex-col h-full justify-between relative z-10 transition-opacity duration-500"
                    style={{ opacity: isActive ? 1 : 0.45 }}
                  >
                    {/* Card Content Top */}
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between mb-8">
                        <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] shadow-sm">
                          {project.icon}
                        </div>
                      </div>

                      <h4 className="text-2xl font-black text-white tracking-tight mb-2">
                        {project.title}
                      </h4>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed font-semibold max-w-[90%]">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Card Content Bottom */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                          Tech Stack
                        </span>
                        <div className="flex gap-1.5 mt-1">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-[10px] font-mono font-bold text-slate-300">
                              #{tag.toLowerCase()}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          nextProject();
                        }}
                        className="p-3 rounded-full bg-white/[0.03] border border-white/[0.08] group-hover:bg-[#8B5CF6]/10 group-hover:border-[#8B5CF6]/30 text-slate-400 group-hover:text-white transition-all duration-300 cursor-pointer pointer-events-auto"
                      >
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

      </div>

      {/* Immersive Glassmorphic Project Details Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d0e12]/95 border border-white/[0.08] rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.9)] p-6 md:p-10 text-white scrollbar-thin scrollbar-thumb-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Backlight reflection */}
              <div 
                className="absolute -top-32 -left-32 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-30 transition-all duration-700" 
                style={{ backgroundColor: selectedProject.color }}
              />

              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-slate-400 hover:text-white transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Main Content Layout */}
              <div className="flex flex-col gap-6 md:gap-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] shrink-0 shadow-inner">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
                      {selectedProject.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#8B5CF6] font-semibold tracking-wide">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/[0.06] pt-6">
                  <h4 className="text-xs font-mono font-bold tracking-widest text-[#8B5CF6] uppercase mb-3">
                    [ PROJECT OVERVIEW ]
                  </h4>
                  <p className="text-base text-slate-300 leading-relaxed font-medium">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="border-t border-white/[0.06] pt-6">
                  <h4 className="text-xs font-mono font-bold tracking-widest text-[#8B5CF6] uppercase mb-4">
                    [ ARCHITECTURAL HIGHLIGHTS ]
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.details.map((detail, idx) => (
                      <div 
                        key={idx} 
                        className="p-4 rounded-xl bg-white/[0.01] hover:bg-white/[0.02] border border-white/[0.04] flex gap-3 transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] block mt-2 shrink-0 shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
                        <span className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/[0.06] pt-6">
                  <h4 className="text-xs font-mono font-bold tracking-widest text-[#8B5CF6] uppercase mb-3">
                    [ TECH STACK & ENGINE ]
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-[#8B5CF6]/30 text-xs font-mono font-bold text-slate-300 hover:text-white transition-all duration-300 flex items-center gap-1.5"
                      >
                        <Code2 className="w-3.5 h-3.5 text-[#8B5CF6]" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/[0.06] pt-6 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-[10px] font-mono text-slate-500">
                    // click anywhere outside to return to stack
                  </span>

                  {selectedProject.github && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F59E0B] text-black text-xs sm:text-sm font-sans font-black tracking-widest uppercase transition-all shadow-[0_10px_30px_rgba(245,158,11,0.15)] border border-yellow-400/20"
                    >
                      <Github className="w-4 h-4" />
                      <span>ACCESS REPOSITORY</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
