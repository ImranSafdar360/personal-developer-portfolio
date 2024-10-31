/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Button from '../Button';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <div className='w-full px-[120px] flex flex-col justify-start items-start gap-16'>
      <div className='w-full flex justify-between items-center'>
        <h1 className='text-[85px] font-antonSc font-light leading-[92px]'>Let's Work <br />Together</h1>
        <span className='text-[42px] font-lato font-light rotate-6'>↙</span>
      </div>
      <div className='w-full h-[1px] bg-secondary-bg rounded-lg relative'>
        <Link href="/contact" className='w-[150px] h-[150px] absolute top-0 right-[10%] -translate-y-1/2 flex justify-center items-center rounded-full bg-secondary-bg text-solid-text text-[17px] font-lato font-bold'>Get in Touch</Link>
      </div>
      <div className='w-full flex justify-start items-center gap-5'>
        <Button
          email="imransafdar360@gmail.com"
          subject="Inquiry about your services"
          body="Hi, I would like to discuss..."
          type="email"
          title="imransafdar360@gmail.com" classes="px-[30px] py-[20px]" />
        <Button
          title="+923494898190"
          whatsappNumber="+923494898190"
          message="Hi there! I wanted to connect with you."
          type="whatsapp"
          classes="px-[30px] py-[20px]"
        />

      </div>
    </div>
  )
}

export default CallToAction;
