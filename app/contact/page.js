/* eslint-disable react/no-unescaped-entities */
"use client";
import Button from '@/components/Button';
import Container from '@/components/Container'
import Section from '@/components/Section'
import React from 'react'

const options = [
  { value: '50-100', label: '$50 - $100' },
  { value: '100-200', label: '$100 - $200' },
  { value: '300+', label: '300+' },
];

const Contact = () => {
  return (
   <Container className='flex flex-col gap-[60px]'>

    <Section className='pt-[80px]'>
      <div className='w-full flex flex-col justify-center items-center gap-[15px]'>
        <p className='text-[20px] font-lato font-normal text-yellow-400'>Contact Now</p>
        <h1 className='font-anton text-[72px] leading-[78px] text-center'>Let's Collaberate Togather</h1>
        <p className='font-roboto font-medium text-center text-[22px] text-secondary-text'>Ready to take your ideas to the next level? If you have a project in mind or <br />just want to chat about my setvices, I'm here for you! Let's connect and <br />turn your vision into reality togather.</p>
        <p className='text-[20px] font-lato font-normal text-yellow-400'>Your ideas + my expertise = endless possibilities!</p>
      </div>
    </Section>

    <Section>
      <div className="w-full flex justify-between items-start gap-[20px]">
        <div className="w-[30%] flex flex-col justify-between gap-[60px] py-6">
          <div className='w-full flex flex-col gap-[5px]'>
            <h1 className='text-[72px] leading-[73px] font-antonSc text-whole-text mb-[15px]'>Have a <br /> great idea?</h1>
            <p className='text-[18px] font-lato font-light leading-[21px] mb-[8px] text-secondary-text'>1. I will respond to you within 24 hours.</p>
            <p className='text-[18px] font-lato font-light leading-[21px] mb-[8px] text-secondary-text'>2. I’ll ensure the confidentiality of your project, providing secure and clean code.</p>
            <p className='text-[18px] font-lato font-light leading-[21px] mb-[8px] text-secondary-text'>3. I’ll deliver a custom-built, responsive web application tailored to your needs..</p>
          </div>
          <div>
            <p className="text-[22px] leading-[27px] font-roboto font-mendium text-whole-text">Inquiries</p>
            <a href="mailto:imransafdar360@gmail.com" className="text-[18px] leading-[21px] text-secondary-text hover:underline cursor-pointer font-light">
              imransafdar360@gmail.com
            </a>
          </div>
        </div>

      <div className="w-full md:w-[60%] p-6">
        <form >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2">
                <label htmlFor="fullName" className="block text-[14px] font-roboto font-normal">Full Name*</label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full mt-2 text-[17px] font-roboto leading-[24px] text-secondary-text bg-transparent border-b border-grey-border pb-[7px] outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="email" className="block text-[14px] font-roboto font-normal">Email*</label>
                <input
                  type="email"
                  id="email"
                   className="w-full mt-2 text-[17px] font-roboto leading-[24px] text-secondary-text bg-transparent border-b border-grey-border pb-[7px] outline-none"
                  placeholder="example@domain.com"
                  required
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="phone" className="block text-[14px] font-roboto font-normal">Phone (optional)</label>
                <input
                  type="tel"
                  id="phone"
                   className="w-full mt-2 text-[17px] font-roboto leading-[24px] text-secondary-text bg-transparent border-b border-grey-border pb-[7px] outline-none"
                  placeholder="+1 111 222 333"
                />
              </div>

              <div className="col-span-2">
                <label htmlFor="budget" className="block text-[14px] font-roboto font-normal">Project Budget</label>
                <select
                  id="budget"
                   className="w-full mt-2 text-[17px] font-roboto leading-[24px] text-secondary-text bg-transparent border-b border-grey-border pb-[7px] outline-none"
                >
                  <option className="w-full mt-2 text-[17px] font-roboto leading-[24px] text-secondary-text bg-whole outline-none">Select your range</option>
                  <option className="w-full mt-2 text-[17px] font-roboto leading-[24px] text-secondary-text bg-whole outline-none">$50 - $100</option>
                  <option className="w-full mt-2 text-[17px] font-roboto leading-[24px] text-secondary-text bg-whole outline-none">$100 - $200</option>
                  <option className="w-full mt-2 text-[17px] font-roboto leading-[24px] text-secondary-text bg-whole outline-none">$300+</option>
                </select>
              </div>
              <div className="col-span-2">
                <label htmlFor="aboutProject" className="block text-[14px] font-roboto font-normal">About Project*</label>
                <textarea
                  id="aboutProject"
                   className="w-full h-[150px] mt-2 text-[17px] font-roboto leading-[24px] text-secondary-text bg-transparent border-b border-grey-border pb-[7px] outline-none"
                  placeholder="Tell us more about your project..."
                  required
                />
              </div>
            </div>
            <div className="mt-6 text-start">
            <Button title="Submit" classes="px-[40px] py-[15px]" />
            </div>
        </form>
      </div>
      </div>
    </Section>

   </Container>
  )
}

export default Contact;
