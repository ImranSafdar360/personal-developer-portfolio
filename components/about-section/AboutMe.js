/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import SpotlightCard from '../shared-components/SpotlightCard'
import Button from '../Button'

const AboutMe = () => {
  return (
    <div className='w-full h-full flex justify-between gap-[40px]'>
      <div className='w-full max-w-[50%] flex flex-col justify-start items-start gap-[8px]'>
      <p className='text-[24px] font-anton text-yellow-400'>Who We Are.</p>
        <h1 className='text-[72px] leading-[73px] font-antonSc text-whole-text mb-[8px]'>A little bit <br />About me.</h1>
        <p className='text-[22px] font-lato font-medium leading-[27px] text-secondary-text'>I'm Imran Safdar, a front-end developer specializing in React & Next.js. I create next-gen digital experiences, blending functionality with striking animations. Passionate about modern web design, I aim to deliver creative and precise solutions in every project.</p>
      </div>
      <div className='w-full max-w-[50%] flex flex-col justify-end items-start gap-[40px] mt-[450px]'>
        <p className='text-[22px] font-roboto font-medium leading-[29px] text-whole-text'>I collaborate with global clients to Cultivate Compelling and Immersive Digital Experiences Through The Realms of Design and Development</p>
        <div className='w-full flex justify-start gap-[15px] items-center'>
          <SpotlightCard className='w-[50%] bg-none border-none' spotlightColor='rgba(255, 255, 255, 0.1)'>
          <div>
            <h1 className='text-[72px] font-roboto font-bold text-whole-text leading-[78px]'>50+</h1>
            <div className='w-full h-[2px] bg-secondary-bg mt-[18px] mb-[15px]' />
            <p className='text-[22px] leading-[28px] font-roboto fony-medium text-whole-text'>Completed Projects</p>
          </div>
          </SpotlightCard>
          <SpotlightCard className='w-[50%] bg-none border-none' spotlightColor='rgba(255, 255, 255, 0.1)'>
          <div>
            <h1 className='text-[72px] font-roboto font-bold text-whole-text leading-[78px]'>6+</h1>
            <div className='w-full h-[2px] bg-secondary-bg mt-[18px] mb-[15px]' />
            <p className='text-[22px] leading-[28px] font-roboto fony-medium text-whole-text'>Months of Experience</p>
          </div>
          </SpotlightCard>
        </div>
        <Button title="More About me" classes="px-[30px] py-[20px]" />
      </div>
    </div>
  )
}

export default AboutMe;
