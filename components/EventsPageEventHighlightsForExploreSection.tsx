"use client";
import { useState, useEffect } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

const ImageCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Timer for automatic slide change
  useEffect(() => {
    const timer = setInterval(handleNext, 4000); // Change every 4 seconds
    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [items.length]);

  return (
    <div className="my-16 bg-[rgba(31,103,226,0.6)] relative w-[2/3] h-[650px] items-center overflow-hidden bottom-8">
      {/* Image Container */}
      <div className="relative flex items-center gap-0 justify-center w-full h-full pb-32 pt-32">
        <HiChevronLeft
          style={{
            position: "relative",
            filter: "drop-shadow(0px 0px 3px #555)",
            width: "2.5rem",
            height: "2.5rem",
            color: "white",
          }}
          className="absolute top-64 right-2 z-20 p-2 bg-blue-700 text-black rounded-full shadow-md hover:bg-blue-900"
          onClick={handlePrev}
        />
        <HiChevronRight
          style={{
            position: "relative",
            filter: "drop-shadow(0px 0px 3px #555)",
            width: "2.5rem",
            height: "2.5rem",
            color: "white",
          }}
          className="absolute top-64 left-2 z-20 p-2 bg-blue-700 text-black rounded-full shadow-md hover:bg-blue-900"
          onClick={handleNext}
        />
        {items.map((item, index) => {
          const image = item.image;
          const position = (index - currentIndex + items.length) % items.length;
          const isCenter = position === 0;
          const isLeft = position === items.length - 1 || position === 1;
          const scale = isCenter ? 'scale-150' : isLeft ? 'scale-0 md:scale-75' : 'scale-0 md:scale-50';
          const zIndex = isCenter ? "z-10" : "z-0";
          const translateX =
            position === 0
              ? "translate-x-0"
              : position === 1
              ? "translate-x-2/3"
              : position === 2
              ? "translate-x-full"
              : position === items.length - 2
              ? "-translate-x-full"
              : "-translate-x-2/3";
          const imageOpacity = isCenter ? "opacity-100" : "opacity-30";

          return (
            <div
              key={index}
              className={`w-64 sm:w-72 md:w-96 max-h-96 md:max-h-72 overflow-hidden shadow-xl absolute transition-all duration-500 ease-in-out ${zIndex} ${translateX} ${scale}`}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className={`w-full object-fill ${imageOpacity} transition-all duration-500 ease-in-out`}
              />
              {isCenter && (
                <div
                  className="absolute top-0 w-full text-white text-left p-6"
                  style={{
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
                  }}
                >
                  <p className="font-bold">{items[index].event_name}</p>
                  <p style={{ fontSize: "10px" }}>{items[index].event_location}</p>
                  <p style={{ fontSize: "10px" }}>{items[index].event_date}</p>
                </div>
              )}
              {isCenter && !isMobile && (
                <div
                  className="absolute bottom-0 w-full text-white text-center p-4"
                  style={{
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))",
                  }}
                >
                  <p style={{ fontSize: "10px" }}>{items[index].event_desc}</p>
                </div>
              )}
              {isMobile && 
                <div className="p-4">
                  <p style={{fontSize: '10px'}} className="text-white">{items[index].event_desc}</p>
                </div>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;

