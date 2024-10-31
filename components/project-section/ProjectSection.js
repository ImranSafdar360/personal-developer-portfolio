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
    <div className='w-full h-full min-h-[100vh] flex flex-col justify-between gap-[120px]'>
      <div className='w-full flex justify-between items-start'>
     <div className='flex flex-col justify-start items-start gap-[8px]'>
     <p className='text-[24px] font-anton text-yellow-400'>My Work.</p>
     <h1 className='text-[72px] leading-[73px] font-antonSc text-whole-text mb-[8px]'>Case studies</h1>
     </div>
        <p className='text-[22px] font-roboto font-medium leading-[27px] text-secondary-text pt-[45px]'>Building visionary projects with seamless, interactive <br /> features. Each project is a step forward in <br /> modern web development.</p>
      </div>
      <SelectedWork projects={projects} limit={4} />
      <div className='w-full flex justify-end items-center'>
      <Link href='/projects'>
        <Button title="View More Projects" classes="px-[30px] py-[20px]" />
        </Link>
      </div>
    </div>
  )
}

export default ProjectSection;
