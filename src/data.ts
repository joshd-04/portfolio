// This is the data for the home screen skills table

import {
  Mastery,
  Project,
  SkillByValue,
  Skillset,
  UserProfile,
} from './definitions';

const skills: SkillByValue = {
  Python: { value: 'Python', color: '#306998' },
  JavaScript: { value: 'JavaScript', color: '#f0db4f' },
  TypeScript: { value: 'TypeScript', color: '#3178c6' },
  HTML: { value: 'HTML', color: '#E34C26' },
  CSS: { value: 'CSS', color: '#2565ae' },
  SQL: { value: 'SQL', color: '#00758f' },
  React: { value: 'React', color: '#61dbfb' },
  NextJS: { value: 'NextJS', color: '#000000' },
  TailwindCSS: { value: 'TailwindCSS', color: '#38bdf8' },
  NodeJS: { value: 'NodeJS', color: '#3c873a' },
  ExpressJS: { value: 'ExpressJS', color: '#212121' },
  TKinter: { value: 'TKinter', color: '#189dff' },
  Flask: { value: 'Flask', color: '#666666' },
  Pygame: { value: 'Pygame', color: '#6af02a' },
  PostgreSQL: { value: 'PostgreSQL', color: '#336791' },
  VSCode: { value: 'VSCode', color: '#0085d0' },
  Git: { value: 'Git', color: '#f05033' },
  GitHub: { value: 'GitHub', color: '#1b1f23' },
  Netlify: { value: 'Netlify', color: '#2dbab9' },
  Vercel: { value: 'Vercel', color: '#000000' },
  PostMan: { value: 'PostMan', color: '#ed6d3f' },
};

export const skillsSummary: Skillset[] = [
  {
    title: 'Languages',
    skills: [
      skills.Python,
      skills.JavaScript,
      skills.TypeScript,
      skills.HTML,
      skills.CSS,
      skills.SQL,
    ],
  },
  {
    title: 'Technologies',
    skills: [
      skills.React,
      skills.NextJS,
      skills.TailwindCSS,
      skills.NodeJS,
      skills.ExpressJS,
      skills.TKinter,
      skills.Flask,
      skills.Pygame,
      skills.PostgreSQL,
    ],
  },
  {
    title: 'Tools',
    skills: [
      skills.VSCode,
      skills.Git,
      skills.GitHub,
      skills.Netlify,
      skills.Vercel,
      skills.PostMan,
    ],
  },
];

// Levels 1 2 or 3 only
export const masteryData: Mastery[] = [
  {
    sector: 'Web development',
    competencies: [
      { name: 'HTML & CSS', level: 3 },
      { name: 'JavaScript', level: 3 },
      { name: 'TypeScript', level: 3 },
      { name: 'React', level: 3 },
      { name: 'NextJS', level: 2 },
      { name: 'TailwindCSS', level: 2 },
    ],
  },
  {
    sector: 'Backend',
    competencies: [
      { name: 'Python', level: 3 },
      { name: 'Postgres & relational databases (SQL)', level: 2 },
      { name: 'Flask.py', level: 2 },
      { name: 'NodeJS', level: 1 },
      { name: 'ExpressJS', level: 1 },
    ],
  },
];

export const userProfile: UserProfile = {
  firstName: 'Josh',
  lastName: 'Dyal',
  typewriterText: [
    'An aspiring software engineer',
    "Let's work together!",
    'Hire me :)',
  ],
  email: 'joshdyal04@gmail.com',
  whoAmI: 'I am HIM',
  testimonials: [
    {
      personsName: 'Mark Taylor',
      personsImageURL: '/home/pfp.png',
      personsRole: 'CEO, TechStartup',
      numberOfStarsRating: 5,
      review:
        'John Doe exceeded my expectations! Their attention to detail and coding expertise brought our project to life seamlessly. Highly recommended!',
    },
    {
      personsName: 'Jane Smith',
      personsImageURL: '/home/pfp.png',
      personsRole: 'Software Engineer, TechNova Solutions',
      numberOfStarsRating: 5,
      review:
        'John Doe went above and beyond my expectations! Their precision and coding skills turned our project into a flawless success. I couldn’t recommend them more highly.',
    },
    {
      personsName: 'Michael Brown',
      personsImageURL: '/home/pfp.png',
      personsRole: 'Project Manager, InnovateCorp',
      numberOfStarsRating: 5,
      review:
        'Working with John Doe was a fantastic experience. Their sharp eye for detail and exceptional coding abilities made our project come together effortlessly. Truly a professional I would recommend to anyone!',
    },
    {
      personsName: 'Emily Davis',
      personsImageURL: '/home/pfp.png',
      personsRole: 'CTO, CodeCraft Systems',
      numberOfStarsRating: 5,
      review:
        'John Doe’s expertise and meticulous approach to coding were outstanding. They delivered a seamless result that exceeded all my expectations. Highly endorse their work!',
    },
  ],
};

export const projects: Project[] = [
  {
    title: 'Custom Developer Portfolio',
    summary:
      'A website tailored to showcasing the skills, qualities and projects of a developer',
    skillsUsed: [
      skills.TypeScript,
      skills.React,
      skills.NextJS,
      skills.TailwindCSS,
    ],
    previewImgURL: '/projects/preview.png',
  },
  {
    title: 'Custom Developer Portfolio',
    summary:
      'A website tailored to showcasing the skills, qualities and projects of a developer',
    skillsUsed: [
      skills.TypeScript,
      skills.React,
      skills.NextJS,
      skills.TailwindCSS,
    ],
    previewImgURL: '/projects/preview.png',
  },
  {
    title: 'Custom Developer Portfolio',
    summary:
      'A website tailored to showcasing the skills, qualities and projects of a developer',
    skillsUsed: [
      skills.TypeScript,
      skills.React,
      skills.NextJS,
      skills.TailwindCSS,
    ],
    previewImgURL: '/projects/preview.png',
  },
  {
    title: 'Custom Developer Portfolio',
    summary:
      'A website tailored to showcasing the skills, qualities and projects of a developer',
    skillsUsed: [
      skills.TypeScript,
      skills.React,
      skills.NextJS,
      skills.TailwindCSS,
    ],
    previewImgURL: '/projects/preview.png',
  },
];
