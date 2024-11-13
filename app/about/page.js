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
    <>
      <Container className='flex flex-col gap-[60px]'>
        <Section className='pt-[120px] xl:pt-[80px] pb-0 lg:pb-[30px]'>
          <div className='w-full flex flex-col justify-center items-center gap-[10px] lg:gap-[15px]'>
            <h1 className='w-full md:max-w-[500px] lg:max-w-[800px] xl:max-w-[800px] font-anton text-[28px] lg:text-[58px] xl:text-[72px] md:text-[42px] md:leading-[52px] leading-[32px] lg:leading-[64px] xl:leading-[78px] text-center'>Empowering Brands with Innovative Digital Solutions</h1>
            <p className='w-full md:max-w-[500px] lg:max-w-[800px] xl:max-w-[800px] font-robotoRegular text-center text-[14px] md:text-[16px] lg:text-[20px] xl:text-[22px] text-secondary-text'>Passionate about transforming ideas into engaging experiences through innovative design and expert development, empowering brands to thrive in the digital landscape.</p>
          </div>
        </Section>

        <Section className='pt-0 md:pt-[30px]'>
          <HeroImage heroImage={`/images/about-hero.webp`} />
        </Section>

        <Section className='w-full flex justify-center items-center'>
          <div className='flex justify-center items-center w-[90%] lg:w-[80%]'>
            <h1 className='font-latoBold text-[20px] md:text-[22px] lg:text-[26px] md:leading-[28px] leading-[24px] lg:leading-[32px] text-center text-whole-text'>
              I am your go-to solution for building modern, responsive, and dynamic websites and web applications. With a deep focus on React.js and cutting-edge frontend development, I bring your ideas to life with seamless user experiences and high-performance interfaces. Whether you're a startup or an established business, I'll help you create a tailored, scalable, and visually appealing web solution that drives growth and engagement.
            </h1>
          </div>
        </Section>

        <Section>
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-[30px]">
            {/* Left Section: Image */}
            <div className="w-full lg:w-[40%] xl:w-[30%] flex justify-center">
              <div className="w-[90%] h-[300px] md:h-[400px] rounded-[30px] overflow-hidden shadow-lg">
                <img
                  src="/images/about-photo.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Section: Description */}
            <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start gap-[30px]">
              <h1 className="text-[20px] md:text-[22px] lg:text-[28px] font-robotoRegular leading-[24px] md:leading-[28px] lg:leading-[32px] text-secondary-text text-center lg:text-start">
                Imran Safdar - <span className='text-whole-text font-robotoMedium'>Frontend developer</span> specialized in <span className='text-whole-text font-robotoMedium'>React</span> & <span className='text-whole-text font-robotoMedium'>Next.js</span>. I create next-gen digital experiences, blending <span className='text-whole-text font-robotoMedium'>functionality</span> into striking <span className='text-whole-text font-robotoMedium'>animations</span>. Passionate about modern web <span className='text-whole-text font-robotoMedium'>design</span>, I always try to deliver creative and precise solutions in every project.
              </h1>
              <Link href='/contact'>
                <Button title='Get in Touch' classes="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-[12px] md:text-[14px] lg:text-[16px]" />
              </Link>
            </div>
          </div>
        </Section>

        <Section>
          <CallToAction />
        </Section>
      </Container>
    </>
  )
}

export default About;
