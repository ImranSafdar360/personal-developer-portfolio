/* eslint-disable @next/next/no-img-element */
import React from 'react'

const HeroImage = () => {
  return (
    <div className='w-full -mt-[80px]'>
      <div className='w-full h-[600px] rounded-[25px] overflow-hidden'>
        <img className='w-full h-full object-cover' src="/images/hero-dummy-image.jpg" alt="hero image" />
        </div>
      </div>
  )
}

export default HeroImage
