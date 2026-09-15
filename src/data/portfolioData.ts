// src/data/portfolioData.ts
// Mission data for the orbital portfolio. Edit copy here, never in ContentPanel.

export interface Section {
  id: string;
  title: string;
  badge: string;
  role: string;
  astronautDescription: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  metrics: string;
  description: string;
  detail: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  note: string;
}

export interface SkillCategory {
  title: string;
  caption: string;
  skills: Skill[];
}

export interface Experience {
  period: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
}

export const SECTIONS: Section[] = [
  {
    id: 'information',
    title: 'Information',
    badge: 'CATEGORY 01 // INFORMATION',
    role: 'Mission Command',
    astronautDescription: 'Commander — mission command',
  },
  {
    id: 'skills',
    title: 'My Skills',
    badge: 'CATEGORY 02 // SKILLS',
    role: 'Systems Avionics',
    astronautDescription: 'Flight engineer — systems check',
  },
  {
    id: 'projects',
    title: 'My Projects',
    badge: 'CATEGORY 03 // PROJECTS',
    role: 'Payload Bay',
    astronautDescription: 'Payload specialist — cargo review',
  },
  {
    id: 'experience',
    title: 'My Work Experience',
    badge: 'CATEGORY 04 // EXPERIENCE',
    role: 'Flight Log',
    astronautDescription: 'Mission archivist — flight log',
  },
];

