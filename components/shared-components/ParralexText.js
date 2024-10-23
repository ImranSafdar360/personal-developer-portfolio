import { motion } from "framer-motion"
import React from "react";

const Marquee = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".0005" className="relative w-full mt-[80px] overflow-hidden">
       <div className="absolute top-0 left-0 w-[150px] h-full bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none"></div>
       <div className="absolute top-0 right-0 w-[150px] h-full bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none"></div>
      <div className="flex flex-col gap-5 whitespace-nowrap">
        <motion.h1 initial={{ x: '0%' }} animate={{ x: "-250%" }} transition={{ ease: "linear", repeat: Infinity, duration: 30 }} className="uppercase text-[92px] font-antonSc leading-[92px]">
          Frontend Development ● Responsive Design ● Pixel Perfection ● Animation ●
          Frontend Development ● Responsive Design ● Pixel Perfection ● Animation
        </motion.h1>
        <motion.h1 initial={{ x: '-250%' }} animate={{ x: "0%" }} transition={{ ease: "linear", repeat: Infinity, duration: 30 }} className="uppercase text-[92px] font-antonSc leading-[92px]">
        API Integeration ● Functional Coding ● State Management ●
        API Integeration ● Functional Coding ● State Management
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;