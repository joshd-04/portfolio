import BlueGradientText from '@/components/blueGradientText';
import ProjectPreview from '@/components/projectPreview';
import projects from '@/edit_this_data/projects';

export default function BestProjects() {
  return (
    <div className="w-full mt-48" id="featured-projects">
      <div className="w-[70dvw] md:w-[70dvw] max-w-[1000px] mx-auto mt-16 flex flex-col text-white">
        <div className="  mb-0 xl:mb-4 text-center">
          <h1 className="text-4xl font-black mb-2">
            <BlueGradientText style={{ fontWeight: 900 }}>
              Featured
            </BlueGradientText>{' '}
            projects
          </h1>
          <p className="font-normal text-gray-400">
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
