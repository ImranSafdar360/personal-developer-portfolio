import React from 'react'
import Services from './Services';


const ServiceSection = () => {
  return (
    <div className='w-full h-full flex justify-between items-start gap-[100px] relative'>
      <div className='w-full max-w-[45%] flex flex-col gap-[8px] sticky top-[20%] left-0'>
        <p className='text-[24px] font-anton text-yellow-400'>Services.</p>
      <h1 className='text-[72px] leading-[73px] font-antonSc text-whole-text mb-[8px]'>I help your business grow</h1>
        <p className='text-[22px] font-roboto font-medium leading-[27px] text-secondary-text'>As a distinguished Web Developer, I offer comprehensive solutions encompassing research, wireframing, UI design, and development. Here are our specialized services:</p>
      </div>
      <div className='w-[55%] flex items-center justify-center flex-col'>
      <Services />
      </div>
    </div>
  )
}

export default ServiceSection;