export const PROFILE = {
  name: 'Navin',
  surname: 'Kumar', // TODO: replace with your surname
  headline: 'I build interfaces that stay smooth when the data does not.',
  lead:
    'Computer Science undergrad at SRM Institute of Science and Technology. I spend most of my time on the front end — React and TypeScript — building things that are harder than a course requires: virtualized message lists, socket-synced video, and UI that survives ten thousand rows.',
  readout: [
    { label: 'Degree', value: 'B.Tech CSE', note: 'SRM Institute of Science and Technology' },
    { label: 'Core stack', value: 'React · TypeScript', note: 'Vite, Tailwind v4, Zustand, TanStack Query' },
    { label: 'Specialism', value: 'Real-time UI', note: 'Sockets, HLS sync, virtualization, motion' },
    { label: 'Status', value: 'Open to work', note: 'Internships and frontend contract work' },
  ],
  email: 'you@example.com', // TODO
  github: 'https://github.com/yourhandle', // TODO
  linkedin: 'https://linkedin.com/in/yourhandle', // TODO
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Interface',
    caption: 'What the user actually touches',
    skills: [
      { name: 'React', level: 92, note: 'Hooks, suspense boundaries, custom virtualizers' },
      { name: 'TypeScript', level: 85, note: 'Strict mode, generics across shared data layers' },
      { name: 'Tailwind CSS v4 + daisyUI', level: 88, note: 'Design tokens, theming, dark-first systems' },
      { name: 'Motion (Framer Motion)', level: 80, note: 'Shared layout transitions, scroll-linked reveals' },
      { name: 'Three.js / WebGL', level: 62, note: 'Scene composition, orbit interaction, perf budgets' },
    ],
  },
  {
    title: 'Application',
    caption: 'State, transport and everything behind the view',
    skills: [
      { name: 'Zustand', level: 86, note: 'Slice-per-feature stores, selector discipline' },
      { name: 'TanStack Query', level: 82, note: 'Cache keys, infinite queries, optimistic writes' },
      { name: 'Socket.IO', level: 78, note: 'Room state, playback sync, admin-gated events' },
      { name: 'Node + Express', level: 70, note: 'REST endpoints, auth flow, media proxying' },
      { name: 'Web Audio API', level: 65, note: 'Analyser nodes, frame-accurate visualisation' },
    ],
  },
  {
    title: 'Foundations',
    caption: 'Coursework that turned into working systems',
    skills: [
      { name: 'C / Data structures', level: 84, note: 'Shift-reduce parsers, LR(0) item sets' },
      { name: 'Compiler design', level: 75, note: 'Code generation for procedure calls' },
      { name: 'Python / data science', level: 72, note: 'Dataset cleaning, classification dashboards' },
      { name: 'SDN · Mininet · Open vSwitch', level: 68, note: 'QoS configuration, iPerf benchmarking' },
      { name: 'Git + Vite tooling', level: 88, note: 'Branch hygiene, build config, CI-ready repos' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'watch-party',
    title: 'Watch Party',
    category: 'Real-time video',
    metrics: 'Socket-synced playback',
    description:
      'A room-based watch-party app where everyone stays on the same frame. HLS and YouTube sources are kept in sync over sockets, with drift correction on join and on seek.',
    detail:
      'The native YouTube chrome was replaced with a custom player so host controls could be gated — only the room admin can play, pause or seek, and every other client follows.',
    tags: ['React', 'TypeScript', 'Socket.IO', 'HLS.js', 'YouTube IFrame API'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'cinesphere',
    title: 'CineSphere',
    category: 'Social platform',
    metrics: 'Feature-first architecture',
    description:
      'A social movie platform for logging what you watched and seeing what everyone else thought. Built feature-first so each domain owns its own routes, store slice and queries.',
    detail:
      'Server state lives in TanStack Query, client state in Zustand, and the whole surface is themed through Tailwind v4 tokens with daisyUI v5.',
    tags: ['Vite', 'React', 'Tailwind v4', 'daisyUI v5', 'Zustand', 'TanStack Query'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'chat-virtualizer',
    title: 'Chat + custom virtualizer',
    category: 'Performance',
    metrics: 'Variable-height row virtualization',
    description:
      'A chat client built on a hand-written useVirtualizer hook for variable-height messages — the part off-the-shelf libraries handle worst.',
    detail:
      'It keeps the view pinned to the newest message, preserves the scroll anchor when older pages are prepended, and paginates infinitely upward without a visible jump. Sticky date separators ride the scroll position.',
    tags: ['React', 'Virtualization', 'Infinite scroll', 'IntersectionObserver'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'movieverse',
    title: 'MovieVerse',
    category: 'Interface study',
    metrics: 'Motion + glass UI',
    description:
      'A film-logging app used as a testbed for layout animation: shared-element transitions between a grid and a detail panel, and a scroll-to-thoughts interaction on each title.',
    detail:
      'Runs on mock data and context providers so the interface work stays the focus.',
    tags: ['React', 'Motion', 'Context API', 'Glassmorphism'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'sdn-networks',
    title: 'SDN network lab',
    category: 'Networks',
    metrics: 'Mininet + Open vSwitch',
    description:
      'Two software-defined networking builds: an airport network management case study and a smart-ambulance traffic priority system.',
    detail:
      'Topologies modelled in Mininet on Open vSwitch, QoS queues configured for priority traffic, and throughput verified with iPerf across before-and-after runs.',
    tags: ['Mininet', 'Open vSwitch', 'QoS', 'iPerf', 'Ubuntu'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    period: 'Ongoing',
    role: 'Frontend developer — independent projects',
    organization: 'Self-directed',
    description:
      'Designing and shipping React applications end to end, picking problems specifically for the parts that are hard to get right.',
    highlights: [
      'Wrote a variable-height row virtualizer rather than adopting one, to control scroll anchoring',
      'Synced HLS and YouTube playback across clients with admin-gated controls',
      'Standardised on a feature-first structure with Zustand and TanStack Query across projects',
    ],
  },
  {
    period: 'Coursework',
    role: 'B.Tech, Computer Science and Engineering',
    organization: 'SRM Institute of Science and Technology',
    description:
      'Systems-heavy coursework across compiler design, software-defined networking and data science — each one taken past the lab sheet into a working build.',
    highlights: [
      'Compiler design: shift-reduce parsers and LR(0) item set construction in C',
      'SDN: airport network management and ambulance priority routing on Mininet',
      'Data science: a classification dashboard over a thyroid detection dataset',
    ],
  },
];