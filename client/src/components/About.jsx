import React from 'react';
import { 
  UserCheck, 
  Code, 
  Layers, 
  Clock, 
  ShieldCheck, 
  CheckCircle,
  FileCode2,
  Terminal,
  Cpu
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 bg-navy-900/40 relative border-t border-slate-800/80">
      
      {/* Background subtle glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-electric-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-electric-400 bg-electric-500/10 border border-electric-500/20 mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>ABOUT SHABEER AHMED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            An Independent Software Developer Driven by{' '}
            <span className="text-gradient">Precision & Craftsmanship.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            I build bespoke software and modern websites for business founders, startups, and product owners who value direct technical accountability over bureaucratic agency friction.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Detailed Story / Bio */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            {personalInfo.fullBio.map((paragraph, index) => (
              <p key={index} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Core Values Box */}
            <div className="mt-8 p-6 rounded-2xl glass-card border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-electric-400" />
                <span>My Developer Code of Conduct</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div className="text-sm">
                    <strong className="text-white block font-medium">No Code Obfuscation</strong>
                    <span className="text-slate-400 text-xs">Clean, structured, and self-documenting code you fully own.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div className="text-sm">
                    <strong className="text-white block font-medium">Direct Accountability</strong>
                    <span className="text-slate-400 text-xs">Speak directly with the engineer writing your application logic.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div className="text-sm">
                    <strong className="text-white block font-medium">Honest Capabilities</strong>
                    <span className="text-slate-400 text-xs">Transparent estimates, realistic milestones, and zero fluff.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div className="text-sm">
                    <strong className="text-white block font-medium">Post-Launch Support</strong>
                    <span className="text-slate-400 text-xs">Full handover, deployment setup, and 30-day bug warranty.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Snapshot & Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Profile Summary Card */}
            <div className="p-7 rounded-2xl glass-panel border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric-500/10 rounded-full blur-2xl -z-10" />
              
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-navy-800 to-navy-700 border border-electric-500/30 flex items-center justify-center text-electric-400 font-bold text-2xl shadow-glow-sm">
                  SA
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Shabeer Ahmed</h3>
                  <p className="text-sm font-mono text-electric-400">shabeerdev.com</p>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Independent Developer • Worldwide Remote
                  </p>
                </div>
              </div>

              {/* Quick Spec List */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">Primary Backend:</span>
                  <span className="text-white font-semibold">Python (Flask, SQLAlchemy)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">Frontend Stack:</span>
                  <span className="text-white font-semibold">HTML5, CSS3, JS, React</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">Data Architecture:</span>
                  <span className="text-white font-semibold">PostgreSQL, SQLite, SQL</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">Version Control:</span>
                  <span className="text-white font-semibold">Git & GitHub Repositories</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">Target Timezones:</span>
                  <span className="text-electric-400 font-semibold">US / UK / CA / AU Overlap</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Response SLA:</span>
                  <span className="text-emerald-400 font-semibold">&lt; 24 Hours Guaranteed</span>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-navy-950 bg-electric-400 hover:bg-electric-500 transition-colors shadow-glow-sm"
                >
                  <span>Discuss Your Requirements</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
