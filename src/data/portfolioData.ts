import profileImage from '../assets/profileImage';
import projectAiLeadUi from '../assets/images/project_ai_lead_ui_1787069025615.jpg';
import projectFirmwareUi from '../assets/images/project_firmware_ui_1787069039612.jpg';
import archWorkspaceWarm from '../assets/images/arch_workspace_warm_1787069059927.jpg';

export interface ProjectCaseStudy {
  id: string;
  num: string;
  title: string;
  category: string[];
  subtitle: string;
  description: string;
  image: string;
  problem: string;
  approach: string;
  architecturePoints: string[];
  keyFeatures: string[];
  techStack: string[];
  results: { label: string; value: string }[];
  githubUrl: string;
  liveUrl?: string;
  accentColor: string;
}

export interface SkillNode {
  name: string;
  level: string;
  description: string;
  category: string;
  x?: number;
  y?: number;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  category: string;
  color: string;
  skills: string[];
}

export const PORTFOLIO_PROFILE = {
  name: "SATHYA SAI JS",
  firstName: "SATHYA",
  middleName: "SAI",
  lastName: "JS",
  brandShort: "SJS",
  title: "Cyber Security Engineer",
  primaryIdentity: "CYBER SECURITY ENGINEER",
  secondaryIdentities: [
    "SOFTWARE DEVELOPER",
    "DATA ANALYST",
    "AI / ML ENTHUSIAST"
  ],
  roles: [
    "CYBER SECURITY ENGINEER",
    "SOFTWARE DEVELOPER",
    "DATA ANALYST"
  ],
  tagline: "The Architect of Secure Digital Systems",
  quote: "I build secure systems, intelligent applications and data-driven digital experiences.",
  bio: "I work at the intersection of cybersecurity, software development and data analytics, transforming technical problems into practical digital solutions.",
  location: "Chennai, Tamil Nadu, India",
  email: "sathyasaijs12@gmail.com",
  phone: "+91 90804 67890",
  whatsapp: "https://wa.me/919080467890",
  linkedin: "https://www.linkedin.com/in/sathya-sai-js",
  instagram: "https://instagram.com/sathya_sai_js",
  github: "https://github.com/satboy-12",
  resumeUrl: "#contact",
  availabilityStatus: "AVAILABLE FOR OPPORTUNITIES",

  // Key metric statistics
  stats: [
    { value: "3+", label: "YEARS EXPERIENCE" },
    { value: "20+", label: "PROJECTS COMPLETED" },
    { value: "10+", label: "TECHNOLOGIES MASTERED" }
  ],

  // 4 Core pillars
  pillars: [
    {
      id: "secure",
      title: "SECURE",
      description: "I build systems that protect and defend.",
      icon: "shield"
    },
    {
      id: "develop",
      title: "DEVELOP",
      description: "I code, build and bring ideas to life.",
      icon: "code"
    },
    {
      id: "analyze",
      title: "ANALYZE",
      description: "I analyze data and extract valuable insights.",
      icon: "chart"
    },
    {
      id: "innovate",
      title: "INNOVATE",
      description: "I explore new technologies and create impact.",
      icon: "spark"
    }
  ],

  // Journey Timeline
  timeline: [
    {
      period: "2020 — 2023",
      degree: "Diploma in ECE",
      institution: "CPCL Polytechnic College",
      highlight: "Electronics & Communication Engineering"
    },
    {
      period: "2024 — 2027",
      degree: "B.E. Cyber Security",
      institution: "Sri Ram Engineering College",
      highlight: "Undergraduate Degree"
    },
    {
      period: "2025 — PRESENT",
      degree: "Technical Associate",
      institution: "Braiil Academy",
      highlight: "Academic Support & Technology Systems"
    }
  ],

  // Images
  images: {
    heroPortrait: profileImage,
    aboutPortrait: profileImage,
    footerPortrait: profileImage,
    archWorkspace: archWorkspaceWarm,
    aiLeadUi: projectAiLeadUi,
    firmwareUi: projectFirmwareUi
  },

  socials: {
    linkedin: "https://www.linkedin.com/in/sathya-sai-js",
    github: "https://github.com/satboy-12",
    instagram: "https://instagram.com/sathya_sai_js",
    whatsapp: "https://wa.me/919080467890",
    email: "mailto:sathyasaijs12@gmail.com"
  }
};

