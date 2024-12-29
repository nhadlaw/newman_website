"use client";
import { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const slides = [
  {
    image: '/RetreatsPage.png', // Add image paths here
    title: 'Why be a Christian Student?',
    details: 'Fall 2021',
    color: 'bg-[rgba(31,103,226,0.8)]',
    description: 'This retreat taught students all about what it means to be a Christian student. With games, food, and fellowship, it was surely a success! Thanks to our campus minister Hannah Naylor for her talk on being a Christian student!',
  },
  {
    image: '/EventsPage.jpg', // Add image paths here
    title: 'Leisure and Rest',
    details: 'Spring 2022',
    color: 'bg-[rgba(114,28,64,1.0)]',
    description: 'This retreat taught students all about what it means to be a Christian student. With games, food, and fellowship, it was surely a success! Thanks to our campus minister Hannah Naylor for her talk on being a Christian student!',
  },
  {
    image: '/StPaulCathedral.JPEG', // Add image paths here
    title: 'Silent Retreat',
    details: 'Fall 2022',
    color: 'bg-[rgba(0,168,107,0.8)]',
    description: 'This retreat taught students all about what it means to be a Christian student. With games, food, and fellowship, it was surely a success! Thanks to our campus minister Hannah Naylor for her talk on being a Christian student!',
  },
  {
    image: '/RetreatsPage.png', // Add image paths here
    title: 'Palm Sunday',
    details: 'Spring 2023 (and Spring 2024)',
    color: 'bg-[rgba(255,200,46,1.0)]',
    description: 'This retreat taught students all about what it means to be a Christian student. With games, food, and fellowship, it was surely a success! Thanks to our campus minister Hannah Naylor for her talk on being a Christian student!',
  },
  {
    image: '/StPaulCathedral.JPEG', // Add image paths here
    title: 'The Advent of Advent',
    details: 'Fall 2024',
    color: 'bg-[rgba(31,103,226,0.8)]',
    description: 'This retreat taught students all about what it means to be a Christian student. With games, food, and fellowship, it was surely a success! Thanks to our campus minister Hannah Naylor for her talk on being a Christian student!',
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
        <div className={`flex-1 p-8 ${slides[currentSlide].color} text-white flex flex-col justify-center`}>
          <h2 className="text-4xl font-bold">{slides[currentSlide].title}</h2>
          <p className="text-lg font-light mb-4">{slides[currentSlide].details}</p>
          <p className="text-lg">{slides[currentSlide].description}</p>
          <h2 className="text-2xl font-bold mt-4">{"Talks"}</h2>
          <p className="text-lg">{"Why Be Catholic? - Hannah Naylor"}</p>
          <p className="text-lg">{"What it means to be You? - Hannah Naylor"}</p>
          <p className="text-lg">{"Prayer - Nelly Hadlaw"}</p>
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
