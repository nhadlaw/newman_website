
import Image from 'next/image';
const tempText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
import React from "react";
import { eventsPageSubHeadingStyle, eventsPageSubHeadingTextStyle } from '../../constants/stylingConstants';
import { FaPlay } from 'react-icons/fa';
import Link from 'next/link'

const SeekExtraInfoButton = ({buttonTitle, buttonDesc, buttonLink}) => {
    console.log('button link: ', buttonLink)
    return (
        <div className='md:ml-12 mt-4'>
           {buttonLink &&  <a
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                >
                <div className='flex flex-col items-center border-white border-2 w-[90vw] md:w-[350px] transition-transform duration-300 hover:scale-105 hover:bg-white'>
                    <div className='p-6 border-white border-2 flex flex-col items-center m-4 bg-cmu-maroon-lighter w-[90%]'>
                        <p className="text-4xl font-bold mt-4 text-left text-white">
                        {buttonTitle}
                        </p>
                        <p className={'z-10 font-light text-xl text-white text-center pt-2'}>{buttonDesc}</p>
                    </div>
                </div>
            </a>}
        </div>
    )
}

export default SeekExtraInfoButton;