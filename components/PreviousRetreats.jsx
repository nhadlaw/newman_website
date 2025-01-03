"use client";
import { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function Slideshow({items}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left side (Image) */}
        <div className="flex-1">
          <img
            src={items[currentSlide].image}
            alt={items[currentSlide].retreat_theme}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side (Title and Description) */}
        <div className={`flex-1 p-8 ${items[currentSlide].bg_color} text-white flex flex-col justify-center`}>
          <h2 className="text-4xl font-bold">{items[currentSlide].retreat_theme}</h2>
          <p className="text-lg font-light mb-4">{items[currentSlide].retreat_semester}</p>
          <p className="text-lg">{items[currentSlide].retreat_desc}</p>
          <div>
            <h2 className="text-2xl font-bold mt-4">{"Talks"}</h2>
            {(items[currentSlide].retreat_talks).map((talk_name, index) => (
              <div key={index}>
                <p className='text-lg'>{talk_name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrow Controls */}
      <BsArrowLeftCircleFill
        style={{ position: 'absolute', filter: 'drop-shadow(0px 0px 3px #555)', width: '3rem', height: '3rem', color: 'white'}}
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer opacity-60 hover:opacity-100"
      />
      <BsArrowRightCircleFill
        style={{ position: 'absolute', filter: 'drop-shadow(0px 0px 3px #555)', width: '3rem', height: '3rem', color: 'white'}}
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer opacity-60 hover:opacity-100"
      />

      {/* Slide Indicators */}
      <div className="opacity-0 md:opacity-100 absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 ${index === currentSlide ? "bg-white" : "bg-gray-300"} rounded transition-all duration-500`}
          ></div>
        ))}
      </div>
    </div>
  );
}
