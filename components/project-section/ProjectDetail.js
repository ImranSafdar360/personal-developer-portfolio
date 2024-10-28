'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
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
    <Container className='flex flex-col gap-[120px] pt-[120px]'>
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto flex flex-col gap-[40px]"
        >
          <h1 className="text-[92px] leading-[95px] font-antonSc text-center">{project.title}</h1>
          <div className="relative w-full h-[600px] rounded-[30px] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="transition-transform duration-300 hover:scale-105"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className="text-[40px] leading-[45px] font-roboto font-extrabold capitalize text-start">{project.tagline}{project.tagline}</p>
        </motion.header>

        <main className="container mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-between gap-10 mb-[120px]"
          >
            <h2 className="w-[40%] text-[40px] font-anton">Project Overview:</h2>
            <div className='w-[60%] mt-2 flex flex-col gap-[30px]'>
              <p className="text-[22px] leading-[28px] text-secondary-text">{project.description} {project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <button className='px-[20px] py-[12px] rounded-[30px] bg-secondary-bg text-black cursor-pointer' key={index}>{tech}</button>
                ))}
              </div>
              <div> <h3 className="text-[27px] font-anton mb-4">Key Features</h3>
                <ul className="list-disc list-inside">
                  {project.features.map((feature, index) => (
                    <li className='text-[22px] font-lato leading-[26px] text-secondary-text' key={index}>{feature}</li>
                  ))}
                </ul></div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-[120px]"
          >
            <h2 className="text-[40px] font-anton mb-[60px]">Project Gallery:</h2>
            <BentoGrid projects={projects} />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-[40px] font-anton mb-6">Ready to Explore?</h2>
            <div className="flex justify-center gap-5">
                <Link href={project.liveLink} className="flex items-center gap-2">
                 <Button title="View Live Project" classes='px-[25px] py-[15px]' />
                </Link>
                <Link href={project.sourceCode} className="flex items-center gap-2">
                <Button title="View Source Code" classes='px-[25px] py-[15px]' />
                </Link>
            </div>
          </motion.section>
        </main>

        <Section>
          <div className='w-full flex justify-between items-center'>
            <div className='w-[70%] flex flex-col gap-[5px] mb-[60px]'>
            <p className='text-[24px] font-roboto text-yellow-400'>Case Studies.</p>
            <h1 className='text-[72px] leading-[73px] font-antonSc text-whole-text mb-[8px]'>Other Works</h1>
            </div>
            <Link href='/projects'>
                <Button title="View All" classes='px-[25px] py-[15px]' />
                </Link>
          </div>
        <SuggestedProjects projects={suggestedProjects} limit={8} />
      </Section>

      <Section>
        <CallToAction />
      </Section>

    </Container>
  )
}

export default ProjectDetail;
