// pages/index.js
"use client"
import ServiceCard from './ServiceCard';
import React, { useState, useEffect } from "react";
import { aboutPageSubHeadingStyle, eventsPageSubHeadingTextStyle } from '../../constants/stylingConstants';
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

export default function AboutServiceOpportunities({serviceOpportunities, subheading}) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 1;
  const [isMobile, setIsMobile] = useState(false);
  
    // Update visibleCount based on screen width
    useEffect(() => {
      const updateVisibleCount = () => {
        if (window.innerWidth >= 1024) {
          setIsMobile(false);
        } else if (window.innerWidth >= 750) {
         // Medium screens
          setIsMobile(false)
        } else {
         // Small screens
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
    const visibleItems = serviceOpportunities.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="flex flex-col items-center" id="AboutServiceOpportunities">
        <p className={aboutPageSubHeadingStyle}>Opportunities for Service</p>
        <h1 className={eventsPageSubHeadingTextStyle}>{subheading}</h1>
        <div className='flex flex-col items-center mt-8 mb-24'>
                    <div 
                      className="flex flex-row flex-wrap justify-center gap-6 p-4"
                    >
                        {(isMobile ? visibleItems : serviceOpportunities).map(function (service, index) {
                            return (
                              <div 
                                key={index}
                                className={`cursor-pointer`}
                              >
                                <ServiceCard key={index} service={service} />
                              </div>
                            )
                        })}
                    </div>
                      
                      {isMobile && 
                        <div className='flex flex-col items-center'>
                          <p className="mt-4 text-xl text-white">{currentIndex + 1} of {serviceOpportunities.length}</p>
                          <div className="flex flex-row mt-4 gap-2">
                            <button
                                className="text-white rounded disabled:opacity-50"
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                            >
                                <HiChevronLeft className="text-white bg-cmu-maroon-lighter text-5xl rounded-3xl p-2" />

                            </button>
                            <button
                                className="text-white disabled:opacity-50"
                                onClick={handleNext}
                                disabled={currentIndex + visibleCount >= serviceOpportunities.length}
                            >
                            <HiChevronRight className="text-white bg-cmu-maroon-lighter text-5xl rounded-3xl p-2" />
                            </button>
                          </div>
                        </div>
                      }
        </div>
    </div>
  );
}