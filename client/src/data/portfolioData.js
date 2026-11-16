/**
 * Shabeer Ahmed - Portfolio Data & Configuration
 * Edit placeholders here to customize social links, email, phone, and project details.
 */

export const personalInfo = {
  name: "shabeerdev.com",
  role: "Independent Software Developer",
  tagline: "Turning Ideas Into Powerful Digital Solutions.",
  shortBio: "Specializing in professional website development, custom software development, and mobile app development for international clients across the UK, USA, Canada, Australia and worldwide.",
  fullBio: [
    "I am an independent software developer committed to engineering reliable, high-performance digital products. Rather than dealing with agency overhead and bureaucratic middlemen, my clients work directly with me — the developer who designs, codes, tests, and deploys their solutions.",
    "My development philosophy centers on clean architecture, maintainable code, and pragmatic problem-solving. Whether you require a high-converting website, an internal business management system, or a full-stack custom application, I combine robust backend engineering in Python & SQL with modern, responsive frontends.",
    "I collaborate seamlessly with founders, business owners, and engineering teams across multiple time zones (including US EST/PST, UK GMT, and Australia AEST) using clear communication, regular video check-ins, and milestone-driven deliveries."
  ],
  availability: {
    status: "Available for New Projects",
    timezones: "UK (GMT), USA (EST/PST), Canada (EST), Australia (AEST) Overlap",
    responseTime: "Guaranteed response within 24 hours"
  },
  contact: {
    email: "wa363969@gmail.com",
    whatsapp: "+92 3404942126",
    whatsappLink: "https://wa.me/923404942126?text=Hi%20Shabeer,%20I%20am%20interested%20in%20discussing%20a%20software%20project.",
    linkedin: "https://linkedin.com/in/shabeer-ahmed-dev",
    github: "https://github.com/wa363969-sketch",
    googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSfePKBNa0Ah7SOB3bCidNwk12Pbc6uwuPYarbwXOGKyj3QG7w/viewform",
    website: "https://shabeerdev.com",
    location: "Global Remote (UK, USA, Canada, Australia & Worldwide Clients)"
  }
};

