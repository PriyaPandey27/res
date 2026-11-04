import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github, Linkedin, Mail, Menu, X, ArrowUpRight, ArrowUp,
  Figma, Layout, Palette, Smartphone, Code2, Globe, Database,
  Terminal, ShieldCheck, CheckCircle2, Trophy, GraduationCap,
  ExternalLink, Layers, Sparkles, Phone, Award
} from 'lucide-react';

const resumeData = {
  name: 'Priya Pandey',
  nickname: 'Priya Pandey',
  tagline: 'A passionate developer and UI/UX product designer who thrives on building user-facing web apps, intuitive interfaces, and scalable systems to create impact.',
  github: 'https://github.com/PriyaPandey27',
  linkedin: 'https://www.linkedin.com/in/priya-pandey',
  email: 'mversepriya@gmail.com',
  phone: '8109389421',
  university: 'Parul University',
  degree: 'Bachelor of Technology (B.Tech.) in Computer Science and Engineering',
  cgpa: '8.5 / 10',
  duration: 'Aug 2023 – May 2027 (Expected)',
  school: 'Jawaharlal Nehru School Habibganj, Bhopal (Class XII: 87%)',
};

const skillCategories = [
  {
    title: 'UI/UX & Product Design',
    icon: Figma,
    skills: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'Product Design', 'Design Systems', 'User Research', 'Design Handoff'],
  },
  {
    title: 'Frontend & UI Engineering',
    icon: Layout,
    skills: ['React', 'Vite', 'Tailwind CSS', 'Responsive Design', 'Component-Based UI', 'DOM Manipulation', 'Browser Rendering', 'JWT Authentication'],
  },
  {
    title: 'Languages',
    icon: Code2,
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'SQL'],
  },
  {
    title: 'State, Networking & Web',
    icon: Globe,
    skills: ['WebSockets', 'Optimistic UI', 'Service Workers', 'IndexedDB', 'HTTP Caching', 'Offline Support', 'REST API Integration'],
  },
  {
    title: 'Testing, Debugging & A11y',
    icon: ShieldCheck,
    skills: ['Unit Testing', 'Component Testing', 'End-to-End Testing', 'Semantic HTML', 'Keyboard Navigation', 'WCAG Accessibility'],
  },
  {
    title: 'Backend, Mobile & Data',
    icon: Database,
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Django', 'MongoDB', 'PostgreSQL', 'SQLite', 'Flutter', 'Android'],
  },
];

const projects = [
  {
    name: 'NexusBlog',
    subtitle: 'Full-Stack Blogging & Publishing Platform',
    category: 'Full-Stack & UI/UX',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'ImageKit'],
    href: 'https://github.com/PriyaPandey27/NexusBlog',
    badge: 'Production Web App',
    points: [
      'Engineered a responsive desktop and mobile blogging UI using Tailwind CSS with clean reading typography and dark/light layouts.',
      'Connected to a secure Node.js/Express REST backend with JWT authentication, protected admin dashboard, and ImageKit CDN delivery.',
      'Optimized client-side rendering lifecycle and state management for instant markdown preview and fast publishing.',
    ],
  },
  {
    name: 'Auditra',
    subtitle: 'AI Finance Controller & Automated Reconciliation',
    category: 'AI & Systems',
    stack: ['React', 'TypeScript', 'Python', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'ReportLab'],
    href: 'https://github.com/PriyaPandey27/Auditra',
    badge: 'Fintech Engine',
    points: [
      'Designed a 7-stage pipeline that ingests, normalizes, matches, and reconciles orders, payments, settlements, and refunds.',
      'Constructed a human-in-the-loop review dashboard with confidence scoring, tolerance validation, and automated PDF/CSV reports.',
      'Built 15 clean REST endpoints with Pydantic validation and strict type safety.',
    ],
  },
  {
    name: 'DocuVision AI',
    subtitle: 'Multimodal Document Intelligence & Local RAG',
    category: 'Multimodal AI',
    stack: ['Python', 'Streamlit', 'PyTorch', 'HuggingFace', 'Gemma-2B', 'Annoy', 'PyMuPDF'],
    href: 'https://github.com/PriyaPandey27/DocuVision-AI',
    badge: 'Multimodal RAG',
    points: [
      'Extracts both textual content and embedded figures/tables from complex PDFs into a unified vector space.',
      'Uses Annoy vector search and local Gemma-2B models to answer queries with cross-referencing sub-text and images.',
      'Delivers an intuitive sidebar chat interface with history persistence and transcript export.',
    ],
  },
  {
    name: 'FirstCall',
    subtitle: 'AI-Powered Healthcare Assistant',
    category: 'HealthTech & ML',
    stack: ['Python', 'Django', 'PostgreSQL', 'Scikit-learn', 'React'],
    href: 'https://github.com/PriyaPandey27/FIRST_CALL',
    badge: 'PU-Code Hackathon',
    points: [
      'Constructed a Django application connecting ML symptom prediction models (94.8% accuracy Random Forest) to medical logs.',
      'Designed an accessible user interface for patients to assess potential health risks and find nearby pharmacies.',
      'Ranked and showcased during the PU-Code Hackathon for healthcare accessibility.',
    ],
  },
];

