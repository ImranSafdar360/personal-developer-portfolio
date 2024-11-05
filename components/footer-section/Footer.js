import React from 'react'
import Link from 'next/link';
import LinkButton from '../LinkButton';

const Footer = () => {
  return (
    <div className='w-full h-full bg-whole text-whole-text px-[20px] md:px-[40px] lg:px-[60px] pt-[30px] lg:pt-[120px]'>
      <div className='w-full grid grid-cols-2 md:flex md:flex-row md:justify-between md:items-center px-0 lg:px-5 gap-3 lg:gap-0'>
        <div className='flex flex-col justify-start items-start gap-0 lg:gap-2'>
          <h3 className='text-[18px] lg:text-[24px] font-anton text-whole-text mb-1 lg:mb-3'>Navigation</h3>
          <Link href="/" className='text-[12px] lg:text-[18px] font-latoRegular text-whole-text'>
            <LinkButton title='Home' />
          </Link>
          <Link href="/projects" className='text-[12px] lg:text-[18px] font-latoRegular text-whole-text'>
            <LinkButton title='Projects' />
          </Link>
          <Link href="/about" className='text-[12px] lg:text-[18px] font-latoRegular text-whole-text'>
            <LinkButton title='About Me' />
          </Link>
          <Link href="/contact" className='text-[12px] lg:text-[18px] font-latoRegular text-whole-text'>
            <LinkButton title='Contact Me' />
          </Link>
        </div>
        <div className='flex flex-col justify-start items-start gap-0 lg:gap-2'>
          <h3 className='text-[18px] lg:text-[24px] font-anton text-whole-text mb-1 lg:mb-3'>Social Links</h3>
          <Link href="https://www.linkedin.com/in/imran-safdar" target='_blank' className='text-[12px] lg:text-[18px] font-latoRegular text-whole-text'>
            <LinkButton title='LinkedIn' />
          </Link>
          <Link href="https://www.instagram.com/code_crafter360/" target='_blank' className='text-[12px] lg:text-[18px] font-latoRegular text-whole-text'>
            <LinkButton title='GitHub' />
          </Link>
          <Link href="https://web.facebook.com/ImranDevify360/" target='_blank' className='text-[12px] lg:text-[18px] font-latoRegular text-whole-text'>
            <LinkButton title='Instagram' />
          </Link>
          <Link href="https://github.com/ImranSafdar360" target='_blank' className='text-[12px] lg:text-[18px] font-latoRegular text-whole-text'>
            <LinkButton title='Facebook' />
          </Link>
        </div>
        <div className='flex flex-col justify-start items-start gap-0 lg:gap-2'>
          <h3 className='text-[18px] lg:text-[24px] font-anton text-whole-text mb-1 lg:mb-3'>Selected Work</h3>
          <Link href="/" className='text-[12px] lg:text-[18px] font-latoRegular text-whole-text'>
            <LinkButton title='E-axon Saas Project' />
          </Link>
          <Link href="/" className='text-[12px] lg:text-[18px] font-latoRegular text-whole-text'>
            <LinkButton title='Sit-down Project' />
          </Link>
          <Link href="/" className='text-[12px] lg:text-[18px] font-latoRegular text-whole-text'>
            <LinkButton title='Modern Designer Portfolio' />
          </Link>
          <Link href="/" className='text-[12px] lg:text-[18px] font-latoRegular text-whole-text'>
            <LinkButton title='Works Studio Project' />
          </Link>
        </div>
      </div>
      <div className='w-full'>
        <div className='w-full text-center overflow-hidden'>
          <h1 className='text-[17vw] lg:text-[18.3vw] font-antonSc leading-[17vw] translate-y-5 lg:translate-y-14
        ' >ImranDevify</h1>
        </div>
        <div className='w-full py-3 lg:py-4 flex flex-col md:flex-row justify-between items-center gap-0 lg:gap-10 bg-whole text-whole-text z-10 border-t border-white-border'>
          <p className="text-[12px] lg:text-[17px] font-robotoRegular text-whole-text">© 2024 Imran Devify
            All rights reserved.</p>
          <p
            className="text-[12px] lg:text-[17px] font-robotoRegular text-whole-text"
          >
            Developed & Designed By: Imran Safdar - Web Developer
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;


