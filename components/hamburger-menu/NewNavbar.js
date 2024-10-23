/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Magnet from '../shared-components/MagnetEffect';
import { gsap } from "gsap";
import LinkedIn from '../../public/icons/linkedin-icon.png'
import Instagram from '../../public/icons/instagram-icon.png'
import Facebook from '../../public/icons/facebook-icon.png'
import Github from '../../public/icons/github-icon.png'

const navLinks = [
  { title: 'Home', link: '/' },
  { title: 'About', link: 'about' },
  { title: 'Projects', link: 'projects' },
  { title: 'Contact', link: 'contact' },
]
const navLogos = [
  { title: 'LinkedIn', logo: LinkedIn },
  { title: 'Instagram', logo: Instagram },
  { title: 'Facebook', logo: Facebook },
  { title: 'Github', logo: Github },
]

const Navbar = () => {
  const [isOpen, toggleOpen] = React.useState(false);
  const containerRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const bgCircleRef = useRef(null);
  const linkContainerRef = useRef(null);
  const linksRefs = useRef([]);

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
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    toggleOpen(false);
  };

  return (
    <nav className="w-full px-[60px] pt-[40px] fixed top-0 left-0 z-[999] flex justify-between items-start">
      <div
        ref={containerRef}
        className={`${!isOpen ? 'text-whole-text' : 'text-whole-text'} focus:outline-none z-[999] cursor-pointer overflow-hidden`}
      >
        <h1 className="anim-logo font-anton text-2xl whitespace-nowrap flex items-center gap-[3px] -translate-x-[29%] leading-[25px]">
          <span className="h-[2px] w-[23px] bg-secondary-bg"></span>Imran
        </h1>
        <h1 className="anim-Creation font-roboto text-2xl leading-[25px] font-extralight whitespace-nowrap flex items-center gap-[3px]">
          <span className="h-[2px] w-[23px] bg-secondary-bg"></span>Devify
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
            className="w-[70px] h-[40px] rounded-full bg-secondary-bg flex justify-center items-center focus:outline-none z-[9999]"
            onClick={() => toggleOpen(!isOpen)}
          >
            <div className="flex flex-col space-y-1.5 items-center">
              <span ref={topLineRef} className="block w-[25px] h-[2px] rounded-full bg-whole" />
              <span ref={bottomLineRef} className="block w-[25px] h-[2px] rounded-full bg-whole" />
            </div>
          </button>
        </Magnet>

        <div
          className="fixed left-0 top-[100px] flex items-start justify-between leading-[70px] bg-transparent px-[60px] pt-[80px]"
          ref={linkContainerRef}
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <div className="text-start">
            {navLinks.map((link, index) => (
              <div
                key={index}
                ref={(el) => (linksRefs.current[index] = el)}
                style={{ opacity: 0, transform: "translateX(-50px)" }}
              >
                <Link href={link.link} onClick={handleLinkClick}>
                  <h1 className="font-antonSc text-whole-text text-[85px] leading-[92px]">
                    {link.title}
                  </h1>
                </Link>
              </div>
            ))}
          </div>
          <div className='flex flex-col justify-center items-center'>
            {navLogos.map((logo, index) => (
              <a href="#" key={index}>
                <img src={logo.logo.src} alt={logo.title} className='w-[50px] h-[50px] object-cover' /> {/* Use logo.logo.src to dynamically set the image */}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
