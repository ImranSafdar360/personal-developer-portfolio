/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Button from '../Button';
import SelectedWork from './SelectedProjects';
import projects from '@/data/projectsData';
import Link from 'next/link';


const ProjectSection = () => {
  return (
    <div className='w-full h-full min-h-[100vh] flex flex-col justify-between gap-[60px] lg:gap-[120px]'>
      <div className='w-full flex flex-col xl:flex-row justify-between items-start'>
     <div className='flex flex-col justify-start items-start gap-[8px]'>
     <p className="text-[20px] md:text-[24px] font-anton text-yellow-400">My Work.</p>
     <h1 className="text-[36px] md:text-[48px] lg:text-[64px] xl:text-[72px] leading-none font-antonSc text-whole-text mb-2">Case studies</h1>
     </div>
        <p className="w-full lg:w-[520px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-latoRegular leading-relaxed text-secondary-text">Building visionary projects with seamless, interactive features. Each project is a step forward in modern web development.</p>
      </div>
      <SelectedWork projects={projects} limit={4} />
      <div className='w-full flex justify-start lg:justify-end items-center'>
      <Link href="/projects">
          <Button title="View More Projects" classes="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 text-[14px] md:text-[16px] lg:text-[18px]" />
        </Link>
      </div>
    </div>
  )
}

export default ProjectSection;
