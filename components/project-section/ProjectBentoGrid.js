/* eslint-disable @next/next/no-img-element */
// src/components/BentoGrid.jsx
import React from "react";

const BentoGrid = ({projects}) => {
  return (
    <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`relative text-white rounded-[30px] cursor-pointer overflow-hidden
            ${index === 0 ? "md:col-span-2 md:row-span-1" : ""}
            ${index === 3 ? "md:col-span-2 md:row-span-1" : ""}
          `}
        >
          <img
            src={project.image}
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;
