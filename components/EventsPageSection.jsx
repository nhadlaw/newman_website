"use client"
import Image from 'next/image';
import {useIsVisible } from '../src/app/hooks/useIsVisible';


const EventsPageSection = ({ sectionRef, nextSectionRef, heading, headingImg, subheadingText, displayComponents }) => {

    const scrollToNextSection = () => {
        nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    
    const { isVisible, elementRef } = useIsVisible({
        root: null, // Use the viewport as the root
        rootMargin: '0px',
    });

    return (
        <div className='py-36' ref={sectionRef}>
            <div className={`flex flex-col pt-48 items-center justify-center align-center transition-opacity ease-in duration-[700ms] ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`} ref={elementRef}>
                <p
                    style={{ paddingRight: "20px", paddingLeft: "20px" }}
                    className="z-10 drop-shadow-[0_8.2px_1.2px_rgba(0,0,0,0.8)] text-white text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl"
                >
                    {heading}
                </p>
                <div className="flex justify-center space-x-4">
                    <Image
                        src={headingImg}
                        alt="Button Image"
                        width={400}
                        height={400}
                        className="z-0 opacity-80 overflow-hidden relative bottom-56"
                    />
                </div>
                <h1 className="z-10 font-light text-2xl font-bold text-center text-white relative bottom-64 w-2/3">
                    {subheadingText}
                </h1>
            </div>
            <div className="relative bottom-56 flex flex-col gap-16">
                {displayComponents.map(function(item, index) {
                    const { isVisible, elementRef } = useIsVisible({
                        root: null, // Use the viewport as the root
                        rootMargin: '0px',
                    });
                    return (
                        <div key={index} ref={elementRef} className={`transition-opacity ease-in duration-[700ms] ${
                            isVisible ? 'opacity-100' : 'opacity-0'
                          }`}>
                            {item}
                        </div>
                    )
                })}
            </div>
            {/* Animated Down Arrow */}
           {nextSectionRef &&  <div className="flex justify-center relative bottom-44">
                <div
                    className="animate-bounce cursor-pointer"
                    onClick={scrollToNextSection}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="currentColor"
                        className="w-10 h-10 text-white"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>}
        </div>
    );
};

export default EventsPageSection;
