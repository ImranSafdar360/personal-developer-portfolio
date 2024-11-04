"use client";
import Container from '@/components/Container'
import CallToAction from '@/components/footer-section/CallToAction'
import SelectedWork from '@/components/project-section/SelectedProjects';
import Section from '@/components/Section'
import projects from '@/data/projectsData';
import React from 'react'

const Projects = () => {
  return (
   <Container className='flex flex-col gap-[80px]'>

    <Section className='pt-[120px] xl:pt-[80px] pb-0 lg:pb-[30px]'>
      <div className='w-full flex flex-col justify-center items-center gap-[10px] lg:gap-[15px]'>
        <p className='text-[20px] font-latoRegular text-yellow-400'>Case Studies</p>
        <h1 className='w-full md:max-w-[500px] lg:max-w-[800px] xl:max-w-[800px] font-anton text-[28px] lg:text-[58px] xl:text-[72px] md:text-[42px] md:leading-[52px] leading-[32px] lg:leading-[64px] xl:leading-[78px] text-center'>Browse our solutions across industries</h1>
        <p className='w-full md:max-w-[500px] lg:max-w-[800px] xl:max-w-[800px] font-robotoRegular text-center text-[14px] md:text-[16px] lg:text-[20px] xl:text-[22px] text-secondary-text'>Transform your site into a modern masterpiece with vibrant animations, functional elements, and pixel perfect accuracy.</p>
      </div>
    </Section>

    <Section>
    <SelectedWork projects={projects} limit={projects.length} />
    </Section>

    <Section>
        <CallToAction />
      </Section>

   </Container>
  )
}

export default Projects;
