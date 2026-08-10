import type { StaticImageData } from 'next/image';
import portrait from '@/assets/about.png';
import heroImage from '@/assets/cover.png';

export const SITE = {
  name: 'Sarvagya Saxena',
  role: 'AI Systems Engineer',
  title: 'AI Systems Engineer',
  company: 'Walmart',
  email: 'sarvagyasaxena.2102@gmail.com',
  url: 'https://sarvagyasaxena.tech',
  resumeUrl: '/resume',
  firebaseContactUrl:
    'https://personal-portfolio-d8375-default-rtdb.firebaseio.com/sarvagyacontact.json',
} as const;

export const SOCIAL = [
  {
    label: 'GitHub',
    href: 'https://github.com/serverf21',
    handle: 'serverf21',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sarvagya-saxena-a8740195',
    handle: 'sarvagya-saxena-a8740195',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/sarvagyasaxena',
    handle: '@sarvagyasaxena',
  },
] as const;

export const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'what-i-build', label: 'What I Build' },
  { id: 'featured-projects', label: 'Featured' },
  { id: 'technical-articles', label: 'Articles' },
  { id: 'open-source', label: 'Open Source' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const;

export type SkillGlobeItem = {
  name: string;
  color: string;
  icon?: string;
};

export const GLOBE_SKILLS: SkillGlobeItem[] = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#68A063' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'Next.js', color: '#F0EEE6' },
  { name: 'Python', color: '#3776AB' },
  { name: 'RAG Pipeline', color: '#FF6B35' },
  { name: 'Agentic AI', color: '#7B61FF' },
  { name: 'LangChain', color: '#1C3C3C' },
  { name: 'Vector DB', color: '#00D4FF' },
  { name: 'TensorFlow', color: '#FF6F00' },
  { name: 'Hugging Face', color: '#FFD21E' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'Tailwind', color: '#38BDF8' },
  { name: 'REST APIs', color: '#FF6B35' },
  { name: 'Git', color: '#F05032' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Docker', color: '#2496ED' },
];

export type TechIcon = {
  name: string;
  color: string;
  slug: string;
  /** Simple Icons slug for cdn.simpleicons.org when react-icons has no brand icon */
  simpleIcon?: string;
};

export const TECH_GRID: TechIcon[] = [
  { name: 'React', color: '#61DAFB', slug: 'react' },
  { name: 'Next.js', color: '#F0EEE6', slug: 'nextdotjs' },
  { name: 'TypeScript', color: '#3178C6', slug: 'typescript' },
  { name: 'Node.js', color: '#68A063', slug: 'nodedotjs' },
  { name: 'Python', color: '#3776AB', slug: 'python' },
  { name: 'RAG Pipeline', color: '#FF6B35', slug: 'rag' },
  { name: 'Agentic AI', color: '#7B61FF', slug: 'agenticai' },
  { name: 'LangChain', color: '#47D18E', slug: 'langchain', simpleIcon: 'langchain' },
  { name: 'Vector DB', color: '#00D4FF', slug: 'vectordb' },
  { name: 'TensorFlow', color: '#FF6F00', slug: 'tensorflow' },
  { name: 'Hugging Face', color: '#FFD21E', slug: 'huggingface', simpleIcon: 'huggingface' },
  { name: 'Firebase', color: '#FFCA28', slug: 'firebase' },
  { name: 'Tailwind', color: '#38BDF8', slug: 'tailwindcss' },
  { name: 'PostgreSQL', color: '#4169E1', slug: 'postgresql' },
  { name: 'MongoDB', color: '#47A248', slug: 'mongodb' },
  { name: 'Docker', color: '#2496ED', slug: 'docker' },
  { name: 'Git', color: '#F05032', slug: 'git' },
  { name: 'JavaScript', color: '#F7DF1E', slug: 'javascript' },
  { name: 'Three.js', color: '#00D4FF', slug: 'threedotjs' },
];

export type ProjectCategory = 'ai' | 'platform' | 'product' | 'opensource';

export type BuildStatus = 'live' | 'in-progress' | 'research';

export type Project = {
  name: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  image?: StaticImageData | string;
  gradient: string;
  featured?: boolean;
  category: ProjectCategory[];
};

export const STATUS_META: Record<
  BuildStatus,
  { label: string; dot: string; className: string }
> = {
  live: {
    label: 'Live',
    dot: '🟢',
    className: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
  },
  'in-progress': {
    label: 'In Progress',
    dot: '🟡',
    className: 'border-amber-500/40 bg-amber-500/10 text-amber-400',
  },
  research: {
    label: 'Research',
    dot: '🔵',
    className: 'border-sky-500/40 bg-sky-500/10 text-sky-400',
  },
};

export const WHAT_I_BUILD_CARDS = [
  {
    title: 'AI Systems',
    description:
      'Production-ready Agentic AI, RAG pipelines, MCP servers, multi-agent workflows and enterprise AI applications.',
    cta: 'Explore AI Projects →',
    href: '/projects/ai',
    gradient: 'from-forge-violet to-forge-cyan',
  },
  {
    title: 'Developer Platforms',
    description:
      'AI-powered developer tooling, test automation, CI/CD integrations, intelligent APIs and engineering productivity platforms.',
    cta: 'Explore Platform Projects →',
    href: '/projects/platform',
    gradient: 'from-forge-cyan to-forge-yellow',
  },
  {
    title: 'AI Products',
    description:
      'Building AI-first applications across Finance, Healthcare and Enterprise Automation.',
    cta: 'View Products →',
    href: '/products',
    gradient: 'from-forge-orange to-forge-violet',
  },
] as const;

export const CURRENTLY_BUILDING = [
  {
    name: 'AI Investment Copilot',
    description: 'Agentic finance assistant for portfolio insights and trade workflows.',
    status: 'in-progress' as BuildStatus,
  },
  {
    name: 'Agentic Dashboard Platform',
    description: 'Composable AI dashboards that generate and adapt to business KPIs.',
    status: 'research' as BuildStatus,
  },
  {
    name: 'AI Test Automation Framework',
    description: 'LLM-driven Playwright test generation and CI/CD quality gates.',
    status: 'in-progress' as BuildStatus,
  },
  {
    name: 'Micro-SaaS Experiments',
    description: 'Rapid prototypes exploring AI-native vertical SaaS opportunities.',
    status: 'research' as BuildStatus,
  },
] as const;

export type TechnicalArticle = {
  title: string;
  description: string;
  href: string;
  date: string;
  tags: string[];
  gradient: string;
};

export const TECHNICAL_ARTICLES: TechnicalArticle[] = [
  {
    title: 'TechTunes Blog',
    description:
      'Headless blog on Next.js and Sanity — technical writing on web development, AI systems, and engineering craft.',
    href: 'https://sarvagya-next-sanity-blog.vercel.app/',
    date: '2024 — Present',
    tags: ['Next.js', 'Sanity', 'Technical Writing'],
    gradient: 'from-forge-orange to-forge-yellow',
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'ComplyMint',
    description:
      'Multi-tenant SaaS automating India\'s DPDP Act compliance — LLM-powered gap assessment, privacy notice generation and analysis, regulatory fine prediction, and Data Principal Rights request workflows. Founder and sole engineer, shipped end-to-end including Shopify App Store listing and Razorpay-backed subscription billing.',
    stack: ['Next.js', 'LLMs', 'SaaS'],
    live: 'https://www.comply-mint.cloud',
    gradient: 'from-forge-violet to-forge-yellow',
    featured: true,
    category: ['ai', 'product'],
  },
  {
    name: 'Zerodha Claude MCP',
    description:
      'MCP server bridging Claude AI with Zerodha Kite — automated trade execution and portfolio analysis.',
    stack: ['TypeScript', 'MCP', 'Bun'],
    github: 'https://github.com/serverf21/zerodha-mcp-claude',
    gradient: 'from-forge-cyan to-forge-violet',
    featured: true,
    category: ['ai'],
  },
  {
    name: 'LangGraph Multi-Agent',
    description:
      'Multi-agent orchestration with LangGraph — coordinated LLM agents for complex enterprise workflows.',
    stack: ['Python', 'LangGraph', 'LangChain'],
    gradient: 'from-forge-violet to-forge-orange',
    featured: true,
    category: ['ai'],
  },
  {
    name: 'RAG Lens',
    description: 'Agentic RAG evaluation — measure and improve retrieval-augmented generation pipelines.',
    stack: ['Python', 'RAG', 'LLMs'],
    github: 'https://github.com/serverf21/rag_lens',
    gradient: 'from-forge-violet to-forge-cyan',
    featured: true,
    category: ['ai'],
  },
  {
    name: 'Warehouse Vision AI',
    description:
      'Computer vision pipeline for warehouse inventory tracking and anomaly detection at scale.',
    stack: ['Python', 'OpenCV', 'TensorFlow'],
    github: 'https://github.com/serverf21',
    gradient: 'from-forge-cyan to-forge-yellow',
    category: ['ai'],
  },
  {
    name: 'GenomeAI',
    description:
      'AI-assisted genomic data analysis platform for research teams and healthcare workflows.',
    stack: ['Python', 'LLMs', 'Healthcare'],
    github: 'https://github.com/serverf21',
    gradient: 'from-forge-orange to-forge-violet',
    category: ['ai', 'product'],
  },
  {
    name: 'AI Playwright Generator',
    description:
      'LLM-powered test generation from user stories — outputs Playwright suites with CI integration.',
    stack: ['TypeScript', 'Playwright', 'LLMs'],
    gradient: 'from-forge-cyan to-forge-violet',
    featured: true,
    category: ['platform'],
  },
  {
    name: 'API Orchestrator',
    description:
      'Intelligent API gateway with schema-aware routing, rate limiting, and observability dashboards.',
    stack: ['Node.js', 'GraphQL', 'Redis'],
    github: 'https://github.com/serverf21',
    gradient: 'from-forge-violet to-forge-cyan',
    category: ['platform'],
  },
  {
    name: 'Dashboard Generator',
    description:
      'AI composes analytics dashboards from natural language — auto-wires charts, filters, and data sources.',
    stack: ['React', 'LLMs', 'D3.js'],
    github: 'https://github.com/serverf21',
    gradient: 'from-forge-yellow to-forge-orange',
    category: ['platform'],
  },
  {
    name: 'AI Documentation',
    description:
      'Automated API and codebase documentation with context-aware LLM summaries and diagram generation.',
    stack: ['Python', 'LangChain', 'OpenAPI'],
    github: 'https://github.com/serverf21',
    gradient: 'from-forge-orange to-forge-cyan',
    category: ['platform'],
  },
  {
    name: 'Testing Framework',
    description:
      'Unified AI test automation layer — unit, integration, and E2E with intelligent failure triage.',
    stack: ['TypeScript', 'Jest', 'Playwright'],
    github: 'https://github.com/serverf21',
    gradient: 'from-forge-cyan to-forge-yellow',
    category: ['platform'],
  },
  {
    name: 'Finance Copilot',
    description:
      'AI copilot for personal finance — portfolio analysis, risk signals, and conversational insights.',
    stack: ['Next.js', 'LLMs', 'Finance'],
    github: 'https://github.com/serverf21/personal-wealth-analyzer',
    gradient: 'from-forge-orange to-forge-yellow',
    featured: true,
    category: ['product'],
  },
  {
    name: 'Wealth Dashboard',
    description:
      'Real-time wealth tracking with AI-generated summaries across equities, crypto, and fixed income.',
    stack: ['React', 'TypeScript', 'Charts'],
    github: 'https://github.com/serverf21',
    gradient: 'from-forge-cyan to-forge-violet',
    category: ['product'],
  },
  {
    name: 'North Star Mode',
    description:
      'Goal-oriented productivity system with AI coaching — align daily work with long-term objectives.',
    stack: ['Next.js', 'AI', 'Productivity'],
    github: 'https://github.com/serverf21',
    gradient: 'from-forge-violet to-forge-yellow',
    category: ['product'],
  },
  {
    name: 'Autonomous Driving Brain',
    description:
      'End-to-end CNN for self-driving using Nvidia methodology — camera preprocessing and Udacity simulator.',
    stack: ['Python', 'TensorFlow', 'OpenCV'],
    github: 'https://github.com/serverf21/Self-Driving-DL-CNN-Model',
    gradient: 'from-forge-cyan to-forge-yellow',
    category: ['opensource'],
  },
  {
    name: 'WebRTC Video Chat',
    description: 'Real-time peer video chat with signaling and sockets.',
    stack: ['React', 'WebRTC', 'Socket.io', 'Express'],
    github: 'https://github.com/serverf21/WebRTC-VideoChat-WebApp',
    gradient: 'from-forge-cyan to-forge-violet',
    category: ['opensource'],
  },
  {
    name: 'Crazy Racing',
    description: 'Arcade racing experience with Three.js-powered visuals.',
    stack: ['React', 'Three.js', 'Vite'],
    live: 'https://crazy-racing-react.vercel.app/',
    github: 'https://github.com/serverf21/crazy-racing-3js',
    gradient: 'from-forge-orange via-forge-yellow to-forge-cyan',
    category: ['opensource'],
  },
  {
    name: 'D-Social',
    description: 'Decentralized social platform prototype on blockchain.',
    stack: ['React', 'Node.js', 'Web3'],
    github: 'https://github.com/serverf21/DeSocial-Blockchain',
    gradient: 'from-forge-yellow to-forge-violet',
    category: ['opensource'],
  },
  {
    name: 'Food Delivery',
    description: 'Full-stack ordering flow with real-time status updates.',
    stack: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/serverf21/bhoj-food-delivery-app',
    gradient: 'from-forge-orange to-forge-violet',
    category: ['opensource'],
  },
];

export const CATEGORY_META: Record<
  ProjectCategory,
  { title: string; subtitle: string; description: string }
> = {
  ai: {
    title: 'AI Systems',
    subtitle: 'Agentic AI & Enterprise Intelligence',
    description:
      'Production-ready Agentic AI, RAG pipelines, MCP servers, multi-agent workflows and enterprise AI applications.',
  },
  platform: {
    title: 'Developer Platforms',
    subtitle: 'Engineering Productivity & Tooling',
    description:
      'AI-powered developer tooling, test automation, CI/CD integrations, intelligent APIs and engineering productivity platforms.',
  },
  product: {
    title: 'AI Products',
    subtitle: 'Finance, Healthcare & Automation',
    description:
      'AI-first applications across Finance, Healthcare and Enterprise Automation — products built for real users.',
  },
  opensource: {
    title: 'Open Source',
    subtitle: 'Community Projects',
    description:
      'Open source experiments, demos, and tools shared with the developer community.',
  },
};

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return PROJECTS.filter((p) => p.category.includes(category));
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}