// =========================================================================
// SKILLS CONSTELLATION DATA (5 Categories)
// =========================================================================
export const SKILL_CATEGORIES = [
  {
    id: "cyber-security",
    label: "CYBER SECURITY",
    skills: [
      { name: "Network Security", level: "Advanced", description: "Traffic analysis, firewall rules, and IDS/IPS tuning" },
      { name: "Security Fundamentals", level: "Expert", description: "CIA triad, Zero-Trust defense, risk mitigation" },
      { name: "Ethical Hacking", level: "Advanced", description: "Penetration testing and vulnerability assessment" },
      { name: "Cyber Forensics", level: "Proficient", description: "Digital evidence extraction and log triage" },
      { name: "Web Application Security", level: "Advanced", description: "OWASP Top 10 mitigation and secure code review" },
      { name: "Malware Analysis", level: "Proficient", description: "Static and dynamic binary analysis" },
      { name: "Cloud Security", level: "Proficient", description: "IAM policies, VPC segmentation, least privilege" },
      { name: "Blockchain Security", level: "Advanced", description: "Smart contract audit and cryptographic hashing" },
      { name: "Security Automation", level: "Advanced", description: "Python-driven automated vulnerability scans" }
    ]
  },
  {
    id: "programming",
    label: "PROGRAMMING",
    skills: [
      { name: "Python", level: "Expert", description: "Automation, data analytics, and backend API engineering" },
      { name: "C", level: "Proficient", description: "Low-level system programming and memory management" },
      { name: "C++", level: "Proficient", description: "Object-oriented structures and performance algorithms" },
      { name: "Java", level: "Proficient", description: "Enterprise architecture and software design patterns" },
      { name: "JavaScript", level: "Advanced", description: "Modern ES6+, asynchronous async/await, Node.js" },
      { name: "SQL", level: "Advanced", description: "Relational modeling, complex queries, and indexing" }
    ]
  },
  {
    id: "data",
    label: "DATA",
    skills: [
      { name: "Power BI", level: "Expert", description: "Interactive executive dashboards and DAX modeling" },
      { name: "Data Analysis", level: "Expert", description: "Exploratory data analysis, cohort analysis, KPIs" },
      { name: "Data Visualization", level: "Advanced", description: "Plotly, Seaborn, Matplotlib, interactive graphs" },
      { name: "Pandas", level: "Expert", description: "Data wrangling, cleaning, deduplication pipelines" },
      { name: "Excel", level: "Advanced", description: "Power Query, pivot models, dynamic spreadsheets" },
      { name: "SQL Data Warehousing", level: "Advanced", description: "Schema design and ETL data pipelines" }
    ]
  },
  {
    id: "development",
    label: "DEVELOPMENT",
    skills: [
      { name: "React", level: "Advanced", description: "Component-driven modern SPAs and custom hooks" },
      { name: "Next.js", level: "Advanced", description: "Server-side rendering and static site generation" },
      { name: "Tailwind CSS", level: "Expert", description: "Utility-first design and responsive design systems" },
      { name: "HTML5 / CSS3", level: "Expert", description: "Semantic web structure and micro-interactions" },
      { name: "Streamlit", level: "Advanced", description: "Rapid AI and data application prototyping" },
      { name: "Firebase", level: "Proficient", description: "Firestore, Authentication, and serverless hosting" }
    ]
  },
  {
    id: "tools",
    label: "TOOLS",
    skills: [
      { name: "Git", level: "Expert", description: "Version control, branch management, collaboration" },
      { name: "GitHub", level: "Expert", description: "CI/CD actions, open source repository management" },
      { name: "VS Code", level: "Expert", description: "Custom development environment and extensions" },
      { name: "Wireshark", level: "Advanced", description: "Packet capture, protocol decoding, security inspection" },
      { name: "Kali Linux", level: "Advanced", description: "Penetration testing toolchain and terminal mastery" },
      { name: "Power BI Desktop", level: "Expert", description: "Report authoring, data gateways, semantic models" }
    ]
  }
];

