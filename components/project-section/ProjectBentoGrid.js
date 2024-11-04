/* eslint-disable @next/next/no-img-element */
// /* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const BentoGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  return (
    <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {images.map((image, index) => (
        <div
        onClick={() => openModal(image)}
          key={index}
          className={`relative text-white rounded-[30px] cursor-pointer overflow-hidden
            ${index === 0 ? "md:col-span-2 md:row-span-1" : ""}
            ${index === 3 ? "md:col-span-2 md:row-span-1" : ""}
          `}
        >
          <img
            src={image}
            alt={`Project image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
       {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 ">
          <div className="relative w-full max-w-5xl bg-whole rounded-[24px]">
            <img src={selectedImage} alt="Selected Project" className="w-full h-auto rounded-[24px] object-contain" />
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-whole-text text-[40px] leading-[1px] font-anton w-[40px] h-[40px] rounded-full bg-whole bg-opacity-50 hover:bg-opacity-70 transition duration-300"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BentoGrid;
