/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Button from '../Button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center gap-[30px]'>
      <h1 className='font-anton text-[72px] leading-[82px] text-center'>Crafting digital experiences <br /> that inspire and engage.</h1>
        <p className='font-lato font-medium text-center text-[22px] text-secondary-text'>Transform your site into a modern masterpiece with vibrant animations,<br /> functional elements, and pixel perfect accuracy.</p>
        <div className='relative flex justify-center items-center gap-[30px]'>
          <Link href="/projects" className='overflow-hidden'>
          <Button title="See My Work" classes="px-[30px] py-[15px]" />
          </Link>
          <Link href="/contact" className='overflow-hidden'>
          <Button title="Get in Touch" classes="px-[30px] py-[15px]" />
          </Link>
        </div>
        </div>
  );
}

export default HeroSection;
