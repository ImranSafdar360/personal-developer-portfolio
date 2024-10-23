/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const RotatingLogo = () => {
  const textRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      rotation: 360,
      transformOrigin: 'center',
      repeat: -1,
      duration: 10,
      ease: 'linear',
    });

    gsap.to(iconRef.current, {
      rotation: -360,
      transformOrigin: 'center',
      repeat: -1,
      duration: 10,
      ease: 'linear',
    });
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="relative w-28 h-28 flex justify-center items-center cursor-pointer"
      onClick={handleBackToTop} 
    >
      <svg
        className="absolute"
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        ref={textRef}
      >
        <defs>
          <path
            id="circlePath"
            d="M 50, 50
                m -45, 0
                a 45,45 0 1,1 90,0
                a 45,45 0 1,1 -90,0"
          />
        </defs>
        <text fontSize="9" fill="white" letterSpacing="3px"> 
          <textPath href="#circlePath">
            LET'S BRING YOUR IMAGINATION TO LIFE LET'S BRING YOUR IMAGINATION TO LIFE
          </textPath>
        </text>
      </svg>

      <div
        ref={iconRef}
        className="absolute text-whole-text"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-10 w-10"
        >
          <path d="M8.41 16.59 13.17 12 8.41 7.41 7 8.83 10.34 12 7 15.17zM15.59 7.41 10.83 12 15.59 16.59 17 15.17 13.66 12 17 8.83z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    </div>
  );
};

export default RotatingLogo;
