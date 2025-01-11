"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const ExpandableTestimony = ({testimony}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isNotMobile, setIsNotMobile] = useState(true);
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 750) {
        setIsNotMobile(true);
      } else {
        setIsNotMobile(true);
      }
    };

    updateVisibleCount(); // Set initial value
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <div className={`flex flex-col items-center max-w-md mx-auto p-4 bg-white rounded-lg hover:shadow-lg transition-shadow duration-200`}>
      <div
        className={`overflow-hidden transition-all ${isNotMobile ? 'max-h-full' : isExpanded ? 'max-h-full' : 'max-h-96'}`}
      >
         <Image
        src={testimony.image}
        width={400}
        height={400}
        alt="Picture of the author"
        />
        <p className='text-black px-4 pt-4 text-center'>
            "{testimony.testimony}"
        </p>
        <p className='text-black px-4 pt-4 text-center'>
            -{testimony.student}
        </p>
        <p className='text-black px-4 text-center'>
            {testimony.major} {testimony.grad_year}
        </p>
      </div>
    </div>
  );
};

export default ExpandableTestimony;