// =========================================================================
// SELECTED PROJECTS (Main Showcase with Full Case Studies)
// =========================================================================
export const SELECTED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: "ai-lead-classification",
    num: "01",
    title: "AI LEAD CLASSIFICATION PLATFORM",
    subtitle: "Intelligent Lead Validation & Multi-Tier Analytics Engine",
    category: ["AI", "DATA ANALYTICS", "PYTHON", "STREAMLIT"],
    description: "An intelligent platform to validate, classify and analyze large lead datasets with advanced predictive analytics.",
    image: projectAiLeadUi,
    problem: "Enterprise sales operations face immense friction due to unverified leads, duplicated records, and invalid contact data that bottleneck sales pipelines and lower conversion rates.",
    approach: "Built an automated end-to-end data ingestion pipeline using Python, Pandas, and machine learning classifiers to score, validate, deduplicate, and segment thousands of prospects within seconds.",
    architecturePoints: [
      "Data Ingestion: High-throughput ingestion of raw CSV/Excel spreadsheets with regex parsing",
      "Validation Engine: Automated phone format verification, disposable email detection, and anomaly screening",
      "Classification Model: Multi-variable scoring algorithm categorizing leads into High, Medium, and Low conversion tiers",
      "Analytics Dashboard: Dynamic Streamlit and Plotly visual reporting with district-wise geographical segmentation"
    ],
    keyFeatures: [
      "Real-time duplicate detection across multi-thousand row datasets",
      "Automated phone and email sanity validation",
      "District-wise conversion density heatmaps",
      "Instant Excel / CSV executive reporting export"
    ],
    techStack: ["Python", "Pandas", "Regex", "Streamlit", "Plotly", "SQL", "Excel", "AI"],
    results: [
      { label: "Processing Speed", value: "< 1.5s per 10k rows" },
      { label: "Accuracy", value: "96.4%" },
      { label: "Data Cleanliness Lift", value: "+45%" }
    ],
    githubUrl: "https://github.com/satboy-12/ai-lead-classifier",
    accentColor: "#6E2634"
  },
  {
    id: "blockchain-secure-firmware",
    num: "02",
    title: "BLOCKCHAIN-ENHANCED SECURE FIRMWARE UPDATE SYSTEM",
    subtitle: "Zero-Trust Over-The-Air Verification Architecture for Automotive ECUs",
    category: ["CYBER SECURITY", "BLOCKCHAIN", "AUTOMOTIVE SECURITY"],
    description: "A security-focused architecture exploring blockchain-assisted cryptographic verification for automotive OTA firmware updates.",
    image: projectFirmwareUi,
    problem: "Modern connected vehicles rely on Over-The-Air firmware updates that are vulnerable to Man-in-the-Middle (MITM) injection, rogue binary tampering, and version rollback attacks.",
    approach: "Designed a decentralized cryptographic verification framework where firmware hashes and digital signatures are anchored on an immutable blockchain ledger before ECU flashing.",
    architecturePoints: [
      "Cryptographic Hashing: SHA-256 binary validation and Merkle tree root verification",
      "Zero-Trust Handshake: ECDSA asymmetric digital signature authentication",
      "Immutable Ledger: Smart contract audit trail preventing version roll-back attacks",
      "ECU Boot Validation: Secure bootloader verification simulation"
    ],
    keyFeatures: [
      "End-to-end cryptographic integrity verification",
      "Decentralized audit trail for compliance auditing",
      "Anti-rollback firmware version enforcement",
      "Simulated CAN bus secure distribution protocol"
    ],
    techStack: ["Python", "Blockchain", "Cryptography", "SHA-256", "ECDSA", "Smart Contracts"],
    results: [
      { label: "Tamper Detection", value: "100% Guaranteed" },
      { label: "Integrity Verification", value: "SHA-256 Hardware Grade" },
      { label: "Auditability", value: "Immutable" }
    ],
    githubUrl: "https://github.com/satboy-12/blockchain-secure-firmware",
    accentColor: "#D6B47A"
  },
  {
    id: "data-analytics-powerbi",
    num: "03",
    title: "DATA ANALYTICS & POWER BI SUITE",
    subtitle: "Enterprise Business Intelligence & Telemetry Visualization",
    category: ["DATA", "BUSINESS INTELLIGENCE", "VISUALIZATION", "SQL"],
    description: "Sophisticated analytics dashboards transforming raw data lakes into actionable executive telemetry and business intelligence.",
    image: projectAiLeadUi,
    problem: "Executives and engineering leads struggle to glean fast insights from disparate databases without automated ETL pipelines and interactive visual telemetry.",
    approach: "Architected end-to-end Power BI reporting models powered by complex DAX measures, automated SQL data warehouse extraction, and granular row-level security.",
    architecturePoints: [
      "Automated ETL pipelines extracting from relational SQL databases and REST APIs",
      "Star schema data modeling for lightning-fast aggregation queries",
      "Advanced DAX metrics for cohort retention, churn forecasting, and revenue velocity",
      "Role-Based Access Control (RLS) ensuring strict multi-tenant data governance"
    ],
    keyFeatures: [
      "Interactive drill-down charts and trend forecasting",
      "Real-time KPI status scorecards",
      "Custom themes adhering to executive branding guidelines",
      "Scheduled automated dataset refreshes"
    ],
    techStack: ["Power BI", "DAX", "SQL", "Data Modeling", "ETL", "Excel"],
    results: [
      { label: "Reporting Efficiency", value: "10x Faster" },
      { label: "Active KPIs Tracked", value: "50+ Metrics" },
      { label: "Query Optimization", value: "< 200ms" }
    ],
    githubUrl: "https://github.com/satboy-12/data-analytics-powerbi",
    accentColor: "#A83B4B"
  },
  {
    id: "cyber-security-archive",
    num: "04",
    title: "CYBER SECURITY RESEARCH ARCHIVE",
    subtitle: "Defensive Matrix, Penetration Testing & Threat Hunting Toolset",
    category: ["CYBER SECURITY", "ETHICAL HACKING", "FORENSICS", "NETWORK SECURITY"],
    description: "A comprehensive repository of cyber defense utilities, network inspection protocols, and forensic triage workflows.",
    image: projectFirmwareUi,
    problem: "Rapidly evolving threat vectors demand modular, automated security triage scripts for continuous vulnerability scanning and incident response.",
    approach: "Built modular Python and Bash automation tools for network packet inspection, web security auditing, and forensic artifact extraction.",
    architecturePoints: [
      "Network packet sniffer and anomaly detector using Scapy and Wireshark filters",
      "Automated web vulnerability scanner for common OWASP misconfigurations",
      "Memory and filesystem forensic triage collector for rapid incident response",
      "Zero-trust credential posture checker with automated alerting"
    ],
    keyFeatures: [
      "Custom intrusion detection rule parser",
      "Rapid forensic artifact collection script",
      "Automated port and service fingerprinting engine",
      "Detailed markdown incident triage documentation"
    ],
    techStack: ["Kali Linux", "Wireshark", "Python", "Bash", "OWASP", "Scapy"],
    results: [
      { label: "Scan Automation", value: "Fully Headless" },
      { label: "Coverage", value: "OWASP Top 10" },
      { label: "Community", value: "Open Source" }
    ],
    githubUrl: "https://github.com/satboy-12/cyber-security-lab",
    accentColor: "#6E2634"
  }
];

