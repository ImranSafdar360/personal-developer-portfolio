import React from 'react'
import Services from './Services';


const ServiceSection = () => {
  return (
    <div className='w-full h-full flex flex-col xl:flex-row justify-between items-start gap-[60px] lg:gap-[100px] relative'>
      <div className='w-full max-w-full xl:max-w-[45%] flex flex-col gap-[8px] static xl:sticky xl:top-[20%] left-0'>
        <p className="text-[20px] md:text-[24px] font-anton text-yellow-400">Services.</p>
      <h1 className="text-[36px] md:text-[48px] lg:text-[64px] xl:text-[72px] leading-none font-antonSc text-whole-text mb-2">I help your business grow</h1>
        <p className="w-full lg:w-[520px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-latoRegular leading-relaxed text-secondary-text">As a distinguished Web Developer, I offer comprehensive solutions encompassing research, wireframing, UI design, and development. Here are our specialized services:</p>
      </div>
      <div className='w-full xl:w-[55%] flex items-center justify-center flex-col'>
      <Services />
      </div>
    </div>
  )
}

export default ServiceSection;