import React from 'react';
import { 
  ArrowRight, 
  Send, 
  Briefcase, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Code2, 
  CheckCircle2,
  Globe2,
  MapPin
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import InteractiveTerminal from './InteractiveTerminal';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-navy-950 hero-grid-pattern"
    >
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-electric-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
          
          {/* Availability Status */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.availability.status}</span>
          </div>

          {/* International Markets */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-300 bg-slate-900/80 border border-slate-800">
            <Globe2 className="w-3.5 h-3.5 text-electric-400" />
            <span>Serving Clients in UK • USA • Canada • Australia & Worldwide</span>
          </div>
        </div>

        {/* Main Grid: Headline & Interactive Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <div className="text-sm font-semibold uppercase tracking-widest text-electric-400 mb-3 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-electric-500"></span>
              Independent Software Developer
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Turning Ideas Into{' '}
              <span className="text-gradient">
                Powerful Digital Solutions.
              </span>
            </h1>

            {/* Sub-headline / Pitch */}
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed font-normal">
              Hi, I'm <strong className="text-white font-semibold">Shabeer Ahmed</strong> at <span className="text-electric-400 font-semibold">shabeerdev.com</span>. I architect and build high-performance <span className="text-electric-400">websites</span>, <span className="text-electric-400">custom software</span>, and <span className="text-electric-400">mobile applications</span> for businesses seeking direct, agile developer collaboration without agency markups.
            </p>

            {/* Core Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-navy-950 bg-gradient-to-r from-electric-400 via-cyan-400 to-electric-500 hover:from-cyan-300 hover:to-electric-400 transition-all duration-300 shadow-glow-md hover:shadow-glow-lg transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Hire Me</span>
                <Send className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base text-slate-200 bg-navy-900/80 hover:bg-navy-800/90 border border-slate-700/80 hover:border-electric-500/50 transition-all duration-300 hover:text-white transform hover:-translate-y-0.5 text-center group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 text-electric-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="w-full pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-electric-400 shrink-0" />
                <span>100% Direct Developer</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Zap className="w-4 h-4 text-electric-400 shrink-0" />
                <span>AI-Assisted Velocity</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <ShieldCheck className="w-4 h-4 text-electric-400 shrink-0" />
                <span>Clean & Secure Code</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Developer Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="relative">
              {/* Decorative accent backdrops */}
              <div className="absolute -inset-1 bg-gradient-to-r from-electric-500/20 to-blue-600/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 -z-10" />
              <InteractiveTerminal />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
