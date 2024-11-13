import { useEffect } from 'react';
import Shery from 'sheryjs';

const CustomCursor = () => {
  useEffect(() => {
    // Ensure that this code only runs in the browser
    if (typeof window !== 'undefined') {
      Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: .3,
      });
      Shery.makeMagnet("#make-magnet" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: .3,
      });
    }
  }, []);

  return null; // CustomCursor does not render anything itself
};

export default CustomCursor;
