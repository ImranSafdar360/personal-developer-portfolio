"use client";
import Container from '@/components/Container'
import CallToAction from '@/components/footer-section/CallToAction'
import HeroImage from '@/components/hero-section/HeroImage';
import Section from '@/components/Section'
import React from 'react'

const About = () => {
  return (
   <Container className='flex flex-col gap-[120px]'>

    <Section className='pt-[80px]'>
      <div className='w-full flex flex-col justify-center items-center gap-[15px]'>
        <p className='text-[20px] font-lato font-normal text-yellow-400'>Who I Am
        </p>
        <h1 className='font-anton text-[72px] leading-[78px] text-center'>Browse our solutions <br />across industries</h1>
        <p className='font-roboto font-medium text-center text-[22px] text-secondary-text'>Transform your site into a modern masterpiece with vibrant animations,<br /> functional elements, and pixel perfect accuracy.</p>
      </div>
    </Section>

    <Section className='-mt-[50px]'>
    <HeroImage />
    </Section>

    <Section>
        <CallToAction />
      </Section>

   </Container>
  )
}

export default About;
