import ProjectPreview from '@/components/projectPreview';
import projects from '@/edit_this_data/projects';

export default function BestProjects() {
  return (
    <div className="w-full" id="featured-projects">
      <div className="w-[70dvw] md:w-[70dvw] max-w-[1000px] mx-auto mt-16 flex flex-col text-white">
        <div className="  mb-0 xl:mb-4 text-center xl:text-start">
          <h1 className="text-4xl font-bold mb-2">Featured projects</h1>
          <p className="font-light">
            Click or tap a project to see more details
          </p>
        </div>
        <div className="flex flex-col h-auto gap-24 mt-12 xl:gap-0 xl:mt-12 xl:inline">
          {projects.map((project, i) => (
            <ProjectPreview project={project} key={i} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
