import { Skillset } from '@/definitions';
import skills from './skills';

const skillsSummary: Skillset[] = [
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
export default skillsSummary;
