"use client";
import { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useIsVisible } from '../src/app/hooks/useIsVisible';
import { headerStyling, subheadingStyling } from "../constants/stylingConstants";

const previousRetreatsInfo = "Check out some of our previous Retreat themes!";

const RetreatsGraphics = ['RetreatsGraphic1.svg']

export default function Slideshow({ items }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isVisible, elementRef } = useIsVisible({
    root: null, // Use the viewport as the root
    rootMargin: '0px',
  });
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div
      ref={elementRef}
      className={`transition-opacity ease-in duration-[700ms] ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center">
        <p className={headerStyling}>Previous Retreats</p>
        <p className={subheadingStyling}>{previousRetreatsInfo}</p>
      </div>
      <div className='mt-12 relative'>
        <div className="flex flex-col md:flex-row">
          {/* Left side (Image) */}
          <div>
            <img
              src={items[currentSlide].image}
              alt={items[currentSlide].retreat_theme}
              className="w-full h-full object-cover"
            />
            <BsArrowLeftCircleFill
              style={{
                position: 'absolute',
                filter: 'drop-shadow(0px 0px 3px #555)',
                width: '3rem',
                height: '3rem',
                color: 'white',
              }}
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer opacity-60 hover:opacity-100"
            />
            
          </div>

          {/* Right side (Title and Description) */}
          <div className={`${items[currentSlide].bg_color} text-white flex flex-col justify-center md:h-[90vh] md:pt-16`}>
            <div className='p-16'>
              <h2 className="text-4xl font-bold">{items[currentSlide].retreat_theme}</h2>
              <p className="text-lg font-light mb-4">{items[currentSlide].retreat_semester}</p>
              <p className="text-lg">{items[currentSlide].retreat_desc}</p>
              {items[currentSlide].svg_image && <img
                src={items[currentSlide].svg_image}
                alt={items[currentSlide].retreat_theme}
                className="w-80 z-0 mt-6 object-cover overflow-hidden object-cover relative bottom-0" 
                style={{ clipPath: "inset(auto auto auto)", overflow: 'hidden'}}

              />}
            </div>
            <BsArrowRightCircleFill
              style={{
                position: 'absolute',
                filter: 'drop-shadow(0px 0px 3px #555)',
                width: '3rem',
                height: '3rem',
                color: 'white',
              }}
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer opacity-60 hover:opacity-100"
            />
          </div>
          <div className="opacity-0 md:opacity-100 absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 ${
                index === currentSlide ? 'bg-white' : 'bg-gray-300'
              } rounded transition-all duration-500`}
            ></div>
          ))}
        </div>
          </div>

        {/* Arrow Controls */}

      </div>
    </div>
  );
}



