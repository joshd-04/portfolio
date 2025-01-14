import ProjectPreview from '@/components/projectPreview';
import projects from '@/edit_this_data/projects';

export default function BestProjects() {
  return (
    <div className="w-full" id="featured-projects">
      <div className="w-[70dvw] md:w-[50%] place-self-center mt-16 flex flex-col ">
        <h1 className="text-4xl text-white font-bold mb-0 xl:mb-4 text-center md:text-start">
          Featured projects
        </h1>
        <div className="flex flex-col h-auto gap-24 mt-12 xl:gap-0 xl:mt-12 xl:inline">
          {projects.map((project, i) => (
            <ProjectPreview project={project} key={i} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
