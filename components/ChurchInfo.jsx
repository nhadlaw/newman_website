"use client";
import { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const slides = [
  {
    image: '/Oratory.jpeg', // Add image paths here
    title: 'The Pittsburgh Oratory',
    details: '4450 Bayard St. Pittsburgh, PA 15213',
    description: 'The Pittsburgh Oratory is home of the Oratorian fathers following the tradition of St. Phillip Neri. It was the first Oratory in the United States invited into a diocese to serve as campus ministers to secular universities. It serves as the Newman Center for the University of Pittsburgh, Carnegie Mellon University, and Chatam University, the oratory offers a range of spiritual services such as Daily Mass, Multiple hours of Confession per day, and Perpetual Eucharistic Adoration.  '
  },
  {
    image: '/StPaulCathedral.JPEG', // Add image paths here
    title: 'St. Paul Cathedral',
    details: 'Fifth Ave. at Craig Street, Pittsburgh, PA 15213',
    description: 'info to be added'
  },
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left side (Image) */}
        <div className="flex-1">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side (Title and Description) */}
        <div className={`flex-1 p-8 bg-black text-white flex flex-col justify-center`}>
          <h2 className="text-4xl font-bold">{slides[currentSlide].title}</h2>
          <p className="text-lg font-light mb-4">{slides[currentSlide].details}</p>
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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
