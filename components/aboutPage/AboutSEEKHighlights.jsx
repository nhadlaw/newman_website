"use client"
import { useState, useEffect } from 'react';
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import SeekExtraInfoButton from "./SeekExtraInfoButton";

// Text content
const text = {
  title: 'Welcome to Our Site',
  description: "test desc",
};

const AboutSEEKHighlights = ({ highlightImages, recapLink, seeMoreLink}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % highlightImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [highlightImages]);

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % highlightImages.length);
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? highlightImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full">
      <div
        className="items-center"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div className="flex flex-col px-8">
          <p className="text-4xl font-bold mt-4 text-left text-white">
            {`SEEK ${(new Date()).getFullYear()} Highlights`}
          </p>
          <p className="text-lg mt-4 text-left text-white">
            Take a look at some of the highlights from this year's SEEK!
          </p>
          <div className='flex flex-col md:flex-row md:items-center'>
            <div className="flex flex-col h-[67vh] md:w-[50vw] relative mt-4">
                {/* Slideshow Section */}
                <div className="flex-1 relative overflow-hidden bg-cmu-maroon-lighter shadow-lg rounded-sm">
                {highlightImages.map((item, index) => (
                    <div key={index} className={`p-6 absolute w-full h-full object-cover transition-opacity duration-700 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}>
                        <img
                        key={index}
                        src={item.highlight_image}
                        alt={`Slide ${index}`}
                        className={`w-full h-full object-cover`}
                        
                        />

                    </div>
                ))}

                    {/* Left Chevron */}
                    <button
                        onClick={goToPrevSlide}
                        className="absolute right-[51%] top-[90%] transform -translate-y-1/2 bg-white bg-opacity-80 text-black rounded-full focus:outline-none hover:bg-opacity-100"
                    >
                        <HiChevronLeft className='text-2xl'/>
                    </button>

                    {/* Right Chevron */}
                    <button
                        onClick={goToNextSlide}
                        className="absolute left-[51%] top-[90%] transform -translate-y-1/2 bg-white bg-opacity-80 text-black rounded-full focus:outline-none hover:bg-opacity-100"
                    >
                        <HiChevronRight className='text-2xl'/>
                    </button>
                </div>
            </div>
                <div className='flex-col gap-8 mt-16 md:mt-0'>
                    <SeekExtraInfoButton buttonTitle={"SEEK Replay"} buttonDesc={`Check out live talks from SEEK ${(new Date()).getFullYear()} here`} buttonLink={recapLink}/>
                    <SeekExtraInfoButton buttonTitle={"Learn More"} buttonDesc={"Find out more about SEEK"} buttonLink={seeMoreLink}/>

                </div>
          </div>
              
        </div>
      </div>
    </div>
  );
};

export default AboutSEEKHighlights;