// =========================================================================
// CERTIFICATIONS DATA
// =========================================================================
export const CERTIFICATIONS_LIST: CertificateItem[] = [
  {
    id: "power-bi",
    title: "Power BI Data Analytics",
    issuer: "Verified Credential",
    year: "2024",
    credentialId: "PBI-DA-2024-884",
    category: "Data Analytics",
    color: "#D6B47A",
    skills: ["Power BI", "DAX", "Data Modeling", "Business Intelligence"]
  },
  {
    id: "data-analytics",
    title: "Data Analytics Certification",
    issuer: "Verified Credential",
    year: "2024",
    credentialId: "DA-SPEC-2024-119",
    category: "Analytics & Statistics",
    color: "#A83B4B",
    skills: ["Pandas", "Data Cleaning", "Visualization", "SQL"]
  },
  {
    id: "python-programming",
    title: "Python Programming",
    issuer: "Verified Credential",
    year: "2024",
    credentialId: "PY-CORE-2024-402",
    category: "Software Development",
    color: "#D6B47A",
    skills: ["Python 3", "Data Structures", "Algorithms", "Automation"]
  },
  {
    id: "cyber-security-fundamentals",
    title: "Cyber Security Fundamentals",
    issuer: "Verified Credential",
    year: "2024",
    credentialId: "CS-FUND-2024-912",
    category: "Cyber Security",
    color: "#6E2634",
    skills: ["Network Security", "Cryptography", "Risk Assessment", "Ethical Hacking"]
  }
];

// =========================================================================
// GITHUB REPOSITORIES
// =========================================================================
export const GITHUB_REPOSITORIES = [
  {
    name: "ai-lead-analysis-bot",
    description: "AI powered lead analysis, classification, and validation platform with interactive Streamlit telemetry dashboard.",
    language: "Python",
    stars: 45,
    forks: 18,
    tags: ["Python", "Streamlit", "Pandas", "AI"],
    url: "https://github.com/satboy-12/ai-lead-classifier"
  },
  {
    name: "blockchain-secure-firmware",
    description: "Blockchain-enhanced secure firmware update system for automotive ECUs with cryptographic SHA-256 integrity validation.",
    language: "Python",
    stars: 32,
    forks: 12,
    tags: ["Python", "Blockchain", "Security"],
    url: "https://github.com/satboy-12/blockchain-secure-firmware"
  },
  {
    name: "data-analytics-powerbi",
    description: "Collection of enterprise Power BI dashboards, automated ETL scripts, and DAX analytical models for executive reporting.",
    language: "Power BI",
    stars: 28,
    forks: 9,
    tags: ["Power BI", "DAX", "SQL"],
    url: "https://github.com/satboy-12/data-analytics-powerbi"
  },
  {
    name: "cyber-security-lab",
    description: "Defensive cybersecurity lab utilities, forensic triage scripts, network packet analyzers, and penetration testing workflows.",
    language: "Security",
    stars: 36,
    forks: 14,
    tags: ["Security", "Python", "Bash", "Kali"],
    url: "https://github.com/satboy-12/cyber-security-lab"
  }
];

// Backward compatibility alias
export const PORTFOLIO_INFO = {
  ...PORTFOLIO_PROFILE,
  heroBgImage: profileImage,
  photos: [
    {
      id: "sathya_profile",
      title: "sathya-profile",
      subtitle: "Original Profile Photo",
      src: profileImage,
      badge: "ORIGINAL"
    }
  ]
};
