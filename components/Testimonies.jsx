
"use client";
import ExpandableTestimony from "./ExpandableTestimony";
import React, { useState, useEffect } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";


const Testimonies = ({testimonies}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4); // Default visible count
  
    // Update visibleCount based on screen width
    useEffect(() => {
      const updateVisibleCount = () => {
        if (window.innerWidth >= 1024) {
          setVisibleCount(4);
        } else if (window.innerWidth >= 640) {
          setVisibleCount(2); // Medium screens
        } else {
          setVisibleCount(1); // Small screens
        }
      };
  
      updateVisibleCount(); // Set initial value
      window.addEventListener("resize", updateVisibleCount);
  
      return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - visibleCount, 0));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + visibleCount, testimonies.length - visibleCount)
      );
    };
    const visibleItems = testimonies.slice(currentIndex, currentIndex + visibleCount);

  
    return (
        <div>
        <div className="container mx-auto py-8">
            <div className="flex items-center justify-center mb-4" style={{width: '100%'}}>
                <button
                className=" text-white rounded disabled:opacity-50"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                >
                <HiChevronLeft className="mr-4 ml-4 text-white bg-gray-800 text-5xl rounded-3xl p-2" />
                </button>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                {visibleItems.map((item, index) => (
                    <div key={index}>
                        <ExpandableTestimony image={item.image} desc={item.testimony}/>
                    </div>
                ))}
                </div>
                <button
                className="text-white disabled:opacity-50"
                onClick={handleNext}
                disabled={currentIndex + visibleCount >= testimonies.length}
                >
                <HiChevronRight className="ml-4 mr-4 text-white bg-gray-800 text-5xl rounded-3xl p-2" />
                </button>
            </div>
        </div>
        </div>
      );
}

export default Testimonies