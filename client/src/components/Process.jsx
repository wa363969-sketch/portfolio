import React, { useState } from 'react';
import { 
  GitCommit, 
  Search, 
  FileSpreadsheet, 
  Palette, 
  Code, 
  CheckCheck, 
  Rocket,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { developmentProcess } from '../data/portfolioData';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (index) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-electric-400" />;
      case 1:
        return <FileSpreadsheet className="w-5 h-5 text-electric-400" />;
      case 2:
        return <Palette className="w-5 h-5 text-electric-400" />;
      case 3:
        return <Code className="w-5 h-5 text-electric-400" />;
      case 4:
        return <CheckCheck className="w-5 h-5 text-electric-400" />;
      case 5:
        return <Rocket className="w-5 h-5 text-electric-400" />;
      default:
        return <GitCommit className="w-5 h-5 text-electric-400" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-navy-900/40 relative border-t border-slate-800/80">
      
      {/* Background ambient lighting */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-96 h-96 bg-electric-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-electric-400 bg-electric-500/10 border border-electric-500/20 mb-3">
            <GitCommit className="w-3.5 h-3.5" />
            <span>AGILE ENGINEERING WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Structured 6-Stage Development Process
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A proven, transparent methodology ensuring that your software is delivered on schedule, within scope, and tested to production standards.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developmentProcess.map((item, idx) => (
            <div
              key={item.step}
              className={`p-6 rounded-2xl glass-card border transition-all duration-300 flex flex-col justify-between ${
                activeStep === idx 
                  ? 'border-electric-500/60 shadow-glow-sm bg-navy-900/90' 
                  : 'border-slate-800 hover:border-slate-700'
              }`}
              onMouseEnter={() => setActiveStep(idx)}
            >
              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-navy-800/90 border border-slate-700/80 flex items-center justify-center">
                      {getStepIcon(idx)}
                    </div>
                    <span className="font-mono text-2xl font-black text-electric-400">
                      {item.step}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {item.duration}
                  </span>
                </div>

                {/* Step Title & Description */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Milestone Deliverables */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Key Milestones:
                </div>
                <div className="space-y-1.5">
                  {item.keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-electric-400 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Milestone Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-slate-800 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
            <div className="text-xs sm:text-sm text-slate-300">
              <strong className="text-white">Milestone-Based Billing:</strong> Payments are tied directly to approved stage deliverables. You only pay as progress is verified.
            </div>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-bold text-navy-950 bg-electric-400 hover:bg-electric-500 whitespace-nowrap shadow-glow-sm transition-colors"
          >
            Start Stage 1 (Discovery)
          </a>
        </div>

      </div>
    </section>
  );
}
