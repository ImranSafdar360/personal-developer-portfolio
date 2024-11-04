/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import SpotlightCard from '../shared-components/SpotlightCard'
import Button from '../Button'
import Link from 'next/link'

const AboutMe = () => {
  return (
    <div className='w-full h-full flex flex-col lg:flex-row justify-between gap-[40px]'>
      <div className='w-full max-w-full lg:max-w-[50%] flex flex-col justify-start items-start gap-[8px]'>
      <p className="text-[20px] md:text-[24px] font-anton text-yellow-400">Who I Am.</p>
        <h1 className="text-[36px] md:text-[48px] lg:text-[64px] xl:text-[72px] leading-none font-antonSc text-whole-text mb-2">
          A little bit <br /> About me.
        </h1>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-latoBold leading-relaxed text-secondary-text">
          I'm Imran Safdar, a front-end developer specializing in React & Next.js. I create next-gen digital experiences, blending functionality with striking animations. Passionate about modern web design, I aim to deliver creative and precise solutions in every project.
        </p>
      </div>
      <div className='w-full max-w-full lg:max-w-[50%] flex flex-col justify-end items-start gap-[40px] mt-0 lg:mt-[450px]'>
        <p className='text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-robotoRegular leading-[29px] text-whole-text text-center lg:text-start'>I Collaborate with Global Clients to Create Compelling and Immersive Digital Experiences Through Innovative Web Design and Development.</p>
        <div className='w-full flex flex-col lg:flex-row justify-start gap-[15px] lg:gap-[0px] xl:gap-[15px] items-center'>
          <SpotlightCard className='w-full lg:w-[50%] bg-none border-none' spotlightColor='rgba(255, 255, 255, 0.1)'>
          <div>
          <h1 className="text-[48px] md:text-[60px] lg:text-[72px] font-robotoBold text-whole-text leading-tight">50+</h1>
              <div className="w-full h-[2px] bg-secondary-bg my-4" />
              <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-relaxed font-robotoRegular text-whole-text">Completed Projects</p>
          </div>
          </SpotlightCard>
          <SpotlightCard className='w-full lg:w-[50%] bg-none border-none' spotlightColor='rgba(255, 255, 255, 0.1)'>
          <div>
          <h1 className="text-[48px] md:text-[60px] lg:text-[72px] font-robotoBold text-whole-text leading-tight">6+</h1>
              <div className="w-full h-[2px] bg-secondary-bg my-4" />
              <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-relaxed font-robotoRegular text-whole-text">Months of Experience</p>
          </div>
          </SpotlightCard>
        </div>
        <Link href="/about">
          <Button title="More About me" classes="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 text-[14px] md:text-[16px] lg:text-[18px]" />
        </Link>
      </div>
    </div>
  )
}

export default AboutMe;