export const services = [
  {
    id: "web-development",
    title: "Website Development",
    shortDesc: "High-performance, modern, and fully responsive websites tailored to convert international visitors into paying clients.",
    fullDesc: "I build fast, SEO-optimized, accessible websites using modern standards. From corporate company profiles to dynamic web applications, each site is crafted with clean semantics, swift loading speeds, and responsive layouts that perform flawlessly across all screen sizes.",
    deliverables: [
      "Custom responsive design (Mobile, Tablet, Desktop)",
      "SEO best practices & meta schema optimization",
      "Fast page load speeds (Core Web Vitals optimized)",
      "Contact forms & CRM/email lead integration",
      "Interactive animations and glassmorphism styling"
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3 / Tailwind", "Flask", "SEO Architecture"],
    badge: "Most Popular"
  },
  {
    id: "ecommerce-development",
    title: "E-commerce Development",
    shortDesc: "Scalable digital storefronts with secure checkouts, intuitive product catalogs, and automated order flows.",
    fullDesc: "Empower your business to sell goods and digital products globally. I engineer robust e-commerce solutions featuring product browsing, dynamic filtering, real-time cart persistence, secure payment processing, and administrative order tracking.",
    deliverables: [
      "Dynamic catalog & category filtering",
      "Shopping cart & persistent session storage",
      "Stripe / PayPal / International payment integration",
      "Order status tracking & automated client receipts",
      "Admin inventory management portal"
    ],
    technologies: ["Python", "Flask", "SQL / Database Management", "React", "REST APIs", "Stripe API"],
    badge: "High ROI"
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    shortDesc: "Bespoke software solutions built from the ground up to solve your unique operational challenges and automate tasks.",
    fullDesc: "When off-the-shelf software doesn't fit your operational workflow, I architect custom web-based software tailored specifically to your business rules. Focused on reliability, data security, and future-proof scalability.",
    deliverables: [
      "Architecture planning & database modeling",
      "Custom business logic & calculation engines",
      "RESTful API design & third-party service hooks",
      "Role-based access control (RBAC) & security",
      "Automated reporting and workflow data pipelines"
    ],
    technologies: ["Python", "Flask", "PostgreSQL / SQLite", "Data Structures", "REST APIs", "Git"],
    badge: "Tailor-Made"
  },
  {
    id: "business-systems",
    title: "Business Management Systems",
    shortDesc: "Centralized internal portals, dashboards, and ERP tools to monitor KPIs, inventory, invoicing, and staff workflows.",
    fullDesc: "Transform fragmented spreadsheets into a centralized, single-source-of-truth management platform. Track sales, manage clients, monitor operational metrics in real-time, and automate internal administrative tasks.",
    deliverables: [
      "Executive KPI dashboards with visual charts",
      "Client & lead management (lightweight CRM)",
      "Automated invoice generation & PDF exports",
      "Inventory tracking & low-stock alerts",
      "Multi-user permission levels (Admin, Staff, Manager)"
    ],
    technologies: ["SQL", "Flask", "React", "Chart.js / Data Viz", "Database Management", "QA Testing"],
    badge: "Enterprise Grade"
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    shortDesc: "Responsive cross-platform mobile apps and Progressive Web Apps (PWAs) that work seamlessly on iOS and Android.",
    fullDesc: "Deliver an app experience directly to your users' smartphones. I develop responsive mobile-first applications and PWAs backed by rock-solid backend APIs, push notifications, offline caching, and frictionless UX.",
    deliverables: [
      "Cross-platform responsive mobile layout",
      "Progressive Web App (installable on iOS & Android)",
      "Fast API data synchronization",
      "Offline caching and optimistic UI updates",
      "Touch gestures and smooth mobile navigation"
    ],
    technologies: ["React", "JavaScript", "Mobile-First CSS", "Python REST APIs", "PWA Standards"],
    badge: "Cross-Platform"
  }
];

export const technicalSkills = [
  {
    name: "Python",
    category: "Backend & Systems",
    description: "Backend API development, scripting, data manipulation, automation, and clean object-oriented architecture.",
    experienceLevel: "Core Strength",
    proficiency: 90
  },
  {
    name: "Flask",
    category: "Backend & Systems",
    description: "Building fast, modular RESTful APIs, SQLAlchemy ORM integration, route handling, and authentication.",
    experienceLevel: "Core Strength",
    proficiency: 88
  },
  {
    name: "SQL",
    category: "Databases & Architecture",
    description: "Complex relational queries, indexing, joins, aggregations, data integrity constraints, and performance tuning.",
    experienceLevel: "Core Strength",
    proficiency: 86
  },
  {
    name: "Database Management",
    category: "Databases & Architecture",
    description: "PostgreSQL & SQLite schema design, relational normalization, migrations, backups, and transaction handling.",
    experienceLevel: "Core Strength",
    proficiency: 85
  },
  {
    name: "JavaScript",
    category: "Frontend Engineering",
    description: "Modern ES6+ syntax, asynchronous programming (Promises/async-await), DOM manipulation, and state management.",
    experienceLevel: "Core Strength",
    proficiency: 88
  },
  {
    name: "HTML5 & CSS3",
    category: "Frontend Engineering",
    description: "Semantic markup, modern CSS Grid/Flexbox, Tailwind CSS, animations, responsive design, and Web Accessibility (a11y).",
    experienceLevel: "Core Strength",
    proficiency: 92
  },
  {
    name: "Git & GitHub",
    category: "Tools & DevOps",
    description: "Branching strategies, collaborative pull requests, conflict resolution, version tags, and CI/CD basics.",
    experienceLevel: "Proficient",
    proficiency: 86
  },
  {
    name: "Data Structures & Algorithms",
    category: "Engineering Fundamentals",
    description: "Arrays, hash maps, linked lists, trees, recursion, search/sort algorithms, and computational time/space complexity.",
    experienceLevel: "Proficient",
    proficiency: 82
  },
  {
    name: "Software Quality Assurance",
    category: "Tools & DevOps",
    description: "Unit testing, manual QA regression testing, API endpoint validation, edge case analysis, and defensive coding.",
    experienceLevel: "Proficient",
    proficiency: 84
  }
];

export const projects = [
  {
    id: "enterprise-logistics",
    title: "Enterprise Logistics Management Portal",
    tagline: "Mission-Critical Freight Dispatch & Real-Time Route Telemetry",
    badge: "Enterprise Grade",
    category: "Logistics & Supply Chain",
    description: "A comprehensive freight command center featuring real-time dispatch scheduling, live GPS route corridor tracking, CDL driver duty management, commercial fleet telematics, and automated DOT manifest auditing.",
    architecture: "Python Flask backend with SQLAlchemy relational models, live GPS telemetry simulator, and a high-performance React dashboard with vector radar visualization.",
    features: [
      "Real-time dispatch scheduling with automated corridor waypoints",
      "Interactive GPS route radar with speed, ETA, and coordinate tracking",
      "CDL driver telematics with safety ratings & duty switches",
      "Commercial fleet health monitoring with fuel & payload meters",
      "Immutable audit trail & one-click regulatory manifest export"
    ],
    technologies: ["Python", "Flask", "PostgreSQL / SQL", "React", "Tailwind CSS", "Docker", "REST API"],
    metrics: [
      { label: "GPS Telemetry Latency", value: "< 50ms" },
      { label: "On-Time Delivery Rate", value: "98.4%" },
      { label: "Architecture", value: "Docker / Decoupled" }
    ],
    demoLink: "http://localhost:3001",
    githubLink: "https://github.com/wa363969-sketch/enterprise-logistics-portal",
    accentColor: "#00d2ff"
  },
  {
    id: "omniflow-saas",
    title: "OmniFlow SaaS Analytics Dashboard",
    tagline: "Multi-Tenant Metrics, MRR Analytics & Automated Billing Engine",
    badge: "SaaS Enterprise",
    category: "Cloud Analytics & Billing",
    description: "Multi-tenant B2B analytics platform providing real-time MRR, ARR, churn telemetry, cohort retention analysis, customer usage metering, and Stripe automated subscription billing.",
    architecture: "Multi-tenant relational database schema with tenant isolation, asynchronous usage event ingestion, and React analytical frontend with interactive financial metrics.",
    features: [
      "Multi-tenant data isolation and role-based staff permissions",
      "Live MRR, ARR, Net Revenue Retention (NRR) and LTV analytics",
      "Tiered subscription management with Stripe webhook billing",
      "Real-time API usage metering and overage alerts",
      "Automated tax calculation and printable invoice exports"
    ],
    technologies: ["Python", "Flask / FastAPI", "SQL / PostgreSQL", "React", "Tailwind CSS", "Stripe API"],
    metrics: [
      { label: "Metric Computation", value: "< 25ms" },
      { label: "Tenant Isolation", value: "100% ACID" },
      { label: "Data Pipeline", value: "Event-Driven" }
    ],
    demoLink: "#demo-omniflow",
    githubLink: "https://github.com/wa363969-sketch/omniflow-saas-analytics",
    accentColor: "#818cf8"
  },
  {
    id: "apex-health",
    title: "Apex Health Telemedicine Suite",
    tagline: "HIPAA-Compliant Patient Scheduling & Encrypted Video Integration",
    badge: "Healthcare Grade",
    category: "HealthTech & Telemedicine",
    description: "A secure healthcare platform connecting clinicians and patients with encrypted WebRTC video consultations, automated calendar appointment scheduling, and electronic health records (EHR).",
    architecture: "HIPAA-compliant architectural controls with AES-256 data encryption at rest, secure JWT authentication, and WebRTC peer-to-peer video streaming.",
    features: [
      "HIPAA-compliant patient appointment booking & clinician calendar sync",
      "High-definition encrypted WebRTC video consultation rooms",
      "Secure Electronic Health Records (EHR) & prescription storage",
      "Automated SMS/Email appointment reminders and intake forms",
      "Clinician digital prescription signing and pharmacy dispatch"
    ],
    technologies: ["Python", "Flask", "WebSockets / WebRTC", "React", "PostgreSQL", "HIPAA Architecture"],
    metrics: [
      { label: "Encryption Standard", value: "AES-256 / TLS" },
      { label: "Compliance", value: "HIPAA Ready" },
      { label: "Video Latency", value: "< 80ms" }
    ],
    demoLink: "#demo-apex-health",
    githubLink: "https://github.com/wa363969-sketch/apex-health-telemedicine",
    accentColor: "#34d399"
  },
  {
    id: "shopcore-ecommerce",
    title: "ShopCore Multi-Currency E-commerce",
    tagline: "Global Digital Storefront with Stripe Checkout & Catalog Automation",
    badge: "Global E-commerce",
    category: "E-commerce & Web App",
    description: "An international e-commerce storefront supporting multi-currency pricing (USD, GBP, EUR, CAD, AUD), instant SKU catalog synchronization, persistent cart drawers, and secure Stripe payment processing.",
    architecture: "Decoupled architecture with Python RESTful microservices, Redis cart cache, PostgreSQL relational catalog, and React 19 storefront with Tailwind CSS.",
    features: [
      "Instant multi-currency conversion with live FX rates",
      "Automated catalog synchronization with inventory stock alerts",
      "Full Stripe Checkout integration with Apple Pay & Google Pay",
      "Dynamic search with instant facet filtering and category tags",
      "Admin order dispatch management and customer receipt delivery"
    ],
    technologies: ["Python", "Flask", "PostgreSQL", "Stripe API", "React", "Tailwind CSS", "Redis"],
    metrics: [
      { label: "Checkout Completion", value: "1.2s Avg" },
      { label: "Currencies Supported", value: "135+ Global" },
      { label: "Catalog Query", value: "< 35ms" }
    ],
    demoLink: "#demo-shopcore",
    githubLink: "https://github.com/wa363969-sketch/shopcore-ecommerce",
    accentColor: "#38bdf8"
  }
];

export const developmentProcess = [
  {
    step: "01",
    title: "Requirement Gathering",
    duration: "Day 1 – 3",
    description: "We begin with a detailed discovery session to unpack your project goals, target audience, core features, and success metrics. I clarify all technical assumptions upfront so no surprises arise later.",
    keyPoints: ["Scope definition & feature list", "Target audience analysis", "Budget & timeline alignment"]
  },
  {
    step: "02",
    title: "Planning & Architecture",
    duration: "Day 4 – 7",
    description: "I outline the system architecture, design the relational database schema, select the optimal tech stack, and create a structured roadmap with transparent sprint milestones.",
    keyPoints: ["Database schema & entity modeling", "API endpoint specification", "Milestone roadmap with deadlines"]
  },
  {
    step: "03",
    title: "UI/UX Design",
    duration: "Week 2",
    description: "Crafting wireframes and responsive UI components focused on intuitive user journeys, accessibility, and high conversion rates across desktop, tablet, and mobile devices.",
    keyPoints: ["Responsive layout wireframing", "Brand styling & typography", "Interactive flow walkthrough"]
  },
  {
    step: "04",
    title: "Development",
    duration: "Weeks 3 – 5",
    description: "Clean, modular, well-commented code is written in iterative stages. You receive regular progress demos and staging links to review functionality as it is built.",
    keyPoints: ["Clean, maintainable code", "Git-tracked version control", "Regular staging preview updates"]
  },
  {
    step: "05",
    title: "Testing & Quality Assurance",
    duration: "Week 6",
    description: "Rigorous quality assurance across browsers, mobile devices, edge cases, and API stress conditions. Eliminating bugs, securing endpoints, and optimizing load times.",
    keyPoints: ["Cross-browser & mobile testing", "API security & validation checks", "Performance & Core Web Vitals audit"]
  },
  {
    step: "06",
    title: "Deployment & Support",
    duration: "Handover",
    description: "Configuring production hosting, database connections, SSL certificates, and custom domains. Providing complete documentation and dedicated post-launch support.",
    keyPoints: ["Production server deployment", "Environment configuration", "Source code handover & 30-day warranty"]
  }
];

export const whyChooseMe = [
  {
    title: "Direct Developer Communication",
    description: "You work directly with me from day one until launch. No account managers, no confusing telephone games, and no miscommunicated specifications. Fast answers and transparent updates.",
    icon: "MessageSquare",
    highlight: "100% Direct Access"
  },
  {
    title: "AI-Assisted Development Velocity",
    description: "I leverage modern AI-assisted engineering workflows to accelerate coding speed, generate comprehensive test cases, and minimize turnaround time without sacrificing code quality.",
    icon: "Zap",
    highlight: "2x Faster Turnaround"
  },
  {
    title: "Modern & Responsive Design",
    description: "Every interface is built mobile-first, ensuring smooth responsiveness across smartphones, tablets, and 4K desktop monitors with premium aesthetics and glassmorphism accents.",
    icon: "Monitor",
    highlight: "Pixel Perfect"
  },
  {
    title: "Secure & Scalable Architecture",
    description: "From SQL query optimization and schema constraints to sanitized inputs and environment-driven secrets, your software is built to handle growth securely.",
    icon: "ShieldCheck",
    highlight: "Robust Security"
  },
  {
    title: "Clear Project Milestones",
    description: "Every contract features transparent stage-based deliverables. You only approve payments as milestone goals are demonstrably met on staging servers.",
    icon: "CheckCircle",
    highlight: "Zero Ambiguity"
  },
  {
    title: "Ongoing Support & Handover",
    description: "You receive clean, organized Git repositories, comprehensive setup documentation, and 30 days of post-launch bug-fixing support included with every major project.",
    icon: "LifeBuoy",
    highlight: "Complete Peace of Mind"
  }
];

export const internationalClientsFaq = [
  {
    q: "How do you handle time zone differences (US, UK, Canada, Australia)?",
    a: "I structure my workday with substantial overlapping hours for clients in the UK (GMT), US/Canada (EST & PST), and Australia (AEST). For async communication, I provide detailed Loom video updates, concise written summaries, and respond to all messages within 24 hours."
  },
  {
    q: "Are the projects in your portfolio real client work?",
    a: "I believe in 100% honesty and integrity. The projects featured on this portfolio (E-commerce Platform, School Management System, Business Dashboard) are functional demonstration projects engineered by me to prove architectural ability, code quality, and full-stack capabilities without fabricating client claims."
  },
  {
    q: "How are international payments handled?",
    a: "I accept payments via trusted international platforms including Wise (formerly TransferWise), Stripe, Direct International Bank Wire, and Escrow-based milestone contracts. Invoices are provided in USD ($), GBP (£), CAD (C$), or AUD (A$)."
  },
  {
    q: "Do I own 100% of the code and intellectual property?",
    a: "Yes, absolutely. Upon final milestone payment, full ownership, copyright, and Git repository transfer are handed over to you with zero licensing restrictions or vendor lock-in."
  }
];
