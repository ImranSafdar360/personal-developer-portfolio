/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Button from '../Button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="w-full h-[40vh] md:h-[85vh] lg:h-[100vh] flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 pt-[80px] xl:pt-[0px]">
      {/* Title */}
      <h1 className="w-full max-w-[800px] font-anton text-[28px] leading-[36px] md:text-[40px] md:leading-[50px] lg:text-[48px] lg:leading-[58px] xl:text-[72px] xl:leading-[82px] text-center">
        Crafting digital experiences <br /> that inspire and engage.
      </h1>
      
      {/* Subtitle */}
      <p className="w-full md:max-w-[500px] lg:max-w-[600px] xl:max-w-[800px] font-latoRegular text-center text-[14px] leading-[20px] md:text-[16px] md:leading-[22px] lg:text-[18px] lg:leading-[24px] xl:text-[22px] xl:leading-[28px] text-secondary-text">
        Transform Your Website into a Modern Masterpiece with Stunning Animations, Seamless Functionality, and Pixel-Perfect Precision.
      </p>
      
      {/* Buttons */}
      <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8">
        <Link href="/projects" className="overflow-hidden">
          <Button title="See My Work" classes="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-[12px] md:text-[14px] lg:text-[16px]" />
        </Link>
        <Link href="/contact" className="overflow-hidden">
          <Button title="Get in Touch" classes="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-[12px] md:text-[14px] lg:text-[16px]" />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
