/* eslint-disable react/jsx-key */
import React from 'react';
import SpotlightCard from '../shared-components/SpotlightCard';

const servicesData = [
  { 
    id: '01',
    title: 'Website Design & Development', 
    content: 'Create visually stunning and highly functional websites that deliver seamless user experiences. Our tailored web design and development process ensures your brand stands out while maximizing conversions and engagement.' 
  },
  { 
    id: '02',
    title: 'Landing Page Design', 
    content: 'Craft high-converting landing pages optimized for user engagement and lead generation. Our strategic design approach focuses on compelling visuals and persuasive copy to significantly boost your conversion rates.' 
  },
  { 
    id: '03',
    title: 'E-commerce Design', 
    content: 'Build powerful e-commerce platforms that enhance shopping experiences and drive sales. Our user-centric design solutions integrate intuitive interfaces and secure payment systems to maximize customer satisfaction and retention.' 
  },
  { 
    id: '04',
    title: 'Website Prototyping', 
    content: 'Transform your ideas into functional prototypes for testing and validation. Our rapid prototyping services enable quick iterations, ensuring the final product meets user needs and aligns with business objectives.' 
  },
  { 
    id: '05',
    title: 'Responsive Design', 
    content: 'Ensure your website looks and performs beautifully on all devices with responsive design. Our approach guarantees optimal viewing experiences, enhancing accessibility and user engagement across various screen sizes.' 
  },
  { 
    id: '06',
    title: 'CMS Integration', 
    content: 'Simplify your content management process with seamless CMS integration. We provide tailored solutions that empower you to easily update and manage website content without requiring technical expertise.' 
  },
  { 
    id: '07',
    title: 'Website Maintenance & Support', 
    content: 'Keep your website running smoothly with our comprehensive maintenance and support services. We monitor performance, implement updates, and offer reliable technical support to ensure optimal site functionality.' 
  },
  { 
    id: '08',
    title: 'Brand Identity Design', 
    content: 'Establish a strong brand identity that resonates with your target audience. Our design services focus on cohesive branding elements that reflect your values and enhance recognition in the marketplace.' 
  },
  { 
    id: '09',
    title: 'SEO Optimization', 
    content: 'Improve your website’s search engine visibility with our expert SEO optimization services. We implement best practices to boost your search rankings, driving organic traffic and increasing your online presence.' 
  },
  { 
    id: '10',
    title: 'Website Accessibility Audit', 
    content: 'Ensure your website is accessible to all users with our comprehensive accessibility audits. We identify areas for improvement, helping you create inclusive digital experiences that comply with accessibility standards.' 
  },
];


const Services = () => {

  return (
    <div className="w-full flex flex-col items-end gap-[40px]">
      {servicesData.map((service, index) => (
        <SpotlightCard className="custom-spotlight-card cursor-pointer border-none !p-0 !m-0">
        <div key={index} className='w-[560px] h-[290px] flex justify-center items-center rounded-[40px] bg-[#1C1C20] px-[36px]'>
           <div className='flex gap-[20px] justify-center items-start'>
           <h3 className='text-[28px] font-anton leading-[42px] text-whole-text'>{service.id}</h3>
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
