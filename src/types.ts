export interface SectionData {
  id: string;
  sectorIndex: number;
  targetAngle: number; // in degrees (0, -90, -180, -270)
  title: string;
  subtitle: string;
  badge: string;
  astronautDescription: string;
  role: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  metrics: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; note: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
}
