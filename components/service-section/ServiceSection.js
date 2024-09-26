import React from 'react'
import Services from './Servies';

const ServiceSection = () => {
  return (
    <div className='w-full h-full flex flex-col justify-between gap-20'>
      <div className='w-full max-w-[50%] flex flex-col gap-10'>
      <h1 className='text-[85px] leading-[87px] font-antonSc uppercase text-whole-text'>What I Provide.</h1>
        <p className='text-[28px] font-lato font-medium leading-[36px] text-secondary-text'>My obsession is to deliver a digital experience
          that not only serves a great purpose, but
          give your business an unfair advantage.</p>
      </div>
     <Services />
    </div>
  )
}

export default ServiceSection;
