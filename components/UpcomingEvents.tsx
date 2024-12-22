"use client"
import React from "react";
import {useIsVisible } from '../src/app/hooks/useIsVisible';

export default function DiagonalGrid({events}) {
    const { isVisible: isVisibleHeading, elementRef: elementRefHeading } = useIsVisible({
        root: null, // Use the viewport as the root
        rootMargin: '0px',
      });
    return (
    <div>
    <p 
    ref={elementRefHeading}
    className={`pt-40 text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl transition-transform ease-in duration-1500 ${
      isVisibleHeading ? 'translate-x-0' : 'translate-x-96'
    }`}
    style={{paddingRight: "20px", paddingLeft: "20px"}}>See What It's All About...</p>
    <div className="container mx-auto py-8 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {events.map(function (item) { 
            const {isVisible: newIsVisible, elementRef: newElementRef}= useIsVisible({
                root: null, // Use the viewport as the root
                rootMargin: '0px',
            });          
            return (
                <a
                    key={item.event_name}
                    href={item.link}
                    ref={newElementRef}
                    className={`transition-transform ease-in duration-700 ${newIsVisible ? 'translate-x-0' : 'translate-x-96'} relative group w-full aspect-square bg-cmu-maroon overflow-hidden shadow-lg rounded-lg shadow-lg`}
                >
                    {/* Diagonal background with image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                        backgroundImage: `url(${item.image})`,
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        }}
                    ></div>
                    {/* Diagonal overlay with text */}
                    <div
                        className="absolute inset-0 bg-gray-800 bg-opacity-70 flex flex-col text-white font-bold p-4"
                        style={{
                        clipPath: "polygon(0 0, 100% 0, 0 100%)",
                        }}
                    >   
                    <div style={{marginTop: '20px'}}>
                        <p className="text-2xl">
                            {item.event_name}
                        </p>
                        <p className="font-semibold text-xl">
                            {item.event_desc}
                        </p>
                        <p className="font-light text-xl">
                            {item.event_location}
                        </p>
                    </div>
                    </div>
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition"></div>
                </a>
            )
        })}
        </div>
    </div>
    </div>
  );
}

