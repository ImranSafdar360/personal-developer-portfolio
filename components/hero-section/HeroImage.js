/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

const HeroImage = () => {
  return (
    <div className='w-full mt-0 lg:-mt-[80px]'>
      <div className='w-full h-[50vh] md:h-[400px] lg:h-[600px] rounded-[15px] lg:rounded-[50px] overflow-hidden relative'>
        <Image
          src="/images/hero-dummy-image.jpg"
          alt="hero image"
          layout="fill"
          objectFit="cover"
          className="rounded-[15px] lg:rounded-[50px] transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  )
}

export default HeroImage;
