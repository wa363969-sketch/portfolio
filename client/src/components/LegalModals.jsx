import React from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function LegalModals({ activeModal, onClose }) {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-navy-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="bg-navy-950/90 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-electric-500/10 border border-electric-500/30 flex items-center justify-center text-electric-400">
              {activeModal === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                shabeerdev.com • Independent Software Developer
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-slate-300 text-xs sm:text-sm leading-relaxed">
          
          {activeModal === 'privacy' ? (
            <>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">1. Scope of Privacy</h4>
                <p>
                  This Privacy Policy applies to all inquiries, communications, and project proposals submitted through this website to <strong>{personalInfo.name}</strong>. As an independent developer, I treat your personal and business data with utmost confidentiality.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1">2. Information Collection</h4>
                <p>
                  When you submit a project inquiry, I collect your full name, email address, country, project type, estimated budget, and project description. This information is solely used to communicate with you, analyze technical requirements, and provide a formal project estimate.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1">3. Confidentiality & Non-Disclosure (NDA)</h4>
                <p>
                  Any proprietary software ideas, technical architectures, business models, or codebases shared during our discovery sessions are held strictly confidential. I am glad to execute your company's mutual NDA prior to reviewing sensitive materials.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1">4. Zero Third-Party Selling</h4>
                <p>
                  Your email and contact data are never sold, rented, or distributed to third-party marketing companies, recruiters, or data brokers.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1">5. Data Retention & Deletion</h4>
                <p>
                  Inquiries are retained in our secure database for project tracking. You may request the deletion of your inquiry records at any time by sending an email to <a href={`mailto:${personalInfo.contact.email}`} className="text-electric-400 underline">{personalInfo.contact.email}</a>.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">1. Independent Contractor Relationship</h4>
                <p>
                  All software engineering services are delivered by <strong>{personalInfo.name}</strong> as an independent contractor. This is not an employment, agency, or partnership arrangement. You work directly with the developer without middleman markups.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1">2. Milestone-Based Execution</h4>
                <p>
                  Projects are executed across defined milestones (e.g., Architecture & Wireframing, Backend API & Database, Frontend Integration, QA & Deployment). Deliverables are reviewed and approved on staging servers prior to production release.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1">3. 100% Intellectual Property (IP) Ownership</h4>
                <p>
                  Upon final payment of the agreed project milestones, all right, title, interest, copyright, and Git source code repositories are transferred entirely to the client. You own 100% of the developed application with zero licensing royalties.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1">4. Post-Launch Warranty</h4>
                <p>
                  Major software projects include a standard <strong>30-day post-launch warranty</strong> covering bug fixes, configuration adjustments, and operational stabilization for the originally specified scope.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1">5. Demonstration Projects Clarification</h4>
                <p>
                  The showcase projects presented on this portfolio (e.g., E-commerce Platform, School Management System, Business Dashboard) are functional demonstration applications engineered by Shabeer Ahmed to illustrate architectural capabilities and code quality.
                </p>
              </div>
            </>
          )}

        </div>

        {/* Footer */}
        <div className="bg-navy-950 px-6 py-4 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-navy-950 bg-electric-400 hover:bg-electric-500 transition-colors shadow-glow-sm"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
}
