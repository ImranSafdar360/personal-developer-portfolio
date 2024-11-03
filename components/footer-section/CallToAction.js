/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Button from '../Button';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <div className='w-full px-0 xl:px-[120px] flex flex-col justify-start items-start gap-6 lg:gap-16'>
      <div className='w-full flex justify-between items-center'>
        <h1 className='text-[40px] leading-[47px] lg:text-[85px] font-antonSc font-light lg:leading-[92px]'>Let's Work <br />Together</h1>
        <span className='text-[25px] lg:text-[42px] font-lato font-light rotate-6'>↙</span>
      </div>
      <div className='w-full h-[1px] bg-secondary-bg rounded-lg relative'>
        <Link href="/contact" className='w-[70px] h-[70px] lg:w-[150px] lg:h-[150px] absolute top-0 right-[10%] -translate-y-1/2 flex justify-center items-center rounded-full bg-secondary-bg text-solid-text text-[10px] lg:text-[17px] font-lato font-bold'>Get in Touch</Link>
      </div>
      <div className='w-full flex justify-start items-center gap-3 lg:gap-5 mt-7 lg:mt-0'>
        <Button
          email="imransafdar360@gmail.com"
          subject="Inquiry about your services"
          body="Hi, I would like to discuss..."
          type="email"
          title="imransafdar360@gmail.com"
          classes="px-3 py-2 md:px-5 md:py-3 lg:px-8 lg:py-4 text-xs md:text-sm lg:text-base"
        />
        <Button
          title="+923494898190"
          whatsappNumber="+923494898190"
          message="Hi there! I wanted to connect with you."
          type="whatsapp"
          classes="px-3 py-2 md:px-5 md:py-3 lg:px-8 lg:py-4 text-xs md:text-sm lg:text-base"
        />
      </div>
    </div>
  )
}

export default CallToAction;
