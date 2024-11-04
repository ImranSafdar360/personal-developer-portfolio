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
   <Container className='flex flex-col gap-[30px] lg:gap-[60px]'>

    <Section className='pt-[120px] xl:pt-[80px] pb-0 lg:pb-[30px]'>
      <div className='w-full flex flex-col justify-center items-center gap-[10px] lg:gap-[15px]'>
        <p className='text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px] font-Regular text-yellow-400'>Contact Now</p>
        <h1 className='w-full md:max-w-[500px] lg:max-w-[800px] xl:max-w-[800px] font-anton text-[28px] lg:text-[58px] xl:text-[72px] md:text-[42px] md:leading-[52px] leading-[32px] lg:leading-[64px] xl:leading-[78px] text-center'>Let's Collaberate Togather</h1>
        <p className='w-full md:max-w-[500px] lg:max-w-[800px] xl:max-w-[800px] font-robotoRegular text-center text-[14px] md:text-[16px] lg:text-[20px] xl:text-[22px] text-secondary-text'>Ready to take your ideas to the next level? If you have a project in mind or just want to chat about my setvices, I'm here for you! Let's connect and turn your vision into reality togather.</p>
        <p className='text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px] font-Regular text-yellow-400'>Your ideas + my expertise = endless possibilities!</p>
      </div>
    </Section>

    <Section>
      <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-start gap-[20px]">
        <div className="w-full lg:w-[45%] xl:w-[30%] flex flex-col justify-between gap-[40px] lg:gap-[60px] py-6">
          <div className='w-full flex flex-col gap-[0px] lg:gap-[5px]'>
            <h1 className='text-[36px] md:text-[48px] lg:text-[52px] xl:text-[72px] leading-none font-antonSc text-whole-text mb-2'>Have a <br /> great idea?</h1>
            <p className='text-[14px] leading-[17px] lg:text-[18px] font-latoRegular lg:leading-[21px] mb-[8px] text-secondary-text'>1. I will respond to you within 24 hours.</p>
            <p className='text-[14px] leading-[17px] lg:text-[18px] font-latoRegular lg:leading-[21px] mb-[8px] text-secondary-text'>2. I’ll ensure the confidentiality of your project, providing secure and clean code.</p>
            <p className='text-[14px] leading-[17px] lg:text-[18px] font-latoRegular lg:leading-[21px] mb-[8px] text-secondary-text'>3. I’ll deliver a custom-built, responsive web application tailored to your needs..</p>
          </div>
          <div>
            <p className="text-[18px] leading-[21px] lg:text-[22px] lg:leading-[27px] font-robotoRegular text-whole-text">Inquiries</p>
            <a href="mailto:imransafdar360@gmail.com" className="text-[14px] leading-[17px] lg:text-[18px] font-latoRegular lg:leading-[21px] text-secondary-text hover:underline cursor-pointer">
              imransafdar360@gmail.com
            </a>
          </div>
        </div>

      <div className="w-full lg:w-[60%] p-0 lg:p-6">
        <form >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2">
                <label htmlFor="fullName" className="block text-[14px] font-robotoRegular">Full Name*</label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full mt-2 text-[17px] font-robotoRegular leading-[24px] text-secondary-text bg-transparent border-b border-grey-border pb-[7px] outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <label htmlFor="email" className="block text-[14px] font-robotoRegular">Email*</label>
                <input
                  type="email"
                  id="email"
                   className="w-full mt-2 text-[17px] font-robotoRegular leading-[24px] text-secondary-text bg-transparent border-b border-grey-border pb-[7px] outline-none"
                  placeholder="example@domain.com"
                  required
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <label htmlFor="phone" className="block text-[14px] font-robotoRegular">Phone (optional)</label>
                <input
                  type="tel"
                  id="phone"
                   className="w-full mt-2 text-[17px] font-robotoRegular leading-[24px] text-secondary-text bg-transparent border-b border-grey-border pb-[7px] outline-none"
                  placeholder="+1 111 222 333"
                />
              </div>

              <div className="col-span-2">
                <label htmlFor="budget" className="block text-[14px] font-robotoRegular">Project Budget</label>
                <select
                  id="budget"
                   className="w-full mt-2 text-[17px] font-robotoRegular leading-[24px] text-secondary-text bg-transparent border-b border-grey-border pb-[7px] outline-none"
                >
                  <option className="w-full mt-2 text-[17px] font-robotoRegular leading-[24px] text-secondary-text bg-whole outline-none">Select your range</option>
                  <option className="w-full mt-2 text-[17px] font-robotoRegular leading-[24px] text-secondary-text bg-whole outline-none">$50 - $100</option>
                  <option className="w-full mt-2 text-[17px] font-robotoRegular leading-[24px] text-secondary-text bg-whole outline-none">$100 - $200</option>
                  <option className="w-full mt-2 text-[17px] font-robotoRegular leading-[24px] text-secondary-text bg-whole outline-none">$300+</option>
                </select>
              </div>
              <div className="col-span-2">
                <label htmlFor="aboutProject" className="block text-[14px] font-robotoRegular">About Project*</label>
                <textarea
                  id="aboutProject"
                   className="w-full h-[150px] mt-2 text-[17px] font-robotoRegular leading-[24px] text-secondary-text bg-transparent border-b border-grey-border pb-[7px] outline-none"
                  placeholder="Tell us more about your project..."
                  required
                />
              </div>
            </div>
            <div className="mt-6 text-start">
            <Button title="Submit" classes="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 text-[14px] md:text-[16px] lg:text-[18px]" />
            </div>
        </form>
      </div>
      </div>
    </Section>

   </Container>
  )
}

export default Contact;
