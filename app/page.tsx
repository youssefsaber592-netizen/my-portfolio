"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolio";
import { useGamification } from "../hooks/useGamification";
import { Navbar } from "../components/Navbar";
import { InteractiveFloating } from "../components/InteractiveFloating";
import { CustomCursor, CounterNumber, playClickSound } from "../components/Effects";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaPhone, FaShieldAlt, FaServer, FaNetworkWired, FaCode } from "react-icons/fa";

export default function Home() {
  const { xp, addXp, discoveredCount, discoverMilestone, levelName, toasts } = useGamification();
  const [activeSection, setActiveSection] = useState("home");
  const [overlayText, setOverlayText] = useState<string | null>(null);

  const scrollTo = (id: string, name: string) => {
    playClickSound();
    setOverlayText(name);
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);

    setTimeout(() => {
      setOverlayText(null);
    }, 1200);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            discoverMilestone(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [discoverMilestone]);

  return (
    <div className="min-h-screen bg-[#05070B] text-slate-200 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden cursor-none">
      <CustomCursor />

      {/* شاشة انتقال الأقسام بملء الصفحة (Full Screen Section Transition) */}
      <AnimatePresence>
        {overlayText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center pointer-events-none"
          >
            <motion.h1
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 1.1, opacity: 0 }}
              className="text-5xl md:text-7xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wider uppercase"
            >
              {overlayText}
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar
        displayName={PORTFOLIO_DATA.displayName}
        xp={xp}
        discoveredCount={discoveredCount}
        levelName={levelName}
        activeSection={activeSection}
        onNavigate={(sec) => scrollTo(sec, sec.toUpperCase())}
      />

      <main className="max-w-5xl mx-auto px-6 space-y-32 pt-28 pb-20 relative z-10">
        
        {/* HERO SECTION */}
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="min-h-[75vh] flex flex-col md:flex-row items-center justify-between gap-12 pt-6"
        >
          {/* الصورة مع أنيميشن الصعود وهبوط مستمر (Floating Animation) */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative group"
          >
            <div className="w-60 h-60 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-500 shadow-[0_0_50px_rgba(6,182,212,0.3)] overflow-hidden">
              <img
                src={PORTFOLIO_DATA.image}
                alt={PORTFOLIO_DATA.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {PORTFOLIO_DATA.availableForWork && (
              <span className="absolute bottom-2 right-4 bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full border-2 border-[#05070B]">
                Available for work
              </span>
            )}
          </motion.div>

          <div className="flex-1 space-y-6 text-center md:text-left">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <h1 className="text-4xl md:text-6xl font-black text-white">{PORTFOLIO_DATA.name}</h1>
              <p className="text-lg md:text-xl font-bold text-cyan-400 mt-1">{PORTFOLIO_DATA.title}</p>
            </motion.div>

            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xl">{PORTFOLIO_DATA.bio}</p>

            {/* الأرقام التي تتصاعد تدريجياً تلقائياً عند فتح الموقع */}
            <div className="flex justify-center md:justify-start gap-8 py-3 border-y border-slate-800/80">
              <div>
                <p className="text-3xl font-black text-white">
                  <CounterNumber targetNumber={PORTFOLIO_DATA.stats.collaborations} />+
                </p>
                <p className="text-xs text-slate-400">Projects & Labs</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">
                  <CounterNumber targetNumber={PORTFOLIO_DATA.stats.experiences} />+
                </p>
                <p className="text-xs text-slate-400">Trainings & Experience</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">
                  <CounterNumber targetNumber={PORTFOLIO_DATA.stats.certifications} />+
                </p>
                <p className="text-xs text-slate-400">Certifications</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <button
                onClick={() => scrollTo("projects", "PROJECTS")}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-bold text-xs transition shadow-lg shadow-cyan-500/20"
              >
                Explore Work ↓
              </button>
              <a
                href={PORTFOLIO_DATA.socials.resume}
                download
                onClick={playClickSound}
                className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white px-6 py-3 rounded-xl font-medium text-xs transition flex items-center gap-2"
              >
                <FaDownload /> Request Full CV ↓
              </a>
            </div>
          </div>
        </motion.section>

        {/* TECHNICAL STACK SECTION */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center space-y-1">
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Skills</span>
            <h2 className="text-3xl font-black text-white">Technical Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-2xl space-y-3">
              <h3 className="text-sm font-bold text-cyan-400 flex items-center gap-2 border-b border-slate-800 pb-2">
                <FaShieldAlt /> CLOUD & SECURITY
              </h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.techStack.cloudSecurity.map((item) => (
                  <span key={item} className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-lg border border-slate-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-2xl space-y-3">
              <h3 className="text-sm font-bold text-cyan-400 flex items-center gap-2 border-b border-slate-800 pb-2">
                <FaServer /> DEVOPS & INFRASTRUCTURE
              </h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.techStack.devopsInfra.map((item) => (
                  <span key={item} className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-lg border border-slate-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-2xl space-y-3">
              <h3 className="text-sm font-bold text-cyan-400 flex items-center gap-2 border-b border-slate-800 pb-2">
                <FaNetworkWired /> NETWORKING
              </h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.techStack.networking.map((item) => (
                  <span key={item} className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-lg border border-slate-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-2xl space-y-3">
              <h3 className="text-sm font-bold text-cyan-400 flex items-center gap-2 border-b border-slate-800 pb-2">
                <FaCode /> PROGRAMMING & CORE CS
              </h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.techStack.programming.map((item) => (
                  <span key={item} className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-lg border border-slate-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center space-y-1">
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Portfolio</span>
            <h2 className="text-3xl font-black text-white">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.projects.map((proj) => (
              <motion.div
                key={proj.id}
                whileHover={{ y: -6 }}
                className="bg-slate-950/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition flex flex-col justify-between"
              >
                <div>
                  <img src={proj.image} alt={proj.title} className="w-full h-44 object-cover" />
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800/50">
                      {proj.category}
                    </span>
                    <h3 className="text-lg font-bold text-white">{proj.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{proj.description}</p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex items-center justify-between">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={playClickSound}
                    className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-bold"
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <section id="contact" className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl font-black text-white">Get In Touch</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`mailto:${PORTFOLIO_DATA.socials.email}`} onClick={playClickSound} className="bg-cyan-500 text-slate-950 px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
              <FaEnvelope /> {PORTFOLIO_DATA.socials.email}
            </a>
            <a href={PORTFOLIO_DATA.socials.github} target="_blank" rel="noreferrer" onClick={playClickSound} className="bg-slate-900 border border-slate-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
              <FaGithub /> GitHub
            </a>
            <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noreferrer" onClick={playClickSound} className="bg-slate-900 border border-slate-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </section>

      </main>

      <InteractiveFloating
        onTerminalOpen={() => addXp(5, "Terminal Opened")}
        onChatbotInteract={() => addXp(5, "Chatbot Interacted")}
      />
    </div>
  );
}