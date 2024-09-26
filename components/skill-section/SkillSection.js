import React from 'react'
import SpotlightCard from '../shared-components/SpotlightCard'
import Button from '../Button'
import Skills from './Skills';

const skills = [
  {
    category: 'Core Technologies',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript'
    ]
  },
  {
    category: 'Frameworks and Libraries',
    skills: [
      'React',
      'Next.js',
      'Redux',
      'MUI (Material-UI)'
    ]
  },
  {
    category: 'Styling and Design',
    skills: [
      'Tailwind CSS',
      'Bootstrap',
      'Responsive Design'
    ]
  },
  {
    category: 'Version Control',
    skills: [
      'Git',
      'Github'
    ]
  },
  {
    category: 'Animation',
    skills: [
      'GSAP',
      'ScrollTrigger',
      'Lenis',
      'Locomotive'
    ]
  },
  {
    category: 'APIs',
    skills: [
      'API Integration',
      'RESTful API'
    ]
  }
];

const SkillSection = () => {
  return (
    <div className='w-full h-full flex flex-col justify-between gap-20'>
      <div className='w-full max-w-[50%] flex flex-col gap-10'>
      <h1 className='text-[85px] leading-[87px] font-antonSc uppercase text-whole-text'>What I Do.</h1>
        <p className='text-[28px] font-lato font-medium leading-[36px] text-secondary-text'>My obsession is to deliver a digital experience
          that not only serves a great purpose, but
          give your business an unfair advantage.</p>
      </div>
     <Skills />
    </div>
  )
}

export default SkillSection;
