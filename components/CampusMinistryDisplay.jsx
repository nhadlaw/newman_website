// pages/index.js
"use client"
import ContactCard from './ContactCard';
import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md"; // Importing close icon from react-icons
import { headerStyling, subheadingStyling } from '../constants/stylingConstants';
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import {useIsVisible } from '../src/app/hooks/useIsVisible';

export default function CampusMinistryDisplay({refId, link, linkName, heading, staffDesc, people, bgColors}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 1;
  const [isMobile, setIsMobile] = useState(false);
  const { isVisible, elementRef } = useIsVisible({
    root: null, // Use the viewport as the root
    rootMargin: '0px',
  });
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
    const visibleItems = people.slice(currentIndex, currentIndex + visibleCount);

  const [selectedPerson, setSelectedPerson] = useState(null);
  const handleCardClick = (person) => {
    setSelectedPerson(person);
  };

  const handleClose = () => {
    setSelectedPerson(null);
  };
  const handleBackgroundClick = (e) => {
    // Only close modal if the background overlay itself is clicked, not the content
    if (e.target === e.currentTarget) {
      setSelectedPerson(null);
    }
  };

  return (
    <div
        id={refId}
        ref={elementRef}
        className={`transition-opacity ease-in duration-[700ms] ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
        <div className='flex flex-col items-center'>
          <p className={headerStyling}>{heading}</p>
          <p className={subheadingStyling}>{staffDesc}</p>
          {link && 
            <div className='mt-12'>
              <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" bg-white text-black border-2 border-black px-8 py-4 text-xl font-medium rounded shadow-md hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300"
                  >
                  {linkName}
              </a>
            </div>
          }
        </div>
        <div className='mt-20 mb-24 flex flex-col items-center'>
          <div 
            className="flex flex-wrap justify-center gap-6 p-4"
          >
              {(isMobile ? visibleItems : people).map(function (person, index) {
                  const assignedColor = bgColors[index % (bgColors.length)]
                  return (
                    <div 
                      key={index}
                      className={`cursor-pointer`}
                      onClick={() => handleCardClick(person)}
                    >
                      <ContactCard key={index} person={person} bgColor={assignedColor} />
                    </div>
                  )
              })}
          </div>
          {isMobile && 
            <div className='flex flex-col items-center'>
              <p className="mt-4 text-xl">{currentIndex + 1} of {people.length}</p>
              <div className="flex flex-row mt-4 gap-2">
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
                    disabled={currentIndex + visibleCount >= people.length}
                >
                <HiChevronRight className="text-white bg-gray-800 text-5xl rounded-3xl p-2" />
                </button>
              </div>
            </div>
          }
        </div>
        {/* Modal for detailed view */}
        {selectedPerson && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center"
        onClick={handleBackgroundClick}
        >
          <div className="rounded-lg bg-white w-3/4 max-w-4xl flex flex-col sm:flex-row overflow-auto max-h-[90vh]">
            {/* Left Half - Image */}
            <div className="w-full sm:w-1/2">
              <img
                src={selectedPerson.image_with_background ? selectedPerson.image_with_background : selectedPerson.image}
                alt={selectedPerson.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right Half - Description */}
            <div className="w-full sm:w-1/2 p-6 overflow-auto">
              <h2 className="text-3xl font-bold">{selectedPerson.name}</h2>
              <p className="mt-4 text-gray-700 font-semibold">{selectedPerson.additionalInfo}</p>
              <p className="mt-4 text-gray-700 font-bold text-lg">{"About"}</p>
              <p className="text-gray-700">{selectedPerson.about}</p>
              <p className="mt-4 text-gray-700 font-bold text-lg">{"Fun Fact"}</p>
              <p className="text-gray-700">{selectedPerson.fun_fact}</p>
              <p className="mt-4 text-gray-700 font-bold text-lg">{"Hometown"}</p>
              <p className="text-gray-700">{selectedPerson.hometown}</p>
              <p className="mt-4 text-gray-700 font-bold text-lg">{"Favorite Quote"}</p>
              <p className="text-gray-700">{selectedPerson.fav_quote}</p>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-gray-800 bg-white text-black p-2 rounded-full hover:bg-gray-600"
              onClick={handleClose}
            >
              <MdClose size={24} /> {/* Using the MdClose icon from react-icons */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}