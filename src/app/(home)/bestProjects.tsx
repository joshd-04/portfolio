import ProjectPreview from '@/components/projectPreview';
import { projects } from '@/data';
import Link from 'next/link';

export default function BestProjects() {
  return (
    <div className="w-full">
      <div className="w-[50%] place-self-center mt-16 flex flex-col">
        <h1 className="text-4xl text-white font-bold mb-24">
          My favourite projects
        </h1>
        {projects.map((project, i) => (
          <ProjectPreview project={project} key={i} i={i} />
        ))}
        <Link
          href="/projects"
          className="w-max py-4 px-8 bg-orange-500 text-black rounded-md font-semibold hover:bg-orange-700 transition-all shadow-lg place-self-center outline outline-2 outline-black hover:outline-orange-500"
        >
          See more projects
        </Link>
      </div>
    </div>
  );
}
