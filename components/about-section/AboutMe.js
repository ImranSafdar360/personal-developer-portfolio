import React from 'react'
import SpotlightCard from '../shared-components/SpotlightCard'
import Button from '../Button'

const AboutMe = () => {
  return (
    <div className='w-full min-h-[140vh] flex justify-between gap-20'>
      <div className='w-full max-w-[50%] flex flex-col justify-start items-start gap-[30px]'>
        <h1 className='text-[85px] leading-[87px] font-antonSc uppercase text-whole-text'>A little bit <br />About me.</h1>
        <p className='text-[28px] font-lato font-medium leading-[36px] text-secondary-text'>To empower businesses through innovative web solutions that drive success and growth.</p>
      </div>
      <div className='w-full max-w-[50%] flex flex-col justify-end items-start gap-20'>
        <p className='text-[28px] font-roboto font-medium leading-[36px] text-whole-text'>I collaborate with global clients to Cultivate Compelling and Immersive Digital Experiences Through The Realms of Design and Development</p>
        <div className='w-full flex justify-start gap-[15px] items-center'>
          <SpotlightCard className='w-[50%] bg-none border-none' spotlightColor='rgba(255, 255, 255, 0.1)'>
          <div>
            <h1 className='text-[85px] font-roboto font-bold text-whole-text leading-[86px]'>120+</h1>
            <div className='w-full h-[2px] bg-secondary-bg mt-[18px] mb-[15px]' />
            <p className='text-[24px] leading-[28px] font-roboto fony-medium text-whole-text'>Completed Projects</p>
          </div>
          </SpotlightCard>
          <SpotlightCard className='w-[50%] bg-none border-none' spotlightColor='rgba(255, 255, 255, 0.1)'>
          <div>
            <h1 className='text-[85px] font-roboto font-bold text-whole-text leading-[86px]'>2+</h1>
            <div className='w-full h-[2px] bg-secondary-bg mt-[18px] mb-[15px]' />
            <p className='text-[24px] leading-[28px] font-roboto fony-medium text-whole-text'>Years of Experience</p>
          </div>
          </SpotlightCard>
        </div>
        <Button title="More About me" classes="px-[30px] py-[20px]" />
      </div>
    </div>
  )
}

export default AboutMe;
