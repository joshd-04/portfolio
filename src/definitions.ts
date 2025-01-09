export interface Skill {
  value: string;
  color: string;
}

export interface SkillByValue {
  [key: string]: Skill;
}

export interface Skillset {
  title: string;
  skills: Skill[];
}

export interface Mastery {
  sector: string;
  competencies: Competency[];
}

export interface Competency {
  name: string;
  level: number;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  githubURL: string;
  typewriterText: string[];
  whoAmI: string;
  testimonials: Testimonial[];
}

export interface Project {
  title: string;
  summary: string;
  skillsUsed: Skill[];
  previewImgURL: string;
}

export interface Testimonial {
  personsName: string;
  personsImageURL: string;
  personsRole: string;
  numberOfStarsRating: number;
  review: string;
}
