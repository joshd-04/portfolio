'use client';

import skillsSummary from '@/edit_this_data/skillset';
import { Skillset } from '@/definitions';
import SkillTab from './skillsTab';

function TableRow({ skillset }: { skillset: Skillset }) {
  return (
    <div className="flex flex-row justify-start gap-2 bg-gray-800 mb-2 last-of-type:mb-0 rounded-md px-2 py-0.5 w-fit">
      <p className="w-24 md:w-32 truncate my-auto px-2 text-base md:text-lg">
        {skillset.title}
      </p>
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
    <div className="bg-black pl-4 pr-4 py-4 rounded-xl drop-shadow-2xl text-white w-max scale-[0.65] md:scale-[1] ">
      {data.map((skillset, i) => (
        <TableRow skillset={skillset} key={i} />
      ))}
    </div>
  );
}
