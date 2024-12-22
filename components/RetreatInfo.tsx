"use client"
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {useIsVisible } from '../src/app/hooks/useIsVisible';

const RetreatInfo = () => {

  const gridItems = [
        { 
            title: "Where?", 
            answer: "Rednal Retreat House",
            description: "Multiple opportunities for mass on campus. Multiple opportunities for mass on campus. Multiple opportunities for mass on campus. Multiple opportunities for mass on campus", 
            imageUrl: "/Rednal.png",
            color: 'bg-[rgba(31,103,226,0.8)]',
            textColor: 'text-[rgba(31,103,226,0.8)]',
            buttonName: 'Find Out More!'
        },
        { 
            title: "What?", 
            answer: "Prayer, Community, Growth",
            description: "Multiple opportunities for mass on campus. Multiple opportunities for mass on campus. Multiple opportunities for mass on campus. Multiple opportunities for mass on campus", 
            linkName: "See More Info!",
            imageUrl: "/EventsPage.jpg",
            color: 'bg-[rgba(114,28,64,1.0)]',
            textColor: 'text-[rgba(114,28,64,1.0)]',
            buttonName: 'Find Out More!'
 
        },
        { 
            title: "How?", 
            answer: "1 day, 2 nights",
            linkName: "See More Info!",
            description: "Multiple opportunities for mass on campus. Multiple opportunities for mass on campus. Multiple opportunities for mass on campus. Multiple opportunities for mass on campus", 
            imageUrl: "/EventsPage.jpg",
            color: 'bg-[rgba(0,168,107,0.8)]',
            textColor: 'text-[rgba(0,168,107,0.8)]',
            buttonName: 'Find Out More!'

        },
        { 
            title: "Why?", 
            answer: "Time Spent For Good",
            linkName: "See More Info!",
            description: "Multiple opportunities for mass on campus. Multiple opportunities for mass on campus. Multiple opportunities for mass on campus. Multiple opportunities for mass on campus", 
            imageUrl: "/Rednal.png",
            color: 'bg-[rgba(255,200,46,1.0)]',
            textColor: 'text-[rgba(255,200,46,1.0)]',
            buttonName: 'Find Out More!'
 
        },
    ]
    return (
        <div className="container mx-auto py-8 px-8 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {gridItems.map((item, index) => (
              <article
                key={index}
                className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex flex-col"
              >
                {/* Top Half: Title */}
                <div className={`${item.color} text-white font-semibold text-3xl py-4 text-center rounded-t-lg`}>
                  {item.title}
                </div>
    
                {/* Bottom Half: Split into two parts */}
                <div className="flex flex-grow flex-col lg:flex-row">
                  {/* Left: Image */}
                  <div className="lg:w-1/2 bg-gray-100 flex items-center justify-center">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="max-w-full h-full object-cover"
                    />
                  </div>
    
                  {/* Right: Description */}
                  <div className="lg:w-1/2 bg-gray-50 flex flex-col justify-center p-4">
                    <p className={ `text-2xl font-bold text-center ${item.textColor}`}>{item.answer}</p>
                    <p className="text-gray-700 mb-4 font-light mt-8">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      );
};

export default RetreatInfo