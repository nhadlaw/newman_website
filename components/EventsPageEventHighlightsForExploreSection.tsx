"use client";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const ImageCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="relative w-[2/3] h-[600px] items-center overflow-hidden bottom-8">
      {/* Image Container */}
      <div className="relative flex items-center gap-0 justify-center w-full h-full">
        <BsArrowLeftCircleFill
          style={{
            position: "relative",
            filter: "drop-shadow(0px 0px 3px #555)",
            width: "3rem",
            height: "3rem",
            color: "rgba(31,103,226,0.6)",
          }}
          className="absolute top-56 right-4 z-0 p-2 bg-white text-black rounded-full shadow-md hover:bg-gray-700"
          onClick={handlePrev}
        />
        <BsArrowRightCircleFill
          style={{
            position: "relative",
            filter: "drop-shadow(0px 0px 3px #555)",
            width: "3rem",
            height: "3rem",
            color: "rgba(31,103,226,0.6)",
          }}
          className="absolute top-56 left-4 z-0 p-2 bg-white text-black rounded-full shadow-md hover:bg-gray-700"
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
              className={`shadow-xl absolute transition-all duration-500 ease-in-out rounded-lg ${zIndex} ${translateX} ${scale}`}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className={`w-64 md:w-96 rounded-xl ${imageOpacity} transition-all duration-500 ease-in-out`}
              />
              {isCenter && (
                <div
                  className="absolute top-0 w-full text-white text-left p-4 rounded-t-lg"
                  style={{
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
                  }}
                >
                  <p className="font-bold">{items[index].event_name}</p>
                  <p style={{ fontSize: "10px" }}>{items[index].event_location}</p>
                  <p style={{ fontSize: "10px" }}>{items[index].event_date}</p>
                </div>
              )}
              {isCenter && (
                <div
                  className="absolute bottom-0 w-full text-white text-center p-4 rounded-lg"
                  style={{
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))",
                  }}
                >
                  <p style={{ fontSize: "10px" }}>{items[index].event_desc}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;

