"use client"
import { useState, useEffect } from 'react';
const tempText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const AboutOratory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slideshow images
  const images = [
    '/Oratory.jpeg',
    '/SlideshowImg1.jpg',
    '/LitAndPrayPage.png',
  ];

  // Text content
  const text = {
    title: 'Welcome to Our Site',
    description: tempText,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="flex flex-col md:flex-row h-[120vh] lg:h-[80vh] mt-16 mx-16">
      {/* Text Section */}
      <div className="flex-1 bg-indigo-700 p-8 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4 text-white">{text.title}</h1>
        <p className="text-lg text-white">{text.description}</p>
      </div>

      {/* Slideshow Section */}
      <div className="flex-1 relative overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover object-top transition-opacity duration-700 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutOratory;
