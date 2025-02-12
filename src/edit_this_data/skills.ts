import { SkillByValue } from '@/definitions';

import cssBigLogo from '../../public/edit_these_assets/skills/css/big.png';
import cssSmallLogo from '../../public/edit_these_assets/skills/css/small.png';

import expressjsBigLogo from '../../public/edit_these_assets/skills/expressjs/big.png';
import expressjsSmallLogo from '../../public/edit_these_assets/skills/expressjs/small.png';

import flaskBigLogo from '../../public/edit_these_assets/skills/flask/big.png';
import flaskSmallLogo from '../../public/edit_these_assets/skills/flask/small.png';

import githubBigLogo from '../../public/edit_these_assets/skills/github/big.png';
import githubSmallLogo from '../../public/edit_these_assets/skills/github/small.png';

import htmlBigLogo from '../../public/edit_these_assets/skills/html/big.png';
import htmlSmallLogo from '../../public/edit_these_assets/skills/html/small.png';

import javascriptBigLogo from '../../public/edit_these_assets/skills/javascript/big.png';
import javascriptSmallLogo from '../../public/edit_these_assets/skills/javascript/small.png';

import typescriptBigLogo from '../../public/edit_these_assets/skills/typescript/big.png';
import typescriptSmallLogo from '../../public/edit_these_assets/skills/typescript/small.png';

import nextjsBigLogo from '../../public/edit_these_assets/skills/nextjs/big.png';
import nextjsSmallLogo from '../../public/edit_these_assets/skills/nextjs/small.png';

import nodejsBigLogo from '../../public/edit_these_assets/skills/nodejs/big.png';
import nodejsSmallLogo from '../../public/edit_these_assets/skills/nodejs/small.png';

import postgresBigLogo from '../../public/edit_these_assets/skills/postgresql/big.png';
import postgresSmallLogo from '../../public/edit_these_assets/skills/postgresql/small.png';

import pythonBigLogo from '../../public/edit_these_assets/skills/python/big.png';
import pythonSmallLogo from '../../public/edit_these_assets/skills/python/small.png';

import reactBigLogo from '../../public/edit_these_assets/skills/react/big.png';
import reactSmallLogo from '../../public/edit_these_assets/skills/react/small.png';

import tailwindBigLogo from '../../public/edit_these_assets/skills/tailwindcss/big.png';
import tailwindSmallLogo from '../../public/edit_these_assets/skills/tailwindcss/small.png';

import vercelBigLogo from '../../public/edit_these_assets/skills/vercel/big.png';
import vercelSmallLogo from '../../public/edit_these_assets/skills/vercel/small.png';

import CSharpBigLogo from '../../public/edit_these_assets/skills/c-sharp/big.png';
import CSharpSmallLogo from '../../public/edit_these_assets/skills/c-sharp/small.png';

import postmanBigLogo from '../../public/edit_these_assets/skills/postman/big.png';
import postmanSmallLogo from '../../public/edit_these_assets/skills/postman/small.png';

import netlifyBigLogo from '../../public/edit_these_assets/skills/netlify/big.png';
import netlifySmallLogo from '../../public/edit_these_assets/skills/netlify/small.png';

import gitBigLogo from '../../public/edit_these_assets/skills/git/big.png';
import gitSmallLogo from '../../public/edit_these_assets/skills/git/small.png';

import vscodeBigLogo from '../../public/edit_these_assets/skills/vscode/big.png';
import vscodeSmallLogo from '../../public/edit_these_assets/skills/vscode/small.png';

import pygameBigLogo from '../../public/edit_these_assets/skills/pygame/big.png';
import pygameSmallLogo from '../../public/edit_these_assets/skills/pygame/small.png';

import sqlBigLogo from '../../public/edit_these_assets/skills/sql/big.png';
import sqlSmallLogo from '../../public/edit_these_assets/skills/sql/small.png';

const skills: SkillByValue = {
  CSharp: {
    value: 'C#',
    color: '#68217A',
    bigImage: CSharpBigLogo,
    smallImage: CSharpSmallLogo,
  },
  Python: {
    value: 'Python',
    color: '#306998',
    bigImage: pythonBigLogo,
    smallImage: pythonSmallLogo,
  },
  JavaScript: {
    value: 'JavaScript',
    color: '#f0db4f',
    bigImage: javascriptBigLogo,
    smallImage: javascriptSmallLogo,
  },
  TypeScript: {
    value: 'TypeScript',
    color: '#3178c6',
    bigImage: typescriptBigLogo,
    smallImage: typescriptSmallLogo,
  },
  HTML: {
    value: 'HTML',
    color: '#E34C26',
    bigImage: htmlBigLogo,
    smallImage: htmlSmallLogo,
  },
  CSS: {
    value: 'CSS',
    color: '#2565ae',
    bigImage: cssBigLogo,
    smallImage: cssSmallLogo,
  },
  SQL: {
    value: 'SQL',
    color: '#00758f',
    bigImage: sqlBigLogo,
    smallImage: sqlSmallLogo,
  },
  React: {
    value: 'React',
    color: '#61dbfb',
    bigImage: reactBigLogo,
    smallImage: reactSmallLogo,
  },
  NextJS: {
    value: 'NextJS',
    color: '#000000',
    bigImage: nextjsBigLogo,
    smallImage: nextjsSmallLogo,
  },
  TailwindCSS: {
    value: 'TailwindCSS',
    color: '#38bdf8',
    bigImage: tailwindBigLogo,
    smallImage: tailwindSmallLogo,
  },
  NodeJS: {
    value: 'NodeJS',
    color: '#3c873a',
    bigImage: nodejsBigLogo,
    smallImage: nodejsSmallLogo,
  },
  ExpressJS: {
    value: 'ExpressJS',
    color: '#212121',
    bigImage: expressjsBigLogo,
    smallImage: expressjsSmallLogo,
  },
  TKinter: {
    value: 'TKinter',
    color: '#189dff',
    bigImage: null,
    smallImage: null,
  },
  Flask: {
    value: 'Flask',
    color: '#666666',
    bigImage: flaskBigLogo,
    smallImage: flaskSmallLogo,
  },
  Pygame: {
    value: 'Pygame',
    color: '#6af02a',
    bigImage: pygameBigLogo,
    smallImage: pygameSmallLogo,
  },
  PostgreSQL: {
    value: 'PostgreSQL',
    color: '#336791',
    bigImage: postgresBigLogo,
    smallImage: postgresSmallLogo,
  },
  VSCode: {
    value: 'VSCode',
    color: '#0085d0',
    bigImage: vscodeBigLogo,
    smallImage: vscodeSmallLogo,
  },
  Git: {
    value: 'Git',
    color: '#f05033',
    bigImage: gitBigLogo,
    smallImage: gitSmallLogo,
  },
  GitHub: {
    value: 'GitHub',
    color: '#1b1f23',
    bigImage: githubBigLogo,
    smallImage: githubSmallLogo,
  },
  Netlify: {
    value: 'Netlify',
    color: '#2dbab9',
    bigImage: netlifyBigLogo,
    smallImage: netlifySmallLogo,
  },
  Vercel: {
    value: 'Vercel',
    color: '#000000',
    bigImage: vercelBigLogo,
    smallImage: vercelSmallLogo,
  },
  PostMan: {
    value: 'PostMan',
    color: '#ed6d3f',
    bigImage: postmanBigLogo,
    smallImage: postmanSmallLogo,
  },
};
export default skills;
