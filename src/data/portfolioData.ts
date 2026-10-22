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
  email: 'navinkrsingh2625@gmail.com',
  github: 'https://github.com/NAvIN7856',
  linkedin: 'https://linkedin.com/in/navin7856',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    caption: 'Core programming and scripting languages',
    skills: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Java' },
      { name: 'Python' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    title: 'Frontend',
    caption: 'Modern UI libraries, frameworks and architecture',
    skills: [
      { name: 'React.js' },
      { name: 'Vite' },
      { name: 'Tailwind CSS' },
      { name: 'Responsive UI' },
      { name: 'REST API Integration' },
    ],
  },
  {
    title: 'Backend',
    caption: 'Server-side runtime, microframeworks and streaming',
    skills: [
      { name: 'Node.js' },
      { name: 'Flask' },
      { name: 'FastAPI' },
      { name: 'RESTful APIs' },
      { name: 'WebSockets' },
    ],
  },
  {
    title: 'AI/ML',
    caption: 'Deep learning, neural networks and computer vision',
    skills: [
      { name: 'Computer Vision' },
      { name: 'PyTorch' },
      { name: 'TensorFlow' },
      { name: 'YOLO' },
      { name: 'OpenCV' },
    ],
  },
  {
    title: '3D & Visualization',
    caption: 'Interactive spatial canvas, shaders and graph structures',
    skills: [
      { name: 'Three.js' },
      { name: 'React Three Fiber' },
      { name: 'WebGL' },
      { name: 'GLSL' },
      { name: 'Graph & Network Visualization' },
    ],
  },
  {
    title: 'Database & DevOps',
    caption: 'Data storage, containerization and CI/CD automation',
    skills: [
      { name: 'MongoDB' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'GitHub Actions' },
    ],
  },
];


export const PROJECTS: Project[] = [
  {
    id: '3d-graph-world',
    title: '3D Graph World',
    category: '3D / Interactive Web',
    metrics: 'Interactive 3D environment',
    description:
      'An experimental 3D web project that explores representing graph structures and relationships inside an interactive spatial environment.',
    detail:
      'The project focuses on moving beyond conventional 2D interfaces by presenting information as an explorable 3D world. It demonstrates TypeScript-based development, spatial interaction, visual hierarchy, and the challenges of creating interfaces that users can navigate rather than simply scroll through.',
    tags: ['TypeScript', '3D', 'Graph Visualization', 'Interactive UI'],
    liveUrl: '#',
    githubUrl: 'https://github.com/NAvIN7856/3D-Graph-World',
  },

  {
    id: 'distributed-rate-limiter',
    title: 'Distributed Rate Limiter',
    category: 'Systems / Backend',
    metrics: 'Distributed request control',
    description:
      'A rate-limiting system designed to control request frequency across distributed application instances.',
    detail:
      'The project explores one of the fundamental problems in backend systems: preventing clients from overwhelming an application while maintaining consistent request limits across multiple instances. It demonstrates practical understanding of request control, distributed application behavior, and backend system design.',
    tags: ['JavaScript', 'Distributed Systems', 'Rate Limiting', 'Backend'],
    liveUrl: '#',
    githubUrl: 'https://github.com/NAvIN7856/Distributed-Rate-Limiter',
  },

  {
    id: 'voice-match-ai',
    title: 'Voice Match AI',
    category: 'AI / Voice',
    metrics: 'AI-powered voice matching',
    description:
      'An experimental AI application focused on analyzing and matching voice characteristics using a web-based interface.',
    detail:
      'Voice Match AI explores the intersection of artificial intelligence, audio processing, and interactive web applications. The project demonstrates an interest in building AI systems that interact with users through voice rather than relying exclusively on conventional text-based interfaces.',
    tags: ['JavaScript', 'AI', 'Voice', 'Audio Processing'],
    liveUrl: '#',
    githubUrl: 'https://github.com/NAvIN7856/Voice-Match-AI',
  },

  {
    id: 'thyroid-disease-prediction',
    title: 'Thyroid Disease Prediction',
    category: 'Machine Learning',
    metrics: 'ML prediction + web application',
    description:
      'A machine-learning application for predicting thyroid disease from medical dataset features through a web-based interface.',
    detail:
      'The project combines machine learning with application development. A trained prediction model is exposed through a Flask-based backend and presented through a modern frontend built with React and Tailwind CSS, turning a machine-learning experiment into an interactive application.',
    tags: [
      'Python',
      'Machine Learning',
      'Flask',
      'React',
      'Tailwind CSS',
    ],
    liveUrl: '#',
    githubUrl:
      'https://github.com/NAvIN7856/Thyroid-Disease-Prediction',
  },

  {
    id: 'spatial-room',
    title: 'Spatial Room',
    category: 'Interactive Web',
    metrics: 'Spatial browser experience',
    description:
      'An experimental JavaScript project that explores representing an interactive room or environment inside the browser.',
    detail:
      'Spatial Room focuses on creating a more environmental style of interaction instead of presenting content as a traditional collection of cards and pages. The project contributes to the broader design direction of building portfolio and web experiences around spaces, movement, and exploration.',
    tags: ['JavaScript', 'Interactive UI', 'Spatial Design', 'Web'],
    liveUrl: '#',
    githubUrl: 'https://github.com/NAvIN7856/Spatial-Room',
  },

  {
    id: 'garbage-detector',
    title: 'Garbage Detector',
    category: 'AI / Detection',
    metrics: 'Automated waste detection',
    description:
      'An AI-oriented project focused on detecting garbage or waste through automated visual recognition.',
    detail:
      'The project applies computer-vision concepts to an environmental problem. Its goal is to explore how automated detection can identify waste and potentially support smarter waste-management workflows.',
    tags: ['AI', 'Computer Vision', 'Detection', 'Environment'],
    liveUrl: '#',
    githubUrl: 'https://github.com/NAvIN7856/Garbage-Detector',
  },
];


export const EXPERIENCES: Experience[] = [
  {
    period: '2024 — Present',
    role: 'Independent Developer',
    organization: 'Personal Projects',
    description:
      'Building experimental and practical software projects across frontend development, AI, machine learning, interactive web experiences, and systems programming.',
    highlights: [
      'Built interactive web experiences using JavaScript and TypeScript',
      'Explored 3D and spatial interfaces through 3D Graph World and Spatial Room',
      'Developed AI and machine-learning projects involving voice, disease prediction, and detection',
      'Explored backend and distributed-system concepts through a distributed rate limiter',
    ],
  },

  {
    period: 'Academic',
    role: 'B.Tech Computer Science and Engineering',
    organization: 'SRM Institute of Science and Technology',
    description:
      'Computer Science undergraduate working across software development, machine learning, data science, and systems-oriented coursework.',
    highlights: [
      'Applied machine learning to healthcare and agricultural datasets',
      'Developed web applications using JavaScript, React, HTML, and CSS',
      'Explored Python-based data science and machine-learning workflows',
      'Built independent projects beyond standard coursework to explore new technologies',
    ],
  },
];