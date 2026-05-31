import type { StaticImageData } from 'next/image';
import portrait from '@/assets/about.png';
import heroImage from '@/assets/cover.png';

export const SITE = {
  name: 'Sarvagya Saxena',
  role: 'Full Stack Developer',
  title: 'Full Stack Developer & Software Engineer',
  company: 'Walmart',
  email: 'sarvagyasaxena.2102@gmail.com',
  url: 'https://sarvagyasaxena.tech',
  resumeUrl: 'https://drive.google.com/file/d/1rPekwiz2ls7cH4eLR1JHJL0LPJqIjdVj/view?usp=sharing',
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
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
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

export type Project = {
  name: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  image?: StaticImageData | string;
  gradient: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    name: 'RAG Lens',
    description: 'Agentic RAG evaluation — measure and improve retrieval-augmented generation pipelines.',
    stack: ['Python', 'RAG', 'LLMs'],
    github: 'https://github.com/serverf21/rag_lens',
    gradient: 'from-forge-violet to-forge-cyan',
  },
  {
    name: 'Zerodha Claude MCP',
    description:
      'Automated Zerodha trade execution and portfolio analysis via an MCP bridge between Claude AI and the Kite trading API.',
    stack: ['TypeScript', 'MCP', 'Bun'],
    github: 'https://github.com/serverf21/zerodha-mcp-claude',
    gradient: 'from-forge-cyan to-forge-violet',
  },
  {
    name: 'Autonomous Driving Brain',
    description:
      'End-to-end CNN for self-driving using Nvidia’s methodology — camera preprocessing, TensorFlow/Keras, and Udacity simulator integration.',
    stack: ['Python', 'TensorFlow', 'OpenCV'],
    github: 'https://github.com/serverf21/Self-Driving-DL-CNN-Model',
    gradient: 'from-forge-cyan to-forge-yellow',
  },
  {
    name: 'Tech Blog',
    description: 'TechTunes — headless blog with Sanity CMS, SEO, and responsive layouts.',
    stack: ['Next.js', 'Sanity', 'Tailwind'],
    live: 'https://sarvagya-next-sanity-blog.vercel.app/',
    github: 'https://github.com/serverf21',
    gradient: 'from-forge-orange to-forge-yellow',
  },
  {
    name: 'WebRTC Video Chat',
    description: 'Real-time peer video chat with signaling and sockets.',
    stack: ['React', 'WebRTC', 'Socket.io', 'Express'],
    github: 'https://github.com/serverf21/WebRTC-VideoChat-WebApp',
    gradient: 'from-forge-cyan to-forge-violet',
  },
  {
    name: 'Crazy Racing',
    description: 'Arcade racing experience with Three.js-powered visuals.',
    stack: ['React', 'Three.js', 'Vite'],
    live: 'https://crazy-racing-react.vercel.app/',
    github: 'https://github.com/serverf21',
    gradient: 'from-forge-orange via-forge-yellow to-forge-cyan',
  },
  {
    name: 'D-Social',
    description: 'Decentralized social platform prototype on blockchain.',
    stack: ['React', 'Node.js', 'Web3'],
    github: 'https://github.com/serverf21',
    gradient: 'from-forge-yellow to-forge-violet',
  },
  {
    name: 'Food Delivery',
    description: 'Full-stack ordering flow with real-time status updates.',
    stack: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/serverf21',
    gradient: 'from-forge-orange to-forge-violet',
  },
];

export const ABOUT_STATS = [
  { label: 'Years Exp', value: 6, suffix: '' },
  { label: 'Projects', value: 20, suffix: '+' },
  { label: 'Open Source', value: 5, suffix: '+' },
] as const;

export const ABOUT = {
  portrait,
  heroImage,
  bio: `I'm a Full Stack Developer and Software Engineer at Walmart Global Tech India, with around six years of experience building fast, scalable web applications. I graduated from NIT Silchar, where I learned to care deeply about performance, clean architecture, and thoughtful UX.

I love turning complex problems into polished products — from React and Next.js frontends to Node.js APIs, Firebase integrations, and production-ready deployments. When I'm not shipping features, I'm experimenting with 3D visuals, open source, and tools that make developers faster.`,
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
    role: 'Software Engineer',
    period: '2022 — Present',
    location: 'Bengaluru, India',
    featured: true,
    highlights: [
      'Build and maintain high-traffic customer-facing web experiences with React and TypeScript.',
      'Improve performance through code-splitting, caching strategies, and measurable Core Web Vitals gains.',
      'Collaborate across product, design, and platform teams to ship reliable features at scale.',
    ],
  },
  {
    company: 'Sears Global Technologies India',
    role: 'Full Stack Developer',
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
    company: 'NIT Silchar',
    role: 'B.Tech — Computer Science',
    period: '2015 — 2019',
    highlights: [
      'Built foundation in algorithms, systems, and software engineering practices.',
      'Participated in hackathons and technical communities focused on web development.',
    ],
  },
];
