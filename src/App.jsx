import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github, Linkedin, Mail, Menu, X, ArrowUpRight, ArrowUp,
  Figma, Layout, Palette, Smartphone, Code2, Globe, Database,
  Terminal, ShieldCheck, CheckCircle2, Trophy, GraduationCap,
  ExternalLink, Layers, Sparkles, Phone, Award, Brain, Cpu, Bot,
  FolderGit2, Zap, Rocket, Star
} from 'lucide-react';

const resumeData = {
  name: 'Priya Pandey',
  nickname: 'Priya Pandey',
  role: 'Full-Stack Developer · AI Engineer · UI/UX Designer',
  tagline: 'Passionate about engineering intelligent AI systems, multimodal RAG pipelines, intuitive UI/UX experiences, and scalable full-stack applications that create real-world impact.',
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
    title: 'AI, Machine Learning & LLMs',
    icon: Brain,
    accent: '#7928CA',
    skills: [
      'Multimodal RAG', 'PyTorch', 'Hugging Face', 'Gemma-2B',
      'Annoy Vector Index', 'Embeddings', 'Scikit-learn', 'NLP & Computer Vision',
      'Prompt Engineering', 'Document Intelligence'
    ],
  },
  {
    title: 'UI/UX & Product Design',
    icon: Figma,
    accent: '#F24E1E',
    skills: [
      'Figma', 'Adobe XD', 'Wireframing', 'Interactive Prototyping',
      'Design Systems', 'User Research', 'Mobile & Web UI', 'Micro-Interactions'
    ],
  },
  {
    title: 'Frontend & UI Engineering',
    icon: Layout,
    accent: '#0E6BA8',
    skills: [
      'React.js', 'Vite', 'Tailwind CSS', 'TypeScript',
      'Responsive Design', 'Component Architecture', 'DOM APIs', 'State Management'
    ],
  },
  {
    title: 'Languages & Core CS',
    icon: Code2,
    accent: '#0070F3',
    skills: [
      'Python', 'JavaScript (ES6+)', 'TypeScript', 'Java',
      'SQL', 'C/C++', 'Data Structures & Algorithms', 'OOP'
    ],
  },
  {
    title: 'Backend, Cloud & Data',
    icon: Database,
    accent: '#10B981',
    skills: [
      'FastAPI', 'Node.js', 'Express.js', 'Django',
      'PostgreSQL', 'MongoDB', 'REST APIs', 'WebSockets', 'SQLAlchemy'
    ],
  },
  {
    title: 'System Design, Testing & A11y',
    icon: ShieldCheck,
    accent: '#F59E0B',
    skills: [
      'Pydantic Validation', 'JWT Authentication', 'Unit & Integration Testing',
      'WCAG Accessibility', 'Git & GitHub', 'CI/CD Pipelines'
    ],
  },
];

