'use client';

import { Project } from '@/definitions';
import projects from '@/edit_this_data/projects';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProjectDetails from './projectDetails';
import ProjectDetailsSkeleton from './projectDetailsSkeleton';

export default function Page() {
  const [project, setProject] = useState<Project | undefined>(undefined);

  const id: string | string[] | undefined | number = useParams().id;

  // Get the project on mount
  useEffect(() => {
    try {
      const projectId = Number(id);
      const proj = projects.filter((project) => project.id === projectId);
      if (proj.length !== 1) {
        setProject(undefined);
      } else setProject(proj[0]);
    } catch {
      setProject(undefined);
    }
  }, [id]);

  return (
    <>
      {project ? (
        <ProjectDetails project={project} />
      ) : (
        // <ProjectDetailsSkeleton  />
        <ProjectDetailsSkeleton />
        // <h1>Loading</h1>
      )}
    </>
  );
}
