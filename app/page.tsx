"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolio";
import { useGamification } from "../hooks/useGamification";
import { Navbar } from "../components/Navbar";
import { InteractiveFloating } from "../components/InteractiveFloating";
import { CustomCursor, CounterNumber, playClickSound } from "../components/Effects";
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaPaperPlane,
  FaAws, FaLinux, FaGitAlt, FaPython, FaJava, FaTerminal, FaShieldAlt
} from "react-icons/fa";
import { SiCisco, SiFirebase, SiFlutter, SiGodotengine, SiCplusplus } from "react-icons/si";

export default function Home() {
  const { xp, addXp, discoveredCount, discoverMilestone, levelName } = useGamification();
  const [activeSection, setActiveSection] = useState("home");
  const [overlayText, setOverlayText] = useState<string | null>(null);
  const previousSectionRef = useRef<string>("home");

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  const triggerOverlay = (sectionName: string) => {
    setOverlayText(sectionName.toUpperCase());
    setTimeout(() => {
      setOverlayText(null);
    }, 1000);
  };

  const scrollTo = (id: string, name: string) => {
    playClickSound();
    triggerOverlay(name);
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 300;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (previousSectionRef.current !== sectionId) {
              previousSectionRef.current = sectionId;
              setActiveSection(sectionId);
              discoverMilestone(sectionId);
              triggerOverlay(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [discoverMilestone]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    if (formData.name && formData.email && formData.message) {
      setFormSent(true);
      addXp(15, "Message Sent!");
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setFormSent(false);
      }, 4000);
    }
  };

  const allProjects = [
    {
      id: "proj-1",
      title: "Electrical Store ERP",
      category: "Enterprise Desktop & Cloud",
      description: "3-tier enterprise ERP software built with Java and Firebase Cloud Firestore for real-time inventory management, sales tracking, and cloud DB synchronization.",
      tags: ["Java", "Firebase", "Firestore", "OOP", "ERP"],
      githubUrl: "https://github.com/youssefsaber592-netizen/ElectricalStoreERP",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "proj-2",
      title: "Flutter Mobile Applications",
      category: "Cross-Platform Mobile",
      description: "Custom cross-platform applications featuring a 6-screen Task & To-Do manager, custom state management, dynamic navigation architecture, and e-commerce UI components.",
      tags: ["Flutter", "Dart", "Mobile UI", "VS Code"],
      githubUrl: "https://github.com/youssefsaber592-netizen",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "proj-3",
      title: "2D Platformer Game",
      category: "Game Development",
      description: "2D action platformer game developed using Godot Engine 4 and GDScript. Implements level loading logic, custom signal events, animated tilemaps, and physics interactions.",
      tags: ["Godot 4", "GDScript", "GameDev", "Itch.io Assets"],
      githubUrl: "https://github.com/youssefsaber592-netizen",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "proj-4",
      title: "Cisco PAT & Network Labs",
      category: "Computer Networking",
      description: "Configured Port Address Translation (PAT) and Access Control Lists (ACLs) using Cisco Packet Tracer. Validated subnetting, NAT routing, and multi-router security topologies.",
      tags: ["Cisco", "Packet Tracer", "CCNA", "PAT/NAT", "Networking"],
      githubUrl: "https://github.com/youssefsaber592-netizen",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const skillsList = [
    { name: "AWS Cloud", icon: <FaAws className="text-amber-400" /> },
    { name: "Linux Admin", icon: <FaLinux className="text-yellow-300" /> },
    { name: "Flutter & Dart", icon: <SiFlutter className="text-cyan-400" /> },
    { name: "Godot Engine", icon: <SiGodotengine className="text-blue-400" /> },
    { name: "CCNA & Networking", icon: <SiCisco className="text-cyan-400" /> },
    { name: "Git / GitHub", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "Java", icon: <FaJava className="text-red-400" /> },
    { name: "Firebase Firestore", icon: <SiFirebase className="text-amber-500" /> },
  ];

  return (
    <div className="min-h-screen bg-[#05070B] text-slate-200 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden cursor-none">
      
      {/* خلفية الشبكة */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <CustomCursor />

      {/* شاشة انتقال الأقسام مع خط Pacifico */}
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
              style={{ fontFamily: 'var(--font-pacifico), cursive' }}
              className="text-5xl md:text-7xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 tracking-wider capitalize"
            >
              {overlayText.toLowerCase()}
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
        onNavigate={(sec) => scrollTo(sec, sec)}
      />

      <main className="max-w-5xl mx-auto px-6 space-y-32 pt-28 pb-20 relative z-10">
        
        {/* HERO SECTION */}
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-12 pt-6"
        >
          {/* الصورة الشخصية بسريعة الحركة (duration: 2) ودون عبارة Available for work */}
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative group shrink-0"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-500 shadow-[0_0_50px_rgba(6,182,212,0.35)] overflow-hidden">
              <img
                src={PORTFOLIO_DATA.image}
                alt={PORTFOLIO_DATA.name}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
          </motion.div>

          <div className="flex-1 space-y-6 text-center md:text-left">
            <div>
              {/* الاسم بخط Pacifico */}
              <h1 
                style={{ fontFamily: 'var(--font-pacifico), cursive' }}
                className="text-5xl md:text-7xl font-normal text-white tracking-wide"
              >
                {PORTFOLIO_DATA.name}
              </h1>
              <p className="text-lg md:text-xl font-bold text-cyan-400 mt-2">{PORTFOLIO_DATA.title}</p>
            </div>

            {/* الإحصائيات مع نص Available for work الجانبي بخط Pacifico */}
            <div className="flex items-center justify-center md:justify-start gap-8 py-3 border-y border-slate-800/80 relative">
              <div className="flex gap-8">
                <div>
                  <p className="text-3xl font-black text-white">
                    <CounterNumber targetNumber={PORTFOLIO_DATA.stats.collaborations} />+
                  </p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">PROJECTS</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">
                    <CounterNumber targetNumber={PORTFOLIO_DATA.stats.experiences} />+
                  </p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">TRAININGS</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">
                    <CounterNumber targetNumber={PORTFOLIO_DATA.stats.certifications} />+
                  </p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">ROLES</p>
                </div>
              </div>

              {/* Available for work بجانب الإحصائيات مثل العلامة الحمراء الأولى */}
              {PORTFOLIO_DATA.availableForWork && (
                <span 
                  style={{ fontFamily: 'var(--font-pacifico), cursive' }}
                  className="text-2xl text-blue-400 ml-4 hidden sm:inline-block rotate-[-4deg]"
                >
                  Available for work
                </span>
              )}
            </div>

            {/* الأزرار والتواصل السريع المطابق للعلامة الحمراء الثانية */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <button
                  onClick={() => scrollTo("projects", "PROJECTS")}
                  className="bg-white text-slate-950 px-6 py-3 rounded-xl font-bold text-xs transition hover:bg-slate-200 flex items-center gap-1 shadow-md"
                >
                  Explore Work ↓
                </button>
                <a
                  href={PORTFOLIO_DATA.socials.resume}
                  download
                  onClick={playClickSound}
                  className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium text-xs transition flex items-center gap-1"
                >
                  Request Full CV ↓
                </a>
              </div>

              {/* Quick Connection بنفس تنسيق الصورة */}
              <div className="flex items-center justify-center md:justify-start gap-3 text-xs text-slate-400 pt-2">
                <span className="font-medium">Quick Connection:</span>
                <a
                  href={PORTFOLIO_DATA.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClickSound}
                  className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-slate-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-semibold transition"
                >
                  <FaLinkedin className="text-blue-400" /> LinkedIn
                </a>
                <a
                  href={`mailto:${PORTFOLIO_DATA.socials.email}`}
                  onClick={playClickSound}
                  className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-slate-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-semibold transition"
                >
                  <FaEnvelope className="text-slate-300" /> Email
                </a>
              </div>
            </div>

          </div>
        </motion.section>

        {/* باقي السكاشن */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 bg-slate-950/60 border border-slate-800/80 rounded-3xl p-8 backdrop-blur-md"
        >
          <div className="space-y-1">
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">About Me</span>
            <h2 className="text-3xl font-black text-white">Background & Specialization</h2>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            I am a Computer Science student with a concentrated focus on Cloud Architecture, Infrastructure Hardening, and DevOps Automation. Selected for the Digital Egypt Pioneers Initiative (DEPI) AWS Cloud Architecting track, I combine robust software engineering skills with networking fundamentals (CCNA-trained) to construct reliable 3-tier applications and secure cloud environments.
          </p>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center space-y-1">
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Portfolio</span>
            <h2 className="text-3xl font-black text-white">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.map((proj) => (
              <motion.div
                key={proj.id}
                whileHover={{ y: -6 }}
                className="bg-slate-950/60 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition flex flex-col justify-between backdrop-blur-md"
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
                <div className="p-6 pt-0">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={playClickSound}
                    className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-bold"
                  >
                    <FaGithub /> View Repository
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </main>

      <InteractiveFloating
        onTerminalOpen={() => addXp(5, "Terminal Opened")}
        onChatbotInteract={() => addXp(5, "Chatbot Interacted")}
      />
    </div>
  );
}