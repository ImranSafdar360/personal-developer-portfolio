/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Magnet from '../shared-components/MagnetEffect';
import { gsap } from "gsap";
import { motion } from "framer-motion";
import LinkedIn from '../../public/icons/linkedin-icon.png'
import Instagram from '../../public/icons/instagram-icon.png'
import Facebook from '../../public/icons/facebook-icon.png'
import Github from '../../public/icons/github-icon.png'

const navLinks = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Projects', link: '/projects' },
  { title: 'Contact', link: '/contact' },
]
const navLogos = [
  { title: 'LinkedIn', logo: LinkedIn, link: 'https://www.linkedin.com/in/imran-safdar' },
  { title: 'Instagram', logo: Instagram, link: 'https://www.instagram.com/code_crafter360/' },
  { title: 'Facebook', logo: Facebook, link: 'https://web.facebook.com/ImranDevify360/' },
  { title: 'Github', logo: Github, link: 'https://github.com/ImranSafdar360' },
]

const Navbar = () => {
  const [isOpen, toggleOpen] = React.useState(false);
  const containerRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const bgCircleRef = useRef(null);
  const linkContainerRef = useRef(null);
  const linksRefs = useRef([]);
  const logoLinksRefs = useRef([]);

  const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap font-antonSc text-whole-text text-[58px] leading-[55px] md:text-[72px] md:leading-[67px] lg:text-[82px] lg:leading-[77px] xl:text-[100px] xl:leading-[96px]"
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;

      const hoverAnimation = () => {
        gsap.to(".anim-logo", { translateX: "0px", duration: 0.5, ease: "power1.out" });
        gsap.to(".anim-Creation", { translateX: "-29%", duration: 0.5, ease: "power1.out" });
      };

      const reverseHoverAnimation = () => {
        gsap.to(".anim-logo", { translateX: "-29%", duration: 0.5, ease: "power1.out" });
        gsap.to(".anim-Creation", { translateX: "0px", duration: 0.5, ease: "power1.out" });
      };

      container.addEventListener("mouseenter", hoverAnimation);
      container.addEventListener("mouseleave", reverseHoverAnimation);

      return () => {
        container.removeEventListener("mouseenter", hoverAnimation);
        container.removeEventListener("mouseleave", reverseHoverAnimation);
      };
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(topLineRef.current, { rotation: 45, y: 4, duration: 0.3, ease: "power2.out" });
      gsap.to(bottomLineRef.current, { rotation: -45, y: -4.5, duration: 0.3, ease: "power2.out" });

      gsap.to(bgCircleRef.current, {
        scale: 100,
        borderRadius: "0%",
        duration: 0.6,
        ease: "easeInOut"
      });

      gsap.to(linkContainerRef.current, {
        left: '0%',
        duration: 0.7,
        ease: "easeInOut"
      });

      linksRefs.current.forEach((link, index) => {
        gsap.to(link, {
          opacity: 1,
          x: 0,
          delay: 0.3 + index * 0.1,
          duration: 0.3,
        });
      });
      logoLinksRefs.current.forEach((link, index) => {
        gsap.to(link, {
          opacity: 1,
          x: 0,
          delay: 0.3 + index * 0.1,
          duration: 0.3,
        });
      });
    } else {
      gsap.to(topLineRef.current, { rotation: 0, y: 0, duration: 0.3, ease: "power2.out" });
      gsap.to(bottomLineRef.current, { rotation: 0, y: 0, duration: 0.3, ease: "power2.out" });

      gsap.to(bgCircleRef.current, {
        scale: 0,
        borderRadius: "50px",
        duration: 0.6,
        ease: "easeInOut"
      });

      gsap.to(linkContainerRef.current, {
        left: '-100%',
        duration: 0.7,
        ease: "easeInOut"
      });

      linksRefs.current.forEach((link) => {
        gsap.to(link, {
          opacity: 0,
          x: -50,
          duration: 0.3,
        });
      });
      logoLinksRefs.current.forEach((link, index) => {
        gsap.to(link, {
          opacity: 0,
          x: -50,
          duration: 0.3,
        });
      });
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    toggleOpen(false);
  };

  return (
    <nav className="w-full px-[20px] md:px-[40px] lg:px-[60px] pt-[40px] fixed top-0 left-0 z-[999] flex justify-between items-start">
      <div
        ref={containerRef}
        className={`${!isOpen ? 'text-whole-text' : 'text-whole-text'} focus:outline-none z-[999] cursor-pointer overflow-hidden`}
      >
        <h1 className="anim-logo font-anton text-[20px] lg:text-[24px] leading-[21px] whitespace-nowrap flex items-center gap-[3px] -translate-x-[29%] lg:leading-[25px]">
          <span className="h-[2px] w-[18px] lg:w-[23px] bg-secondary-bg"></span>Imran
        </h1>
        <h1 className="anim-Creation font-robotoRegular text-[20px] leading-[21px] lg:text-[24px] lg:leading-[25px] font-extralight whitespace-nowrap flex items-center gap-[3px]">
          <span className="h-[2px] w-[17px] lg:w-[23px] bg-secondary-bg"></span>Devify
        </h1>
      </div>

      <div className="flex justify-center items-center relative">
        <div
          className="absolute top-[0px] right-[15px] w-[100vw] h-screen bg-whole"
          ref={bgCircleRef}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            transform: "scale(0)",
          }}
        ></div>

        <Magnet padding={50} disabled={false}>
          <button
            className="w-[60px] h-[40px] lg:w-[70px] lg:h-[40px] rounded-full bg-secondary-bg flex justify-center items-center focus:outline-none z-[9999]"
            onClick={() => toggleOpen(!isOpen)}
          >
            <div className="flex flex-col space-y-1.5 items-center">
              <span ref={topLineRef} className="block w-[25px] h-[2px] rounded-full bg-whole" />
              <span ref={bottomLineRef} className="block w-[25px] h-[2px] rounded-full bg-whole" />
            </div>
          </button>
        </Magnet>

        <div
          className="fixed left-0 top-[100px] flex flex-col lg:flex-row items-start justify-start lg:justify-between leading-[70px] bg-transparent px-[20px] md:[40px] lg:px-[55px] pt-[40px] lg:pt-[50px] gap-[30px]"
          ref={linkContainerRef}
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <div className="text-start flex flex-col">
            {navLinks.map((link, index) => (
              <div
                key={index}
                ref={(el) => (linksRefs.current[index] = el)}
                style={{ opacity: 0, transform: "translateX(-50px)" }}
              >
                  <FlipLink href={link.link} onClick={handleLinkClick}>
                    {link.title}
                  </FlipLink>
              </div>
            ))}
          </div>
          <div className='flex flex-row lg:flex-col justify-center items-center gap-[10px] mr-[13px]'>
            {navLogos.map((logo, index) => (
              <a href={logo.link} key={index}
              target='_blank'
              ref={(el) => (logoLinksRefs.current[index] = el)}
              style={{ opacity: 0, transform: "translateX(-50px)" }}
              >
                <img src={logo.logo.src} alt={logo.title} className='w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] object-cover' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
