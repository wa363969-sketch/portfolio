import React, { useState } from 'react';
import { 
  Terminal, 
  Database, 
  Globe, 
  GitBranch, 
  CheckCircle, 
  Cpu, 
  ShieldCheck,
  Code2,
  Filter
} from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Backend & Systems',
    'Frontend Engineering',
    'Databases & Architecture',
    'Tools & DevOps',
    'Engineering Fundamentals'
  ];

  const filteredSkills = selectedCategory === 'All'
    ? technicalSkills
    : technicalSkills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-navy-900/40 relative border-t border-slate-800/80">
      
      {/* Background ambient light */}
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-electric-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-electric-400 bg-electric-500/10 border border-electric-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Technical Skills & Engineering Stack
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical, evidence-backed capabilities honed through building functional applications, designing relational databases, and writing maintainable code.
          </p>

          {/* Honest Capability Disclaimer */}
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Demonstrated through working source code & projects. No unverified certifications or inflated claims.</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-electric-500 text-navy-950 shadow-glow-sm'
                  : 'bg-navy-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl glass-card border border-slate-800 hover:border-electric-500/40 hover:shadow-glow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-electric-400" />
                    <span>{skill.name}</span>
                  </h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-navy-900 text-electric-400 border border-electric-500/20">
                    {skill.experienceLevel}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-500 mb-3">
                  {skill.category}
                </div>

                <p className="text-slate-300 text-xs leading-relaxed mb-5">
                  {skill.description}
                </p>
              </div>

              {/* Progress Indicator Bar */}
              <div>
                <div className="flex justify-between items-center text-[11px] font-mono mb-1.5">
                  <span className="text-slate-400">Implementation Proficiency</span>
                  <span className="text-electric-400 font-semibold">{skill.proficiency}%</span>
                </div>
                <div className="w-full h-1.5 bg-navy-950 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-electric-400 rounded-full transition-all duration-700"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Technical Philosophy Banner */}
        <div className="mt-14 p-6 rounded-2xl glass-panel border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/30 flex items-center justify-center text-electric-400 shrink-0">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm sm:text-base">Need a custom stack or third-party integration?</h4>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                I adapt rapidly to your existing technology architecture, REST APIs, or cloud provider.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-navy-950 bg-electric-400 hover:bg-electric-500 transition-colors whitespace-nowrap shadow-glow-sm"
          >
            Ask About Your Tech Stack
          </a>
        </div>

      </div>
    </section>
  );
}
