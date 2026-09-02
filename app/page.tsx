"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA, ProjectItem } from "../data/portfolio";
import { useGamification } from "../hooks/useGamification";
import { Navbar } from "../components/Navbar";
import { InteractiveFloating } from "../components/InteractiveFloating";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaTimes,
  FaExternalLinkAlt,
  FaCode,
  FaCloud,
  FaTools,
  FaCogs,
  FaLaptopCode,
} from "react-icons/fa";

export default function Home() {
  const { xp, addXp, discoveredCount, discoverMilestone, levelName, toasts } = useGamification();
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Section Observer for Navbar & XP Milestones
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            discoverMilestone(sectionId);
            addXp(5, "Section Visited", `Discovered ${sectionId}`, `visit_${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [discoverMilestone, addXp]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openProjectModal = (proj: ProjectItem) => {
    setSelectedProject(proj);
    addXp(10, "Project Discovered", proj.title, `project_${proj.id}`);
  };

  return (
    <div className="min-h-screen bg-[#05070B] text-slate-200 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
      {/* Ambient Radial Blue Glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-transparent to-transparent z-0" />

      {/* Floating Pill Navbar */}
      <Navbar
        displayName={PORTFOLIO_DATA.displayName}
        xp={xp}
        discoveredCount={discoveredCount}
        levelName={levelName}
        activeSection={activeSection}
        onNavigate={scrollTo}
      />

      {/* XP Toast Notifications */}
      <div className="fixed bottom-20 left-5 z-50 flex flex-col space-y-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="bg-slate-950/90 border border-cyan-500/50 text-white px-4 py-2.5 rounded-xl text-xs shadow-xl shadow-cyan-950/40 backdrop-blur-md animate-bounce"
          >
            <p className="font-bold text-cyan-400">{toast.title}</p>
            {toast.subtitle && <p className="text-[10px] text-slate-400">{toast.subtitle}</p>}
          </div>
        ))}
      </div>

      <main className="max-w-5xl mx-auto px-6 space-y-32 pt-28 pb-20 relative z-10">
        {/* HERO SECTION */}
        <section id="home" className="min-h-[75vh] flex flex-col md:flex-row items-center justify-between gap-12 pt-6">
          {/* LEFT: Frame */}
          <div className="relative group">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_50px_rgba(6,182,212,0.25)]">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-5xl font-black text-cyan-400 tracking-wider">
                YS
              </div>
            </div>
            {PORTFOLIO_DATA.availableForWork && (
              <span className="absolute bottom-2 right-4 bg-emerald-500/90 text-slate-950 text-xs font-bold px-3 py-1 rounded-full border-2 border-[#05070B] shadow-md">
                Available for work
              </span>
            )}
          </div>

          {/* RIGHT: Meta Information */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">{PORTFOLIO_DATA.name}</h1>
              <p className="text-xl md:text-2xl font-bold text-cyan-400 mt-1">{PORTFOLIO_DATA.title}</p>
            </div>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
              {PORTFOLIO_DATA.bio}
            </p>

            {/* Quick Stats */}
            <div className="flex justify-center md:justify-start gap-8 py-3 border-y border-slate-800/80">
              <div>
                <p className="text-2xl font-black text-white">{PORTFOLIO_DATA.stats.collaborations}</p>
                <p className="text-xs text-slate-400">Projects / Collaborations</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">{PORTFOLIO_DATA.stats.experiences}</p>
                <p className="text-xs text-slate-400">Training Experiences</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">{PORTFOLIO_DATA.stats.certifications}</p>
                <p className="text-xs text-slate-400">Technical Certifications</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-bold text-xs transition-all shadow-lg shadow-cyan-500/20"
              >
                Explore Work ↓
              </button>
              <a
                href={PORTFOLIO_DATA.socials.resume}
                download
                onClick={() => addXp(10, "CV Downloaded", "Resume action", "dl_cv")}
                className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white px-6 py-3 rounded-xl font-medium text-xs transition flex items-center gap-2"
              >
                <FaDownload /> Request Full CV ↓
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6 text-xs text-slate-400 pt-2">
              <span>Quick Connection:</span>
              {PORTFOLIO_DATA.socials.linkedin !== "YOUR_LINKEDIN_URL" && (
                <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 flex items-center gap-1">
                  <FaLinkedin /> LinkedIn
                </a>
              )}
              <a href={PORTFOLIO_DATA.socials.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 flex items-center gap-1">
                <FaGithub /> GitHub
              </a>
              {PORTFOLIO_DATA.socials.email !== "YOUR_EMAIL" && (
                <a href={`mailto:${PORTFOLIO_DATA.socials.email}`} className="hover:text-cyan-400 flex items-center gap-1">
                  <FaEnvelope /> Email
                </a>
              )}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="space-y-10">
          <div className="text-center space-y-1">
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">About</span>
            <h2 className="text-3xl font-black text-white">Who I Am</h2>
          </div>

          {/* Timeline Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative">
            {PORTFOLIO_DATA.originStory.map((item, index) => (
              <div key={index} className="bg-slate-950/60 border border-slate-800 p-5 rounded-2xl hover:border-cyan-500/50 transition">
                <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] mb-3" />
                <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed text-center max-w-3xl mx-auto">
            "I'm Youssef Saber, a Computer Engineering student with a strong focus on Cloud Computing and DevOps. I'm interested in designing reliable infrastructure, automating deployments, working with AWS services, and building secure and scalable environments."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PORTFOLIO_DATA.educationCards.map((card, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-2xl text-center space-y-1">
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">{card.title}</span>
                <p className="text-sm font-bold text-white">{card.subtitle}</p>
                <p className="text-xs text-slate-400">{card.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL STACK */}
        <section id="skills" className="space-y-8">
          <div className="text-center space-y-1">
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Expertise</span>
            <h2 className="text-3xl font-black text-white">Technical Stack</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <FaCode className="text-cyan-400" /> PROGRAMMING
              </h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.techStack.programming.map((tech) => (
                  <span key={tech} className="bg-slate-900 hover:border-cyan-500/50 border border-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-lg transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <FaCloud className="text-cyan-400" /> CLOUD & INFRASTRUCTURE
              </h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.techStack.cloud.map((tech) => (
                  <span key={tech} className="bg-slate-900 hover:border-cyan-500/50 border border-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-lg transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <FaCogs className="text-cyan-400" /> DEVOPS & AUTOMATION
              </h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.techStack.devops.map((tech) => (
                  <span key={tech} className="bg-slate-900 hover:border-cyan-500/50 border border-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-lg transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <FaLaptopCode className="text-cyan-400" /> DEVELOPMENT
              </h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.techStack.development.map((tech) => (
                  <span key={tech} className="bg-slate-900 hover:border-cyan-500/50 border border-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-lg transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-2xl space-y-4 md:col-span-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <FaTools className="text-cyan-400" /> TOOLS & PLATFORMS
              </h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.techStack.tools.map((tech) => (
                  <span key={tech} className="bg-slate-900 hover:border-cyan-500/50 border border-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-lg transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE & VOLUNTEERING */}
        <section id="experience" className="space-y-8">
          <div className="text-center space-y-1">
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Journey</span>
            <h2 className="text-3xl font-black text-white">Experience & Volunteering</h2>
          </div>

          <div className="space-y-6">
            {PORTFOLIO_DATA.experiences.map((exp) => (
              <div key={exp.id} className="bg-slate-950/60 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-cyan-500/40 transition">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-white">{exp.role}</h3>
                  <span className="text-[10px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800 px-3 py-1 rounded-full">
                    {exp.type}
                  </span>
                </div>
                <p className="text-xs text-cyan-400 font-medium">
                  {exp.organization} • <span className="text-slate-400">{exp.date}</span>
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">{exp.description}</p>
                {exp.certificateImage && (
                  <button
                    onClick={() => setSelectedImage(exp.certificateImage!)}
                    className="text-xs text-cyan-400 underline hover:text-cyan-300 pt-2 block"
                  >
                    View Certificate Image
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="space-y-8">
          <div className="text-center space-y-1">
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Projects</span>
            <h2 className="text-3xl font-black text-white">What I've Built</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.projects.map((proj) => (
              <div key={proj.id} className="bg-slate-950/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition flex flex-col justify-between">
                <div>
                  <img src={proj.image} alt={proj.title} className="w-full h-44 object-cover" />
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800/50">
                      {proj.category}
                    </span>
                    <h3 className="text-lg font-bold text-white">{proj.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{proj.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.tags.map((t, i) => (
                        <span key={i} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between gap-2 border-t border-slate-900 mt-4">
                  <button
                    onClick={() => openProjectModal(proj)}
                    className="bg-slate-900 hover:bg-slate-800 text-white text-xs px-4 py-2 rounded-lg font-medium border border-slate-700"
                  >
                    Details
                  </button>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* YOUTUBE SECTION (Configurable - Hidden if youtubeUrl is empty) */}
        {PORTFOLIO_DATA.youtubeUrl.trim().length > 0 && (
          <section id="youtube" className="space-y-6 text-center border-t border-slate-800 pt-10">
            <h2 className="text-2xl font-bold text-white">YouTube Channel</h2>
            <a href={PORTFOLIO_DATA.youtubeUrl} target="_blank" rel="noreferrer" className="inline-block bg-red-600 text-white px-6 py-2.5 rounded-xl font-bold text-xs">
              Visit Channel
            </a>
          </section>
        )}

        {/* CONTACT SECTION */}
        <section id="contact" className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 md:p-12 text-center space-y-6">
          <div className="space-y-2">
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Connect</span>
            <h2 className="text-3xl font-black text-white">LET'S CONNECT</h2>
            <p className="text-xs md:text-sm text-slate-400 max-w-lg mx-auto">
              Interested in cloud infrastructure, DevOps, automation, networking, or technical collaboration? Let's connect.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href={PORTFOLIO_DATA.socials.github} target="_blank" rel="noreferrer" className="bg-slate-900 border border-slate-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
              <FaGithub /> GitHub
            </a>
            {PORTFOLIO_DATA.socials.linkedin !== "YOUR_LINKEDIN_URL" && (
              <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="bg-slate-900 border border-slate-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
                <FaLinkedin /> LinkedIn
              </a>
            )}
            {PORTFOLIO_DATA.socials.email !== "YOUR_EMAIL" && (
              <a href={`mailto:${PORTFOLIO_DATA.socials.email}`} className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
                <FaEnvelope /> Email
              </a>
            )}
            <a href={PORTFOLIO_DATA.socials.resume} download className="bg-slate-900 border border-slate-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
              <FaDownload /> Download CV
            </a>
          </div>
        </section>
      </main>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 max-w-lg w-full space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono text-cyan-400">{selectedProject.category}</span>
              <button onClick={() => setSelectedProject(null)} className="text-slate-400 hover:text-white">
                <FaTimes />
              </button>
            </div>
            <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{selectedProject.fullDescription}</p>
            {selectedProject.architecture && (
              <div className="bg-slate-900 p-3 rounded-xl text-[11px] text-slate-400">
                <strong className="text-cyan-400 block mb-1">Architecture:</strong>
                {selectedProject.architecture}
              </div>
            )}
            <div className="flex justify-end gap-3 pt-2">
              <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="bg-cyan-500 text-slate-950 text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1">
                <FaGithub /> GitHub Repository
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Certificate Image Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-2xl w-full">
            <img src={selectedImage} alt="Certificate" className="w-full rounded-xl shadow-2xl" />
            <button onClick={() => setSelectedImage(null)} className="absolute top-2 right-2 text-white bg-slate-900/80 p-2 rounded-full">
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      {/* Floating Interactive Trigger Widgets */}
      <InteractiveFloating
        onTerminalOpen={() => addXp(5, "Terminal Accessed", "System check", "terminal_accessed")}
        onChatbotInteract={() => addXp(5, "Assistant Interacted", "Chat query", "chat_interacted")}
      />
    </div>
  );
}