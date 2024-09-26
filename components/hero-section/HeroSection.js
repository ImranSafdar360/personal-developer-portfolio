/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Button from '../Button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center gap-[30px]'>
      <h1 className='font-anton text-[72px] leading-[82px] text-center'>Crafting digital experiences <br /> that inspire and engage.</h1>
        <p className='font-lato font-medium text-center text-[22px] text-secondary-text'>Innovative designs that blend functionality with creativity. Let's build <br /> something great together.</p>
        <div className='relative flex justify-center items-center gap-[150px]'>
          <Link href="/projects">
          <Button title="See My Work" />
          </Link>
          <div className='w-[70%] h-[2px] absolute top-1/2 -translate-y-1/2 bg-secondary-bg z-[1]' />
          <Button title="Get in Touch" />
        </div>
        </div>
  );
}

export default HeroSection;
