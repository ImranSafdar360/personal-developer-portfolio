/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react'
import Container from '@/components/Container';
import Section from '@/components/Section';
import HeroSection from '@/components/hero-section/HeroSection';
import HeroImage from '@/components/hero-section/HeroImage';
import AboutMe from '@/components/about-section/AboutMe';
import ProjectSection from '@/components/project-section/ProjectSection';
import SkillSection from '@/components/skill-section/SkillSection';
import CallToAction from '@/components/footer-section/CallToAction';
import ServiceSection from '@/components/service-section/ServiceSection';


const Home = () => {
  return (
    <Container className='flex flex-col gap-[30px] lg:gap-[100px]'>

      <Section>
        <HeroSection />
        <HeroImage heroImage={`/images/Hero-Section-Banner-2.jpg`} />
      </Section>

      <Section>
        <AboutMe />
      </Section>
      
      <Section>
        <ProjectSection />
      </Section>

      <Section>
        <ServiceSection />
      </Section>

      <Section>
        <SkillSection />
      </Section>

      <Section>
        <CallToAction />
      </Section>
      
      {/* <div className='fixed bottom-5 right-5 z-[999]'>
      <RotatingLogo />
      </div> */}
    </Container>
  )
}

export default Home
