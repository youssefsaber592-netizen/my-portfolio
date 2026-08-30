import { PORTFOLIO_DATA } from "../data/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-12 md:px-24 max-w-5xl mx-auto space-y-20">
      
      {/* Hero Section */}
      <section className="space-y-6 text-center md:text-left pt-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          {PORTFOLIO_DATA.name}
        </h1>
        <p className="text-xl text-cyan-400 font-medium">
          {PORTFOLIO_DATA.title}
        </p>
        <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
          {PORTFOLIO_DATA.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
          <a
            href={PORTFOLIO_DATA.socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition border border-slate-700"
          >
            <FaGithub size={18} /> GitHub
          </a>
          <a
            href={PORTFOLIO_DATA.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition border border-slate-700"
          >
            <FaLinkedin size={18} /> LinkedIn
          </a>
          <a
            href={PORTFOLIO_DATA.resumeUrl}
            target="_blank"
            download
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg transition font-medium"
          >
            <FaDownload size={16} /> Resume
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-slate-800 pb-2 text-white">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap gap-3">
          {PORTFOLIO_DATA.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-slate-900 border border-slate-800 text-cyan-300 text-sm px-3 py-1.5 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-slate-800 pb-2 text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl space-y-4 hover:border-slate-700 transition"
            >
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="pt-2 flex gap-4 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-cyan-400 hover:underline"
                  >
                    <FaGithub size={16} /> Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-cyan-400 hover:underline"
                  >
                    <FaExternalLinkAlt size={14} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-4 text-center border-t border-slate-800 pt-10">
        <h2 className="text-2xl font-semibold text-white">Get In Touch</h2>
        <p className="text-slate-400">
          Feel free to reach out for cloud, DevOps, or security collaborations.
        </p>
        <a
          href={PORTFOLIO_DATA.socials.email}
          className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          <FaEnvelope size={18} /> Send Email
        </a>
      </section>
    </main>
  );
}