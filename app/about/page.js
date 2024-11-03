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

const About = () => {
  return (
    <Container className='flex flex-col gap-[60px]'>
      <Section className='pt-[80px]'>
        <div className='w-full flex flex-col justify-center items-center gap-[15px]'>
          <h1 className='w-full md:max-w-[500px] lg:max-w-[600px] xl:max-w-[800px] font-anton text-[48px] md:text-[72px] leading-[58px] md:leading-[78px] text-center'>Empowering Brands with Innovative Digital Solutions</h1>
          <p className='w-full md:max-w-[500px] lg:max-w-[600px] xl:max-w-[800px] font-roboto font-medium text-center text-[18px] md:text-[22px] text-secondary-text'>Passionate about transforming ideas into engaging experiences through innovative design and expert development, empowering brands to thrive in the digital landscape.</p>
        </div>
      </Section>

      <Section>
        <HeroImage />
      </Section>

      <Section className='w-full flex justify-center items-center'>
        <div className='flex justify-center items-center w-[90%] md:w-[80%]'>
          <h1 className='font-lato text-[20px] md:text-[26px] leading-[24px] md:leading-[32px] text-center text-whole-text font-bold'>
            I am your go-to solution for building modern, responsive, and dynamic websites and web applications. With a deep focus on React.js and cutting-edge frontend development, I bring your ideas to life with seamless user experiences and high-performance interfaces. Whether you're a startup or an established business, I'll help you create a tailored, scalable, and visually appealing web solution that drives growth and engagement.
          </h1>
        </div>
      </Section>

      <Section>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-[30px]">
          {/* Left Section: Image */}
          <div className="w-full md:w-[30%] flex justify-center">
            <div className="w-[80%] h-[300px] md:h-[400px] rounded-[30px] overflow-hidden shadow-lg">
              <img
                src="https://via.placeholder.com/300"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Section: Description */}
          <div className="w-full md:w-[50%] flex flex-col gap-[30px]">
            <h1 className="text-[20px] md:text-[28px] font-roboto font-light leading-[24px] md:leading-[32px] text-secondary-text">
              Imran Safdar - <span className='text-whole-text font-bold'>Frontend developer</span> specialized in <span className='text-whole-text font-bold'>React</span> & <span className='text-whole-text font-bold'>Next.js</span>. I create next-gen digital experiences, blending <span className='text-whole-text font-bold'>functionality</span> into striking <span className='text-whole-text font-bold'>animations</span>. Passionate about modern web <span className='text-whole-text font-bold'>design</span>, I always try to deliver creative and precise solutions in every project.
            </h1>
            <Link href='/contact'>
              <Button title='Get in Touch' classes='px-[30px] py-[15px]' />
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <CallToAction />
      </Section>
    </Container>
  )
}

export default About;
