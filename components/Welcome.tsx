"use client"
import {useIsVisible } from '../src/app/hooks/useIsVisible';


const WelcomeText = () => {
    const { isVisible, elementRef } = useIsVisible({
        root: null, // Use the viewport as the root
        rootMargin: '0px',
    });
    return (
        <div
        ref={elementRef}
        className={`transition-opacity ease-in duration-[2000ms] ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
             <p 
            className={`pt-44 text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl`}
            style={{paddingRight: "20px", paddingLeft: "20px"}}>Welcome!
            </p>
            <p className="text-center text-3xl pr-24 pl-24 font-light mt-4">
            Our club has been a continuous presence at CMU for decades. We work in the vineyard with the Oratorian fathers, who administer campus ministry for Carnegie Mellon, the University of Pittsburgh, and Chatham University.
            </p>
        </div>
    )
}

export default WelcomeText; 