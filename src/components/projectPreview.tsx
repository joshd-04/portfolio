import { Project } from '@/definitions';
import SkillTab from './skillsTab';
import Image from 'next/image';

export default function ProjectPreview({
  project,
  i,
}: {
  project: Project;
  i: number;
}) {
  const odd = i % 2 != 0;
  return (
    <div className="relative flex flex-row odd:flex-row-reverse shrink-0 grow-0 mb-24">
      <Image
        src={project.previewImgURL}
        alt={`A preview image of ${project.title}`}
        width={527}
        height={400}
        className="rounded-lg"
        objectFit="cover"
      />
      <div
        className="w-[60%] h-max bg-gray-950 px-8 py-6 rounded-lg outline-black outline outline-2 mb-24 shadow-2xl absolute top:0 translate-y-[50%] selection:bg-white selection:text-gray-950 "
        style={{
          left: odd ? 0 : undefined,
          right: odd ? undefined : 0,
        }}
      >
        <div className="cursor-pointer">
          <h1 className="text-white text-2xl font-semibold mb-4">
            {project.title}
          </h1>
          <p className="text-gray-200 mb-2">{project.summary}</p>
        </div>
        <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 w-full py-2">
          {project.skillsUsed.map((skill, i) => (
            <SkillTab skill={skill} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
