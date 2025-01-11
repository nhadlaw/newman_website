"use client"
import {useIsVisible } from '../src/app/hooks/useIsVisible';
import { FaInstagram, FaDiscord } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import {headerStyling, sectionMargin, subheadingStyling} from '../constants/stylingConstants';

const ICON_SIZE = 50;

const ContactLinks = () => {
    const { isVisible, elementRef } = useIsVisible({
        root: null, // Use the viewport as the root
        rootMargin: '0px',
      });
    return (
        <div className={`${sectionMargin} transition-opacity ease-in duration-[700ms] ${
            isVisible ? 'opacity-100' : 'opacity-0'}`} ref={elementRef}>
            <p className={headerStyling}>Questions?</p>
            <p className={headerStyling}>Want to Join?</p>
            <div className='flex flex-col items-center'>
                <p className={subheadingStyling}>Join our community on Discord and Instagram or fill out the contact form and a missionary, board member, or campus minister will reach out to you!</p>
                <div className="flex space-x-4 mt-8">
                    <a href="https://www.instagram.com/tartancatholic/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                        <FaInstagram size={ICON_SIZE} />
                    </a>
                    <a href="https://discord.com/invite/RhdZjCFUsJ" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                        <FaDiscord size={ICON_SIZE} />
                    </a>
                    <a href="mailto:cmunewman@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                        <SiGmail size={ICON_SIZE} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactLinks;