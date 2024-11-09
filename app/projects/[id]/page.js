import React from 'react';
import projects from '@/data/projectsData';
import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/project-section/ProjectDetail';

export default function ProjectDetails({ params }) {
  const { id } = params;
  const project = projects.find((project) => project.id === id);

  if (!project) {
    notFound();
  }



  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
     <ProjectDetail project={project} />
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
