'use client';

import ProjectPreview from '@/components/projectPreview';
import SkillsTable from '@/components/skillsTable';
import { Project, Skill } from '@/definitions';
import projects from '@/edit_this_data/projects';
import Image from 'next/image';
import { createContext, useEffect, useState } from 'react';

export interface ISkillsTableContext {
  onSkillClick: (skill: Skill) => void;
  enabledFilters: Skill[];
}

export const SkillsTableContext = createContext<ISkillsTableContext | null>(
  null
);

export default function Page() {
  const [isShowFilters, setIsShowFilters] = useState(false);
  const [search, setSearch] = useState('');
  const [projectsList, setProjectsList] = useState(projects);
  const [enabledFilters, setEnabledFilters] = useState<Skill[]>([]);

  // When search query changes, re-filter the projects
  useEffect(() => {
    let filteredProjects = projects;
    if (search.trim().length > 0) {
      filteredProjects = filteredProjects.filter((project) => {
        const title = project.title.toLowerCase();
        const summary = project.summary.toLowerCase();
        const query = search.toLowerCase();
        // const title = project.title.toLowerCase()
        return title.includes(query) || summary.includes(query);
      });
    }

    // When skill filters change, re-filter the projects
    const projectsContainingSkill: Project[] = [];
    if (enabledFilters.length > 0) {
      enabledFilters.forEach((skill) => {
        filteredProjects.forEach((project) => {
          if (
            project.skillsUsed.includes(skill) &&
            !projectsContainingSkill.includes(project)
          ) {
            projectsContainingSkill.push(project);
          }
        });
        filteredProjects = projectsContainingSkill;
      });
    }
    setProjectsList(filteredProjects);
  }, [search, enabledFilters]);

  function handleSkillClick(skill: Skill) {
    setEnabledFilters((prev) => {
      if (prev.includes(skill)) {
        // If filter is enabled, disable it
        return prev.filter((s) => s !== skill);
      } else {
        // If filter is disabled, enable it
        return [...prev, skill];
      }
    });
  }

  return (
    <div className="text-white overflow-x-hidden mb-4 min-h-[90dvh]">
      <h1 className="bg-black/20 w-full text-3xl md:text-6xl py-3 md:py-6 text-white font-bold text-center">
        My Projects
      </h1>
      <div className="w-max px-8 flex flex-col items-center place-self-center justify-center">
        <p className="mb-4">
          Showing {projectsList.length} project
          {projectsList.length === 1 ? '' : 's'}
        </p>
        {isShowFilters ? (
          <>
            <button
              className=" bg-orange-600 text-black px-3 py-1 rounded-md text-sm sm:text-base"
              onClick={() => setIsShowFilters(false)}
            >
              Hide search & filters
            </button>
            <div className="flex flex-col justify-center items-center lg:flex lg:flex-row lg:items-start lg:place-items-center lg:justify-center lg:gap-48 lg:transform-gpu lg:translate-x-24">
              <div className="relative w-[50%] md:w-[80%] lg:w-[100%] lg:mt-10">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-black/20 border border-black rounded-full w-full"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Image
                  src="/projects/search.png"
                  alt="Search"
                  width={50}
                  height={50}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                />
              </div>
              <div>
                <p className="mb-[-3rem] sm:mb-0 mt-4 place-self-center">
                  Select the filters you want to enable
                </p>

                <SkillsTableContext.Provider
                  value={{ onSkillClick: handleSkillClick, enabledFilters }}
                >
                  <SkillsTable />
                </SkillsTableContext.Provider>
              </div>
            </div>
          </>
        ) : (
          <button
            className=" bg-orange-600 text-black px-3 py-1 rounded-md text-sm sm:text-base"
            onClick={() => setIsShowFilters(true)}
          >
            Show search & filters
          </button>
        )}
      </div>
      <div className="w-[70dvw] md:w-[50%] place-self-center mt-2 flex flex-col ">
        <div className="flex flex-col h-auto gap-24 mt-12 xl:gap-0 xl:mt-12 xl:inline">
          {projectsList.map((project, i) => (
            <ProjectPreview project={project} i={i} key={i} />
          ))}
          {projectsList.length === 0 && (
            <p className="place-self-center text-lg">No projects found 🙃</p>
          )}
        </div>
      </div>
    </div>
  );
}
