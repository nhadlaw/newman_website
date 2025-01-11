"use client"
import {useIsVisible } from '../src/app/hooks/useIsVisible';
import { aboutHeadingStyling } from '../constants/stylingConstants';


const AboutPageSection = ({idRef, heading, sectionComponents, bgColor}) => {
    return (
        <div className={`${bgColor} py-32`} id={idRef}>
            <p className={`${aboutHeadingStyling}`}>{heading}</p>
            <div className='flex flex-col gap-32 items-center'>
                {sectionComponents.map(function(item, index){
                    const { isVisible, elementRef } = useIsVisible({
                        root: null, // Use the viewport as the root
                        rootMargin: '0px',
                    });
                    return (
                        <div
                        key={index}
                        ref={elementRef}
                        className={`transition-opacity ease-in duration-[700ms] ${
                            isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                        >
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AboutPageSection