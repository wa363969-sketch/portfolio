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
      case 'enterprise-logistics':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-navy-900 via-navy-950 to-slate-900 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:border-electric-500/30 transition-colors">
            {/* Mock Logistics Radar Interface */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] font-mono text-slate-400 ml-2">fleet.logicore-dispatch.demo</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                GPS Telemetry • 88 km/h
              </span>
            </div>

            {/* Route & Checkpoint Visualizer */}
            <div className="space-y-2 py-1">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                <span>Chicago Hub (Departed)</span>
                <span className="text-cyan-400 font-bold">58% Route</span>
                <span>New York BioMed</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400 w-[58%]" />
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
                <span>Rig: Volvo VNL-860 (84% Fuel)</span>
                <span className="text-emerald-400">Driver: M. Vance (Rating 4.96)</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/60">
              <span>Class-9 Cold-Chain Monitored</span>
              <span className="text-cyan-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                Sub-Second Telemetry Sync
              </span>
            </div>
          </div>
        );

      case 'omniflow-saas':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-navy-900 via-navy-950 to-slate-900 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:border-electric-500/30 transition-colors">
            {/* Mock SaaS Billing Interface */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] font-mono text-slate-400 ml-2">app.omniflow-saas.io</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Multi-Tenant Isolated
              </span>
            </div>

            {/* KPI Metrics */}
            <div className="grid grid-cols-3 gap-2 py-1">
              <div className="bg-navy-900/90 rounded p-2 border border-slate-800">
                <div className="text-[9px] text-slate-400 font-mono">Total MRR</div>
                <div className="text-xs font-bold text-white mt-0.5">$142,800</div>
                <div className="text-[9px] text-emerald-400 font-mono mt-0.5">+18.4% MoM</div>
              </div>
              <div className="bg-navy-900/90 rounded p-2 border border-slate-800">
                <div className="text-[9px] text-slate-400 font-mono">Net Retention</div>
                <div className="text-xs font-bold text-white mt-0.5">118% NRR</div>
                <div className="text-[9px] text-cyan-400 font-mono mt-0.5">Enterprise</div>
              </div>
              <div className="bg-navy-900/90 rounded p-2 border border-slate-800">
                <div className="text-[9px] text-slate-400 font-mono">Stripe Billing</div>
                <div className="text-xs font-bold text-white mt-0.5">1,490 Orgs</div>
                <div className="text-[9px] text-emerald-400 font-mono mt-0.5">99.8% Success</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/60">
              <span>Automated Usage Metering</span>
              <span className="text-indigo-400">Webhook Billing Engine</span>
            </div>
          </div>
        );

      case 'apex-health':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-navy-900 via-navy-950 to-slate-900 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:border-electric-500/30 transition-colors">
            {/* Mock Telemedicine Room */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] font-mono text-slate-400 ml-2">clinic.apex-health.care</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                HIPAA AES-256 Validated
              </span>
            </div>

            {/* Telehealth Consultation Mock */}
            <div className="space-y-1.5 py-1">
              <div className="flex items-center justify-between text-[10px] font-mono bg-navy-900/90 px-2.5 py-1.5 rounded border border-slate-800">
                <span className="text-slate-200">Session #TEL-4412 • Dr. Aris Thorne</span>
                <span className="text-emerald-400 font-bold">HD WebRTC Active</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-300">Encrypted</span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono bg-navy-900/90 px-2.5 py-1.5 rounded border border-slate-800">
                <span className="text-slate-200">Patient: Sarah Lin (DOB: 1989-04)</span>
                <span className="text-cyan-400">EHR Synced</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-blue-500/10 text-blue-300">Signed RX</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/60">
              <span>BAA-Compliant Telehealth</span>
              <span className="text-emerald-400">Zero-Knowledge Video Pipeline</span>
            </div>
          </div>
        );

      case 'shopcore-ecommerce':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-navy-900 via-navy-950 to-slate-900 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:border-electric-500/30 transition-colors">
            {/* Mock Multi-Currency Storefront */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] font-mono text-slate-400 ml-2">global.shopcore.store</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                USD / GBP / EUR / AUD
              </span>
            </div>

            {/* Product Cards Mockup */}
            <div className="grid grid-cols-3 gap-2 py-2">
              <div className="bg-navy-900/90 rounded-lg p-2 border border-slate-800 flex flex-col justify-between">
                <div className="w-full h-8 bg-cyan-500/10 rounded mb-1 flex items-center justify-center text-[9px] font-mono text-cyan-400">
                  Global SKU
                </div>
                <div className="text-[9px] text-slate-300 truncate">Pro Tech Backpack</div>
                <div className="text-[10px] font-bold text-cyan-400 mt-0.5">$129 • £102</div>
              </div>
              <div className="bg-navy-900/90 rounded-lg p-2 border border-slate-800 flex flex-col justify-between">
                <div className="w-full h-8 bg-blue-500/10 rounded mb-1 flex items-center justify-center text-[9px] font-mono text-blue-400">
                  Global SKU
                </div>
                <div className="text-[9px] text-slate-300 truncate">ANC Wireless Audio</div>
                <div className="text-[10px] font-bold text-blue-400 mt-0.5">$189 • €175</div>
              </div>
              <div className="bg-navy-900/90 rounded-lg p-2 border border-slate-800 flex flex-col justify-between">
                <div className="w-full h-8 bg-emerald-500/10 rounded mb-1 flex items-center justify-center text-[9px] font-mono text-emerald-400">
                  Global SKU
                </div>
                <div className="text-[9px] text-slate-300 truncate">Smart Sensor Ring</div>
                <div className="text-[10px] font-bold text-emerald-400 mt-0.5">$249 • A$380</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800/60">
              <span>Catalog Automation & Webhooks</span>
              <span className="text-electric-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Stripe Hosted Checkout
              </span>
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
