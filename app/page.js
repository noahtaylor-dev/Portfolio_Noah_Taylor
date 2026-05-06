import React from 'react';
import Link from 'next/link';
import { projects } from './data'; 

export default function Portfolio() {
  const experience = [
    {
      role: "Software Development Diploma",
      company: "Southern Alberta Institute of Technology (SAIT)",
      period: "Graduated April 2026",
      description: "Completed a comprehensive diploma focused on modern software engineering practices, collaborative development, and full-stack architecture."
    },
    {
      role: "Project Manager",
      company: "Shift Focus - Capstone Project",
      period: "Sept 2025 - Apr 2026",
      description: "Led a 6-developer Agile team to architect and launch a full-stack ReactJS staff scheduling application, driving core system design (API, database, auth) while establishing scalable AWS infrastructure and automated CI/CD pipelines."
    },
    {
      role: "Team Leader",
      company: "Scotiabank Theatre Chinook",
      period: "June 2024 - Present",
      description: "Supervised front-of-house operations by organizing staff assignments, training team members, writing performance reports, and resolving escalated customer concerns."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-violet-900/50">
      
      {/* Navigation / Header */}
      <nav className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-8 flex justify-between items-center border-b border-slate-800/50">
        <span className="text-xl font-bold tracking-tighter text-white">NT</span>
        <div className="space-x-6 text-sm font-medium">
          <a href="#projects" className="hover:text-violet-400 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-violet-400 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-violet-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-24">
        
        {/* Hero Section */}
        <section className="mb-32 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            Noah Taylor
          </h1>
          <h2 className="text-2xl md:text-3xl text-violet-400 mb-8 font-light">
            Software Developer
          </h2>
          <p className="text-lg leading-relaxed text-slate-400 mb-10">
            Recent Software Development graduate specializing in full-stack web architecture and database management. Combines practical experience deploying secure, user-focused web applications with strong, real-world leadership skills. Highly adaptable and self-directed, ready to deliver reliable technical solutions and drive project execution.
          </p>
          
          {/* Resume Download Button */}
          <div>
            <a 
              href="/Noah_Taylor_Resume.pdf" 
              download="Noah_Taylor_Resume.pdf"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-medium py-3 px-8 rounded-full transition-colors group"
            >
              <svg 
                className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume (PDF)
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-3xl font-bold text-white">Projects</h3>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>
          
          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Link 
                href={`/projects/${project.slug}`}
                key={index} 
                className="flex flex-col bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-violet-500/30 hover:bg-slate-900/80 transition-all group cursor-pointer"
              >
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors">{project.title}</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-slate-800 text-violet-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-3xl font-bold text-white">Experience</h3>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>

          <div className="space-y-12">
            {experience.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                <div className="text-slate-500 font-mono text-sm pt-1">
                  {item.period}
                </div>
                <div className="md:col-span-3 max-w-4xl">
                  <h4 className="text-xl font-bold text-white mb-1">{item.role}</h4>
                  <div className="text-violet-400 font-medium mb-4">{item.company}</div>
                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-slate-800/50 bg-slate-950">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            {new Date().getFullYear()} Noah Taylor
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="mailto:noahtaylor.dev@gmail.com" className="text-slate-400 hover:text-violet-400 transition-colors">
              noahtaylor.dev@gmail.com
            </a>
            <a href="tel:8257120986" className="text-slate-400 hover:text-violet-400 transition-colors">
              825-712-0986
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}