const achievements = [
  {
    title: 'Training & Placement Coordinator',
    org: 'Parul University',
    duration: 'Aug 2024 – Dec 2025',
    desc: 'Coordinated recruitment processes across students, faculty, and external companies under deadline pressure.',
  },
  {
    title: 'Women Who Aspire X Logitech Hackathon',
    org: 'Logitech',
    duration: 'Top 35 Zonal Round',
    desc: 'Ranked in the top 35 in the zonal round of the prestigious national-level hackathon.',
  },
  {
    title: 'LeetCode Problem Solving',
    org: '1790 Rating',
    duration: '750+ Problems Solved',
    desc: 'Consistent competitive programming across graphs, dynamic programming, trees, and combinatorics.',
  },
  {
    title: 'AI Fundamentals Certification',
    org: 'IBM SkillsBuild',
    duration: 'Verified Credential',
    desc: 'Certified in Artificial Intelligence foundations, neural architectures, and responsible AI.',
  },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-app">
      {/* Header */}
      <header className="site-header">
        <div className="header-inner">
          <a href="#home" className="site-logo">
            &lt; <span>Priya Pandey</span> /&gt;
          </a>

          <nav className={`site-nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#uiux" onClick={() => setMobileMenuOpen(false)}>UI/UX & Skills</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)}>Education</a>
            <a href="#achievements" onClick={() => setMobileMenuOpen(false)}>Achievements</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </nav>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-container">
          <div className="hero-text-col">
            <h1 className="hero-name">{resumeData.name}</h1>
            <p className="hero-nickname">( {resumeData.nickname} )</p>
            <p className="hero-bio">{resumeData.tagline}</p>

            <div className="hero-socials">
              <a
                href={resumeData.github}
                target="_blank"
                rel="noreferrer"
                className="social-btn github-btn"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-btn linkedin-btn"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${resumeData.email}`}
                className="social-btn gmail-btn"
                title={`Send email to ${resumeData.email}`}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-illustration-col">
            <svg
              className="developer-illustration"
              viewBox="0 0 600 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Desk */}
              <rect x="250" y="320" width="310" height="15" rx="3" fill="#D3E2EC" />
              {/* Desk Legs / Drawers */}
              <rect x="500" y="335" width="45" height="135" fill="#E2EDF5" stroke="#B8D0E0" strokeWidth="2" />
              <rect x="340" y="335" width="85" height="135" fill="#E2EDF5" stroke="#B8D0E0" strokeWidth="2" />
              {/* Drawer Lines */}
              <line x1="350" y1="365" x2="415" y2="365" stroke="#001C55" strokeWidth="3" strokeLinecap="round" />
              <line x1="350" y1="400" x2="415" y2="400" stroke="#001C55" strokeWidth="3" strokeLinecap="round" />
              <line x1="350" y1="435" x2="415" y2="435" stroke="#001C55" strokeWidth="3" strokeLinecap="round" />
              
              {/* Computer Monitor */}
              <rect x="420" y="180" width="150" height="110" rx="6" fill="#001C55" />
              <rect x="428" y="188" width="134" height="94" rx="3" fill="#FFFFFF" />
              {/* Code lines on monitor */}
              <line x1="440" y1="205" x2="480" y2="205" stroke="#0E6BA8" strokeWidth="4" strokeLinecap="round" />
              <line x1="440" y1="220" x2="520" y2="220" stroke="#001C55" strokeWidth="4" strokeLinecap="round" />
              <line x1="440" y1="235" x2="505" y2="235" stroke="#0E6BA8" strokeWidth="4" strokeLinecap="round" />
              <line x1="440" y1="250" x2="475" y2="250" stroke="#7F8DAA" strokeWidth="4" strokeLinecap="round" />
              <line x1="440" y1="265" x2="530" y2="265" stroke="#001C55" strokeWidth="4" strokeLinecap="round" />
              {/* Monitor Stand */}
              <path d="M485 290 L480 320 L510 320 L505 290 Z" fill="#001C55" />
              {/* Keyboard & Mouse */}
              <rect x="425" y="325" width="70" height="7" rx="2" fill="#001C55" />
              <ellipse cx="510" cy="328" rx="6" ry="4" fill="#001C55" />

              {/* Character sitting on desk */}
              <path d="M230 145 C230 110, 275 110, 275 145 C275 160, 265 175, 230 170 Z" fill="#001C55" />
              <circle cx="250" cy="155" r="18" fill="#FFC9BA" />
              <path d="M225 185 L280 185 L290 320 L215 320 Z" fill="#001C55" />
              <polygon points="245,185 260,185 265,270 240,270" fill="#0E6BA8" />
              <path d="M225 190 Q210 240 220 280" stroke="#001C55" strokeWidth="18" strokeLinecap="round" />
              <path d="M280 190 Q295 240 285 280" stroke="#001C55" strokeWidth="18" strokeLinecap="round" />
              <circle cx="220" cy="285" r="8" fill="#FFC9BA" />
              <circle cx="285" cy="285" r="8" fill="#FFC9BA" />
              <rect x="230" y="320" width="18" height="120" rx="6" fill="#001C55" />
              <rect x="255" y="320" width="18" height="120" rx="6" fill="#001C55" />
              <ellipse cx="236" cy="445" rx="14" ry="7" fill="#00072D" />
              <ellipse cx="266" cy="445" rx="14" ry="7" fill="#00072D" />
            </svg>
          </div>
        </div>
      </section>

      {/* UI/UX Design Section matching user screenshot */}
      <section className="content-section light-section" id="uiux">
        <div className="section-container">
          <div className="uiux-showcase-row">
            {/* Left side: Illustration */}
            <div className="uiux-showcase-illustration">
              <svg
                viewBox="0 0 520 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="uiux-vector-art"
              >
                {/* Background soft blob */}
                <path
                  d="M40 180 C30 80, 160 30, 260 40 C370 50, 490 80, 480 200 C470 320, 360 350, 240 350 C120 350, 50 280, 40 180 Z"
                  fill="#D6EEF8"
                  opacity="0.85"
                />
                {/* Window pane lines in backdrop */}
                <line x1="120" y1="50" x2="120" y2="280" stroke="#C3E4F3" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="240" y1="50" x2="240" y2="280" stroke="#C3E4F3" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="360" y1="50" x2="360" y2="280" stroke="#C3E4F3" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="60" y1="140" x2="440" y2="140" stroke="#C3E4F3" strokeWidth="2" strokeDasharray="4 4" />

                {/* Floating Diamond Icon (Sketch/Design) */}
                <g transform="translate(110, 60)">
                  <polygon points="35,0 70,25 35,70 0,25" fill="#FDB300" />
                  <polygon points="35,0 70,25 35,25" fill="#FFE175" opacity="0.8" />
                  <polygon points="0,25 35,0 35,25" fill="#FFA500" opacity="0.6" />
                  <polygon points="0,25 70,25 35,70" fill="#E69500" opacity="0.9" />
                </g>

                {/* Floating XD Icon */}
                <g transform="translate(380, 60)">
                  <rect width="64" height="64" rx="8" fill="#470137" stroke="#FF61F6" strokeWidth="3" />
                  <text x="14" y="44" fontFamily="'Manrope', sans-serif" fontWeight="800" fontSize="28" fill="#FF61F6">Xd</text>
                </g>

                {/* Desk Left (Male Designer) */}
                <rect x="60" y="235" width="145" height="12" rx="3" fill="#F8C8C4" />
                <line x1="75" y1="247" x2="75" y2="330" stroke="#E29D96" strokeWidth="4" />
                <line x1="185" y1="247" x2="185" y2="330" stroke="#E29D96" strokeWidth="4" />
                {/* Laptop on left desk */}
                <polygon points="78,235 125,235 120,205 88,205" fill="#001C55" />
                <rect x="75" y="233" width="55" height="4" rx="2" fill="#9FB3C8" />
                <polygon points="82,233 118,233 114,208 92,208" fill="#0099FF" />
                {/* Person Left */}
                <circle cx="160" cy="180" r="16" fill="#F8B195" />
                <path d="M148 174 C148 160, 172 160, 172 174 Z" fill="#001C55" />
                <path d="M142 200 L180 200 L175 270 L145 270 Z" fill="#001C55" />
                <path d="M145 205 Q125 220 115 228" stroke="#001C55" strokeWidth="10" strokeLinecap="round" />
                <circle cx="112" cy="230" r="6" fill="#F8B195" />
                <path d="M175 240 Q160 260 145 300" stroke="#001C55" strokeWidth="12" strokeLinecap="round" />
                {/* Chair Left */}
                <path d="M185 240 Q200 240 195 285" stroke="#334E68" strokeWidth="10" strokeLinecap="round" />

                {/* Desk Right (Female Designer) */}
                <rect x="270" y="240" width="180" height="15" rx="3" fill="#FFFFFF" stroke="#E29D96" strokeWidth="2" />
                <rect x="340" y="248" width="105" height="24" rx="2" fill="#F8C8C4" />
                <line x1="365" y1="260" x2="425" y2="260" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                <line x1="285" y1="255" x2="285" y2="330" stroke="#E29D96" strokeWidth="4" />
                <line x1="435" y1="255" x2="435" y2="330" stroke="#E29D96" strokeWidth="4" />
                {/* Desktop Monitor on right desk */}
                <rect x="360" y="175" width="70" height="52" rx="4" fill="#001C55" />
                <rect x="364" y="179" width="62" height="44" rx="2" fill="#0077B5" />
                <path d="M390 227 L385 240 L405 240 L400 227 Z" fill="#001C55" />
                {/* Person Right */}
                <circle cx="320" cy="180" r="15" fill="#F8B195" />
                {/* Ponytail Hair */}
                <path d="M308 175 C308 162, 332 162, 332 175 Z" fill="#001C55" />
                <path d="M308 175 Q295 190 298 220" stroke="#001C55" strokeWidth="8" strokeLinecap="round" />
                {/* Blouse */}
                <path d="M305 198 L338 198 L330 258 L308 258 Z" fill="#A86B52" />
                {/* Arm typing */}
                <path d="M312 205 Q335 218 348 238" stroke="#A86B52" strokeWidth="9" strokeLinecap="round" />
                <circle cx="350" cy="240" r="5" fill="#F8B195" />
                {/* Skirt */}
                <rect x="296" y="258" width="46" height="32" rx="4" fill="#001C55" />
                {/* Legs */}
                <rect x="312" y="290" width="12" height="42" fill="#F8B195" />
                <rect x="330" y="290" width="12" height="42" fill="#F8B195" />
                {/* Chair Right */}
                <path d="M292 245 Q285 245 288 310" stroke="#334E68" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </div>

            {/* Right side: Title, tool badges, bullet points */}
            <div className="uiux-showcase-content">
              <h2 className="uiux-showcase-title">UI/UX Design</h2>

              {/* Tool Badges Row matching image: XD, Figma, AI, Inkscape */}
              <div className="uiux-tools-row">
                <div className="tool-badge-box xd-tool" title="Adobe XD">
                  <span>Xd</span>
                </div>

                <div className="tool-badge-box figma-tool" title="Figma">
                  <svg viewBox="0 0 38 57" width="24" height="36" fill="none">
                    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                  </svg>
                </div>

                <div className="tool-badge-box ai-tool" title="Adobe Illustrator">
                  <span>Ai</span>
                </div>

                <div className="tool-badge-box inkscape-tool" title="Inkscape / Vector Design">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="#111827">
                    <path d="M14.54 1.57a3.02 3.02 0 0 0-2.14.88L2.45 12.4a3.03 3.03 0 0 0-.88 2.14c0 .8.31 1.57.88 2.14l4.5 4.5a3.03 3.03 0 0 0 2.14.88c.8 0 1.57-.31 2.14-.88l9.95-9.95a3.03 3.03 0 0 0 .88-2.14 3.03 3.03 0 0 0-.88-2.14L16.68 2.45a3.02 3.02 0 0 0-2.14-.88zM6.6 15.6l2.1-2.1 1.8 1.8-2.1 2.1-1.8-1.8zm11.7-8.3l-5.3 5.3-1.8-1.8 5.3-5.3 1.8 1.8z"/>
                  </svg>
                </div>
              </div>

              {/* Lightning Bullet points matching image */}
              <div className="uiux-lightning-list">
                <div className="uiux-lightning-item">
                  <span className="lightning-symbol">⚡</span>
                  <p>Designing highly attractive user interface for mobile and web applications</p>
                </div>
                <div className="uiux-lightning-item">
                  <span className="lightning-symbol">⚡</span>
                  <p>Customizing logo designs, design tokens, and building visual design systems from scratch</p>
                </div>
                <div className="uiux-lightning-item">
                  <span className="lightning-symbol">⚡</span>
                  <p>Creating the flow of application functionalities, interactive Figma prototypes, and wireframes to optimize user experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Skill Matrix */}
          <div className="skills-matrix">
            <h3 className="subheading-text">Technical & Design Tooling</h3>
            <div className="skill-groups-container">
              {skillCategories.map((cat, i) => (
                <div key={i} className="skill-matrix-card">
                  <div className="cat-header">
                    <cat.icon size={20} className="cat-icon" />
                    <h4>{cat.title}</h4>
                  </div>
                  <div className="pill-wrap">
                    {cat.skills.map((s) => (
                      <span key={s} className="skill-badge">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="content-section" id="projects">
        <div className="section-container">
          <div className="section-title-wrap">
            <h2 className="section-main-title">Selected Projects</h2>
            <p className="section-subtitle">
              Interactive web applications, AI controllers, and multimodal architectures built with rigorous design and engineering.
            </p>
          </div>

          <div className="project-cards-container">
            {projects.map((proj, idx) => (
              <div key={idx} className="portfolio-project-card">
                <div className="proj-card-top">
                  <div>
                    <span className="proj-tag">{proj.badge}</span>
                    <h3 className="proj-name">{proj.name}</h3>
                    <p className="proj-sub">{proj.subtitle}</p>
                  </div>
                  <a
                    href={proj.href}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-ext-link"
                    title={`View ${proj.name} on GitHub`}
                  >
                    <ArrowUpRight size={22} />
                  </a>
                </div>

                <ul className="proj-points">
                  {proj.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <CheckCircle2 size={15} className="bullet-check" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="proj-tech-tags">
                  {proj.stack.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="view-more-box">
            <a
              href={`${resumeData.github}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
              className="main-cta-btn"
            >
              <Github size={18} /> View All Repositories on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="content-section light-section" id="education">
        <div className="section-container">
          <div className="section-title-wrap">
            <h2 className="section-main-title">Education & Foundation</h2>
            <p className="section-subtitle">
              Academics, coursework, and core computer science foundations.
            </p>
          </div>

          <div className="education-card">
            <div className="edu-icon-wrap">
              <GraduationCap size={32} />
            </div>
            <div className="edu-details">
              <h3>{resumeData.university}</h3>
              <p className="edu-degree">{resumeData.degree}</p>
              <div className="edu-meta-badges">
                <span><strong>CGPA:</strong> {resumeData.cgpa}</span>
                <span><strong>Timeline:</strong> {resumeData.duration}</span>
              </div>
              <p className="edu-desc">
                <strong>Relevant Coursework:</strong> Data Structures and Algorithms, Object-Oriented Programming, Computer Networks, Database Management Systems (SQL/NoSQL), Operating Systems, Discrete Mathematics.
              </p>
              <p className="edu-school">
                <strong>Senior Secondary:</strong> {resumeData.school}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Positions of Responsibility */}
      <section className="content-section" id="achievements">
        <div className="section-container">
          <div className="section-title-wrap">
            <h2 className="section-main-title">Achievements & Responsibility</h2>
            <p className="section-subtitle">
              Leadership, competitive programming, and technical credentials.
            </p>
          </div>

          <div className="achievements-grid">
            {achievements.map((ach, aIdx) => (
              <div key={aIdx} className="achievement-box">
                <div className="ach-top">
                  <Trophy size={20} className="trophy-icon" />
                  <span className="ach-org">{ach.org}</span>
                </div>
                <h4>{ach.title}</h4>
                <span className="ach-duration">{ach.duration}</span>
                <p>{ach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="content-section contact-wrap" id="contact">
        <div className="section-container">
          <div className="contact-card-box">
            <h2>Let's build something impactful together.</h2>
            <p>
              Open to Frontend, UI/UX, Full-Stack, and AI engineering opportunities. Reach out directly:
            </p>

            <div className="contact-links-grid">
              <a href={`mailto:${resumeData.email}`} className="contact-link-card">
                <Mail size={22} />
                <div>
                  <small>Email</small>
                  <b>{resumeData.email}</b>
                </div>
              </a>

              <a href={`tel:${resumeData.phone}`} className="contact-link-card">
                <Phone size={22} />
                <div>
                  <small>Phone</small>
                  <b>+91 {resumeData.phone}</b>
                </div>
              </a>

              <a href={resumeData.linkedin} target="_blank" rel="noreferrer" className="contact-link-card">
                <Linkedin size={22} />
                <div>
                  <small>LinkedIn</small>
                  <b>linkedin.com/in/priya-pandey</b>
                </div>
              </a>

              <a href={resumeData.github} target="_blank" rel="noreferrer" className="contact-link-card">
                <Github size={22} />
                <div>
                  <small>GitHub</small>
                  <b>github.com/PriyaPandey27</b>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <span>&lt; Priya Pandey /&gt;</span>
          <p>© {new Date().getFullYear()} Priya Pandey · Crafted with precision</p>
        </div>
      </footer>

      {/* Floating scroll to top */}
      <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

export default App;
