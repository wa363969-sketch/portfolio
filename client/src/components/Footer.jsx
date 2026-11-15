import React from 'react';
import { 
  Code2, 
  ArrowUp, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  Lock,
  Heart
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer({ onOpenLegal, onOpenAdmin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-slate-800 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-electric-500/20 border border-electric-500/40 flex items-center justify-center text-electric-400 font-bold">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                <span className="text-electric-400">shabeerdev</span>
                <span className="text-slate-400 font-normal">.com</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Independent Software Developer creating high-performance websites, custom software solutions, and mobile applications for international clients across the UK, USA, Canada, Australia and worldwide.
            </p>

            <div className="text-xs font-mono text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Direct Freelancer • No Agency Middlemen</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#about" className="hover:text-electric-400 transition-colors">About Shabeer</a></li>
              <li><a href="#services" className="hover:text-electric-400 transition-colors">Development Services</a></li>
              <li><a href="#skills" className="hover:text-electric-400 transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-electric-400 transition-colors">Project Portfolio</a></li>
              <li><a href="#process" className="hover:text-electric-400 transition-colors">6-Step Process</a></li>
              <li><a href="#why-me" className="hover:text-electric-400 transition-colors">Why Choose Me</a></li>
              <li><a href="#contact" className="hover:text-electric-400 transition-colors">Project Inquiry</a></li>
            </ul>
          </div>

          {/* Connect & Legal (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Global Channels
            </h4>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="w-10 h-10 rounded-xl bg-navy-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-electric-400 hover:border-electric-500/40 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-navy-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-navy-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-navy-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.contact.googleForm}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-navy-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-electric-400 hover:border-electric-500/40 transition-colors"
                title="Google Intake Form"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-1 text-xs font-mono">
              <button
                type="button"
                onClick={() => onOpenLegal('privacy')}
                className="text-left text-slate-400 hover:text-electric-400 transition-colors"
              >
                • Privacy Policy & Client NDA
              </button>
              <button
                type="button"
                onClick={() => onOpenLegal('terms')}
                className="text-left text-slate-400 hover:text-electric-400 transition-colors"
              >
                • Terms of Service & IP Ownership
              </button>
              <button
                type="button"
                onClick={onOpenAdmin}
                className="text-left text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1.5 mt-2"
              >
                <Lock className="w-3 h-3 text-slate-500" />
                <span>Admin Inquiries Console</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} shabeerdev.com – Shabeer Ahmed. All rights reserved. Built with Python Flask, React & Tailwind CSS.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-navy-900 border border-slate-800 text-slate-300 hover:text-white hover:border-electric-500/40 transition-all text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-electric-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
