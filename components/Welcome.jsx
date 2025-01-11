"use client"
import {useIsVisible } from '../src/app/hooks/useIsVisible';


const WelcomeText = ({welcomeText}) => {
    const { isVisible, elementRef } = useIsVisible({
        root: null, // Use the viewport as the root
        rootMargin: '0px',
    });
    return (
        <div
        ref={elementRef}
        className={`transition-opacity ease-in duration-[700ms] ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
             <p 
            className={`pt-44 text-center font-bold text-black text-6xl lg:text-8xl`}
            style={{paddingRight: "20px", paddingLeft: "20px"}}>Welcome!
            </p>
            <p className="text-center text-3xl px-12 md:px-24 font-light mt-4">
                {welcomeText}
            </p>
        </div>
    )
}

export default WelcomeText; 