const projects = [
  {
    name: 'DocuVision AI',
    subtitle: 'Multimodal Document Intelligence & Local RAG',
    category: 'ai',
    categoryLabel: 'Multimodal AI · Local RAG',
    badgeColor: '#7928CA',
    stack: ['Python', 'Streamlit', 'PyTorch', 'HuggingFace', 'Gemma-2B', 'Annoy', 'PyMuPDF'],
    href: 'https://github.com/PriyaPandey27/DocuVision-AI',
    badge: 'Featured AI Project',
    points: [
      'Engineered an end-to-end multimodal document parsing and vector search engine capable of extracting both text paragraphs and complex visual charts/tables.',
      'Employed local Gemma-2B open-weights model and Annoy vector indexing for private, low-latency contextual questioning without external API leaks.',
      'Designed a streamlined Streamlit conversational interface with full transcript export and real-time citation linking.',
    ],
  },
  {
    name: 'Auditra',
    subtitle: 'AI Finance Controller & Automated Reconciliation',
    category: 'ai',
    categoryLabel: 'AI & Fintech Automation',
    badgeColor: '#0E6BA8',
    stack: ['React', 'TypeScript', 'Python', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'ReportLab'],
    href: 'https://github.com/PriyaPandey27/Auditra',
    badge: 'Fintech Engine',
    points: [
      'Architected a 7-stage automated financial reconciliation pipeline matching ledger records, payment gateway settlements, orders, and returns.',
      'Designed an intelligent human-in-the-loop audit dashboard with dynamic discrepancy detection, tolerance thresholds, and automated PDF reporting.',
      'Built 15 high-throughput REST API endpoints with strict Pydantic schemas and PostgreSQL persistence.',
    ],
  },
  {
    name: 'FirstCall',
    subtitle: 'AI Healthcare Assistant & ML Symptom Predictor',
    category: 'ai',
    categoryLabel: 'HealthTech & ML',
    badgeColor: '#10B981',
    stack: ['Python', 'Django', 'PostgreSQL', 'Scikit-learn', 'Random Forest', 'React'],
    href: 'https://github.com/PriyaPandey27/FIRST_CALL',
    badge: 'Hackathon Winner',
    points: [
      'Trained and evaluated a Random Forest classification model achieving 94.8% diagnostic accuracy across diverse multi-symptom medical datasets.',
      'Connected predictions to a responsive patient portal providing immediate triage guidance and geolocated healthcare support.',
      'Honored and featured at the PU-Code Hackathon for impactful healthcare accessibility.',
    ],
  },
  {
    name: 'NexusBlog',
    subtitle: 'Modern Full-Stack Publishing Platform',
    category: 'fullstack',
    categoryLabel: 'Full-Stack & UI/UX',
    badgeColor: '#F24E1E',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'ImageKit'],
    href: 'https://github.com/PriyaPandey27/NexusBlog',
    badge: 'Production Web App',
    points: [
      'Engineered a responsive desktop and mobile blogging UI using Tailwind CSS with clean reading typography and dark/light layouts.',
      'Connected to a secure Node.js/Express REST backend with JWT authentication, protected admin dashboard, and ImageKit CDN delivery.',
      'Optimized client-side rendering lifecycle and state management for instant markdown preview and fast publishing.',
    ],
  },
];

