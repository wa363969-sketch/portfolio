import React, { useState } from 'react';
import { Terminal, Copy, Check, Play, FileCode, Cpu, Layers } from 'lucide-react';

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState('developer.py');
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState(null);

  const tabs = {
    'developer.py': `class IndependentDeveloper:
    def __init__(self):
        self.name = "Shabeer Ahmed"
        self.role = "Full-Stack Software Developer"
        self.focus_areas = [
            "Website Development",
            "Custom Software Solutions",
            "Mobile App Development"
        ]
        self.work_ethic = "Direct Communication & Clean Code"
        self.international_clients = ["UK", "USA", "Canada", "Australia"]

    def collaborate(self, client_idea):
        """Turn client requirements into production-ready software."""
        architecture = self.plan_architecture(client_idea)
        robust_code = self.develop(clean=True, scalable=True)
        return self.deploy(robust_code, warranty_days=30)

developer = IndependentDeveloper()
developer.collaborate("Your Next Big Project")`,

    'architecture.json': `{
  "developer": "Shabeer Ahmed",
  "client_model": "Direct Freelancer (No Agency Fees)",
  "technologies": {
    "backend": ["Python", "Flask", "RESTful APIs"],
    "frontend": ["HTML5", "CSS3 / Tailwind", "JavaScript", "React"],
    "databases": ["PostgreSQL", "SQLite", "Relational Modeling"],
    "tooling": ["Git & GitHub", "Data Structures", "QA Testing"]
  },
  "deployment_standards": {
    "clean_architecture": true,
    "responsive_design": "Mobile, Tablet, Desktop",
    "delivery": "Milestone-driven with transparent demos"
  }
}`,

    'run_checks.sh': `#!/usr/bin/env bash
# Verifying Developer Readiness for Global Clients...
echo "[*] Initializing Shabeer Ahmed Dev Environment..."
echo "[+] Checking Python 3.x & Flask REST API: OK"
echo "[+] Checking Database Management & SQL: OK"
echo "[+] Validating Frontend UX & Responsive Layout: OK"
echo "[+] Timezone availability (UK/US/CA/AU): READY"
echo "[SUCCESS] Ready to turn your idea into a powerful digital solution!"`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(tabs[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setTerminalOutput(null);
    setTimeout(() => {
      setIsRunning(false);
      setTerminalOutput({
        status: "success",
        time: "14ms",
        message: "✓ Architecture verified • Ready for UK, USA, CA, AU & Worldwide projects!"
      });
    }, 600);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden glass-panel border border-slate-700/80 shadow-2xl transition-all duration-300 hover:border-electric-500/40">
      
      {/* Terminal Title Bar */}
      <div className="bg-navy-900/90 px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></div>
          <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline-flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-electric-400" />
            shabeer-developer-console v2.5
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-navy-950/80 p-1 rounded-lg border border-slate-800/80">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                activeTab === tab
                  ? 'bg-electric-500/20 text-electric-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-500/30 transition-all disabled:opacity-50"
            title="Execute Code"
          >
            <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Run</span>
          </button>
          <button
            onClick={handleCopy}
            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800/80 transition-colors"
            title="Copy Code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm overflow-x-auto bg-navy-950/95 leading-relaxed text-slate-300 min-h-[260px] max-h-[380px]">
        <pre className="whitespace-pre">
          {tabs[activeTab].split('\n').map((line, idx) => {
            // Basic syntax color highlighting simulation for clean display
            let styledLine = line;
            const isComment = line.trim().startsWith('#') || line.trim().startsWith('//');
            const isKeyword = line.includes('class ') || line.includes('def ') || line.includes('return ') || line.includes('import ');

            return (
              <div key={idx} className="flex">
                <span className="select-none text-slate-600 w-7 pr-3 text-right shrink-0">
                  {idx + 1}
                </span>
                <span className={isComment ? 'text-slate-500 italic' : isKeyword ? 'text-electric-400 font-semibold' : 'text-slate-200'}>
                  {line}
                </span>
              </div>
            );
          })}
        </pre>
      </div>

      {/* Execution Output Bar (if Run is clicked) */}
      {terminalOutput && (
        <div className="px-4 py-2.5 bg-emerald-950/40 border-t border-emerald-800/50 flex items-center justify-between font-mono text-xs text-emerald-300 animate-in fade-in">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{terminalOutput.message}</span>
          </div>
          <span className="text-emerald-500 text-[11px]">{terminalOutput.time}</span>
        </div>
      )}

      {/* Terminal Footer Status */}
      <div className="bg-navy-900/60 px-4 py-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Direct Contractor
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="hidden sm:inline">Zero Agency Overhead</span>
        </div>
        <div className="text-slate-400">
          UTF-8 • Python 3 & React
        </div>
      </div>
    </div>
  );
}
