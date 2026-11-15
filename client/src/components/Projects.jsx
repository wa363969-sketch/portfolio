import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  ArrowRight,
  ShieldAlert,
  ShieldCheck,
  Eye,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Visual representations for each project card
  const renderProjectVisual = (projectId) => {
    switch (projectId) {
      case 'ecommerce-platform':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-navy-900 via-navy-950 to-slate-900 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:border-electric-500/30 transition-colors">
            {/* Mock Storefront Interface */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] font-mono text-slate-400 ml-2">store.shabeer-dev.demo</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Cart (3 Items • $184.00)
              </span>
            </div>

            {/* Product Cards Mockup */}
            <div className="grid grid-cols-3 gap-2 py-2">
              <div className="bg-navy-900/90 rounded-lg p-2 border border-slate-800 flex flex-col justify-between">
                <div className="w-full h-10 bg-electric-500/10 rounded mb-1 flex items-center justify-center text-[10px] font-mono text-electric-400">
                  Tech Wear
                </div>
                <div className="text-[9px] text-slate-300 truncate">Urban Minimalist Jacket</div>
                <div className="text-[10px] font-bold text-electric-400 mt-0.5">$89.00</div>
              </div>
              <div className="bg-navy-900/90 rounded-lg p-2 border border-slate-800 flex flex-col justify-between">
                <div className="w-full h-10 bg-blue-500/10 rounded mb-1 flex items-center justify-center text-[10px] font-mono text-blue-400">
                  Audio
                </div>
                <div className="text-[9px] text-slate-300 truncate">Wireless ANC Headphones</div>
                <div className="text-[10px] font-bold text-electric-400 mt-0.5">$65.00</div>
              </div>
              <div className="bg-navy-900/90 rounded-lg p-2 border border-slate-800 flex flex-col justify-between">
                <div className="w-full h-10 bg-cyan-500/10 rounded mb-1 flex items-center justify-center text-[10px] font-mono text-cyan-400">
                  Hardware
                </div>
                <div className="text-[9px] text-slate-300 truncate">Mechanical Desk Keyboard</div>
                <div className="text-[10px] font-bold text-electric-400 mt-0.5">$30.00</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/60">
              <span>SQL Catalog Database</span>
              <span className="text-electric-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Instant Checkout Flow
              </span>
            </div>
          </div>
        );

      case 'school-management-system':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-navy-900 via-navy-950 to-slate-900 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:border-electric-500/30 transition-colors">
            {/* Mock Admin Roster Interface */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] font-mono text-slate-400 ml-2">portal.school-admin.demo</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Spring Term 2026
              </span>
            </div>

            {/* Student Table Mock */}
            <div className="space-y-1.5 py-1">
              <div className="flex items-center justify-between text-[10px] font-mono bg-navy-900/90 px-2.5 py-1.5 rounded border border-slate-800">
                <span className="text-slate-200">#STU-1042 • Alexander Wright</span>
                <span className="text-slate-400">CS-301</span>
                <span className="text-emerald-400 font-bold">GPA: 3.88</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-300">Present</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono bg-navy-900/90 px-2.5 py-1.5 rounded border border-slate-800">
                <span className="text-slate-200">#STU-1043 • Sophia Martinez</span>
                <span className="text-slate-400">MATH-202</span>
                <span className="text-emerald-400 font-bold">GPA: 3.92</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-300">Present</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/60">
              <span>Relational Foreign Keys (Students &lt;-&gt; Courses)</span>
              <span className="text-blue-400">Automated Grade Analytics</span>
            </div>
          </div>
        );

      case 'business-management-dashboard':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-navy-900 via-navy-950 to-slate-900 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:border-electric-500/30 transition-colors">
            {/* Mock Dashboard Top */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] font-mono text-slate-400 ml-2">app.enterprise-kpi.demo</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                Real-Time Sync
              </span>
            </div>

            {/* KPI Chart Mock */}
            <div className="grid grid-cols-3 gap-2 py-1">
              <div className="bg-navy-900/90 rounded p-2 border border-slate-800">
                <div className="text-[9px] text-slate-400 font-mono">Monthly Revenue</div>
                <div className="text-xs font-bold text-white mt-0.5">$48,250</div>
                <div className="text-[9px] text-emerald-400 font-mono mt-0.5">+14.2% MoM</div>
              </div>
              <div className="bg-navy-900/90 rounded p-2 border border-slate-800">
                <div className="text-[9px] text-slate-400 font-mono">Invoices Pending</div>
                <div className="text-xs font-bold text-white mt-0.5">18 Claims</div>
                <div className="text-[9px] text-amber-400 font-mono mt-0.5">$12,400 due</div>
              </div>
              <div className="bg-navy-900/90 rounded p-2 border border-slate-800">
                <div className="text-[9px] text-slate-400 font-mono">Stock Health</div>
                <div className="text-xs font-bold text-white mt-0.5">96.4%</div>
                <div className="text-[9px] text-electric-400 font-mono mt-0.5">4 Reorders</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/60">
              <span>SQL Aggregate Engine</span>
              <span className="text-purple-400">PDF Invoice Generator</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 bg-navy-950 relative">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-electric-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-electric-400 bg-electric-500/10 border border-electric-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO & WORK SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Demonstration Projects & Architecture
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore functional demonstration projects built to showcase robust full-stack architecture, clean code structure, relational database schema design, and seamless user experiences.
          </p>

          {/* Honest Demonstration Project Callout */}
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Clearly identified demonstration projects. No fabricated clients or unverifiable commercial claims.</span>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl glass-card border border-slate-800 overflow-hidden hover:border-electric-500/50 hover:shadow-glow-sm transition-all duration-300 group"
            >
              {/* Visual Simulated Mockup Header */}
              {renderProjectVisual(project.id)}

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-electric-400 font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Architecture Highlight */}
                  <div className="p-3 rounded-xl bg-navy-950/70 border border-slate-800/80 mb-4">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Cpu className="w-3 h-3 text-electric-400" />
                      <span>Architecture Stack:</span>
                    </div>
                    <div className="text-xs text-slate-300 font-mono leading-tight">
                      {project.architecture}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Tech tags + Explore Action */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 5).map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-navy-950 text-slate-400 border border-slate-800">
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-navy-950 text-slate-500">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-navy-950 bg-gradient-to-r from-electric-400 to-electric-500 hover:from-electric-500 hover:to-cyan-300 transition-all shadow-glow-sm"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Explore Case Study & Code Demo</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Custom Project CTA Banner */}
        <div className="mt-14 p-8 rounded-2xl glass-panel border border-slate-800 text-center max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Have a custom software or website project in mind?
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-6">
            Whether you need an e-commerce platform, an internal business tool, or a bespoke system, I will engineer it cleanly to your exact specifications.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-navy-950 bg-electric-400 hover:bg-electric-500 transition-colors shadow-glow-sm"
          >
            <span>Request a Technical Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Interactive Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
