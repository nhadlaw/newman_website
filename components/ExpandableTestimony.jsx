"use client";

import { useState } from 'react';
import Image from "next/image";


const ExpandableTestimony = ({image, desc}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`max-w-xs mx-auto p-4 border-2 bg-[#FDB515] rounded-lg hover:shadow-lg transition-shadow duration-200`}>
      <div
        className={`overflow-hidden transition-all ${isExpanded ? 'max-h-full' : 'max-h-80'}`}
      >
         <Image
        src={image}
        width={300}
        height={300}
        alt="Picture of the author"
        />
        <p className='text-white px-4 pt-4'>
            {desc}
        </p>
      </div>
      <button
        onClick={toggleText}
        className="mt-2 text-white hover:text-blue-700 transition duration-300"
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
};

export default ExpandableTestimony;