"use client"
import { useState, useEffect } from 'react';

const AboutOratory = ({oratoryTxt, oratoryImgs}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Text content
  const text = {
    title: 'About The Pittsburgh Oratory',
    description: oratoryTxt,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % oratoryImgs.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [oratoryImgs]);

  return (
    <div id="aboutOratory" className="flex flex-col md:flex-row h-[120vh] lg:h-[80vh] mt-16 mx-16">
      {/* Text Section */}
      <div className="flex-1 bg-indigo-700 p-8 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4 text-white">{text.title}</h1>
        <p className="text-lg text-white">{text.description}</p>
      </div>

      {/* Slideshow Section */}
      <div className="flex-1 relative overflow-hidden">
        {oratoryImgs.map((item, index) => (
          <img
            key={index}
            src={item.oratory_image}
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
