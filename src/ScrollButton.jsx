import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa'; // Changed to an up arrow icon

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the user scrolls down 20px
  const toggleVisibility = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {/* Back-to-top button */}
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="!fixed bottom-5 end-5 rounded-xl bg-[#1e429f] p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-[#1e429f] hover:shadow-lg focus:bg-[#1e429f] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#1e429f] active:shadow-lg"
          id="btn-back-to-top"
        >
          <span className="[&>svg]:w-4">
            <FaArrowCircleUp size={25} /> {/* Using React Icons for the arrow */}
          </span>
        </button>
      )}
    
    </>
  );
};

export default ScrollButton;
