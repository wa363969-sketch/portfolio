import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Menu, 
  X, 
  Send, 
  Globe, 
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenLegal, onSelectService }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section highlight logic
      const sections = ['home', 'about', 'services', 'skills', 'projects', 'process', 'why-me', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Why Me', href: '#why-me' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-navy-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="shabeerdev.com Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-500 to-blue-600 flex items-center justify-center text-navy-950 font-bold text-lg shadow-glow-sm group-hover:shadow-glow-md transition-all duration-300">
              <Code2 className="w-5 h-5 text-navy-950 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight flex items-center gap-1.5 transition-colors">
                <span className="text-electric-400 group-hover:text-electric-300">shabeerdev</span>
                <span className="text-slate-400 font-normal">.com</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase -mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Independent Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-navy-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-electric-400 bg-navy-800 shadow-sm border border-electric-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Time zone & client badge */}
            <div className="hidden xl:flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/70 border border-slate-800 px-3 py-1.5 rounded-full">
              <Globe className="w-3.5 h-3.5 text-electric-400" />
              <span>UK • USA • CA • AU</span>
            </div>

            <a
              href="#contact"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-navy-950 bg-gradient-to-r from-electric-400 to-electric-500 hover:from-electric-500 hover:to-cyan-300 transition-all duration-300 shadow-glow-sm hover:shadow-glow-md transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Hire Me</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-20 right-4 left-4 bg-navy-900/95 border border-slate-800/90 rounded-2xl p-6 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                  Open for Q1 International Projects
                </span>
              </div>
            </div>

            <nav className="flex flex-col gap-2 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-200 hover:text-electric-400 hover:bg-slate-800/50 font-medium transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-navy-950 bg-gradient-to-r from-electric-400 to-electric-500 shadow-glow-sm"
              >
                <span>Start Project Inquiry</span>
                <Send className="w-4 h-4" />
              </a>

              <div className="text-center text-xs text-slate-400 font-mono mt-1">
                Direct developer collaboration • No agency markup
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
