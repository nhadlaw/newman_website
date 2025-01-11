"use client"
import {useIsVisible } from '../../src/app/hooks/useIsVisible';
import { FaInstagram, FaDiscord } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";

const ICON_SIZE = 100;

const ServiceContactLinks = () => {
    const { isVisible, elementRef } = useIsVisible({
        root: null, // Use the viewport as the root
        rootMargin: '0px',
      });
    return (
        <div className={`transition-opacity ease-in duration-[700ms] ${
            isVisible ? 'opacity-100' : 'opacity-0'}`} ref={elementRef}>
            <div className='flex flex-col items-center'>
                <div className="flex space-x-4 mt-8">
                    <a href="https://www.instagram.com/tartancatholic/" target="_blank" rel="noopener noreferrer" className="text-blue-indigo-700 hover:text-blue-500">
                        <FaInstagram size={ICON_SIZE} />
                    </a>
                    <a href="https://discord.com/invite/RhdZjCFUsJ" target="_blank" rel="noopener noreferrer" className="text-blue-indigo-700 hover:text-blue-500">
                        <FaDiscord size={ICON_SIZE} />
                    </a>
                    <a href="mailto:cmunewman@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-indigo-700 hover:text-blue-500">
                        <SiGmail size={ICON_SIZE} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ServiceContactLinks;