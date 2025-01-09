"use client";
import React, { useState, useEffect } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";


export default function DiagonalGrid({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4); // Default visible count

  // Update visibleCount based on screen width
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(4);
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2); // Medium screens
      } else {
        setVisibleCount(1); // Small screens
      }
    };

    updateVisibleCount(); // Set initial value
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - visibleCount, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + visibleCount, items.length - visibleCount)
    );
  };

  const visibleItems = items.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="container mx-auto py-8 px-8 w-full">
      <div className="flex items-center justify-center mb-4" style={{width: '100%'}}>
        <button
          className=" text-white rounded disabled:opacity-50"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <HiChevronLeft className="mr-4 ml-4 text-white bg-gray-800 text-5xl rounded-3xl p-2" />
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleItems.map((item) => (
            <a
                key={item.event_name}
                href="/"
                className="h-64 relative group w-full aspect-square bg-cmu-maroon overflow-hidden shadow-lg rounded-lg"
            >
                <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${item.image})`,
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                }}
                ></div>
                <div
                className="absolute inset-0 bg-gray-800 bg-opacity-70 flex flex-col text-white font-bold p-4"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 0 100%)",
                }}
                >
                <div style={{ marginTop: "20px" }}>
                    <p className="text-xl">{item.event_name}</p>
                    <p className="font-semibold text-lg">{item.event_desc}</p>
                    <p className="font-light text-md max-w-32">{item.event_location}</p>
                </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition"></div>
            </a>
            ))}
        </div>
        <button
          className="text-white disabled:opacity-50"
          onClick={handleNext}
          disabled={currentIndex + visibleCount >= items.length}
        >
        <HiChevronRight className="ml-4 mr-4 text-white bg-gray-800 text-5xl rounded-3xl p-2" />
        </button>
      </div>
    </div>
  );
}


