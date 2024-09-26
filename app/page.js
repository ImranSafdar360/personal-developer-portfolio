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
import Servies from '@/components/service-section/Servies';
import ServiceSection from '@/components/service-section/ServiceSection';

const Home = () => {
  return (
    <Container>

      <Section className="pt-0">
        <HeroSection />
        <HeroImage />
      </Section>

      <Section className="pt-[90px]">
        <AboutMe />
      </Section>
      
      <Section className="pt-[90px]">
        <ProjectSection />
      </Section>

      <Section className="pt-[90px]">
        <ServiceSection />
      </Section>

      <Section className="pt-[90px]">
        <SkillSection />
      </Section>

      <Section className="py-[90px]">
        <CallToAction />
      </Section>
      
    </Container>
  )
}

export default Home
