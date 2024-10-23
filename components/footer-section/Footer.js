import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full h-full bg-whole text-whole-text px-[60px] pt-[120px]'>
      <div className='w-full flex justify-between items-center px-5'>
      <div className='flex flex-col justify-start items-start gap-2'>
      <h3 className='text-[24px] font-anton text-whole-text mb-3'>Navigation</h3>
            <Link href="#" className='text-[18px] font-lato font-semibold text-secondary-text'>
            Home
            </Link>
            <Link href="#" className='text-[18px] font-lato font-semibold text-secondary-text'>
            Projects
            </Link>
            <Link href="#" className='text-[18px] font-lato font-semibold text-secondary-text'>
            About Me
            </Link>
            <Link href="#" className='text-[18px] font-lato font-semibold text-secondary-text'>
            Contact Me
            </Link>
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
            <h3 className='text-[24px] font-anton text-whole-text mb-3'>Social Links</h3>
            <Link href="#" className='text-[18px] font-lato font-semibold text-secondary-text'>
            LinkedIn
            </Link>
            <Link href="#" className='text-[18px] font-lato font-semibold text-secondary-text'>
            GitHub
            </Link>
            <Link href="#" className='text-[18px] font-lato font-semibold text-secondary-text'>
            Facebook
            </Link>
            <Link href="#" className='text-[18px] font-lato font-semibold text-secondary-text'>
            Instagram
            </Link>
          </div>
          <div className='flex flex-col justify-start items-start gap-2'>
          <h3 className='text-[24px] font-anton text-whole-text mb-3'>Selected Work</h3>
            <Link href="#" className='text-[18px] font-lato font-semibold text-secondary-text'>
            Sit-down Social React-App
            </Link>
            <Link href="#" className='text-[18px] font-lato font-semibold text-secondary-text'>
            E-axon Saas Website
            </Link>
            <Link href="#" className='text-[18px] font-lato font-semibold text-secondary-text'>
            E-Commerce Store
            </Link>
            <Link href="#" className='text-[18px] font-lato font-semibold text-secondary-text'>
            Modern Designer Portfolio
            </Link>
          </div>
      </div>
      <div className='w-full'>
        <div className='w-full text-center overflow-hidden'>
          <h1 className='text-[18.3vw] font-antonSc leading-[17vw] translate-y-14
        ' style={{ wordSpacing: '-40px' }}>Imran Devify</h1>
        </div>
        <div className='w-full px-10 py-8 flex justify-between items-center gap-10 bg-whole text-whole-text z-10 border-t border-white-border'>
            <p>© 2024 Imran Devify
              All rights reserved.</p>
            <div className='flex justify-start items-start gap-5'>
              <Link href="#" className='text-[16px] font-lato font-semibold text-secondary-text'>
                Home
              </Link>
              <Link href="#" className='text-[16px] font-lato font-semibold text-secondary-text'>
                Projects
              </Link>
              <Link href="#" className='text-[16px] font-lato font-semibold text-secondary-text'>
                About Me
              </Link>
              <Link href="#" className='text-[16px] font-lato font-semibold text-secondary-text'>
                Contact Me
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;


