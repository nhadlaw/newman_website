"use client"
import React from 'react'
//icons for slideshow
import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/24/solid'
//third-party-package for smooth slideshow
import {Zoom} from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


const HomepageSlideshow = ({imageData}) => {
    //These are custom properties for zoom effect while slide-show
    const zoomInProperties = {
      scale: 1,
      duration: 2000,
      transitionDuration: 300,
      infinite: true,
      prevArrow: (
        <div className="ml-10 top-120 md:top-120">
          <ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
        </div>
      ),
      nextArrow: (
          <div className="mr-10 top-120 md:top-120">
              <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
            </div>
      ),
    };
    return (
      <div className='z-10'>
        <Zoom {...zoomInProperties}>
          {imageData.map((each, index) => 
        <div key={index} className="bg-black flex justify-center md:items-center items-start w-full h-full relative">
          <div className="relative after:absolute after:inset-0 after:bg-[rgba(114,28,64,0.8)] ">
          <img className='w-screen object-cover h-screen' alt={each.name} src={each.image} key={index}/>
          </div>
            <p className="inset-y-1/4 lg:inset-y-[300] xl:inset-y-[300] absolute inset-x-1.5 text-center font-bold text-white text-7xl xl:text-8xl">CMU Catholic<br/>
            <span className='font-light inset-y-1/8'>Newman Club</span><br/>
            {/* <span className='text-xl sm:text-1xl md:text-3xl lg:text-3xl xl:text-3xl font-light inset-x-2/3 pr-2 pl-2'>"We need something which the world cannot give, and this it is which the Gospel has supplied." <br/>- St. John Henry Newman</span> */}
            </p>
        </div>

          )}
        </Zoom>
      </div>
    );
}

export default HomepageSlideshow