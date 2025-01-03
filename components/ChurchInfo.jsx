"use client";
import { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Link from 'next/link';

export default function Slideshow({slides}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left side (Image) */}
        <div className="flex-1">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].churchName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side (Title and Description) */}
        <div className={`flex-1 p-8 bg-black text-white flex flex-col justify-center`}>
          <h2 className="text-4xl font-bold">{slides[currentSlide].churchName}</h2>
          <Link
            href={slides[currentSlide].location_google_maps}
          >
            <p className="text-lg font-light mb-4">{slides[currentSlide].location}</p>
          </Link>
          <p className="text-lg">{slides[currentSlide].description}</p>
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
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 ${index === currentSlide ? "bg-white" : "bg-gray-300"} rounded transition-all duration-500`}
          ></div>
        ))}
      </div>
    </div>
  );
}
