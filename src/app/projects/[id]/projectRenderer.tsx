'use client';

import { Project } from '@/definitions';
import projects from '@/edit_this_data/projects';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProjectDetails from './projectDetails';
import ProjectDetailsSkeleton from './projectDetailsSkeleton';
import { Metadata } from 'next';

export default function ProjectRenderer({ metadata }: { metadata: Metadata }) {
  const [project, setProject] = useState<Project | undefined>(undefined);

  if (metadata) {
    // pass
  }

  const id: string | string[] | undefined | number | null = useParams()?.id;

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

  // // When project changes, change the Metadata
  // useEffect(() => {
  //   console.log(project);
  //   metadata.title = project?.title || 'Best Portfolio ever';
  //   metadata.description = project?.summary || 'Learn more about me!';
  // }, [project]);

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
