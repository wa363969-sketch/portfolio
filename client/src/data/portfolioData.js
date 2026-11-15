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
    id: "ecommerce-platform",
    title: "Full-Stack E-commerce Platform",
    tagline: "High-Performance Online Storefront & Order Management",
    badge: "Demonstration Project",
    category: "E-commerce & Web App",
    description: "A complete demonstration e-commerce application featuring an interactive product catalog with instant search, category filtering, persistent cart drawer, responsive checkout flow, and backend order storage.",
    architecture: "Python Flask backend with SQLAlchemy ORM, SQLite/PostgreSQL database, and a responsive React frontend with Tailwind CSS.",
    features: [
      "Dynamic catalog browsing with price and category filters",
      "Interactive cart drawer with real-time subtotal calculation",
      "Multi-step checkout validation for billing & shipping",
      "Mock payment flow with international currency support ($ USD, £ GBP, € EUR)",
      "Admin order inspection and status management"
    ],
    technologies: ["Python", "Flask", "SQL", "JavaScript", "React", "Tailwind CSS", "REST API"],
    metrics: [
      { label: "Catalog Query Time", value: "< 45ms" },
      { label: "Mobile Responsive", value: "100%" },
      { label: "Architecture", value: "Decoupled API" }
    ],
    demoLink: "#demo-ecommerce",
    githubLink: "https://github.com/wa363969-sketch/ecommerce-showcase-demo",
    accentColor: "#00d2ff"
  },
  {
    id: "school-management-system",
    title: "School Management System",
    tagline: "Educational Administration & Student Information System",
    badge: "Demonstration Project",
    category: "Custom Software",
    description: "A centralized software system engineered to streamline academic administration. Allows institutions to manage student records, track attendance records, record academic grades, and schedule timetable courses.",
    architecture: "Relational database schema with primary and foreign keys linking students, courses, grades, and terms. Flask backend with data validation and report generation.",
    features: [
      "Student record management with demographic and contact info",
      "Course enrollment tracking & teacher assignment module",
      "Grade calculation engine with GPA and letter grade breakdown",
      "Daily attendance tracking system with percentage analytics",
      "Exportable academic summary reports and class rosters"
    ],
    technologies: ["Python", "Flask", "SQL", "Database Management", "HTML5", "CSS3", "JavaScript"],
    metrics: [
      { label: "Relational Tables", value: "8 Connected" },
      { label: "Query Optimization", value: "Indexed Foreign Keys" },
      { label: "Data Integrity", value: "ACID Compliant" }
    ],
    demoLink: "#demo-school",
    githubLink: "https://github.com/wa363969-sketch/school-management-demo",
    accentColor: "#38bdf8"
  },
  {
    id: "business-management-dashboard",
    title: "Business Management Dashboard",
    tagline: "Real-Time KPI Analytics & Financial Operations Hub",
    badge: "Demonstration Project",
    category: "Business Systems",
    description: "An executive business intelligence dashboard that consolidates daily business operations. Features interactive charts for monthly revenue trends, inventory stock monitoring with low-inventory warnings, and automated invoice tracking.",
    architecture: "React analytical frontend with interactive data visualization components, consuming aggregated SQL metric endpoints served by a Flask REST API.",
    features: [
      "Visual KPI metrics: Monthly Recurring Revenue (MRR), Cash Flow & Growth",
      "Interactive revenue & expense comparison charts",
      "Real-time inventory inventory status table with restock triggers",
      "Invoice generation with client details, tax calculations, and status (Paid, Pending, Overdue)",
      "Dark-mode optimized data analytics interface"
    ],
    technologies: ["Python", "SQL", "JavaScript", "React", "Tailwind CSS", "Data Visualization", "QA Testing"],
    metrics: [
      { label: "Dashboard Load", value: "< 0.4s" },
      { label: "Theme", value: "Navy & Cyan Dark" },
      { label: "Export Format", value: "JSON / Printable" }
    ],
    demoLink: "#demo-dashboard",
    githubLink: "https://github.com/wa363969-sketch/business-dashboard-demo",
    accentColor: "#818cf8"
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
