import { SectionData, Project, SkillCategory, ExperienceItem } from '../types';

export const SECTIONS: SectionData[] = [
  {
    id: 'home',
    sectorIndex: 0,
    targetAngle: 0,
    title: 'MISSION COMMAND',
    subtitle: 'Navin — Full Stack Architect & Creative Engineer',
    badge: 'ORBITAL STATION 01 // 12:00 APEX',
    astronautDescription: 'Commander at workstation laptop',
    role: 'Full-Stack Architecture & High-Performance Web Systems',
  },
  {
    id: 'about',
    sectorIndex: 1,
    targetAngle: -90,
    title: 'EXPEDITION LOG',
    subtitle: 'Background, Philosophy & Flight Records',
    badge: 'ORBITAL STATION 02 // 03:00 HORIZON',
    astronautDescription: 'Flight Specialist with telemetry pad',
    role: 'Engineering Journeys & Architecture Deep Dives',
  },
  {
    id: 'projects',
    sectorIndex: 2,
    targetAngle: -180,
    title: 'PAYLOAD DEPLOYMENTS',
    subtitle: 'Featured Works, Prototypes & Production Systems',
    badge: 'ORBITAL STATION 03 // 06:00 NADIR',
    astronautDescription: 'Payload Engineer holding mission bounty',
    role: 'Scalable Cloud Infrastructure & Modern Web Apps',
  },
  {
    id: 'contact',
    sectorIndex: 3,
    targetAngle: -270,
    title: 'SIGNAL & TELEMETRY',
    subtitle: 'Technical Skills & Open Transmission Channel',
    badge: 'ORBITAL STATION 04 // 09:00 SPACEWALK',
    astronautDescription: 'EVA Engineer transmitting radio link',
    role: 'Tech Stack Radar & Direct Uplink',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'nebula-cloud',
    title: 'Nebula Orchestrator',
    category: 'Distributed Systems & Cloud UI',
    description: 'Real-time multi-cluster Kubernetes topology visualizer with sub-millisecond metric streaming and automated node failover orchestration.',
    tags: ['React', 'TypeScript', 'WebSockets', 'Go', 'Docker'],
    metrics: '< 15ms Latency • 99.99% Uptime',
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'helios-ai',
    title: 'Helios Neural Engine',
    category: 'AI / Machine Learning Interface',
    description: 'Generative planetary telemetry assistant that ingests streaming satellite observations to model atmospheric anomalies in interactive 3D.',
    tags: ['Next.js', 'Python', 'FastAPI', 'Three.js', 'PyTorch'],
    metrics: '120k+ Predictions/Day • 4.9★ Rating',
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'apex-ledger',
    title: 'Apex Zero-Knowledge Vault',
    category: 'Fintech & Cryptography',
    description: 'Privacy-preserving decentralized asset ledger leveraging zk-SNARK rollups with high-throughput batch verifications and audited smart contracts.',
    tags: ['Solidity', 'Rust', 'TypeScript', 'Tailwind', 'Ethers.js'],
    metrics: '$42M TVL Secured • Zero Breaches',
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'strata-design',
    title: 'Strata UI Framework',
    category: 'Design Systems & Open Source',
    description: 'Ultra-lightweight, high-contrast accessible component library built for mission-critical aerospace consoles and real-time dashboards.',
    tags: ['Vanilla CSS', 'Web Components', 'Storybook', 'Figma'],
    metrics: '18k+ Monthly Installs • 2.4KB Gzip',
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Engineering',
    icon: 'Terminal',
    skills: [
      { name: 'TypeScript / JavaScript', level: 98, note: 'Strict mode, AST, dynamic modules' },
      { name: 'React / Next.js', level: 95, note: 'RSC, concurrent mode, custom hooks' },
      { name: 'Node.js & Bun', level: 90, note: 'High-throughput async event loops' },
      { name: 'Python & Go', level: 85, note: 'Microservices, data pipelines' },
    ],
  },
  {
    title: 'Visual & Interactive',
    icon: 'Sparkles',
    skills: [
      { name: 'Vanilla CSS & Animations', level: 96, note: 'Hardware-accelerated transforms' },
      { name: 'WebGL / Three.js / Canvas', level: 88, note: 'Shader pipelines, particle physics' },
      { name: 'UI / UX Design & Figma', level: 92, note: 'Design systems, tokens, ergonomics' },
      { name: 'Responsive Layouts', level: 96, note: 'Mobile-first fluid viewports' },
    ],
  },
  {
    title: 'Infra & Mission Control',
    icon: 'Cpu',
    skills: [
      { name: 'Docker & Kubernetes', level: 86, note: 'Container orchestration, CI/CD' },
      { name: 'PostgreSQL & Redis', level: 90, note: 'Schema design, cache strategies' },
      { name: 'GraphQL & REST APIs', level: 94, note: 'Spec compliance, rate limiting' },
      { name: 'Git & Linux Systems', level: 95, note: 'Kernel tuning, automated pipelines' },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2023 — PRESENT',
    role: 'Principal Frontend Architect',
    organization: 'Orbital Tech Labs',
    description: 'Lead engineering for next-generation telemetry interfaces and high-performance interactive customer portals.',
    highlights: [
      'Boosted client render throughput by 40% via hardware-composited canvas layers.',
      'Mentored 14 engineers across web performance, accessibility, and modern React architectures.',
    ],
  },
  {
    period: '2021 — 2023',
    role: 'Senior Full Stack Engineer',
    organization: 'DeepSpace Solutions',
    description: 'Architected distributed analytics platforms handling 10M+ daily events with sub-second aggregate query speeds.',
    highlights: [
      'Rebuilt legacy dashboard into a responsive, modular micro-frontend architecture.',
      'Engineered offline-first sync engine reducing network re-transmissions by 65%.',
    ],
  },
  {
    period: '2019 — 2021',
    role: 'Creative Web Developer',
    organization: 'Stellar Studio',
    description: 'Crafted award-winning immersive web experiences, 3D interactive product launches, and brand identities.',
    highlights: [
      'Won AWWWARDS Site of the Day and FWA of the Day for experiential web projects.',
      'Spearheaded custom WebGL particle engine loaded by over 1.2M visitors.',
    ],
  },
];
