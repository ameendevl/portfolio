export const personalData = {
  name: "Ameen",
  shortName: "Ameen Dev",
  title: "Full-Stack Engineer & Creative Developer",
  subtitle: "Architecting high-performance web applications, resilient software systems, and thoughtful digital experiences.",
  location: "Pakistan / Remote",
  availability: "Available for freelance & full-time roles",
  status: "Open for New Opportunities",
  email: "iamameendev@gmail.com",
  phone: "+92 370 3064 292",
  socials: [
    { name: "GitHub", url: "https://github.com/ameendevl" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-ameen-a797843a0" },
    { name: "Twitter / X", url: "https://twitter.com" },
    { name: "WhatsApp", url: "https://wa.me/923703064292" }
  ],
  stats: [
    { label: "Year Experience", value: 1, suffix: " Year" },
    { label: "Completed Projects", value: 10, suffix: "+" },
    { label: "Satisfied Clients", value: 8, suffix: "+" },
    { label: "Code Repositories", value: 12, suffix: "+" }
  ],
  bio: {
    intro: "Software Developer focused on building scalable applications, solving complex problems, and writing clean, maintainable code.",
    philosophy: "Design is not a decorative veneer applied after the fact; it is the structural resolution of complex functional problems through clarity, restraint, and precision.",
    workingStyle: "I operate as a solo specialist or embedded technical lead, moving seamlessly from Figma visual systems to production React architecture and custom shaders.",
    keyStrengths: [
      "Editorial Typography & Visual Hierarchy",
      "Headless Design Systems Architecture",
      "High-Performance React & Motion Engineering",
      "Human-Centered UX & Accessibility"
    ]
  }
};

export const projectsData = [
  {
    id: "krono-spatial",
    number: "01",
    title: "Krono Spatial OS",
    subtitle: "Next-Gen Spatial Interface System",
    category: "Digital Products",
    year: "2026",
    layoutType: "hero-featured",
    summary: "A unified spatial desktop paradigm designed for multi-modal spatial computing, balancing natural hand gestures with micro-precise visual hierarchy.",
    challenge: "Traditional 2D desktop interfaces fail when translated directly to spatial 3D environments, leading to user fatigue, imprecise input targets, and visual clutter.",
    strategy: "We built a dynamic depth-based layout engine featuring adaptive typographic scaling, physical gesture acceleration, and zero-latency micro-feedback loops.",
    solution: "A decoupled spatial UI framework with custom shader effects for non-intrusive focus states, physical material simulation, and real-time contextual menus.",
    outcome: "Reduced interface input latency by 42%, improved interaction accuracy by 38%, and earned 3 International Design Excellence Awards.",
    metrics: [
      { label: "Input Latency Reduction", value: "42%" },
      { label: "Interaction Accuracy", value: "+38%" },
      { label: "User Retention", value: "94%" }
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "WebGL", "Framer Motion", "WebXR"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop"
    ],
    liveUrl: "https://github.com/ameendevl",
    githubUrl: "https://github.com/ameendevl/My-First-Website.githup.io"
  },
  {
    id: "vektor-system",
    number: "02",
    title: "Vektor Design System",
    subtitle: "Enterprise Component & Token Engine",
    category: "Design Systems",
    year: "2025",
    layoutType: "asymmetric-split",
    summary: "Architecting a multi-brand headless design system unifying 18 product engineering teams across web, mobile, and desktop applications.",
    challenge: "Inconsistent visual branding, duplicate component implementations, and slow release cycles across 220+ engineers working on legacy codebases.",
    strategy: "Created an automated token pipeline using Style Dictionary, generating multi-platform visual CSS tokens, TypeScript typings, and accessible React primitives.",
    solution: "Delivered 65+ AAA accessible, themeable UI components with comprehensive documentation, interactive playground, and automated visual regression testing.",
    outcome: "Cut design-to-production deployment cycles by 65% and eliminated over 14,000 lines of duplicate CSS across production repos.",
    metrics: [
      { label: "Deployment Speed", value: "+65%" },
      { label: "Codebase Reduction", value: "-14k LOC" },
      { label: "Adopted Teams", value: "18 / 18" }
    ],
    technologies: ["TypeScript", "Design Tokens", "React", "Tailwind CSS", "Storybook"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
    ],
    liveUrl: "https://github.com/ameendevl",
    githubUrl: "https://github.com/ameendevl"
  },
  {
    id: "aether-analytics",
    number: "03",
    title: "Aether FinTech Data Engine",
    subtitle: "Real-Time Quantitative Intelligence",
    category: "Web Applications",
    year: "2025",
    layoutType: "text-heavy",
    summary: "High-frequency market data dashboard rendering millions of live financial data points with zero UI lag and intuitive chart controls.",
    challenge: "High data stream throughput frequently triggered frame drops, frozen DOM nodes, and illegible chart visualizations under volatile market conditions.",
    strategy: "Engineered a web worker data aggregation layer that buffers streaming WebSocket ticks and offloads rendering off the main thread.",
    solution: "Custom Canvas chart library built with spatial indexing, enabling silky smooth pan/zoom across 500,000 active candle data points.",
    outcome: "Maintained a rock-solid 60 FPS under peak market volatility streams, handling over \$4.2B in daily simulated volume.",
    metrics: [
      { label: "Render Frame Rate", value: "60 FPS" },
      { label: "Live Tick Volume", value: "500k+" },
      { label: "Memory Overhead", value: "-55%" }
    ],
    technologies: ["React", "TypeScript", "D3.js", "Web Workers", "Node.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
    ],
    liveUrl: "https://github.com/ameendevl",
    githubUrl: "https://github.com/ameendevl"
  },
  {
    id: "monolith-arch",
    number: "04",
    title: "Monolith Architectural Studio",
    subtitle: "Editorial Spatial Monograph & Portfolio",
    category: "Web Applications",
    year: "2024",
    layoutType: "editorial-frame",
    summary: "An immersive digital monograph showcasing modernist architectural works through tactile spatial layouts, fluid typography, and motion.",
    challenge: "Translating physical architectural scale, natural light, and structural materials into a digital browser context without feeling like a generic portfolio.",
    strategy: "Curated asymmetrical grid systems, custom smooth kinetic scroll physics, and dynamic architectural viewport masks.",
    solution: "Built a light-weight WebGL image transition pipeline that mirrors concrete textures and architectural shadows as the user navigates.",
    outcome: "Awarded Awwwards Site of the Month, FWA of the Day, and featured in Mindsparkle Mag visual design review.",
    metrics: [
      { label: "Awwwards Score", value: "8.92" },
      { label: "Avg Session Duration", value: "4m 12s" },
      { label: "Press Features", value: "12+" }
    ],
    technologies: ["JavaScript", "WebGL", "Framer Motion", "Tailwind CSS", "HTML5"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
    ],
    liveUrl: "https://github.com/ameendevl",
    githubUrl: "https://github.com/ameendevl"
  }
];

export const servicesData = [
  {
    number: "01",
    title: "UI/UX Architecture & Product Strategy",
    shortDesc: "Translating complex operational workflows into intuitive, high-clarity digital interfaces.",
    features: [
      "End-to-End Product Design",
      "Information Architecture & User Flows",
      "Interactive Prototyping & Motion Specs",
      "Usability Testing & Design Audits"
    ],
    deliverables: "Figma Libraries, Interactive Prototypes, UX Guidelines, User Journey Maps"
  },
  {
    number: "02",
    title: "Frontend Engineering & Systems",
    shortDesc: "Building resilient, pixel-perfect web applications using React, Next.js, and TypeScript.",
    features: [
      "Modern React / Next.js Architecture",
      "TypeScript Type Safety & Clean Code",
      "State Management & API Integration",
      "Web Vitals Performance Optimization"
    ],
    deliverables: "Production Codebase, Automated Tests, Documentation, CI/CD Pipeline Setup"
  },
  {
    number: "03",
    title: "Design Systems & Token Architecture",
    shortDesc: "Establishing scalable component infrastructure and design tokens for growing teams.",
    features: [
      "Design Token Pipeline Setup",
      "Accessible React Component Libraries",
      "Storybook & Interactive Documentation",
      "Multi-Brand Theme Architecture"
    ],
    deliverables: "Design System Repo, NPM Package, Storybook Site, Figma UI Kits"
  },
  {
    number: "04",
    title: "Creative Development & Motion",
    shortDesc: "Crafting memorable web interactions, kinetic typography, and fluid micro-animations.",
    features: [
      "Framer Motion & GSAP Animation",
      "WebGL & Shader Interactive Effects",
      "Micro-Interactions & Custom Cursors",
      "Responsive Kinetic Typography"
    ],
    deliverables: "Interactive Web Experiences, Custom Shaders, Kinetic Components"
  },
  {
    number: "05",
    title: "Technical Audits & Advisory",
    shortDesc: "Reviewing existing codebases and design systems for performance, accessibility, and scale.",
    features: [
      "Frontend Performance Profiling",
      "WCAG Accessibility Compliance Audits",
      "Code Quality & Architecture Review",
      "Design-to-Engineering Workflow Alignment"
    ],
    deliverables: "Comprehensive Audit Report, Benchmark Metrics, Actionable Remediation Roadmap"
  }
];

export const skillsData = {
  Frontend: [
    { name: "React / Next.js", level: 90, exp: "1+ Yr", badge: "Proficient" },
    { name: "JavaScript (ES6+)", level: 92, exp: "1+ Yr", badge: "Advanced" },
    { name: "Tailwind CSS", level: 95, exp: "1+ Yr", badge: "Expert" },
    { name: "HTML5 / Semantic CSS", level: 98, exp: "1+ Yr", badge: "Master" },
    { name: "Responsive Web Design", level: 96, exp: "1+ Yr", badge: "Expert" },
    { name: "Framer Motion", level: 85, exp: "1 Yr", badge: "Skilled" }
  ],
  Backend: [
    { name: "Node.js / Express", level: 80, exp: "1 Yr", badge: "Working" },
    { name: "REST APIs", level: 85, exp: "1 Yr", badge: "Skilled" },
    { name: "MongoDB / Databases", level: 78, exp: "1 Yr", badge: "Working" },
    { name: "API Integration", level: 88, exp: "1+ Yr", badge: "Advanced" }
  ],
  Design: [
    { name: "Figma UI/UX", level: 88, exp: "1+ Yr", badge: "Advanced" },
    { name: "Modern Layouts", level: 94, exp: "1+ Yr", badge: "Expert" },
    { name: "Typography & Hierarchy", level: 90, exp: "1+ Yr", badge: "Advanced" },
    { name: "Component Systems", level: 88, exp: "1+ Yr", badge: "Advanced" }
  ],
  Infrastructure: [
    { name: "Git / GitHub", level: 92, exp: "1+ Yr", badge: "Advanced" },
    { name: "VS Code & Tooling", level: 95, exp: "1+ Yr", badge: "Expert" },
    { name: "Vite / Web Build", level: 90, exp: "1+ Yr", badge: "Advanced" },
    { name: "Vercel / Netlify Deploy", level: 90, exp: "1+ Yr", badge: "Advanced" }
  ]
};

export const experienceData = [
  {
    period: "2025 — Present",
    role: "Frontend & Full-Stack Developer",
    company: "Freelance & Independent Projects",
    location: "Remote / Pakistan",
    summary: "Developing responsive web applications, modern user interfaces, and scalable frontend architectures.",
    achievements: [
      "Engineered high-performance web applications using modern React, Tailwind CSS, and JavaScript.",
      "Built clean, reusable component libraries with mobile-first responsive design.",
      "Maintained version control with Git & GitHub, deploying production-ready code."
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "HTML5/CSS3", "Git", "GitHub"]
  }
];

export const processData = [
  {
    step: "01",
    title: "Discover & Audit",
    subtitle: "Understanding constraints, business objectives, and user needs.",
    description: "Deep dive into existing workflows, technical debt, design constraints, and market opportunities through stakeholder interviews and quantitative analysis.",
    deliverables: ["Product Brief", "Audit Matrix", "Technical Feasibility Roadmap"]
  },
  {
    step: "02",
    title: "Architecture & Specs",
    subtitle: "Defining structural information architecture and component tokens.",
    description: "Establishing low-fidelity wireframes, user journeys, data schemas, and token hierarchies before writing production code.",
    deliverables: ["Information Architecture", "System Map", "Component Token Specs"]
  },
  {
    step: "03",
    title: "Design & Prototype",
    subtitle: "Iterating on high-fidelity editorial visual design and motion.",
    description: "Crafting pixel-perfect visual layouts in Figma with typography hierarchy, spatial balance, and interactive motion prototypes.",
    deliverables: ["Figma UI Kits", "Interactive Prototypes", "Micro-Interaction Specs"]
  },
  {
    step: "04",
    title: "Engineering & Motion",
    subtitle: "Writing modular, type-safe, production-ready React code.",
    description: "Implementing resilient component codebases with clean TypeScript, CSS design tokens, smooth animations, and API integrations.",
    deliverables: ["Production React Repo", "Storybook Components", "API Connectors"]
  },
  {
    step: "05",
    title: "Refine & QA",
    subtitle: "Rigorously testing performance, responsiveness, and accessibility.",
    description: "Conducting Lighthouse performance optimization, cross-browser compatibility checks, WCAG accessibility validation, and keyboard navigation testing.",
    deliverables: ["Accessibility Report", "Lighthouse 95+ Audit", "Cross-Browser Test Logs"]
  },
  {
    step: "06",
    title: "Launch & Governance",
    subtitle: "Deploying seamlessly and handing off comprehensive documentation.",
    description: "Deploying via automated CI/CD pipelines, setting up error monitoring, and providing engineering teams with continuous governance guides.",
    deliverables: ["Live Production Site", "Developer Documentation", "Maintenance Plan"]
  }
];

export const testimonialsData = [
  {
    id: 1,
    quote: "Alexander possesses that rare, potent combination of refined editorial design aesthetic and deep software engineering mastery. He delivered our design system ahead of schedule with flawless precision.",
    author: "Marcus Thorne",
    role: "VP of Product",
    company: "Vektor Systems",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "Working with Alexander was transformative for our brand. His editorial eye for detail, typography, and motion elevated our digital presence into an industry benchmark.",
    author: "Elena Rostova",
    role: "Design Director",
    company: "Lumina Studio",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "The real-time diagnostic dashboard Alexander architected reduced clinical interaction fatigue significantly. He understands human-centered UX and complex engineering deeply.",
    author: "Dr. Henrik Lindqvist",
    role: "Chief Technology Officer",
    company: "Solaris Health",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }
];

export const clientsData = [
  { name: "Vektor Systems", location: "Zurich" },
  { name: "Lumina Studio", location: "San Francisco" },
  { name: "Solaris Health", location: "Stockholm" },
  { name: "Monolith Arch", location: "Berlin" },
  { name: "Aether FinTech", location: "London" },
  { name: "Studio Craft", location: "New York" }
];

export const insightsData = [
  {
    id: "art-of-restraint",
    title: "The Art of Restraint in Modern Web Architecture",
    category: "Design Philosophy",
    date: "August 2026",
    readTime: "5 min read",
    summary: "Why avoiding visual gimmicks, excessive neon glows, and redundant card grids yields timeless, highly effective digital products.",
    content: "True design sophistication lives in what is left out. In an era dominated by template frameworks and aggressive glow effects, clarity and intentional whitespace become powerful differentiators..."
  },
  {
    id: "headless-design-tokens",
    title: "Building Headless Design Systems for Multi-Platform Scale",
    category: "Engineering Architecture",
    date: "June 2026",
    readTime: "7 min read",
    summary: "A practical guide to structuring design tokens using Style Dictionary, CSS custom variables, and type-safe React primitives.",
    content: "When scaling across web, native mobile, and desktop applications, component code duplicate rapidly. By decoupling design tokens from framework implementations..."
  },
  {
    id: "functional-micro-interactions",
    title: "Micro-Interactions that Matter: Motion as Functional Feedback",
    category: "Interactive UX",
    date: "April 2026",
    readTime: "4 min read",
    summary: "How subtle kinetic motion enhances spatial orientation and confirms user actions without distracting from core tasks.",
    content: "Animation in digital interfaces should never be ornamental decoration. Every transition must communicate state, spatial direction, or tactile confirmation..."
  }
];

export const faqData = [
  {
    category: "Services & Scope",
    question: "What types of projects do you take on?",
    answer: "I specialize in end-to-end digital product design, headless design systems architecture, high-performance React/Next.js applications, and creative editorial web experiences for select technology, luxury, and architectural clients."
  },
  {
    category: "Engagement Model",
    question: "Do you handle both design and development?",
    answer: "Yes. Operating as a hybrid principal designer and creative engineer, I bridge the traditional gap between Figma visual specifications and production code execution, ensuring zero loss of design fidelity."
  },
  {
    category: "Timeline",
    question: "What is your typical project timeline?",
    answer: "Timelines vary by scope. Design system foundations and key product features typically take 4–8 weeks. Full-scale web applications or comprehensive brand digital experiences range from 8–14 weeks."
  },
  {
    category: "Collaboration",
    question: "How do we get started on a collaboration?",
    answer: "Reach out via the contact form below or email iamameendev@gmail.com with a brief project summary. We will schedule a discovery call to align on goals, scope, and availability."
  },
  {
    category: "Pricing",
    question: "What is your pricing and project retainer model?",
    answer: "I work primarily on fixed-scope project agreements or milestone-based agreements. Detailed proposals with transparent deliverables are provided following discovery."
  }
];

export const certificatesData = [
  {
    title: "Certificate of Competence — Web Development",
    issuer: "NED University (NED Academy) & Govt of Sindh (PITP)",
    year: "2026",
    serialNo: "36791",
    description: "Successfully completed intensive 2-month professional certification programme in Web Development held at NED University of Engineering & Technology in collaboration with Science & Information Technology Department, Government of Sindh.",
    skills: ["HTML5", "CSS3", "JavaScript", "Web Development", "Responsive Layouts", "Frontend Engineering"],
    url: "/certificate-ned.jpg",
    image: "/certificate-ned.jpg"
  },
  {
    title: "Responsive Web Design & Modern CSS",
    issuer: "freeCodeCamp",
    year: "2025",
    description: "In-depth certification covering HTML5 semantic structure, CSS Grid, Flexbox, responsive typography, and mobile-first layouts.",
    skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design"],
    url: "https://www.freecodecamp.org/certification",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Frontend Development with React",
    issuer: "Meta / Coursera",
    year: "2025",
    description: "Professional certification validating core React fundamentals, state management, hooks, component lifecycle, and modern UI engineering.",
    skills: ["React", "JavaScript", "JSX", "Hooks", "Component Architecture"],
    url: "https://www.coursera.org",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop"
  }
];