const achievements = [
  {
    title: 'Training & Placement Coordinator',
    org: 'Parul University',
    duration: 'Aug 2024 – Dec 2025',
    desc: 'Led training coordination and student recruitment drives across departments, liaising between faculty and corporate hiring partners.',
  },
  {
    title: 'Women Who Aspire X Logitech Hackathon',
    org: 'Logitech',
    duration: 'Top 35 Zonal Round',
    desc: 'Ranked in the top 35 in the zonal round of the prestigious national-level hackathon for innovative tech solutions.',
  },
  {
    title: 'LeetCode Problem Solving',
    org: '1790 Rating',
    duration: '750+ Problems Solved',
    desc: 'Active competitive programming practitioner focusing on graph algorithms, dynamic programming, trees, and system design fundamentals.',
  },
  {
    title: 'AI Fundamentals Certification',
    org: 'IBM SkillsBuild',
    duration: 'Verified Credential',
    desc: 'Certified in Artificial Intelligence foundations, neural architectures, deep learning principles, and responsible AI governance.',
  },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState('all');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProjects = projectFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === projectFilter);

  return (
    <div className="portfolio-app">
      {/* Aesthetic ambient lighting blobs */}
      <div className="ambient-blob blob-top-left" aria-hidden="true" />
      <div className="ambient-blob blob-top-right" aria-hidden="true" />
      <div className="ambient-blob blob-center" aria-hidden="true" />

      {/* Header */}
      <header className="site-header">
        <div className="header-inner">
          <a href="#home" className="site-logo">
            &lt; <span>Priya Pandey</span> /&gt;
          </a>

          <nav className={`site-nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#what-i-do" onClick={() => setMobileMenuOpen(false)}>What I Do</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#achievements" onClick={() => setMobileMenuOpen(false)}>Achievements</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)}>Education</a>
            <a href="#contact" className="nav-contact-btn" onClick={() => setMobileMenuOpen(false)}>Contact</a>
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
            <div className="hero-badge-pill">
              <span className="pulsing-dot" />
              <span>Available for AI, Full-Stack & UI/UX Roles</span>
            </div>

            <h1 className="hero-name">{resumeData.name}</h1>
            <p className="hero-nickname">( {resumeData.nickname} )</p>
            <p className="hero-role-title">{resumeData.role}</p>
            <p className="hero-bio">{resumeData.tagline}</p>

            <div className="hero-actions-row">
              <a href="#projects" className="btn-primary-aesthetic">
                Explore Projects <Rocket size={17} />
              </a>
              <a href="#contact" className="btn-secondary-aesthetic">
                Get In Touch <Mail size={17} />
              </a>
            </div>

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
            <div className="illustration-card-glow">
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
                <line x1="490" y1="205" x2="540" y2="205" stroke="#0E6BA8" strokeWidth="4" strokeLinecap="round" />
                <line x1="440" y1="220" x2="520" y2="220" stroke="#001C55" strokeWidth="4" strokeLinecap="round" />
                <line x1="440" y1="235" x2="500" y2="235" stroke="#0E6BA8" strokeWidth="4" strokeLinecap="round" />
                <line x1="440" y1="250" x2="530" y2="250" stroke="#7F8DAA" strokeWidth="4" strokeLinecap="round" />
                <line x1="440" y1="265" x2="470" y2="265" stroke="#001C55" strokeWidth="4" strokeLinecap="round" />
                
                {/* Monitor Stand */}
                <path d="M485 290 L480 320 L510 320 L505 290 Z" fill="#001C55" />
                
                {/* Keyboard & Mouse */}
                <rect x="380" y="322" width="90" height="8" rx="2" fill="#001C55" />
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
        </div>
      </section>

      {/* WHAT I DO SECTION (UI/UX + ARTIFICIAL INTELLIGENCE SHOWCASES) */}
      <section className="content-section" id="what-i-do">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-pill">Specializations</span>
            <h2 className="section-main-title">What I Do</h2>
            <p className="section-subtitle">
              Bridging the gap between cutting-edge Artificial Intelligence models and intuitive, high-converting product interfaces.
            </p>
          </div>

          {/* SHOWCASE ROW 1: UI/UX DESIGN (Matching Screenshot) */}
          <div className="showcase-block-card">
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

                  {/* Desk Left (Designer) */}
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

                  {/* Desk Right */}
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
                  <path d="M308 175 C308 162, 332 162, 332 175 Z" fill="#001C55" />
                  <path d="M308 175 Q295 190 298 220" stroke="#001C55" strokeWidth="8" strokeLinecap="round" />
                  <path d="M305 198 L338 198 L330 258 L308 258 Z" fill="#A86B52" />
                  <path d="M312 205 Q335 218 348 238" stroke="#A86B52" strokeWidth="9" strokeLinecap="round" />
                  <circle cx="350" cy="240" r="5" fill="#F8B195" />
                  <rect x="296" y="258" width="46" height="32" rx="4" fill="#001C55" />
                  <rect x="312" y="290" width="12" height="42" fill="#F8B195" />
                  <rect x="330" y="290" width="12" height="42" fill="#F8B195" />
                  <path d="M292 245 Q285 245 288 310" stroke="#334E68" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </div>

              {/* Right side: Title, tool badges, bullet points */}
              <div className="uiux-showcase-content">
                <span className="showcase-mini-tag">Visual & Product Systems</span>
                <h3 className="uiux-showcase-title">UI/UX Design</h3>

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
          </div>

          {/* SHOWCASE ROW 2: ARTIFICIAL INTELLIGENCE & MACHINE LEARNING */}
          <div className="showcase-block-card ai-showcase-card">
            <div className="uiux-showcase-row reverse-on-desktop">
              {/* Left/Content side: Title, tool badges, AI bullet points */}
              <div className="uiux-showcase-content">
                <span className="showcase-mini-tag ai-tag">Intelligence & Data Science</span>
                <h3 className="uiux-showcase-title">Artificial Intelligence & Deep Learning</h3>

                {/* Tool Badges Row for AI: PyTorch, Hugging Face, Python, FastAPI */}
                <div className="uiux-tools-row">
                  <div className="tool-badge-box pytorch-tool" title="PyTorch">
                    <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
                      <path d="M12 2L14.5 7.5L20 9L15.5 13.5L17 19L12 16L7 19L8.5 13.5L4 9L9.5 7.5L12 2Z" fill="#EE4C2C" />
                    </svg>
                  </div>

                  <div className="tool-badge-box huggingface-tool" title="Hugging Face">
                    <span style={{ fontSize: '28px', lineHeight: 1 }}>🤗</span>
                  </div>

                  <div className="tool-badge-box python-tool" title="Python">
                    <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
                      <path d="M11.9 2C6.9 2 7.2 4.2 7.2 4.2L7.2 6.5H12V7.2H5.1C2.5 7.2 2 9.5 2 11.9C2 14.5 3.5 14.8 5.1 14.8H6.5V13.2C6.5 11.2 8.2 9.6 10.2 9.6H14.8C16.5 9.6 17.8 8.3 17.8 6.6V4.2C17.8 2.4 15.6 2 11.9 2ZM9.5 3.6C10.2 3.6 10.7 4.1 10.7 4.8C10.7 5.4 10.2 6 9.5 6C8.9 6 8.3 5.4 8.3 4.8C8.3 4.1 8.9 3.6 9.5 3.6Z" fill="#387EB8"/>
                      <path d="M12.1 22C17.1 22 16.8 19.8 16.8 19.8V17.5H12V16.8H18.9C21.5 16.8 22 14.5 22 12.1C22 9.5 20.5 9.2 18.9 9.2H17.5V10.8C17.5 12.8 15.8 14.4 13.8 14.4H9.2C7.5 14.4 6.2 15.7 6.2 17.4V19.8C6.2 21.6 8.4 22 12.1 22ZM14.5 20.4C13.8 20.4 13.3 19.9 13.3 19.2C13.3 18.6 13.8 18 14.5 18C15.1 18 15.7 18.6 15.7 19.2C15.7 19.9 15.1 20.4 14.5 20.4Z" fill="#FFE052"/>
                    </svg>
                  </div>

                  <div className="tool-badge-box fast-ai-tool" title="FastAPI & Gemma LLMs">
                    <span style={{ fontWeight: 800, fontSize: '18px', color: '#009688', letterSpacing: '-0.05em' }}>⚡API</span>
                  </div>
                </div>

                {/* AI Lightning Bullet points */}
                <div className="uiux-lightning-list">
                  <div className="uiux-lightning-item">
                    <span className="lightning-symbol ai-lightning">⚡</span>
                    <p>Developing Multimodal RAG architectures & local Gemma-2B pipelines with Annoy vector search for private document intelligence</p>
                  </div>
                  <div className="uiux-lightning-item">
                    <span className="lightning-symbol ai-lightning">⚡</span>
                    <p>Training high-accuracy predictive ML models (Random Forest, Scikit-learn, PyTorch) achieving 94.8%+ clinical accuracy</p>
                  </div>
                  <div className="uiux-lightning-item">
                    <span className="lightning-symbol ai-lightning">⚡</span>
                    <p>Constructing 7-stage automated financial reconciliation engines and human-in-the-loop review dashboards with FastAPI</p>
                  </div>
                </div>
              </div>

              {/* Right side: AI Vector Illustration */}
              <div className="uiux-showcase-illustration">
                <svg
                  viewBox="0 0 520 380"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="uiux-vector-art"
                >
                  {/* Background Soft Purple/Blue Blob */}
                  <path
                    d="M60 160 C50 60, 180 20, 280 30 C400 40, 490 90, 470 210 C450 330, 340 360, 220 350 C100 340, 70 260, 60 160 Z"
                    fill="#EDE9FE"
                    opacity="0.9"
                  />

                  {/* Neural Network Nodes & Connections Backdrop */}
                  <line x1="100" y1="90" x2="180" y2="130" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="3 3" opacity="0.6"/>
                  <line x1="180" y1="130" x2="260" y2="80" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="3 3" opacity="0.6"/>
                  <line x1="180" y1="130" x2="240" y2="180" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="3 3" opacity="0.6"/>
                  <line x1="260" y1="80" x2="360" y2="110" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="3 3" opacity="0.6"/>
                  <line x1="240" y1="180" x2="360" y2="110" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="3 3" opacity="0.6"/>

                  {/* Floating Glowing Nodes */}
                  <circle cx="100" cy="90" r="10" fill="#7C3AED" />
                  <circle cx="180" cy="130" r="12" fill="#3B82F6" />
                  <circle cx="260" cy="80" r="9" fill="#10B981" />
                  <circle cx="240" cy="180" r="11" fill="#EC4899" />
                  <circle cx="360" cy="110" r="14" fill="#6366F1" />

                  {/* Data Science Dashboard Card floating */}
                  <rect x="70" y="210" width="160" height="110" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                  <rect x="85" y="225" width="60" height="8" rx="4" fill="#7C3AED" />
                  {/* Bar Chart inside Card */}
                  <rect x="85" y="275" width="14" height="30" rx="3" fill="#3B82F6" />
                  <rect x="105" y="260" width="14" height="45" rx="3" fill="#8B5CF6" />
                  <rect x="125" y="245" width="14" height="60" rx="3" fill="#10B981" />
                  <rect x="145" y="270" width="14" height="35" rx="3" fill="#EC4899" />
                  <rect x="165" y="250" width="14" height="55" rx="3" fill="#F59E0B" />

                  {/* Brain / AI Core Icon Card floating right */}
                  <rect x="290" y="190" width="170" height="120" rx="12" fill="#FFFFFF" stroke="#DDD6FE" strokeWidth="2" />
                  <rect x="310" y="210" width="80" height="8" rx="4" fill="#8B5CF6" />
                  {/* Neural connections graphic */}
                  <path d="M310 240 Q350 220 390 250 T440 230" stroke="#6366F1" strokeWidth="3" fill="none" />
                  <circle cx="310" cy="240" r="6" fill="#8B5CF6" />
                  <circle cx="350" cy="225" r="5" fill="#3B82F6" />
                  <circle cx="390" cy="250" r="6" fill="#10B981" />
                  <circle cx="440" cy="230" r="5" fill="#EC4899" />
                  <rect x="310" y="275" width="130" height="18" rx="6" fill="#F3F4F6" />
                  <rect x="315" y="280" width="85" height="8" rx="4" fill="#10B981" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS MATRIX */}
      <section className="content-section light-section" id="skills">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-pill">Competencies</span>
            <h2 className="section-main-title">Skills & Tooling</h2>
            <p className="section-subtitle">
              A comprehensive technical stack spanning Machine Learning, UI/UX Systems, and Enterprise Full-Stack Engineering.
            </p>
          </div>

          <div className="skill-groups-container">
            {skillCategories.map((cat, i) => (
              <div key={i} className="skill-matrix-card">
                <div className="cat-header">
                  <div className="cat-icon-wrap" style={{ background: `${cat.accent}15`, color: cat.accent }}>
                    <cat.icon size={22} />
                  </div>
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
      </section>

      {/* SELECTED PROJECTS */}
      <section className="content-section" id="projects">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-pill">Portfolio Showcase</span>
            <h2 className="section-main-title">Featured Projects</h2>
            <p className="section-subtitle">
              Interactive multimodal AI applications, automated controllers, and modern web platforms.
            </p>

            {/* Filter buttons */}
            <div className="project-filter-row">
              <button
                className={`filter-btn ${projectFilter === 'all' ? 'filter-active' : ''}`}
                onClick={() => setProjectFilter('all')}
              >
                All Projects ({projects.length})
              </button>
              <button
                className={`filter-btn ${projectFilter === 'ai' ? 'filter-active' : ''}`}
                onClick={() => setProjectFilter('ai')}
              >
                <Brain size={15} /> AI & Machine Learning ({projects.filter(p => p.category === 'ai').length})
              </button>
              <button
                className={`filter-btn ${projectFilter === 'fullstack' ? 'filter-active' : ''}`}
                onClick={() => setProjectFilter('fullstack')}
              >
                <Layout size={15} /> UI/UX & Web ({projects.filter(p => p.category === 'fullstack').length})
              </button>
            </div>
          </div>

          <div className="project-cards-container">
            {filteredProjects.map((proj, idx) => (
              <div key={idx} className="portfolio-project-card">
                <div className="proj-card-top">
                  <div>
                    <div className="proj-tags-row">
                      <span className="proj-tag" style={{ background: `${proj.badgeColor}15`, color: proj.badgeColor }}>
                        {proj.badge}
                      </span>
                      <span className="proj-category-pill">{proj.categoryLabel}</span>
                    </div>
                    <h3 className="proj-name">{proj.name}</h3>
                    <p className="proj-sub">{proj.subtitle}</p>
                  </div>
                  <a
                    href={proj.href}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-ext-link"
                    title={`View ${proj.name} on GitHub`}
                    aria-label={`GitHub repo for ${proj.name}`}
                  >
                    <ArrowUpRight size={22} />
                  </a>
                </div>

                <ul className="proj-bullets-list">
                  {proj.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <span className="bullet-indicator" style={{ color: proj.badgeColor }}>▹</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="proj-card-bottom">
                  <div className="tech-tags-list">
                    {proj.stack.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <a
                    href={proj.href}
                    target="_blank"
                    rel="noreferrer"
                    className="view-code-btn"
                  >
                    <Github size={16} /> Code Repository
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS & RESPONSIBILITY */}
      <section className="content-section light-section" id="achievements">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-pill">Recognitions</span>
            <h2 className="section-main-title">Achievements & Leadership</h2>
            <p className="section-subtitle">
              Demonstrated leadership in university placement drives, national hackathons, and competitive programming.
            </p>
          </div>

          <div className="achievements-grid">
            {achievements.map((ach, aIdx) => (
              <div key={aIdx} className="achievement-box">
                <div className="ach-icon-circle">
                  <Trophy size={22} />
                </div>
                <div className="ach-content">
                  <div className="ach-badge">{ach.duration}</div>
                  <h3 className="ach-title">{ach.title}</h3>
                  <div className="ach-org">{ach.org}</div>
                  <p className="ach-desc">{ach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="content-section" id="education">
        <div className="section-container">
          <div className="section-header-center">
            <span className="section-pill">Academic Journey</span>
            <h2 className="section-main-title">Education & Foundation</h2>
          </div>

          <div className="edu-card-aesthetic">
            <div className="edu-icon-badge">
              <GraduationCap size={32} />
            </div>
            <div className="edu-details">
              <div className="edu-meta-row">
                <span className="edu-badge">{resumeData.duration}</span>
                <span className="edu-score-pill">CGPA: {resumeData.cgpa}</span>
              </div>
              <h3 className="edu-degree">{resumeData.degree}</h3>
              <h4 className="edu-uni">{resumeData.university}</h4>
              <p className="edu-sub">{resumeData.school}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="content-section contact-wrap" id="contact">
        <div className="section-container">
          <div className="contact-card-box">
            <span className="section-pill" style={{ background: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}>Get In Touch</span>
            <h2 className="contact-headline">Let's Build Something Impactful</h2>
            <p className="contact-subtext">
              Open to AI Engineering, Full-Stack, and UI/UX opportunities. Feel free to reach out directly:
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
                  <b>Priya Pandey</b>
                </div>
              </a>

              <a href={resumeData.github} target="_blank" rel="noreferrer" className="contact-link-card">
                <Github size={22} />
                <div>
                  <small>GitHub</small>
                  <b>PriyaPandey27</b>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <span>&lt; Priya Pandey /&gt;</span>
            <p>© {new Date().getFullYear()} Priya Pandey · Crafted with precision, intelligence & design</p>
          </div>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
