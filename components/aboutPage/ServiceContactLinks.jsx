"use client"
import {useIsVisible } from '../../src/app/hooks/useIsVisible';
import { FaInstagram, FaDiscord } from 'react-icons/fa';
import { FaHeartCirclePlus } from "react-icons/fa6";

const ICON_SIZE = 100;

const ServiceContactLinks = ({discordLink, seeMoreLink}) => {
    const { isVisible, elementRef } = useIsVisible({
        root: null, // Use the viewport as the root
        rootMargin: '0px',
      });
    return (
        <div className={`transition-opacity ease-in duration-[700ms] ${
            isVisible ? 'opacity-100' : 'opacity-0'}`} ref={elementRef}>
            <div className='flex flex-col items-center'>
                <div className="flex space-x-4 mt-8 flex-wrap items-center justify-center">
                    <a href="https://www.instagram.com/tartancatholic/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cmu-maroon-darker">
                        <FaInstagram size={ICON_SIZE} />
                    </a>
                    <a href={discordLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cmu-maroon-darker">
                        <FaDiscord size={ICON_SIZE} />
                    </a>
                    <a href={seeMoreLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cmu-maroon-darker">
                        <FaHeartCirclePlus size={ICON_SIZE} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ServiceContactLinks;