"use client";

import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
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
    emailjs
      .send(
        "service_sq4hzsk",
        "template_uoa2pe8",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "4daaBMK3QwGrhcxAo"
      )
      .then(
        () => {
          setFormSent(true);
          addXp(15, "Message Sent!");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setFormSent(false), 4000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
        }
      );
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
    },
    {
      id: "proj-5",
      title: "SOC & Security Investigation Labs",
      category: "Cybersecurity & Logs",
      description: "TryHackMe security analyst room write-ups and scripts covering DNS tunneling detection, OSI/TCP-IP models, VyOS firewall configurations, and IDS alert log analysis.",
      tags: ["Cybersecurity", "SOC Analyst", "IDS Logs", "VyOS", "TryHackMe"],
      githubUrl: "https://github.com/youssefsaber592-netizen",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "proj-6",
      title: "AWS Cloud Infrastructure Labs",
      category: "DevOps & Cloud Architecture",
      description: "Practiced deploying secure VPCs, AWS EC2, S3, IAM policies, RDS instances, and automation pipelines under the DEPI initiative.",
      tags: ["AWS", "VPC", "EC2", "S3", "DevOps"],
      githubUrl: "https://github.com/youssefsaber592-netizen",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
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
    { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
    { name: "Firebase Firestore", icon: <SiFirebase className="text-amber-500" /> },
    { name: "Bash & Linux CLI", icon: <FaTerminal className="text-slate-300" /> },
    { name: "Security & SOC", icon: <FaShieldAlt className="text-emerald-400" /> },
  ];

  return (
    <div className="min-h-screen bg-[#060913] text-slate-200 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden cursor-none">
      
      {/* خلفية الكاروهات الواضحة بتباين متناسق */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

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
          {/* الصورة الشخصية */}
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
              <h1 
                style={{ fontFamily: 'var(--font-pacifico), cursive' }}
                className="text-5xl md:text-7xl font-normal text-white tracking-wide leading-[1.3] mb-3"
              >
                {PORTFOLIO_DATA.name}
              </h1>
              <p className="text-lg md:text-xl font-bold text-cyan-400">{PORTFOLIO_DATA.title}</p>
            </div>

            {/* الإحصائيات مع Available for work */}
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

              {PORTFOLIO_DATA.availableForWork && (
                <span 
                  style={{ fontFamily: 'var(--font-pacifico), cursive' }}
                  className="text-2xl text-blue-400 ml-4 hidden sm:inline-block rotate-[-4deg]"
                >
                  Available for work
                </span>
              )}
            </div>

            {/* الأزرار ووصلات التواصل */}
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

        {/* ABOUT SECTION */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 bg-slate-950/70 border border-slate-800/80 rounded-3xl p-8 backdrop-blur-md"
        >
          <div className="space-y-1">
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">About Me</span>
            <h2 className="text-3xl font-black text-white">Background & Specialization</h2>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            I am a Computer Science student with a concentrated focus on Cloud Architecture, Infrastructure Hardening, and DevOps Automation. Selected for the Digital Egypt Pioneers Initiative (DEPI) AWS Cloud Architecting track, I combine robust software engineering skills with networking fundamentals (CCNA-trained) to construct reliable 3-tier applications and secure cloud environments.
          </p>
        </motion.section>

        {/* EXPERIENCE SECTION */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-1">
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Journey</span>
            <h2 className="text-3xl font-black text-white">Experience & Training</h2>
          </div>

          <div className="space-y-4">
            {PORTFOLIO_DATA.experiences.map((exp) => (
              <div key={exp.id} className="bg-slate-950/70 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50">
                    {exp.type}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">{exp.role}</h3>
                  <p className="text-xs text-slate-400">{exp.organization}</p>
                  <p className="text-xs text-slate-300 mt-2">{exp.description}</p>
                </div>
                <span className="text-xs font-mono text-slate-500 shrink-0">{exp.date}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SKILLS SECTION */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 overflow-hidden"
        >
          <div className="text-center space-y-1">
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Technologies</span>
            <h2 className="text-3xl font-black text-white">Skills & Tech Stack</h2>
          </div>

          <div className="relative w-full overflow-hidden py-4 border-y border-slate-800/80 bg-slate-950/70 backdrop-blur-md">
            <motion.div
              className="flex gap-8 whitespace-nowrap min-w-full"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            >
              {[...skillsList, ...skillsList].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-slate-900/80 border border-slate-800 px-5 py-3 rounded-xl shadow-inner shrink-0"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-xs font-bold text-slate-200">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
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
            <h2 className="text-3xl font-black text-white">All GitHub Projects & Labs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.map((proj) => (
              <motion.div
                key={proj.id}
                whileHover={{ y: -6 }}
                className="bg-slate-950/70 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition flex flex-col justify-between backdrop-blur-md"
              >
                <div>
                  <img src={proj.image} alt={proj.title} className="w-full h-44 object-cover" />
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800/50">
                      {proj.category}
                    </span>
                    <h3 className="text-lg font-bold text-white">{proj.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{proj.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.tags.map((tag) => (
                        <span key={tag} className="text-[10px] bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
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

        {/* CONTACT SECTION */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-950/80 border border-slate-800/80 rounded-3xl p-8 md:p-12 space-y-8 backdrop-blur-md"
        >
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-white">Leave a Message</h2>
            <p className="text-xs text-slate-400">Have a project or opportunity? Drop your details below.</p>
          </div>

          <form onSubmit={handleFormSubmit} className="max-w-xl mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400 transition"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Your Message..."
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400 transition"
            />
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <FaPaperPlane /> Send Message
            </button>
            {formSent && (
              <p className="text-xs text-emerald-400 text-center font-mono mt-2">
                ✓ Message sent successfully! (+15 XP)
              </p>
            )}
          </form>

          <div className="flex flex-wrap justify-center gap-4 pt-4 border-t border-slate-800/80">
            <a href={`mailto:${PORTFOLIO_DATA.socials.email}`} onClick={playClickSound} className="bg-slate-900 border border-slate-800 text-slate-300 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
              <FaEnvelope /> {PORTFOLIO_DATA.socials.email}
            </a>
            <a href={PORTFOLIO_DATA.socials.github} target="_blank" rel="noreferrer" onClick={playClickSound} className="bg-slate-900 border border-slate-800 text-slate-300 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
              <FaGithub /> GitHub
            </a>
            <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noreferrer" onClick={playClickSound} className="bg-slate-900 border border-slate-800 text-slate-300 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
              <FaLinkedin /> LinkedIn
            </a>
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