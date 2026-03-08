export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: ("react" | "mobile" | "fullstack" | "dashboard" | "ai")[];
  color: string;
  icon: string;
  github?: string;
  live?: string;
}

export interface Skill {
  name: string;
  description: string;
  icon: string;
  level: number;
  category: string;
  color: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  current: boolean;
  description: string[];
  tech: string[];
}

export interface Certification {
  id: number;
  title: string;
  provider: string;
  providerIcon: string;
  date: string;
  url?: string;
  badgeUrl?: string;
  color: string;
}

export interface AIProject {
  id: number;
  title: string;
  description: string;
  tags: string[];
  status: "completed" | "in-progress" | "exploration";
  icon: string;
}

export interface Award {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: string;
}
