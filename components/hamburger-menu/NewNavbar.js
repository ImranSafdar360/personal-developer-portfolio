"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useCycle } from "framer-motion";
import Link from 'next/link';
import Magnet from '../shared-components/MagnetEffect';
import { gsap } from "gsap";


const variants = {
  open: {
    scale: 100,
    borderRadius: ["50%", "50%", "0%"],
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  closed: {
    scale: 0,
    borderRadius: "50px",
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const linkDivVariants = {
  open: {
    clipPath: "circle(1000px at 100% 40px)",
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  closed: {
    clipPath: "circle(0px at 100% 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const linkVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.5, duration: 0.3 }
  },
  closed: {
    opacity: 0,
    x: -50,
    transition: { duration: 0.3 }
  }
};

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);

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
    } else {
      gsap.to(topLineRef.current, { rotation: 0, y: 0, duration: 0.3, ease: "power2.out" });
      gsap.to(bottomLineRef.current, { rotation: 0, y: 0, duration: 0.3, ease: "power2.out" });
    }
  }, [isOpen]);


  return (
    <nav className='w-full px-[60px] py-[30px] fixed top-0 left-0 z-[999] flex justify-between items-start'>
      <div
        ref={containerRef}
        className={`${!isOpen ? 'text-whole-text' : 'text-black'} focus:outline-none z-[999] cursor-pointer overflow-hidden`}
      >
        <h1 className='anim-logo font-anton text-2xl whitespace-nowrap flex items-center gap-[3px] -translate-x-[29%] leading-[25px]'> <span className='h-[2px] w-[23px] bg-secondary-bg'></span>Imran</h1>
        <h1 className='anim-Creation font-roboto text-2xl leading-[25px] font-extralight whitespace-nowrap flex items-center gap-[3px]'> <span className='h-[2px] w-[23px] bg-secondary-bg'></span>Devify</h1>
      </div>

      <motion.div className='flex justify-center items-center relative'>
        <motion.div
          className="absolute top-[0px] right-[15px] w-[100vw] h-screen bg-[#ffffff]"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          style={{
            width: "40px",
            height: "40px",
          }}
        />
        <Magnet padding={50} disabled={false}>
          <button
            className={`w-[70px] h-[40px] rounded-full bg-secondary-bg flex justify-center items-center focus:outline-none z-[9999] `}
            onClick={toggleOpen}
          >
         <div className="flex flex-col space-y-1.5 items-center">
        <span ref={topLineRef} className="block w-[25px] h-[2px] rounded-full bg-black" />
        <span ref={bottomLineRef} className="block w-[25px] h-[2px] rounded-full bg-black" />
      </div>
          </button>
        </Magnet>
        <motion.div
          className="fixed right-[450px] top-[0px] flex flex-col items-center justify-center leading-[70px]"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={linkDivVariants}
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <div className='text-start'>
            {['Home', 'About', 'Projects', 'Blogs', 'Contact'].map((link, index) => (
              <motion.div key={index} variants={linkVariants}>
                <Link href={`/${link.toLowerCase()}`}>
                  <h1 className="font-antonSc text-black text-[85px] leading-[92px]">
                    {link}
                  </h1>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
