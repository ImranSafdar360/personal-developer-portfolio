'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Section from '../Section';
import Container from '../Container';
import CallToAction from '../footer-section/CallToAction';
import Button from '../Button';
import SuggestedProjects from './SuggestedProjects';
import projects from '@/data/projectsData';
import BentoGrid from './ProjectBentoGrid';

const ProjectDetail = ({ project }) => {
  const suggestedProjects = projects.filter((p) => p.id !== project.id);
  return (
    <Container className='flex flex-col gap-10 md:gap-[120px] pt-[120px]'>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto flex flex-col gap-5 md:gap-[40px]"
      >
        <h1 className="w-full text-[28px] lg:text-[64px] md:text-[52px] md:leading-[55px] leading-[32px] lg:leading-[67px] xl:text-[92px] xl:leading-[95px] font-antonSc text-center">{project.title}</h1>
        <div className="relative w-full h-[300px] md:h-[600px] rounded-[15px] md:rounded-[30px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="transition-transform duration-300 hover:scale-105"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p className="text-xl md:text-[40px] md:leading-[45px] font-robotoBold capitalize text-start">{project.tagline}</p>
      </motion.header>

      <main className="container mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 mb-10 lg:mb-[120px]"
        >
          <h2 className="w-full lg:w-[40%] text-2xl md:text-[40px] font-anton">Project Overview:</h2>
          <div className='w-full lg:w-[60%] mt-2 flex flex-col gap-6 md:gap-[30px]'>
            <p className="text-base md:text-[22px] md:leading-[28px] text-secondary-text">{project.description} {project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <button className='px-4 py-2 rounded-[30px] bg-secondary-bg text-black cursor-pointer' key={index}>{tech}</button>
              ))}
            </div>
            <div> <h3 className="text-lg md:text-[27px] font-anton mb-4">Key Features</h3>
              <ul className="list-disc list-inside">
                {project.features.map((feature, index) => (
                  <li className='text-sm md:text-[22px] font-latoRegular leading-6 md:leading-[26px] text-secondary-text' key={index}>{feature}</li>
                ))}
              </ul></div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10 md:mb-[120px]"
        >
          <h2 className="text-2xl md:text-[40px] font-anton mb-8 md:mb-[60px] text-center lg:text-start">Project Gallery:</h2>
          <BentoGrid images={project.images} />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-[40px] font-anton mb-4 md:mb-6">Ready to Explore?</h2>
          <div className="flex flex-row justify-center gap-2 md:gap-5">
            <a target='_blank' href={project.liveLink} className="flex items-center gap-2">
              <Button title="View Live Project" classes="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 text-[14px] md:text-[16px] lg:text-[18px]" />
            </a>
            { project.sourceCode && (
              <a target='_blank' href={project.sourceCode} className="flex items-center gap-2">
              <Button title="View Source Code" classes="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 text-[14px] md:text-[16px] lg:text-[18px]" />
            </a>
            )}
          </div>
        </motion.section>
      </main>

      {suggestedProjects.length > 0 && (
        <Section>
          <div className='w-full flex flex-row justify-between items-center'>
            <div className='w-[60%] md:w-[70%] flex flex-col gap-2 md:gap-[5px] mb-4 md:mb-[60px]'>
              <p className='text-lg md:text-[24px] font-antonSc text-yellow-400'>Case Studies.</p>
              <h1 className='text-3xl md:text-[72px] leading-8 md:leading-[73px] font-antonSc text-whole-text mb-2 md:mb-[8px]'>Other Works</h1>
            </div>
            <Link href='/projects'>
              <Button title="View All" classes="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 text-[14px] md:text-[16px] lg:text-[18px]" />
            </Link>
          </div>
          <SuggestedProjects projects={suggestedProjects} limit={8} />
        </Section>
      )}

      <Section>
        <CallToAction />
      </Section>

    </Container>
  )
}

export default ProjectDetail;
