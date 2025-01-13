import { Mastery } from '@/definitions';

const masteryData: Mastery[] = [
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

export default masteryData;
