import { StaticImageData } from 'next/image';
import { JSX } from 'react';

export interface Skill {
  value: string;
  color: string;
  bigImage: StaticImageData | null;
  smallImage: StaticImageData | null;
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

export interface ProfileStat {
  value: string;
  /** @description Maximum length of 34 before string gets truncated!
   */
  name: string;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  profilePictureURL: string;
  emailUser: string;
  emailDomain: string;
  githubURL: string;
  linkedInURL: string;
  resumeURL: string;
  toolsIAmExperiencedWith: Skill[];
  threeSkillsIWantToImprove: [Skill, Skill, Skill];
  stats: [ProfileStat, ProfileStat, ProfileStat];
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
  /**@description Specify a URL string for a custom banner image. Undefined will use the preview image as the banner image */
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
  text?: string | undefined;
  customImageUrl?: string | undefined;
  externalURL: string;
}

export interface Testimonial {
  personsName: string;
  personsImageURL: string;
  personsRole: string;
  numberOfStarsRating: number;
  review: string;
}
