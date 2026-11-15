import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  MessageSquare, 
  Sparkles, 
  RefreshCw, 
  MessageCircle, 
  ExternalLink, 
  Globe, 
  DollarSign, 
  Code, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';
import { personalInfo, services, projects } from '../data/portfolioData';

// Suggested quick prompts
const QUICK_PROMPTS = [
  { label: '💼 Services & Skills', query: 'What services do you offer?' },
  { label: '💰 Pricing & Rates', query: 'How much do you charge for a project?' },
  { label: '🌍 Timezone Availability', query: 'Which timezones and countries do you support?' },
  { label: '⚡ How to Hire', query: 'How can I hire Shabeer for my project?' },
];

export default function AIAssistantBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Hello! 👋 I am **Shabeer's Portfolio AI Assistant**.\n\nI can answer questions about his software engineering services, tech stack, international timezones, pricing, or connect you directly with him!`,
      actions: [
        { label: 'Chat on WhatsApp', type: 'whatsapp', url: personalInfo.contact.whatsappLink },
        { label: 'View Services', type: 'scroll', target: '#services' }
      ],
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, isOpen]);

  // Handle Quick Actions (Scroll or External Link)
  const handleActionClick = (action) => {
    if (action.type === 'scroll') {
      const element = document.querySelector(action.target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action.url) {
      window.open(action.url, '_blank', 'noopener,noreferrer');
    }
  };

  // Intelligent Knowledge Matching Engine
  const generateAIResponse = (userText) => {
    const q = userText.toLowerCase().trim();

    // 1. Pricing / Cost / Budget / Rates
    if (
      q.includes('price') || q.includes('cost') || q.includes('rate') || 
      q.includes('charge') || q.includes('fee') || q.includes('budget') || 
      q.includes('paise') || q.includes('kitna') || q.includes('quote')
    ) {
      return {
        text: `💰 **Transparent, Milestone-Based Pricing:**\n\nShabeer provides flexible and transparent pricing tailored to project requirements:\n- **Landing Pages & Business Sites:** Starting from competitive standard rates with fast delivery.\n- **Custom Full-Stack Apps & E-commerce:** Structured milestones (e.g., 30% kickoff, 40% demo, 30% final deployment).\n- **Bespoke Business Portals:** Custom quote based on scope.\n\nEvery project includes full source code ownership, testing, and 30-day post-launch support!`,
        actions: [
          { label: 'Get Free Project Quote (WhatsApp)', type: 'whatsapp', url: personalInfo.contact.whatsappLink },
          { label: 'Submit Project Brief', type: 'link', url: personalInfo.contact.googleForm }
        ]
      };
    }

    // 2. Services / What do you do / Work
    if (
      q.includes('service') || q.includes('offer') || q.includes('work') || 
      q.includes('build') || q.includes('develop') || q.includes('website') || 
      q.includes('app') || q.includes('software') || q.includes('kaam')
    ) {
      return {
        text: `💼 **Core Development Services:**\n\n1. **Website Development:** High-speed, responsive, SEO-optimized web applications.\n2. **Custom Software Development:** Bespoke backend architectures, business logic & RESTful APIs.\n3. **E-commerce Solutions:** Secure shopping carts, Stripe/PayPal payment checkouts, and admin portals.\n4. **Business Management Systems:** Custom ERPs, invoicing pipelines, and operations dashboards.\n5. **Mobile & PWAs:** Cross-platform web and mobile apps for iOS & Android.`,
        actions: [
          { label: 'Explore Services Section', type: 'scroll', target: '#services' },
          { label: 'Chat on WhatsApp', type: 'whatsapp', url: personalInfo.contact.whatsappLink }
        ]
      };
    }

    // 3. Tech Stack / Skills / Languages
    if (
      q.includes('tech') || q.includes('stack') || q.includes('skill') || 
      q.includes('python') || q.includes('react') || q.includes('language') || 
      q.includes('framework') || q.includes('database') || q.includes('sql')
    ) {
      return {
        text: `⚡ **Shabeer's Technical Stack:**\n\n- **Frontend:** React 19, JavaScript (ES6+), Tailwind CSS, Vite, HTML5/CSS3\n- **Backend:** Python (Flask / FastAPI), RESTful APIs, Microservices\n- **Databases:** PostgreSQL, SQLite, SQLAlchemy, relational modeling\n- **Deployment & Cloud:** Vercel, Docker, GitHub CI/CD, Linux servers\n- **Quality Assurance:** Unit testing, API validation, responsive cross-browser testing.`,
        actions: [
          { label: 'View Skills Matrix', type: 'scroll', target: '#skills' },
          { label: 'Check GitHub Code', type: 'link', url: personalInfo.contact.github }
        ]
      };
    }

    // 4. Timezones / International Clients / Countries
    if (
      q.includes('timezone') || q.includes('country') || q.includes('countries') || 
      q.includes('uk') || q.includes('us') || q.includes('usa') || q.includes('canada') || 
      q.includes('australia') || q.includes('time') || q.includes('hours') || q.includes('available')
    ) {
      return {
        text: `🌍 **Global Client Availability:**\n\nShabeer works seamlessly with international founders and teams across:\n- **United Kingdom:** GMT / BST overlap\n- **United States & Canada:** EST / PST hours\n- **Australia:** AEST overlap\n- **Worldwide:** Guaranteed response within 24 hours (usually under 2 hours via WhatsApp)!\n\nCommunication is kept frictionless via Slack, WhatsApp, Zoom, or async GitHub milestones.`,
        actions: [
          { label: 'Message on WhatsApp', type: 'whatsapp', url: personalInfo.contact.whatsappLink },
          { label: 'Book via Contact Form', type: 'scroll', target: '#contact' }
        ]
      };
    }

    // 5. How to Hire / Contact / WhatsApp / Email
    if (
      q.includes('hire') || q.includes('contact') || q.includes('whatsapp') || 
      q.includes('email') || q.includes('rabta') || q.includes('call') || 
      q.includes('message') || q.includes('reach') || q.includes('talk') || q.includes('number')
    ) {
      return {
        text: `🚀 **How to Connect with Shabeer:**\n\nYou can reach him directly through any of these verified channels:\n\n- 📱 **WhatsApp:** [+92 3404942126](${personalInfo.contact.whatsappLink}) *(Fastest response)*\n- ✉️ **Email:** [wa363969@gmail.com](mailto:${personalInfo.contact.email})\n- 📋 **Project Scope Form:** [Submit Project Brief](${personalInfo.contact.googleForm})\n- 💻 **GitHub:** [wa363969-sketch](${personalInfo.contact.github})`,
        actions: [
          { label: 'Direct WhatsApp Chat', type: 'whatsapp', url: personalInfo.contact.whatsappLink },
          { label: 'Fill Project Brief Form', type: 'link', url: personalInfo.contact.googleForm }
        ]
      };
    }

    // 6. Portfolio / Projects / Previous Work
    if (
      q.includes('project') || q.includes('portfolio') || q.includes('sample') || 
      q.includes('previous') || q.includes('case study') || q.includes('demo')
    ) {
      return {
        text: `🚀 **Featured Projects:**\n\nShabeer has delivered robust web applications including:\n- **Enterprise Logistics Management Portal:** Real-time dispatch, route monitoring, and driver management.\n- **OmniFlow SaaS Analytics Dashboard:** Multi-tenant metrics and billing engine.\n- **Apex Health Telemedicine Suite:** HIPAA-compliant patient scheduling and video integration.\n- **ShopCore Multi-Currency E-commerce:** Stripe checkout and catalog automation.`,
        actions: [
          { label: 'Browse Featured Projects', type: 'scroll', target: '#projects' },
          { label: 'Visit GitHub Repository', type: 'link', url: personalInfo.contact.github }
        ]
      };
    }

    // 7. About Shabeer / Experience
    if (
      q.includes('who') || q.includes('shabeer') || q.includes('about') || 
      q.includes('experience') || q.includes('background')
    ) {
      return {
        text: `👨‍💻 **About Shabeer Ahmed:**\n\nShabeer is an independent software developer who engineers clean, scalable web applications and custom software. Instead of paying agency overheads or communicating through non-technical middlemen, you partner directly with the engineer building your product.\n\nCore values: Clean architecture, proactive communication, and on-time milestone delivery.`,
        actions: [
          { label: 'Read Full Bio', type: 'scroll', target: '#about' },
          { label: 'Chat on WhatsApp', type: 'whatsapp', url: personalInfo.contact.whatsappLink }
        ]
      };
    }

    // Default Fallback
    return {
      text: `Thanks for reaching out! I'd love to help with that. For specialized inquiries, project estimates, or custom requirements, chatting directly with Shabeer on WhatsApp or submitting a quick brief is the fastest route!`,
      actions: [
        { label: 'Chat on WhatsApp (+92 3404942126)', type: 'whatsapp', url: personalInfo.contact.whatsappLink },
        { label: 'Send Project Brief Form', type: 'link', url: personalInfo.contact.googleForm }
      ]
    };
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Realistic bot response delay
    setTimeout(() => {
      const botResponse = generateAIResponse(text);
      const newBotMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botResponse.text,
        actions: botResponse.actions || [],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: `Conversation restarted! How else can I assist you with Shabeer's software engineering services?`,
        actions: [
          { label: 'Chat on WhatsApp', type: 'whatsapp', url: personalInfo.contact.whatsappLink },
          { label: 'View Services', type: 'scroll', target: '#services' }
        ],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
        {/* Welcome popover pill when bot is closed */}
        {!isOpen && hasUnread && (
          <div 
            onClick={() => setIsOpen(true)}
            className="cursor-pointer bg-navy-900/95 backdrop-blur-md border border-electric-500/40 text-slate-200 text-xs py-2 px-3.5 rounded-full shadow-lg flex items-center gap-2 animate-bounce hover:border-electric-400 transition-all duration-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-electric-400 animate-spin" />
            <span>Have questions? <strong>Ask Shabeer AI</strong></span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle AI Assistant"
          className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-r from-electric-500 to-blue-600 text-navy-950 font-bold shadow-xl shadow-electric-500/25 hover:shadow-electric-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-electric-400 focus:ring-offset-2 focus:ring-offset-navy-950"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-navy-950 transition-transform duration-200 rotate-90 group-hover:rotate-0" />
          ) : (
            <>
              <Bot className="w-6 h-6 text-navy-950" />
              {/* Online pulse dot */}
              <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-navy-950"></span>
              </span>
            </>
          )}
        </button>
      </div>

      {/* Chat Window Panel */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] max-h-[620px] h-[82vh] bg-navy-900/95 backdrop-blur-xl border border-electric-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300 ring-1 ring-white/10"
        >
          {/* Header */}
          <div className="bg-navy-950/90 border-b border-slate-800/80 px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-electric-500 to-blue-600 flex items-center justify-center text-navy-950 shadow-md">
                <Bot className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-navy-950"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-sans font-bold text-sm text-white">Shabeer AI Assistant</h3>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-medium bg-electric-500/10 text-electric-400 border border-electric-500/20">
                    24/7
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">Ask about services, pricing & timezones</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button 
                onClick={handleReset}
                title="Restart conversation"
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                title="Close AI Assistant"
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-3 py-2 bg-navy-950/40 border-b border-slate-800/60 overflow-x-auto scrollbar-none flex gap-2">
            {QUICK_PROMPTS.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(prompt.query)}
                className="whitespace-nowrap px-2.5 py-1 text-xs rounded-full bg-slate-800/60 hover:bg-electric-500/20 border border-slate-700/60 hover:border-electric-500/40 text-slate-300 hover:text-electric-300 transition-all cursor-pointer flex-shrink-0"
              >
                {prompt.label}
              </button>
            ))}
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-electric-500 text-navy-950 font-medium rounded-br-none'
                      : 'bg-slate-800/90 text-slate-200 border border-slate-700/60 rounded-bl-none'
                  }`}
                >
                  {/* Message content formatted */}
                  <div className="whitespace-pre-line space-y-1">
                    {msg.text.split('\n').map((line, i) => {
                      // Check for markdown bold **text**
                      const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                      return (
                        <p 
                          key={i} 
                          dangerouslySetInnerHTML={{ __html: formattedLine }} 
                          className={line.startsWith('-') || line.startsWith('1.') ? 'pl-2 text-xs text-slate-300' : ''}
                        />
                      );
                    })}
                  </div>

                  {/* Action CTA Buttons */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-slate-700/60 flex flex-wrap gap-2">
                      {msg.actions.map((act, actIdx) => (
                        <button
                          key={actIdx}
                          onClick={() => handleActionClick(act)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-sm ${
                            act.type === 'whatsapp'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500 hover:text-navy-950'
                              : 'bg-electric-500/20 text-electric-300 border border-electric-500/40 hover:bg-electric-500 hover:text-navy-950'
                          }`}
                        >
                          {act.type === 'whatsapp' ? (
                            <MessageCircle className="w-3.5 h-3.5" />
                          ) : (
                            <ExternalLink className="w-3 h-3" />
                          )}
                          <span>{act.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-slate-500 mt-1 px-1">{msg.time}</span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs bg-slate-800/60 px-3 py-2 rounded-xl rounded-bl-none w-fit border border-slate-700/50">
                <Sparkles className="w-3.5 h-3.5 text-electric-400 animate-spin" />
                <span>Thinking...</span>
                <span className="inline-flex gap-1 ml-1">
                  <span className="w-1.5 h-1.5 bg-electric-400 rounded-full animate-pulse"></span>
                  <span className="w-1.5 h-1.5 bg-electric-400 rounded-full animate-pulse delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-electric-400 rounded-full animate-pulse delay-200"></span>
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-navy-950/90 border-t border-slate-800/80">
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about pricing, services, tech stack..."
                className="w-full bg-slate-900 border border-slate-700/70 focus:border-electric-400 text-slate-100 text-xs sm:text-sm rounded-xl pl-3 pr-10 py-2.5 focus:outline-none placeholder-slate-500 transition-all"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                aria-label="Send Message"
                className="absolute right-1.5 p-1.5 rounded-lg bg-electric-500 text-navy-950 hover:bg-electric-400 disabled:opacity-40 disabled:hover:bg-electric-500 transition-all cursor-pointer disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500 mt-2 px-1">
              <span>Powered by ShabeerDev AI</span>
              <a 
                href={personalInfo.contact.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline flex items-center gap-1"
              >
                <MessageCircle className="w-3 h-3" />
                <span>Live WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
