import React from 'react'
import Link from 'next/link';
import LinkButton from '../LinkButton';

const Footer = () => {
  return (
    <div className='w-full h-full bg-whole text-whole-text px-[60px] pt-[120px]'>
      <div className='w-full flex justify-between items-center px-5'>
        <div className='flex flex-col justify-start items-start gap-2'>
          <h3 className='text-[24px] font-anton text-whole-text mb-3'>Navigation</h3>
          <Link href="/" className='text-[18px] font-lato text-secondary-text'>
            <LinkButton title='Home' />
          </Link>
          <Link href="/projects" className='text-[18px] font-lato text-secondary-text'>
            <LinkButton title='Projects' />
          </Link>
          <Link href="/about" className='text-[18px] font-lato text-secondary-text'>
            <LinkButton title='About Me' />
          </Link>
          <Link href="/contact" className='text-[18px] font-lato text-secondary-text'>
            <LinkButton title='Contact Me' />
          </Link>
        </div>
        <div className='flex flex-col justify-start items-start gap-2'>
          <h3 className='text-[24px] font-anton text-whole-text mb-3'>Social Links</h3>
          <Link href="/" className='text-[18px] font-lato text-secondary-text'>
            <LinkButton title='LinkedIn' />
          </Link>
          <Link href="/" className='text-[18px] font-lato text-secondary-text'>
            <LinkButton title='GitHub' />
          </Link>
          <Link href="/" className='text-[18px] font-lato text-secondary-text'>
            <LinkButton title='Instagram' />
          </Link>
          <Link href="/" className='text-[18px] font-lato text-secondary-text'>
            <LinkButton title='Facebook' />
          </Link>
        </div>
        <div className='flex flex-col justify-start items-start gap-2'>
          <h3 className='text-[24px] font-anton text-whole-text mb-3'>Selected Work</h3>
          <Link href="/" className='text-[18px] font-lato text-secondary-text'>
            <LinkButton title='Sit-down Social React-App' />
          </Link>
          <Link href="/" className='text-[18px] font-lato text-secondary-text'>
            <LinkButton title='E-axon Saas Website' />
          </Link>
          <Link href="/" className='text-[18px] font-lato text-secondary-text'>
            <LinkButton title='E-Commerce Store' />
          </Link>
          <Link href="/" className='text-[18px] font-lato text-secondary-text'>
            <LinkButton title='Modern Designer Portfolio' />
          </Link>
        </div>
      </div>
      <div className='w-full'>
        <div className='w-full text-center overflow-hidden'>
          <h1 className='text-[18.3vw] font-antonSc leading-[17vw] translate-y-14
        ' style={{ wordSpacing: '-40px' }}>Imran Devify</h1>
        </div>
        <div className='w-full py-8 flex justify-between items-center gap-10 bg-whole text-whole-text z-10 border-t border-white-border'>
          <p className="text-[17px] font-roboto text-whole-text">© 2024 Imran Devify
            All rights reserved.</p>
          <p
            className="text-[17px] font-roboto text-whole-text"
          >
            Developed By: Imran Safdar - Web Developer
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;


