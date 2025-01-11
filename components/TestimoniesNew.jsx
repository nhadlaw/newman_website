
"use client";
import ExpandableTestimonyNew from "./ExpandableTestimonyNew";
import React, { useState, useEffect } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import {headerStyling, sectionMargin} from '../constants/stylingConstants';
import {useIsVisible } from '../src/app/hooks/useIsVisible';

const Testimonies = ({testimonies}) => {
  const { isVisible, elementRef } = useIsVisible({
    root: null, // Use the viewport as the root
    rootMargin: '0px',
  });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3); // Default visible count
    const [gridCount, setGridCount] = useState('grid-cols-3');
    const [isMobile, setIsMobile] = useState(false);
  
    // Update visibleCount based on screen width
    useEffect(() => {
      const updateVisibleCount = () => {
        if (window.innerWidth >= 1024) {
          setGridCount('grid-cols-3');
          setVisibleCount(3);
          setIsMobile(false);
        } else if (window.innerWidth >= 750) {
          setGridCount('grid-cols-2');
          setVisibleCount(2); // Medium screens
          setIsMobile(false)
        } else {
          setGridCount('grid-cols-1');
          setVisibleCount(1); // Small screens
          setIsMobile(true)
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
        prevIndex + visibleCount
      );
    };
    const visibleItems = testimonies.slice(currentIndex, currentIndex + visibleCount);

  
    return (
      <div className={`${sectionMargin} transition-opacity ease-in duration-[700ms] ${
        isVisible ? 'opacity-100' : 'opacity-0'}`} ref={elementRef}>
          <p className={headerStyling}>Why Newman?</p>
          <div className="container mx-auto py-8">
              <div className="flex items-center justify-center mb-4" style={{width: '100%'}}>
                <div className="flex flex-col items-center">
                    <div className={`grid ${gridCount} gap-4 p-4`}>
                    {(isMobile ? visibleItems : testimonies).map((item, index) => (
                        <div key={index}>
                            <ExpandableTestimonyNew testimony={item}/>
                        </div>
                    ))}
                    </div>
                        {isMobile && <div className="flex flex-row mt-4 gap-2">

                        <button
                            className="text-white rounded disabled:opacity-50"
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                        >
                            {/* <HiChevronLeft className="mr-4 ml-4 text-white bg-gray-800 text-5xl rounded-3xl p-2" /> */}
                            <HiChevronLeft className="text-white bg-gray-800 text-5xl rounded-3xl p-2" />

                        </button>
                        <button
                            className="text-white disabled:opacity-50"
                            onClick={handleNext}
                            disabled={currentIndex + visibleCount >= testimonies.length}
                        >
                        <HiChevronRight className="text-white bg-gray-800 text-5xl rounded-3xl p-2" />
                        </button>
                        </div>}
                </div>
              </div>
          </div>
        </div>
      );
}

export default Testimonies