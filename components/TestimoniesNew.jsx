"use client";
import ExpandableTestimonyNew from "./ExpandableTestimonyNew";
import React, { useState, useEffect } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { headerStyling, sectionMargin } from "../constants/stylingConstants";
import { useIsVisible } from "../src/app/hooks/useIsVisible";

const Testimonies = ({ testimonies }) => {
  const { isVisible, elementRef } = useIsVisible({
    root: null, // Use the viewport as the root
    rootMargin: "0px",
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3); // Default visible count
  const [gridCount, setGridCount] = useState(3); // Default visible count
  const [isMobile, setIsMobile] = useState(false)


  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
        setGridCount(3);
        setIsMobile(false);
        
      } else if (window.innerWidth >= 750) {
        setVisibleCount(2); // Medium screens
        setGridCount(2);
        setIsMobile(false);
        
      } else {
        setVisibleCount(1); // Small screens
        setGridCount(1);
        setIsMobile(true);
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
    setCurrentIndex((prevIndex) => prevIndex + visibleCount);
  };

  const visibleItems = testimonies.slice(currentIndex, currentIndex + visibleCount);

  function organizeIntoColumns(components, columnCount) {
    if (columnCount <= 0) {
        throw new Error("Column count must be greater than zero.");
    }

    // Initialize the columns as empty arrays
    const columns = Array.from({ length: columnCount }, () => []);

    // Distribute components into columns
    components.forEach((component, index) => {
        columns[index % columnCount].push(component);
    });

    return columns;
  }

  // const allItemsTestCols = organizeIntoColumns(allItemsTest, 3);

  const testimoniesCols = organizeIntoColumns([...testimonies], gridCount)
  console.log('visible Items: ', testimoniesCols)

  return (
    <div
      className={`${sectionMargin} transition-opacity ease-in duration-[700ms] ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      ref={elementRef}
    >
      <div className="container mx-auto py-8">
        <p className={`text-center font-bold text-black text-7xl sm:text-8xl pr-8 pl-8`}>Why Newman?</p>
        <div className="flex flex-col items-center mb-4 mt- gap-8">
           {!isMobile && <div className="flex flex-row text-black">
            {testimoniesCols.map(function(items, index){
              return (
                <div className="flex flex-col items-center gap-8" key={index}>
                  {(items).map((testimony, colIndex) => (
                      <div key={colIndex}>
                        <ExpandableTestimonyNew testimony={testimony} />
                      </div>
                  ))}
                </div>
              )
            })}
          </div>}
            {isMobile &&  
            <div className="flex flex-col items-center">  
              <div className={`grid grid-cols-1'} gap-4 p-4`}>
                {(visibleItems).map((item, index) => (
                  <div key={index}>
                    <ExpandableTestimonyNew testimony={item} />
                  </div>
                ))}
              </div>
                <div className="flex flex-row mt-4 gap-2">
                  <button
                    className="text-white rounded disabled:opacity-50"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                  >
                    <HiChevronLeft className="text-white bg-gray-800 text-5xl rounded-3xl p-2" />
                  </button>
                  <button
                    className="text-white disabled:opacity-50"
                    onClick={handleNext}
                    disabled={currentIndex + visibleCount >= testimonies.length}
                  >
                    <HiChevronRight className="text-white bg-gray-800 text-5xl rounded-3xl p-2" />
                  </button>
                </div>
            
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
