'use client';

import { skillsSummary } from '@/data';
import { Skillset } from '@/definitions';
import SkillTab from './skillsTab';

function TableRow({ skillset }: { skillset: Skillset }) {
  return (
    <div className="flex flex-row justify-start gap-2 text-lg bg-gray-800 mb-2 last-of-type:mb-0 rounded-md px-2 py-0.5 w-fit ">
      <p className="w-32 truncate my-auto px-2">{skillset.title}</p>
      <div className="relative w-px bg-white/60 my-2"></div>

      <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 max-w-96 py-2">
        {skillset.skills.map((skill, i) => (
          <SkillTab skill={skill} key={i} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsTable() {
  const data = skillsSummary;

  return (
    <div className="bg-black pl-4 pr-6 py-4 rounded-xl drop-shadow-2xl text-white w-max">
      {data.map((skillset, i) => (
        <TableRow skillset={skillset} key={i} />
      ))}
    </div>
  );
}
