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
  // sm: 640 md: 768 lg: 1024 xl: 1280 2xl: 1536
  const isXlBreakpointMet = window.matchMedia('(min-width: 1280px)').matches;
  return (
    <div className="relative h-auto w-auto flex flex-col xl:flex-row xl:odd:flex-row-reverse xl:mb-24 shrink-0 grow-0 xl:justify-end">
      <Image
        src={project.previewImgURL}
        alt={`A preview image of ${project.title}`}
        width={527}
        height={400}
        className="rounded-lg hidden xl:flex"
        objectFit="cover"
      />
      {/* className="w-[60%] h-max bg-gray-950 px-8 py-6 rounded-lg outline-black outline outline-2 mb-24 shadow-2xl absolute top:0 translate-y-[50%] selection:bg-white selection:text-gray-950 " */}

      <div
        className="w-full xl:w-[60%] h-max bg-gray-950 xl:px-8 xl:py-6 rounded-lg outline-black outline outline-2 xl:mb-24 shadow-2xl xl:absolute xl:transform xl:top-[50%] xl:translate-y-[-50%] selection:bg-white selection:text-gray-950"
        style={{
          left: odd && isXlBreakpointMet ? 0 : undefined,
          right: odd && isXlBreakpointMet ? undefined : 0,
        }}
      >
        <Image
          src={project.previewImgURL}
          alt={`A preview image of ${project.title}`}
          width={527}
          height={400}
          className="rounded-lg block h-auto w-auto xl:hidden"
          objectFit="cover"
        />
        <div className="px-8 py-6 xl:px-0 xl:py-0">
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
    </div>
  );
}
