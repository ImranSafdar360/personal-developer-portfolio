/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import Container from '@/components/Container'
import CallToAction from '@/components/footer-section/CallToAction'
import HeroImage from '@/components/hero-section/HeroImage';
import Section from '@/components/Section'
import Link from 'next/link';
import Button from '@/components/Button'
import React from 'react'
import Method from '@/components/about-section/ProjectProcess';

const About = () => {
  return (
    <Container className='flex flex-col gap-[60px]'>

      <Section className='pt-[80px]'>
        <div className='w-full flex flex-col justify-center items-center gap-[15px]'>
          {/* <p className='text-[20px] font-lato font-normal text-yellow-400'>Who I Am
          </p> */}
          <h1 className='font-anton text-[72px] leading-[78px] text-center'>Browse our solutions <br />across industries</h1>
          <p className='font-roboto font-medium text-center text-[22px] text-secondary-text'>Transform your site into a modern masterpiece with vibrant animations,<br /> functional elements, and pixel perfect accuracy.</p>
        </div>
      </Section>

      <Section className=''>
        <HeroImage />
      </Section>

      <Section className='w-full flex justify-center items-center'>
        <div className='flex justify-center items-center w-[80%]'>
          <h1 className='font-lato text-[26px] leading-[32px] text-center text-whole-text font-bold'>
            I am your go-to solution for building modern, responsive, and dynamic websites and web applications. With a deep focus on React.js and cutting-edge frontend development, I bring your ideas to life with seamless user experiences and high-performance interfaces. Whether you're a startup or an established business, I'll help you create a tailored, scalable, and visually appealing web solution that drives growth and engagement.</h1>
        </div>
      </Section>

      <Section>
        <div className="w-full flex justify-center items-center gap-[30px]">
          {/* Left Section: Image */}
          <div className="w-[30%]">
            <div className="w-[330px] h-[400px] rounded-[30px] overflow-hidden shadow-lg">
              <img
                src="https://via.placeholder.com/300"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Section: Description */}
          <div className="w-[50%] flex flex-col gap-[30px]">
            <h1 className="text-[28px] font-roboto font-light leading-[32px] text-secondary-text">
              Imran Safdar-<span className='text-whole-text font-bold'>Frontend developer</span> specialized in <span className='text-whole-text font-bold'>React</span> & <span className='text-whole-text font-bold'>Next.js</span>. I create next-gen digital experiences, blending <span className='text-whole-text font-bold'>functionality</span> into striking <span className='text-whole-text font-bold'>animations</span>. Passionate about modern web <span className='text-whole-text font-bold'>design</span>, I always try to deliver creative and precise solutions in every project.
            </h1>
            <Link href='/contact'>
              <Button title='Get in Touch' classes='px-[30px] py-[15px]' />
            </Link>
          </div>
        </div>
      </Section>

      {/* <Section className='w-full flex justify-center items-center'>
        <Method />
      </Section> */}

      {/* <Section>
        <div class="container relative h-[300vh]">
          <div class="slides overflow-hidden flex sticky top-0 left-0 w-[100vw] h-[100vh]">
            
            <div class="slide w-full h-screen flex-shrink-0 flex justify-center items-center relative">
            {servicesData.map((service, index) => (
        <SpotlightCard className="custom-spotlight-card cursor-pointer border-none !p-0 !m-0">
        <div key={index} className='w-[560px] h-[290px] flex justify-center items-center rounded-[40px] bg-[#1C1C20] px-[36px]'>
           <div className='flex gap-[20px] justify-center items-start'>
           <h3 className='text-[28px] font-anton leading-[42px] text-whole-text'>0{index}</h3>
          <div className='flex flex-col gap-[20px]'>
            <h2 className='text-[36px] font-anton leading-[42px] text-whole-text'>{service.title}</h2>
            <p className='text-[18px] font-roboto font-medium leading-[24px] text-secondary-text'>{service.content}</p>
          </div>
           </div>
        </div>
        </SpotlightCard>
      ))}
            </div>
          
          </div>
        </div>
      </Section> */}

      <Section>
        <CallToAction />
      </Section>

    </Container>
  )
}

export default About;
