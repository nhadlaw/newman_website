"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


const slides = [
  {
    image: '/Oratory.jpeg', // Add image paths here
    title: 'The Pittsburgh Oratory',
    details: '4450 Bayard St, Pittsburgh, PA 15213',
    description: 'The Newman club hosted its annual barn dance with food, limbo contest, apple bobbing, and more! It was a hoot and a half indeed!',
  },
  {
    image: '/StPaulCathedral.JPEG', // Add image paths here
    title: 'St. Paul Cathedral',
    details: '4450 Bayard St, Pittsburgh, PA 15213',
    description: 'The Newman club hosted its annual barn dance with food, limbo contest, apple bobbing, and more! It was a hoot and a half indeed!',
  },
  {
    image: '/Oratory.jpeg', // Add image paths here
    title: 'The Pittsburgh Oratory',
    details: '4450 Bayard St, Pittsburgh, PA 15213',
    description: 'The Newman club hosted its annual barn dance with food, limbo contest, apple bobbing, and more! It was a hoot and a half indeed!',
  },
  {
    image: '/StPaulCathedral.JPEG', // Add image paths here
    title: 'The Pittsburgh Oratory',
    details: '4450 Bayard St, Pittsburgh, PA 15213',
    description: 'The Newman club hosted its annual barn dance with food, limbo contest, apple bobbing, and more! It was a hoot and a half indeed!',
  },
  {
    image: '/Oratory.jpeg', // Add image paths here
    title: 'The Pittsburgh Oratory',
    details: '4450 Bayard St, Pittsburgh, PA 15213',
    description: 'The Newman club hosted its annual barn dance with food, limbo contest, apple bobbing, and more! It was a hoot and a half indeed!',
  },
  {
    image: '/StPaulCathedral.JPEG', // Add image paths here
    title: 'The Pittsburgh Oratory',
    details: '4450 Bayard St, Pittsburgh, PA 15213',
    description: 'The Newman club hosted its annual barn dance with food, limbo contest, apple bobbing, and more! It was a hoot and a half indeed!',
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

      <div className="relative w-full max-w-screen-lg mx-auto h-[700px] flex mt-4" >
        <div className='mb-16'>
            <div className='flex flex-wrap items-center justify-center'>
                <div style={{width: "90%"}} 
                className="flex flex-col md:flex-row lg:flex-row xl:flex-row w-full h-[400px] shadow-lg">
                    {/* Left side (Image) */}
                    <div className="w-full md:w-2/3">
                    <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full h-full object-cover" />
                    </div>

                    {/* Right side (Title and Description) */}
                    <div className="w-full md:w-1/3 p-8 bg-[rgba(31,103,226,0.8)] text-white flex flex-col justify-center">
                    <h2 className="text-3xl font-bold">{slides[currentSlide].title}</h2>
                    <p className="text-md font-light mb-4">{slides[currentSlide].details}</p>
                    <p className="text-md">{slides[currentSlide].description}</p>
                    </div>
                </div>
                <div className="flex justify-center mt-4 opacity-0 md:opacity-100 lg:opacity-100 xl:opacity-100">
                    {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 w-10 mx-1 ${
                        index === currentSlide
                            ? "bg-cmu-maroon rounded-xl"
                            : "bg-gray-300 rounded-xl"
                        } transition-all duration-500 ease-in-out`}
                    ></div>
                    ))}
                </div>
            </div>
    
            <BsArrowLeftCircleFill 
            style={{position: 'absolute', filter: 'drop-shadow(0px 0px 3px #555)', width: '3rem', height: '3rem', color: 'white'}}
            onClick={prevSlide} className="absolute top-1/4 left-6 transform text-black p-2 rounded-full opacity-100 hover:opacity-100 transition" />
            <BsArrowRightCircleFill 
            style={{position: 'absolute', filter: 'drop-shadow(0px 0px 3px #555)', width: '3rem', height: '3rem', color: 'white'}}
            onClick={nextSlide} className="absolute top-1/4 right-4 transform text-black p-2 rounded-full opacity-100 hover:opacity-100 transition" />
        </div>
      </div>
    );
  }