"use client"
import {useIsVisible } from '../src/app/hooks/useIsVisible';
import Image from 'next/image';
import Link from 'next/link';

const churchImages = {
    'Holy Spirit Byzantine': '/ByzantineOutline.svg',
    'The Pittsburgh Oratory': '/OratoryOutline.svg',
    'St. Paul Cathedral': '/StPaulOutline.svg',
    'CMU Wright Rogal': '/HamerschlagOutline.svg',
    'Heinz Chapel': 'HeinzChapel.svg'
}
function sortByPriority(array) {
    if (!Array.isArray(array)) {
       return array
    }
    
    return array.sort((a, b) => {
        if (a.priority === undefined || b.priority === undefined) {
            return 0
        }
        return a.priority - b.priority;
    });
}

const litAndPrayerOptions = ({items, bgColor, heading, description, informationToGrab}) => {
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
        <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '4rem'}} className="text-white pt-28 text-center font-bold text-black text-7xl">{heading}</p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 py-6 px-6">
            {(sortByPriority(items)).map((item, index) => (
                item[informationToGrab] && 
                <div
                key={index}
                className={`${bgColor} shadow-lg rounded-lg text-center flex flex-row sm:flex-col`}
                >
                    <div className="w-full sm:w-48 h-48 mx-auto">
                        <Image
                        src={churchImages[item.churchName]}
                        alt={item.churchName}
                        width={100}
                        height={100}
                        className="pt-4 rounded-md object-cover w-full h-full"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-center'>
                            <p className="text-white p-4 pb-0 w-64 font-bold text-lg sm:text-xl">{item.churchName}</p>
                            <Link
                            href={item.location_google_maps}
                            >
                                <p className="text-white p-4 pt-0 w-64 font-light text-xs sm:text-md">{item.location}</p>
                            </Link>
                            <div 
                            className="mx-auto md:my-2"
                            style={{ backgroundColor: "white", height: "2px", width: "80%", opacity: "50%"}}
                            ></div>
                        </div>
                        <div className="text-left w-64 p-4">
                            <div className="text-white space-y-2">
                                {(item[informationToGrab].information).map((dayOption, index) => (
                                <div key={index}>
                                    <p>
                                        <strong>{dayOption.key}:</strong> <span className='opacity-80'>{dayOption.value}</span>
                                    </p>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
  );
};

export default litAndPrayerOptions;