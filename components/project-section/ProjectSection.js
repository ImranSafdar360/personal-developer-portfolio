/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Button from '../Button';
import SelectedWork from './SelectedProjects';

const ProjectSection = () => {
  const projects = [
    { id: 1, title: 'E-commerce Platform', description: 'Developed a fully responsive e-commerce website using React.js and Next.js. Integrated Stripe for payment processing and implemented a custom CMS for easy product management. The site features real-time inventory updates and a seamless checkout process.', imageUrl: 'https://source.unsplash.com/random/300x200?sig=1' },
    { id: 2, title: 'SaaS Web Application', description: 'Created a scalable SaaS platform with React.js and Tailwind CSS. The application includes user authentication, data visualization, and third-party API integration. Built with a focus on performance and scalability to handle a large number of users.', imageUrl: 'https://source.unsplash.com/random/300x200?sig=2' },
    { id: 3, title: 'Portfolio Website', description: 'Designed and developed a personal portfolio website using Next.js and Material UI. The site includes smooth animations, SEO optimization, and is fully responsive across all devices. The design emphasizes simplicity and elegance to highlight the clients work.', imageUrl: 'https://source.unsplash.com/random/300x200?sig=3' },
    { id: 4, title: 'Portfolio Website', description: 'Designed and developed a personal portfolio website using Next.js and Material UI. The site includes smooth animations, SEO optimization, and is fully responsive across all devices. The design emphasizes simplicity and elegance to highlight the clients work.', imageUrl: 'https://source.unsplash.com/random/300x200?sig=3' },
    { id: 5, title: 'Portfolio Website', description: 'Designed and developed a personal portfolio website using Next.js and Material UI. The site includes smooth animations, SEO optimization, and is fully responsive across all devices. The design emphasizes simplicity and elegance to highlight the clients work.', imageUrl: 'https://source.unsplash.com/random/300x200?sig=3' },
  ];
  return (
    <div className='w-full h-full min-h-[100vh] flex flex-col justify-between gap-16'>
      <div className='w-full flex flex-col justify-start items-start gap-[20px]'>
        <h1 className='text-[85px] leading-[92px] font-antonSc uppercase text-whole-text'>Let's Have <br />  a Look at My work</h1>
        <p className='text-[28px] font-lato font-medium leading-[36px] text-secondary-text'>In the creative wilderness,
          clients find our work truly
          beloved.</p>
      </div>
      <SelectedWork />
      <div className='w-full flex justify-end items-center'>
        <Button title="View More Projects" classes="px-[30px] py-[20px]" />
      </div>
    </div>
  )
}

export default ProjectSection;
