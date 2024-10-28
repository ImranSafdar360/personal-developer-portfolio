/* eslint-disable react/jsx-key */
import React from 'react';
import SpotlightCard from '../shared-components/SpotlightCard';

const servicesData = [
  { title: 'Website Design & Development', content: 'Optimize with insights. Elevate user engagement with our comprehensive UX Audit services. Share your digital challenges, and we will pinpoint improvements for an intuitive journey.' },
  { title: 'Landing Page Design', content:'Optimize with insights. Elevate user engagement with our comprehensive UX Audit services. Share your digital challenges, and we will pinpoint improvements for an intuitive journey.' },
  { title: 'E-commerce Design', content: 'Optimize with insights. Elevate user engagement with our comprehensive UX Audit services. Share your digital challenges, and we will pinpoint improvements for an intuitive journey.' },
  { title: 'Website Prototyping', content: 'Optimize with insights. Elevate user engagement with our comprehensive UX Audit services. Share your digital challenges, and we will pinpoint improvements for an intuitive journey.' },
  { title: 'Responsive Design', content: 'Optimize with insights. Elevate user engagement with our comprehensive UX Audit services. Share your digital challenges, and we will pinpoint improvements for an intuitive journey.' },
  { title: 'CMS Integration', content: 'Optimize with insights. Elevate user engagement with our comprehensive UX Audit services. Share your digital challenges, and we will pinpoint improvements for an intuitive journey.'},
  { title: 'Website Maintenance & Support', content: 'Optimize with insights. Elevate user engagement with our comprehensive UX Audit services. Share your digital challenges, and we will pinpoint improvements for an intuitive journey.' },
  { title: 'Brand Identity Design', content: 'Optimize with insights. Elevate user engagement with our comprehensive UX Audit services. Share your digital challenges, and we will pinpoint improvements for an intuitive journey.' },
  { title: 'SEO Optimization', content: 'Optimize with insights. Elevate user engagement with our comprehensive UX Audit services. Share your digital challenges, and we will pinpoint improvements for an intuitive journey.' },
  { title: 'Website Accessibility Audit', content:'Optimize with insights. Elevate user engagement with our comprehensive UX Audit services. Share your digital challenges, and we will pinpoint improvements for an intuitive journey.' },
];

const Services = () => {

  return (
    <div className="w-full flex flex-col items-end gap-[40px]">
      {servicesData.map((service, index) => (
        <SpotlightCard className="custom-spotlight-card cursor-pointer border-none !p-0 !m-0">
        <div key={index} className='w-[560px] h-[290px] flex justify-center items-center rounded-[40px] bg-[#1C1C20] px-[36px]'>
           <div className='flex gap-[20px] justify-center items-start'>
           <h3 className='text-[28px] font-anton leading-[42px] text-whole-text'>0{index}</h3>
          <div className='flex flex-col gap-[20px]'>
            <h2 className='text-[36px] font-anton leading-[42px] text-whole-text'>{service.title}</h2>
            <p className='text-[18px] font-roboto font-medium leading-[24px] text-secondary-text'>{service.content}</p>
          </div>
           </div>
        </div>
        </SpotlightCard>
      ))}
    </div>
  );
};

export default Services;
