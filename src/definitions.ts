import { JSX } from 'react';

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
  profilePictureURL: string;
  email: string;
  githubURL: string;
  typewriterText: string[];
  whoAmIJSX: JSX.Element;
  testimonials: Testimonial[];
}

export interface Project {
  id: number;
  title: string;
  projectAccentColor: string;
  summary: string;
  skillsUsed: Skill[];
  previewImgURL: string;
  bannerImgURL: string | undefined;
  imageSliderURLs: ProjectSliderImage[];
  description: ProjectDescriptionSection[];
  quickLinks: ProjectQuickLink[];
  projectDate: Date;
}

export interface ProjectSliderImage {
  imageURL: string;
  alt: string;
  height: number | `${number}` | undefined;
  width: number | `${number}` | undefined;
}

export interface ProjectDescriptionSection {
  sectionName: string;
  body: JSX.Element;
}

export interface ProjectQuickLink {
  title: string;
  externalURL: string;
}

export interface Testimonial {
  personsName: string;
  personsImageURL: string;
  personsRole: string;
  numberOfStarsRating: number;
  review: string;
}
