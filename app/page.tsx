import { PORTFOLIO_DATA } from "../data/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaExternalLinkAlt, FaServer, FaCode, FaTools, FaCheckCircle, FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-200 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0f17]/80 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-black text-cyan-400 tracking-wider">SABER.</span>
            <span className="text-xs bg-slate-800 text-cyan-400 px-2 py-0.5 rounded-full border border-slate-700">AWS & DevOps</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Tech Stack</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-28 py-12">
        {/* Hero Section */}
        <section id="home" className="pt-10 flex flex-col items-center text-center space-y-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 p-1 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-3xl font-bold text-cyan-400">
                YS
              </div>
            </div>
            {PORTFOLIO_DATA.availableForWork && (
              <span className="absolute bottom-1 right-1 bg-emerald-500 text-slate-950 text-xs font-semibold px-2.5 py-0.5 rounded-full border-2 border-[#0b0f17]">
                Available for work
              </span>
            )}
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
              {PORTFOLIO_DATA.name}
            </h1>
            <p className="text-lg md:text-xl text-cyan-400 font-semibold">
              {PORTFOLIO_DATA.title}
            </p>
          </div>

          <p className="max-w-2xl text-slate-400 text-base md:text-lg leading-relaxed">
            {PORTFOLIO_DATA.bio}
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center gap-8 py-4 border-y border-slate-800/80 w-full max-w-lg">
            <div>
              <p className="text-2xl font-extrabold text-white">{PORTFOLIO_DATA.stats.mentees}</p>
              <p className="text-xs text-slate-400">Collaborations</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white">{PORTFOLIO_DATA.stats.internships}</p>
              <p className="text-xs text-slate-400">Internships</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white">{PORTFOLIO_DATA.stats.roles}</p>
              <p className="text-xs text-slate-400">Track Certifications</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-2.5 rounded-xl font-bold transition shadow-lg shadow-cyan-500/10"
            >
              Explore Work +
            </a>
            <a
              href={PORTFOLIO_DATA.resumeUrl}
              download
              className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white px-6 py-2.5 rounded-xl font-medium transition flex items-center gap-2"
            >
              <FaDownload size={14} /> Request Full CV
            </a>
          </div>

          <div className="flex items-center gap-6 pt-2 text-sm text-slate-400">
            <span>Quick Connection:</span>
            <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition flex items-center gap-1">
              <FaLinkedin /> LinkedIn
            </a>
            <a href={PORTFOLIO_DATA.socials.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition flex items-center gap-1">
              <FaGithub /> GitHub
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">About</span>
            <h2 className="text-3xl font-bold text-white">Who I Am</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PORTFOLIO_DATA.originStory.map((item, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl hover:border-slate-700 transition">
                <h3 className="font-bold text-white text-base mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Journey</span>
            <h2 className="text-3xl font-bold text-white">Experience & Volunteering</h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {PORTFOLIO_DATA.experiences.map((exp, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-800/80 p-6 rounded-2xl space-y-3 hover:border-cyan-500/40 transition">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <FaBriefcase className="text-cyan-400 text-sm" /> {exp.role}
                  </h3>
                  <span className="text-xs bg-cyan-950/60 text-cyan-300 border border-cyan-800 px-3 py-1 rounded-full font-mono">
                    {exp.type}
                  </span>
                </div>
                <p className="text-sm text-cyan-400 font-medium">{exp.organization} • <span className="text-slate-400">{exp.date}</span></p>
                <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Stack Section */}
        <section id="skills" className="space-y-8">
          <div className="text-center space-y-1">
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Expertise</span>
            <h2 className="text-3xl font-bold text-white">Technical Stack</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <FaCode className="text-cyan-400" /> Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.techStack.languages.map((lang, idx) => (
                  <span key={idx} className="bg-slate-800/70 border border-slate-700/60 text-slate-300 text-xs px-3 py-1.5 rounded-lg">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <FaServer className="text-cyan-400" /> Systems & Infrastructure
              </h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.techStack.systems.map((sys, idx) => (
                  <span key={idx} className="bg-slate-800/70 border border-slate-700/60 text-slate-300 text-xs px-3 py-1.5 rounded-lg">
                    {sys}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <FaTools className="text-cyan-400" /> Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.techStack.tools.map((tool, idx) => (
                  <span key={idx} className="bg-slate-800/70 border border-slate-700/60 text-slate-300 text-xs px-3 py-1.5 rounded-lg">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Projects</span>
            <h2 className="text-3xl font-bold text-white">What I've Built</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.projects.map((proj, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl space-y-4 hover:border-slate-700 transition flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-800/50">{proj.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{proj.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{proj.description}</p>
                </div>
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((t, i) => (
                      <span key={i} className="bg-slate-800 text-slate-400 text-[11px] px-2.5 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={proj.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:underline">
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8 md:p-12 text-center space-y-6">
          <div className="space-y-2">
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Contact</span>
            <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
            <p className="text-slate-400 max-w-lg mx-auto text-sm">
              Open to cloud architecture, DevOps, network engineering, and security opportunities.
            </p>
          </div>

          <div className="flex justify-center gap-4 pt-2">
            <a
              href={PORTFOLIO_DATA.socials.email}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-3 rounded-xl font-bold transition flex items-center gap-2"
            >
              <FaEnvelope /> Send Message
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/60 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Youssef Saber Awad. All rights reserved.
      </footer>
    </div>
  );
}