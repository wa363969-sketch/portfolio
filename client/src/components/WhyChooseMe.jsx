import React, { useState } from 'react';
import { 
  Award, 
  MessageSquare, 
  Zap, 
  Monitor, 
  ShieldCheck, 
  CheckCircle, 
  LifeBuoy,
  ChevronDown,
  Calculator,
  Globe2,
  DollarSign,
  Clock,
  Sparkles
} from 'lucide-react';
import { whyChooseMe, internationalClientsFaq } from '../data/portfolioData';

export default function WhyChooseMe({ onSelectBudgetAndService }) {
  const [openFaq, setOpenFaq] = useState(null);

  // Estimator state for client interactivity
  const [projectType, setProjectType] = useState('Website Development');
  const [projectScope, setProjectScope] = useState('Standard (Multi-Page / Core Features)');
  const [timelineSpeed, setTimelineSpeed] = useState('Standard (Agile Delivery)');

  const getEstimatedRange = () => {
    let base = 800;
    if (projectType === 'E-commerce Development') base = 1500;
    if (projectType === 'Custom Software Development') base = 2200;
    if (projectType === 'Business Management Systems') base = 2500;
    if (projectType === 'Mobile App Development') base = 2000;

    if (projectScope === 'Complex (Advanced Custom Logic / RBAC)') base *= 1.6;
    if (timelineSpeed === 'Expedited / Rush') base *= 1.25;

    const min = Math.round(base);
    const max = Math.round(base * 1.4);
    return `$${min.toLocaleString()} – $${max.toLocaleString()} USD`;
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-electric-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-electric-400" />;
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-electric-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-electric-400" />;
      case 'CheckCircle':
        return <CheckCircle className="w-6 h-6 text-electric-400" />;
      case 'LifeBuoy':
        return <LifeBuoy className="w-6 h-6 text-electric-400" />;
      default:
        return <Award className="w-6 h-6 text-electric-400" />;
    }
  };

  return (
    <section id="why-me" className="py-24 bg-navy-950 relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-electric-400 bg-electric-500/10 border border-electric-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>THE FREELANCER ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Collaborate With Shabeer Ahmed?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A boutique, high-touch independent developer partnership offering senior craftsmanship, rapid velocity, and direct accountability without the agency price tag.
          </p>
        </div>

        {/* 6 Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {whyChooseMe.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl glass-card border border-slate-800 hover:border-electric-500/50 hover:shadow-glow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-navy-800/90 border border-slate-700/80 flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 font-semibold">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Guaranteed Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Budget & Timeline Estimator (Huge Client Magnet) */}
        <div className="mb-20 p-8 rounded-3xl glass-panel border border-slate-700/80 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-electric-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-electric-400 bg-electric-500/10 px-3 py-1 rounded-full">
                <Calculator className="w-3.5 h-3.5" />
                <span>INTERACTIVE PROJECT ESTIMATOR</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Plan Your Project Scope & Estimate Budget
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                International clients value budget predictability. Select your requirements below to see a realistic estimate range for UK, US, Canadian, and Australian projects.
              </p>

              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Project Category:</label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-navy-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-electric-500"
                  >
                    <option>Website Development</option>
                    <option>E-commerce Development</option>
                    <option>Custom Software Development</option>
                    <option>Business Management Systems</option>
                    <option>Mobile App Development</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Scope & Complexity:</label>
                  <select
                    value={projectScope}
                    onChange={(e) => setProjectScope(e.target.value)}
                    className="w-full bg-navy-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-electric-500"
                  >
                    <option>Standard (Multi-Page / Core Features)</option>
                    <option>Complex (Advanced Custom Logic / RBAC)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Estimated Output Card */}
            <div className="lg:col-span-6">
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 border border-electric-500/30 text-center shadow-xl">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Estimated Investment Range
                </span>
                <div className="text-3xl sm:text-4xl font-black text-gradient my-2">
                  {getEstimatedRange()}
                </div>
                <p className="text-xs text-slate-400 font-mono mb-6">
                  Transparent milestone payments • Staged deliverables • Zero surprises
                </p>

                <div className="p-4 rounded-xl bg-navy-950/80 border border-slate-800 text-left text-xs space-y-2 mb-6">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Includes Code Repository Handover:</span>
                    <span className="text-emerald-400 font-bold">100% Yes</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Post-Launch Bug Warranty:</span>
                    <span className="text-emerald-400 font-bold">30 Days Included</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Payment Methods:</span>
                    <span className="text-electric-400 font-mono">Wise • Stripe • Bank Wire</span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-navy-950 bg-gradient-to-r from-electric-400 to-electric-500 hover:from-electric-500 hover:to-cyan-300 transition-all shadow-glow-sm"
                >
                  <span>Lock In This Scope via Inquiry Form</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* International Clients FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Frequently Asked Questions by International Clients
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Answers regarding remote collaboration, time zones, contracts, and IP ownership.
            </p>
          </div>

          <div className="space-y-3">
            {internationalClientsFaq.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl glass-card border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white hover:text-electric-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ml-4 ${isOpen ? 'rotate-180 text-electric-400' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
