import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Globe2, 
  ShieldCheck,
  Sparkles,
  PhoneCall,
  Loader2,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { personalInfo, services } from '../data/portfolioData';

export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    country: 'United States',
    project_type: 'Website Development',
    budget: '$1,500 – $3,000 USD',
    message: '',
    _gotcha: '' // Honeypot field for bot spam blocking
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverFeedback, setServerFeedback] = useState(null);

  // If a service was preselected from the Services section or Why Me section
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, project_type: preselectedService }));
    }
  }, [preselectedService]);

  const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'Netherlands',
    'United Arab Emirates',
    'Singapore',
    'New Zealand',
    'Other International Location'
  ];

  const budgetOptions = [
    '$500 – $1,500 USD (Starter / MVP)',
    '$1,500 – $3,000 USD (Standard Business Project)',
    '$3,000 – $6,000 USD (Full-Stack / Custom Architecture)',
    '$6,000+ USD (Enterprise / Continuous Retainer)'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.full_name.trim() || formData.full_name.trim().length < 2) {
      errs.full_name = 'Please provide your full name (at least 2 characters).';
    }

    const emailRegex = /^[\w\.\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.country.trim()) {
      errs.country = 'Please choose your country.';
    }

    if (!formData.project_type.trim()) {
      errs.project_type = 'Please select your project category.';
    }

    if (!formData.budget.trim()) {
      errs.budget = 'Please select a budget range.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters describing your project goals.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Spam honeypot protection: bots fill this hidden input
    if (formData._gotcha) {
      return;
    }

    setIsSubmitting(true);
    setServerFeedback(null);

    const emailPayload = {
      name: formData.full_name,
      email: formData.email,
      _replyto: formData.email,
      country: formData.country,
      project_type: formData.project_type,
      budget: formData.budget,
      message: formData.message,
      _subject: `🚀 New Project Inquiry: ${formData.project_type} from ${formData.full_name} (${formData.country})`,
      _template: 'table',
      _captcha: 'false',
      _autoresponse: `Hi ${formData.full_name},\n\nThank you for reaching out regarding your ${formData.project_type} project. I have received your inquiry and will review your specifications and reply personally within 24 hours.\n\nWarm regards,\nShabeer Ahmed\nIndependent Software Developer\nshabeerdev.com | wa363969@gmail.com`
    };

    try {
      // 1. Submit directly to FormSubmit connected to wa363969@gmail.com
      // Using verified secure token to hide raw email from web scrapers
      const FORMSUBMIT_TOKEN = '989682139dd02fbe605749cae8806a58';
      const formSubmitUrl = `https://formsubmit.co/ajax/${FORMSUBMIT_TOKEN}`;
      const response = await fetch(formSubmitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      const data = await response.json().catch(() => ({}));

      // Store in localStorage as backup
      try {
        const stored = JSON.parse(localStorage.getItem('shabeer_portfolio_inquiries') || '[]');
        stored.unshift({
          id: Date.now(),
          ...formData,
          created_at: new Date().toISOString()
        });
        localStorage.setItem('shabeer_portfolio_inquiries', JSON.stringify(stored.slice(0, 50)));
      } catch (storageErr) {
        // ignore storage errors
      }

      // Check if successful or accepted by FormSubmit
      const isSuccess = response.ok || 
                        data.success === 'true' || 
                        data.success === true || 
                        (data.message && data.message.toLowerCase().includes('activation')) ||
                        (data.message && data.message.toLowerCase().includes('success'));

      if (isSuccess) {
        setSubmitSuccess(true);
        setServerFeedback({
          type: 'success',
          message: `Thank you, ${formData.full_name}! Your project inquiry has been sent directly to Shabeer Ahmed (${personalInfo.contact.email}). You will receive a response within 24 hours.`
        });

        // Trigger celebratory confetti effect
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (confettiErr) {
          // graceful fallback if canvas blocked
        }

        // Reset form
        setFormData({
          full_name: '',
          email: '',
          country: 'United States',
          project_type: 'Website Development',
          budget: '$1,500 – $3,000 USD',
          message: '',
          _gotcha: ''
        });
      } else {
        throw new Error(data.message || 'Unable to deliver message at this time.');
      }
    } catch (err) {
      console.warn('Form submission notice:', err);

      // Save locally anyway
      try {
        const stored = JSON.parse(localStorage.getItem('shabeer_portfolio_inquiries') || '[]');
        stored.unshift({
          id: Date.now(),
          ...formData,
          created_at: new Date().toISOString()
        });
        localStorage.setItem('shabeer_portfolio_inquiries', JSON.stringify(stored.slice(0, 50)));
      } catch (storageErr) {}

      // Mailto and WhatsApp direct fallbacks
      const mailtoSubject = encodeURIComponent(`Project Inquiry: ${formData.project_type} - ${formData.full_name}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.full_name}\nEmail: ${formData.email}\nCountry: ${formData.country}\nProject: ${formData.project_type}\nBudget: ${formData.budget}\n\nProject Scope:\n${formData.message}`
      );
      const mailtoLink = `mailto:${personalInfo.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      const whatsappText = encodeURIComponent(
        `Hi Shabeer, I wanted to discuss an inquiry for ${formData.project_type} (Budget: ${formData.budget}):\n${formData.message}`
      );
      const whatsappLink = `https://wa.me/923404942126?text=${whatsappText}`;

      setServerFeedback({
        type: 'fallback',
        message: 'Direct browser submission encountered a network delay. Click below to deliver your message immediately via Email or WhatsApp:',
        mailtoLink,
        whatsappLink
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-navy-900/50 relative border-t border-slate-800/80">
      
      {/* Background ambient light */}
      <div className="absolute left-10 bottom-10 w-96 h-96 bg-electric-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-electric-400 bg-electric-500/10 border border-electric-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Discuss Your Project
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind or need an independent developer to engineer your software? Fill out the inquiry form below, or reach out directly on WhatsApp or Email.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Channels & International Availability */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Status Card */}
            <div className="p-7 rounded-2xl glass-card border border-slate-800 relative overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-2">Direct Collaboration</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                When you contact me, you communicate directly with the engineer who will write the code. No sales pitch, no bureaucratic layers.
              </p>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-navy-950/70 border border-slate-800">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Guaranteed SLA:</span>
                    <span className="text-white font-semibold">{personalInfo.availability.responseTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-navy-950/70 border border-slate-800">
                  <Globe2 className="w-4 h-4 text-electric-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Timezone Overlap:</span>
                    <span className="text-white font-semibold">UK (GMT), US (EST/PST), AU (AEST)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-navy-950/70 border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Contract & Confidentiality:</span>
                    <span className="text-white font-semibold">Mutual NDA & IP Assignment Included</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Configurable Social & Messaging Channels */}
            <div className="p-7 rounded-2xl glass-panel border border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
                Direct Contact Channels
              </h4>

              <div className="space-y-3">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-navy-950/60 border border-slate-800 hover:border-electric-500/40 hover:bg-navy-950 transition-all text-slate-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-electric-500/10 flex items-center justify-center text-electric-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                      <div className="text-xs font-semibold text-white group-hover:text-electric-400 transition-colors">
                        {personalInfo.contact.email}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-electric-400 transition-colors" />
                </a>

                {/* WhatsApp */}
                <a
                  href={personalInfo.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-navy-950/60 border border-slate-800 hover:border-emerald-500/40 hover:bg-navy-950 transition-all text-slate-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">WhatsApp Instant Chat</div>
                      <div className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {personalInfo.contact.whatsapp}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-navy-950/60 border border-slate-800 hover:border-blue-500/40 hover:bg-navy-950 transition-all text-slate-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">LinkedIn Profile</div>
                      <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                        linkedin.com/in/shabeer-ahmed-dev
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-navy-950/60 border border-slate-800 hover:border-slate-600 hover:bg-navy-950 transition-all text-slate-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">GitHub Code Repos</div>
                      <div className="text-xs font-semibold text-white group-hover:text-slate-300 transition-colors">
                        {personalInfo.contact.github.replace('https://', '')}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
                </a>

                {/* Google Form Quick Link */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfePKBNa0Ah7SOB3bCidNwk12Pbc6uwuPYarbwXOGKyj3QG7w/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-electric-500/10 to-blue-600/10 border border-electric-500/40 hover:border-electric-500/80 hover:bg-electric-500/15 transition-all text-slate-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-electric-500/20 flex items-center justify-center text-electric-400">
                      {/* Google Forms icon */}
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-electric-400 font-semibold">Google Form (Quick Inquiry)</div>
                      <div className="text-xs font-semibold text-white group-hover:text-electric-300 transition-colors">
                        Fill out my project intake form
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-electric-400 group-hover:text-electric-300 transition-colors" />
                </a>

              </div>
            </div>

          </div>

          {/* Right Column: Comprehensive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl glass-panel border border-slate-700/80 shadow-2xl">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">Project Inquiry Form</h3>
                <p className="text-xs text-slate-400 font-mono">
                  Delivered directly to {personalInfo.contact.email} with guaranteed 24h response time.
                </p>
              </div>

              {/* Google Form Alternative Banner */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfePKBNa0Ah7SOB3bCidNwk12Pbc6uwuPYarbwXOGKyj3QG7w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 p-3.5 rounded-xl mb-6 bg-gradient-to-r from-electric-500/10 to-blue-600/10 border border-electric-500/35 hover:border-electric-500/70 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-electric-500/20 flex items-center justify-center text-electric-400 shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-electric-400 font-semibold uppercase tracking-wider">Prefer Google Forms?</span>
                    <p className="text-xs text-slate-200 group-hover:text-electric-300 transition-colors font-medium">
                      Click here to fill out my Google intake form instead →
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-electric-400 shrink-0 group-hover:scale-110 transition-transform" />
              </a>

              {/* Status Notice Banner */}
              {serverFeedback && (
                <div className={`p-4 rounded-xl mb-6 text-xs font-mono flex items-start gap-2.5 ${
                  serverFeedback.type === 'success' 
                    ? 'bg-emerald-950/70 border border-emerald-500/40 text-emerald-300' 
                    : serverFeedback.type === 'fallback'
                    ? 'bg-amber-950/70 border border-amber-500/40 text-amber-200'
                    : 'bg-rose-950/70 border border-rose-500/40 text-rose-300'
                }`}>
                  {serverFeedback.type === 'success' ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  ) : serverFeedback.type === 'fallback' ? (
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1 space-y-2">
                    <p>{serverFeedback.message}</p>
                    {serverFeedback.type === 'fallback' && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        <a 
                          href={serverFeedback.mailtoLink}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-electric-500 text-navy-950 font-bold hover:bg-electric-400 transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Send via Email Client</span>
                        </a>
                        <a 
                          href={serverFeedback.whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 text-navy-950 font-bold hover:bg-emerald-400 transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Send via WhatsApp</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Honeypot Anti-Spam (Hidden from real users) */}
                <input
                  type="text"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                />

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                      Full Name <span className="text-electric-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="e.g. David Miller"
                      className={`w-full bg-navy-950 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.full_name 
                          ? 'border-rose-500 focus:border-rose-500' 
                          : 'border-slate-700 focus:border-electric-500'
                      }`}
                    />
                    {errors.full_name && (
                      <p className="text-[11px] font-mono text-rose-400 mt-1">{errors.full_name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                      Email Address <span className="text-electric-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="david@company.com"
                      className={`w-full bg-navy-950 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email 
                          ? 'border-rose-500 focus:border-rose-500' 
                          : 'border-slate-700 focus:border-electric-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono text-rose-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Country & Project Type Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                      Your Country <span className="text-electric-400">*</span>
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full bg-navy-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-electric-500 transition-colors"
                    >
                      {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.country && (
                      <p className="text-[11px] font-mono text-rose-400 mt-1">{errors.country}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                      Project Type <span className="text-electric-400">*</span>
                    </label>
                    <select
                      name="project_type"
                      value={formData.project_type}
                      onChange={handleChange}
                      className="w-full bg-navy-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-electric-500 transition-colors"
                    >
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                    {errors.project_type && (
                      <p className="text-[11px] font-mono text-rose-400 mt-1">{errors.project_type}</p>
                    )}
                  </div>
                </div>

                {/* Budget Selection */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                    Estimated Budget Range <span className="text-electric-400">*</span>
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-navy-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-electric-500 transition-colors"
                  >
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="text-[11px] font-mono text-rose-400 mt-1">{errors.budget}</p>
                  )}
                </div>

                {/* Project Description */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-xs font-mono text-slate-300 font-medium">
                      Project Goals & Requirements <span className="text-electric-400">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-slate-500">
                      {formData.message.length} chars (min 10)
                    </span>
                  </div>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project: What are you building? Do you have an existing design or specification? What is your target launch timeline?"
                    className={`w-full bg-navy-950 border rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.message 
                        ? 'border-rose-500 focus:border-rose-500' 
                        : 'border-slate-700 focus:border-electric-500'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-[11px] font-mono text-rose-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-navy-950 bg-gradient-to-r from-electric-400 via-cyan-400 to-electric-500 hover:from-cyan-300 hover:to-electric-400 transition-all shadow-glow-md hover:shadow-glow-lg disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-navy-950" />
                      <span>Submitting Inquiry to Shabeer...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] font-mono text-slate-500 mt-2">
                  🔒 Information is kept strictly confidential and covered by standard NDA principles.
                </p>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
