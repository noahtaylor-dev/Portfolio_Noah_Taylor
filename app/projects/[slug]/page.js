import React from 'react';
import Link from 'next/link';
import { projects } from '../../data';
import { notFound } from 'next/navigation';

export default async function ProjectPage({ params }) {
  // Safe Server-Side params unwrapping for Next.js 15
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-violet-900/50">
      
      {/* Back Navigation - Tighter padding on mobile */}
      <nav className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-6 md:py-8 border-b border-slate-800/50">
        <Link href="/" className="text-sm font-medium text-slate-400 hover:text-violet-400 transition-colors flex items-center gap-2 w-fit">
          ← Back to Portfolio
        </Link>
      </nav>

      {/* Main Container - Reduced top/bottom padding for mobile screens */}
      <main className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-12 md:py-20">
        
        {/* HEADER SECTION */}
        <header className="mb-16 md:mb-20 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 md:mb-6">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-6 md:mb-8 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {project.techStack.map((tech, i) => (
              <span key={i} className="text-xs md:text-sm px-3 md:px-4 py-1.5 bg-slate-900 border border-slate-800 text-violet-300 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* OVERVIEW SECTION */}
        {project.overview && (
          <section className="mb-16 md:mb-20 max-w-3xl">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Project Overview</h2>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed">
              {project.overview}
            </p>
          </section>
        )}

        {/* TECH BREAKDOWN SECTION */}
        {project.techBreakdown && (
          <section className="mb-16 md:mb-20 max-w-5xl">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Architecture & Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {project.techBreakdown.map((item, index) => (
                <div key={index} className="bg-slate-900/40 border border-slate-800/60 p-5 md:p-6 rounded-2xl">
                  <h3 className="text-base md:text-lg font-semibold text-violet-300 mb-2 md:mb-3">{item.tech}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FEATURES SECTION */}
        {project.features && (
          <section className="mb-16 md:mb-20 max-w-3xl">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Key Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-400 text-sm md:text-base">
                  <span className="text-violet-500 mt-0.5 md:mt-1">✦</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* STATIC SCREENSHOTS SECTION */}
        {project.images && project.images.length > 0 && (
          <section className="mb-16 md:mb-20 w-full flex flex-col items-center">
            
            {/* Cleaned up the alignment hack. This now perfectly matches the images below it naturally. */}
            <div className="w-full max-w-4xl mb-6 md:mb-8 text-left">
              <h2 className="text-xl md:text-2xl font-bold text-white">Application Interface</h2>
            </div>
            
            <div className="flex flex-col gap-8 md:gap-16 w-full items-center">
              {project.images.map((img, index) => (
                <div 
                  key={index} 
                  className="flex flex-col gap-3 md:gap-4 w-full max-w-4xl"
                >
                  <div className="w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src={img.url} 
                      alt={img.alt} 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="text-xs md:text-sm text-slate-500 font-mono pl-3 border-l-2 border-violet-500/30">
                    {img.alt}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

      </main>
    </div>
  );
}