export const ABOUT_STATS = [
  { label: 'Years Exp', value: 6, suffix: '' },
  { label: 'Projects', value: 20, suffix: '+' },
  { label: 'Open Source', value: 5, suffix: '+' },
] as const;

export const ABOUT = {
  portrait,
  heroImage,
  bio: `AI Systems Engineer with 6+ years building production software and AI platforms at Walmart and Sears.

I specialize in architecting Agentic AI systems that combine LLMs, APIs, distributed services, vector databases, orchestration frameworks and modern web applications into intelligent business products.

Passionate about designing AI systems that automate real-world enterprise workflows rather than standalone AI demos.`,
} as const;

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  featured?: boolean;
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'Walmart Global Tech India',
    role: 'Software Engineer III',
    period: 'December 2023 — Present',
    location: 'Bengaluru, India (Remote)',
    featured: true,
    highlights: [
      'Designed and deployed a production Agentic AI system that routes natural language queries to REST APIs, fetches structured DB data, and auto-recommends dashboard visualization widgets.',
      'Architected an AI-powered warehouse audit system using OpenAI Vision and OpenCV, automating object detection and eliminating manual audit cycles.',
      'Engineered an LLM-powered test automation framework using Playwright and OpenAI for code-free test generation from natural language specs — adopted across 3 products, improving QA velocity by 60%.',
      'Architected 29 production Nest.js APIs using CQRS, integrating Kafka and blockchain for real-time supply chain tracking; migrated legacy Java APIs to NestJS, reducing runtime by 50%.',
      'Led a team of 5 engineers end-to-end on a logistics decanting application, from product discovery to production deployment.',
    ],
  },
  {
    company: 'Sears Global Technologies India',
    role: 'Software Developer',
    period: 'June 2022 — July 2023',
    location: 'Bangalore (Remote)',
    highlights: [
      'Developed a GPT-4 and LangChain-powered retail analytics chatbot that transformed raw data into business insights via GraphQL APIs and GCP-backed vector storage.',
      'Built an end-to-end NFT ticketing marketplace with React, TypeScript, Express.js, and Solidity, enabling publishing, auctions, and secondary sales on-chain.',
      'Reduced platform transaction costs by 50% by implementing Polygon blockchain with Metamask for seamless crypto payments.',
    ],
  },
  {
    company: 'GreyB Research Private Limited',
    role: 'Technology Consultant',
    period: 'November 2020 — June 2022',
    location: 'Mohali, Punjab',
    highlights: [
      "Delivered AI-driven applications using React, Next.js, and React Native to automate clients' analytics workflows, reducing manual reporting overhead.",
      'Mentored junior developers across web, Python automation, and LLM-based AI solutions, raising team capability and code quality standards.',
    ],
  },
  {
    company: 'National Institute of Technology Silchar',
    role: 'B.Tech, Mechanical Engineering',
    period: '2016 — 2020',
    highlights: [
      'Final year project — Self-Driving Car Prototype (ML, CNN, OpenCV, Python).',
    ],
  },
];
