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

const uiUxSpecialization = [
  {
    title: 'Product & UI Design',
    icon: Layout,
    desc: 'Deep interest in user journeys, visual hierarchy, typography, wireframing, and creating responsive design systems.',
  },
  {
    title: 'Prototyping & Tools',
    icon: Figma,
    desc: 'Hands-on prototyping with Figma and Adobe XD, component libraries, design tokens, and interactive mockups.',
  },
  {
    title: 'Design-to-Code Implementation',
    icon: Palette,
    desc: 'Translating Figma prototypes into pixel-perfect React & Tailwind CSS components with micro-interactions.',
  },
  {
    title: 'Accessibility & UX Testing',
    icon: ShieldCheck,
    desc: 'WCAG compliance, keyboard navigation, semantic HTML, and user-centric feedback loops across devices.',
  },
];

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
              {/* Hair */}
              <path d="M230 145 C230 110, 275 110, 275 145 C275 160, 265 175, 230 170 Z" fill="#001C55" />
              {/* Face */}
              <circle cx="250" cy="155" r="18" fill="#FFC9BA" />
              {/* Jacket / Torso */}
              <path d="M225 185 L280 185 L290 320 L215 320 Z" fill="#001C55" />
              {/* Inner Shirt */}
              <polygon points="245,185 260,185 265,270 240,270" fill="#0E6BA8" />
              {/* Arms */}
              <path d="M225 190 Q210 240 220 280" stroke="#001C55" strokeWidth="18" strokeLinecap="round" />
              <path d="M280 190 Q295 240 285 280" stroke="#001C55" strokeWidth="18" strokeLinecap="round" />
              <circle cx="220" cy="285" r="8" fill="#FFC9BA" />
              <circle cx="285" cy="285" r="8" fill="#FFC9BA" />
              {/* Legs */}
              <rect x="230" y="320" width="18" height="120" rx="6" fill="#001C55" />
              <rect x="255" y="320" width="18" height="120" rx="6" fill="#001C55" />
              {/* Shoes */}
              <ellipse cx="236" cy="445" rx="14" ry="7" fill="#00072D" />
              <ellipse cx="266" cy="445" rx="14" ry="7" fill="#00072D" />
            </svg>
          </div>
        </div>
      </section>

      {/* UI/UX & Product Design Specialization */}
      <section className="content-section light-section" id="uiux">
        <div className="section-container">
          <div className="section-title-wrap">
            <h2 className="section-main-title">UI/UX & Product Design</h2>
            <p className="section-subtitle">
              Crafting accessible, human-centric interfaces from wireframes and prototypes to production code.
            </p>
          </div>

          <div className="uiux-grid">
            {uiUxSpecialization.map((item, idx) => (
              <div key={idx} className="uiux-card">
                <div className="uiux-icon-box">
                  <item.icon size={26} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
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
