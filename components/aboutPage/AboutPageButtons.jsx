"use client"
import {useIsVisible } from '../../src/app/hooks/useIsVisible';
import { headerStyling, subheadingStyling } from '../../constants/stylingConstants';
import Image from 'next/image';

const categories = [
    {
        title: 'What Is Newman?',
        image: '/JohnHenryNewman.svg',
        link: '#aboutNewman'
    },
    {
        title: 'The Oratory',
        image: '/OratoryLogo.svg',
        link: '#aboutOratory'
    },
    {
        title: 'Our Community',
        image: '/OurMissionaries.png',
        link: '#aboutOurCommunity'
    },
    {
        title: 'Service',
        image: '/SacredHeart.svg',
        link: '#aboutService'
    },
    {
        title: 'FOCUS',
        image: '/FOCUSLogo.svg',
        link: '#aboutFOCUS'
    },
    {
        title: 'Alumni',
        image: '/OurMissionaries.png',
        link: '#aboutAlumni'
    }
]

const ButtonRow = () => {
  const { isVisible, elementRef } = useIsVisible({
    root: null, // Use the viewport as the root
    rootMargin: '0px',
  });
  return (
    <div
        ref={elementRef}
        className={`flex flex-col items-center my-48 transition-opacity ease-in duration-[700ms] ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
      <p className={`${headerStyling} text-white`}>Learn About Us</p>
      <div className="flex flex-wrap justify-center items-center gap-8 mb-6 mt-16 w-[60vw]">
        {categories.map((category) => (
          <a key={category.title} href={category.link} className='flex flex-col items-center'>
            <div
              className={`flex relative items-center justify-center w-[160] h-[160] border rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 hover:bg-white`}
            >
              <div className={`flex relative items-center justify-center w-[150] h-[150] border-2 rounded-full bg-white bg-opacity-100 overflow-hidden`}>
             {/* Image in the center */}
                <Image
                src={category.image}
                alt="Button Image"
                width={400}
                height={400}
                className="z-0 opacity-80 object-cover hover:opacity-100"
                />
              </div>
            </div>
            <p className='font-light mt-2 text-2xl text-white'>{category.title}</p>
          </a>
        ))}
      </div>

    </div>

  );
};

export default ButtonRow;