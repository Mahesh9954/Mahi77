
export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
  achievements?: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
