/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Button from '../Button';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <div className='w-full px-0 xl:px-[120px] flex flex-col justify-start items-start gap-6 lg:gap-16'>
      <div className='w-full flex justify-between items-center'>
        <h1 className='text-[40px] leading-[47px] lg:text-[85px] font-antonSc lg:leading-[92px]'>Let's Work <br />Together</h1>
        <FaArrowRight className='text-[25px] lg:text-[42px] rotate-[135deg]' />

      </div>
      <div className='w-full h-[1px] bg-secondary-bg rounded-lg relative'>
        <Link href="/contact" className='w-[70px] h-[70px] lg:w-[150px] lg:h-[150px] absolute top-0 right-[10%] -translate-y-1/2 flex justify-center items-center rounded-full bg-secondary-bg text-solid-text text-[10px] lg:text-[17px] font-latoBold'>Get in Touch</Link>
      </div>
      <div className='w-full flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-5 mt-7 lg:mt-0'>
        <Button
          email="imransafdar360@gmail.com"
          subject="Inquiry about your services"
          body="Hi, I would like to discuss..."
          type="email"
          title="imransafdar360@gmail.com"
           classes="px-6 py-3 md:px-8 md:py-4 lg:px-6 lg:py-5 text-[14px] md:text-[16px] lg:text-[18px]"
        />
        <Button
          title="+923494898190"
          whatsappNumber="+923494898190"
          message="Hi there! I wanted to connect with you."
          type="whatsapp"
           classes="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 text-[14px] md:text-[16px] lg:text-[18px]"
        />
      </div>
    </div>
  )
}

export default CallToAction;
