"use client";
import React, { useState, useEffect } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

function sortByDate(array) {
  if (!Array.isArray(array)) {
     return array
  }
  
  return array.sort((a, b) => {
      if (a.event_starting_date === undefined || b.event_starting_date === undefined) {
          return 0
      }
      const date1 = new Date(a.event_starting_date);
      const date2 = new Date(b.event_starting_date)
      return date1 - date2;
  });
}

function processDates(array) {
  const sortedDateEvents = sortByDate(array);
  // now we want to iterate through the dates and remove anything that is older than today
  const today = new Date();
  const newEvents = [];
  sortedDateEvents.forEach((upcomingEvent) => {
    let tempDate = new Date(upcomingEvent.event_starting_date);
    if (tempDate >= today){
      newEvents.push(upcomingEvent);
    }
  })
  return newEvents;
}


export default function DiagonalGrid({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4); // Default visible count
  const [bottomArrows, setBottomArrows] = useState(false); 
  const [flexDir, setFlexDir] = useState('flex-row')
  //bottomArrows is used to see if we should be putting the for/prev arrows to the sides or on the bottom, 
  //if on a small screen, we should have this be true otherwise false
  const newItems = processDates(items)
  // Update visibleCount based on screen width
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setBottomArrows(false);
        setFlexDir('flex-row');
        setVisibleCount(4);
      } else if (window.innerWidth >= 640) {
        setBottomArrows(false);
        setFlexDir('flex-row');
        setVisibleCount(2); // Medium screens
      } else {
        setBottomArrows(true);
        setFlexDir('flex-col');
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
      prevIndex + visibleCount
    );
  };

  const visibleItems = newItems.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="container mx-auto py-8 px-8 w-full">
      <div className={`flex ${flexDir} items-center justify-center mb-4`} style={{width: '100%'}}>
       {!bottomArrows && (newItems.length >= 4) && <button
          className="text-white rounded disabled:opacity-50"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <HiChevronLeft className="mr-4 ml-4 text-white bg-gray-800 text-5xl rounded-3xl p-2" />

        </button>}
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(visibleItems).map((item, index) => (
                <div
                key={index}
                className="h-64 relative group w-full aspect-square bg-cmu-maroon overflow-hidden shadow-lg rounded-lg flex flex-col"
              >
                <div>
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  ></div>
                  {/* Diagonal Overlay */}
                  <div
                    className="absolute inset-0 bg-gray-800 bg-opacity-70"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 0 100%)", // Diagonal shape
                    }}
                  ></div>
                  {/* Text Content */}
                  <div className="absolute top-1 flex flex-col justify-center text-white font-bold p-4 z-10">
                          <p className="text-xl">{item.event_name}</p>
                          <p className="font-semibold text-lg">{item.event_desc}</p>
                          <p className="font-light text-md max-w-32">{item.event_location}</p>
                  </div>
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition"></div>
                </div>
              </div>
              
              ))}
          </div>
          <p className="mt-4 text-xl">{currentIndex + visibleItems.length} of {newItems.length}</p>
        </div>
        {/* These buttons are only available on mobile */}
        {bottomArrows && <div className="flex flex-row mt-4 gap-2">

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
            disabled={currentIndex + visibleCount >= newItems.length}
          >
          <HiChevronRight className="text-white bg-gray-800 text-5xl rounded-3xl p-2" />
          </button>
        </div>}
        {/* END OF BOTTOM ARROWS */}

        {!bottomArrows && (newItems.length >= 4) && <button
          className="text-white disabled:opacity-50"
          onClick={handleNext}
          disabled={currentIndex + visibleCount >= newItems.length}
        >
        <HiChevronRight className="ml-4 mr-4 text-white bg-gray-800 text-5xl rounded-3xl p-2" />
        </button>}
      </div>
    </div>
  );
}


