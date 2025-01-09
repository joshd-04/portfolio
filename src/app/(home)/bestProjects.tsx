import ProjectPreview from '@/components/projectPreview';
import { projects } from '@/data';
import Link from 'next/link';

export default function BestProjects() {
  return (
    <div className="w-full" id="favourite-projects">
      <div className="w-[70dvw] md:w-[50%] place-self-center mt-16 flex flex-col ">
        <h1 className="text-4xl text-white font-bold mb-0 xl:mb-4 text-center md:text-start">
          My favourite projects
        </h1>
        <div className="flex flex-col h-auto gap-24 mt-12 xl:gap-0 xl:mt-12 xl:inline">
          {projects.map((project, i) => (
            <ProjectPreview project={project} key={i} i={i} />
          ))}
        </div>
        <Link
          href="/projects"
          className="w-max mt-12 xl:mt-0 py-4 px-8 bg-orange-500 text-black rounded-md font-semibold hover:bg-orange-700 transition-all shadow-lg place-self-center outline outline-2 outline-black hover:outline-orange-500"
        >
          See more projects
        </Link>
      </div>
    </div>
  );
}
