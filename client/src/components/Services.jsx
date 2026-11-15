import React from 'react';
import { 
  Globe, 
  ShoppingCart, 
  Code2, 
  LayoutDashboard, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';
import { services } from '../data/portfolioData';

export default function Services({ onSelectService }) {
  // Map icons dynamically
  const getIcon = (id) => {
    switch (id) {
      case 'web-development':
        return <Globe className="w-6 h-6 text-electric-400" />;
      case 'ecommerce-development':
        return <ShoppingCart className="w-6 h-6 text-electric-400" />;
      case 'custom-software':
        return <Code2 className="w-6 h-6 text-electric-400" />;
      case 'business-systems':
        return <LayoutDashboard className="w-6 h-6 text-electric-400" />;
      case 'mobile-development':
        return <Smartphone className="w-6 h-6 text-electric-400" />;
      default:
        return <Layers className="w-6 h-6 text-electric-400" />;
    }
  };

  const handleInquire = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-navy-950 relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-electric-400 bg-electric-500/10 border border-electric-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUTIONS & EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Specialized Development Services
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            End-to-end software engineering built for international clients looking for dependable execution, clean codebases, and direct communication.
          </p>
        </div>

        {/* Services Grid (3 on top, 2 on bottom centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`flex flex-col justify-between rounded-2xl glass-card border border-slate-800 p-7 hover:border-electric-500/50 hover:shadow-glow-sm transition-all duration-300 group ${
                idx === 3 || idx === 4 ? 'lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-navy-800/90 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 group-hover:border-electric-500/50 transition-all">
                    {getIcon(service.id)}
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-electric-500/10 border border-electric-500/30 text-electric-400">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    What's Included:
                  </h4>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-electric-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tech Stack Chips & Action */}
              <div className="pt-6 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-navy-900 border border-slate-800 text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handleInquire(service.title)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-navy-900/90 hover:bg-electric-500 hover:text-navy-950 border border-slate-700 hover:border-transparent transition-all duration-200 group/btn"
                >
                  <span>Inquire About {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-electric-400 group-hover/btn:text-navy-950 group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
