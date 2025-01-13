"use client"
import React, { useState, useEffect } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

const AlumniVocations = ({ alumniVocations }) => {
  const categories = (alumniVocations).map(obj => obj.categoryName)
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAlumni =
    selectedCategory === "All"
      ? alumniVocations.flatMap((item) => item.individuals)
      : (alumniVocations.filter(item => item.categoryName === selectedCategory))[0].individuals;
    
  categories.unshift("All");

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
    const visibleItems = filteredAlumni.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="">
      {/* Buttons for each category */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-6 mt-4">
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            <div
              style={{width: '120px', height: '120px'}}
              className={`${selectedCategory === category ? 'bg-white' : 'bg-cmu-maroon-darker'} 
              flex items-center justify-center border rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 hover:bg-white`}
            >
              <div 
                style={{width: '110px', height: '110px'}}
                className={`flex items-center justify-center border-1 rounded-full bg-cmu-maroon-lighter bg-opacity-100 overflow-hidden`}>
                <p className='text-white font-bold px-4 text-center'>
                  {category === 'All' ? 'All Vocations' : category}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Display selected category */}
      <div className='mt-16 flex flex-col items-center'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {(isMobile ? visibleItems : filteredAlumni).map((person, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center rounded-lg p-4 shadow-md"
            >
              {/* Circular Image */}
              <div className="w-44 h-44 mb-4">
                <img
                  src={person.imageUrl}
                  alt={person.name}
                  className="w-full h-full object-cover rounded-full bg-white p-2"
                />
              </div>
              {/* Alumni Details */}
              <h3 className="text-lg font-bold text-white">{person.name}</h3>
              <p className="text-white text-sm">{person.gradStatus}</p>
              <p className="text-white text-md font-bold">{person.vocation}</p>
            </div>
          ))}
        </div>
          {isMobile && 
            <div className='flex flex-col items-center'>
              <p className="mt-4 text-xl text-white">{currentIndex + 1} of {filteredAlumni.length}</p>
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
                    disabled={currentIndex + visibleCount >= filteredAlumni.length}
                >
                <HiChevronRight className="text-white bg-cmu-maroon-lighter text-5xl rounded-3xl p-2" />
                </button>
              </div>
            </div>
          }
      </div>
    </div>
  );
};

export default AlumniVocations;



