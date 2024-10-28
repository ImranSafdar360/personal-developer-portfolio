import React from 'react';
import projects from '@/data/projectsData';
import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/project-section/ProjectDetail';

export default function ProjectDetails({ params }) {
  const { id } = params;
  const project = projects.find((project) => project.id === id);

  if (!project) {
    notFound(); // Render 404 page if project is not found
  }



  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
     <ProjectDetail project={project} />
    </div>
  );
}

// Use this to generate static params for dynamic routing
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id, // Generates static paths like /projects/1, /projects/2, etc.
  }));
}
