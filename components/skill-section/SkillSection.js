/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { DiGit } from 'react-icons/di';
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiRedux, SiTailwindcss } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import Marquee from '../shared-components/ParralexText';

const skills = [
  { name: 'React', icon: <SiReact size={60} color="#ffffff" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={60} color="#ffffff" /> },
  { name: 'JavaScript', icon: <SiJavascript size={60} color="#ffffff" /> },
  { name: 'TypeScript', icon: <SiTypescript size={60} color="#ffffff" /> },
  { name: 'Redux', icon: <SiRedux size={60} color="#ffffff" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={60} color="#ffffff" /> },
  { name: 'Git', icon: <DiGit size={60} color="#ffffff" /> },
  { name: 'Github', icon: <FaGithub size={60} color="#ffffff" /> },
];


const SkillSection = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-10'>
      {/* <Marquee /> */}
      <div className='flex flex-col justify-center items-center gap-10'>
      <h1 className='text-[48px] leading-[42px] font-antonSc uppercase text-whole-text'>The Skillset Behind the Vision.</h1>
        <p className='text-[20px] font-lato font-medium leading-[26px] text-secondary-text'>Turning ideas into reality with a dynamic mix of creativity and expertise.</p>
      </div>
     <div className='w-[70%] flex flex-wrap justify-center items-center gap-x-10 gap-y-5'>
      {skills.map((logo, index) => (
        <div key={index}>
          {logo.icon}
        </div>
      ))}
     </div>
     <Marquee />
    </div>
  )
}

export default SkillSection;
