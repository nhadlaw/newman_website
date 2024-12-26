// // components/Slideshow.js
"use client";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";

const images = ['/EventsPage.jpg', '/EventsPage1.png', '/EventsPage2.png', '/EventsPage3.png', '/EventsPage1.png', '/EventsPage.jpg', '/EventsPage1.png', '/EventsPage2.png', '/EventsPage3.png', '/EventsPage1.png']


const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-[2/3] h-[600px] flex items-center overflow-hidden mt-16">
      {/* Navigation Buttons */}
     

      {/* Image Container */}
      <div className="relative flex items-center gap-0 justify-center w-full h-full">
        <BsArrowLeftCircleFill 
          style={{position: 'relative', filter: 'drop-shadow(0px 0px 3px #555)', width: '3rem', height: '3rem', color: 'rgba(31,103,226,1.0)'}}
          className="z-30 absolute bottom-8 right-64 z-10 p-2 bg-white text-black rounded-full shadow-md hover:bg-gray-700"
          onClick={handlePrev} />
        <BsArrowRightCircleFill 
          style={{position: 'relative', filter: 'drop-shadow(0px 0px 3px #555)', width: '3rem', height: '3rem', color: 'rgba(31,103,226,1.0)'}}
          className="z-30 absolute bottom-8 left-64 z-10 p-2 bg-white text-black rounded-full shadow-md hover:bg-gray-700"
          onClick={handleNext} />
        {images.map((image, index) => {
          // Calculate position relative to the currentIndex
          const position = (index - currentIndex + images.length) % images.length;
          // Dynamic classes based on position
          const isCenter = position === 0;
          const isLeft = position === images.length - 1 || position === 1;
          // const scale = isCenter ? 'scale-110' : 'scale-0 md:scale-50';
          const scale = isCenter ? 'scale-110' : isLeft ? 'scale-0 md:scale-75' : 'scale-0 md:scale-50';
          const zIndex = isCenter ? 'z-20' : isLeft ? 'z-10' : 'z-0';
          const translateX =
            position === 0
              ? 'translate-x-0'
              : position === 1
              ? 'translate-x-2/3'
              : position === 2
              ? 'translate-x-full'
              : position === images.length - 2
              ? '-translate-x-full'
              : '-translate-x-2/3'

              
          const opacity = isCenter ? 'opacity-100' : 'opacity-100';
          const descOpacity = isCenter ? 'opacity-100' : 'opacity-0';
          return (
            <div 
                key={index}
                className={`mb-32 shadow-xl absolute transition-all duration-500 ease-in-out rounded-lg ${scale} ${zIndex} ${translateX} ${opacity} flex flex-col flex-wrap`}
            > 
             
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                style={{ maxWidth: '450px' }}
                className="w-full object-cover rounded-t-xl"
              />
               <div className={`shadow-2xl rounded-b-xl w-full p-0 bg-gray-800 text-white flex flex-col justify-center ${descOpacity}}`}>
                     <h2 className="text-3xl font-bold">{"lides[currentSlide].title"}</h2>
                    <p className="text-md font-light mb-4">{"slides[currentSlide].details"}</p>
                   <p className="text-md">{"slides[currentSlide].description"}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;

