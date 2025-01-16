"use client"
import {useIsVisible } from '../../src/app/hooks/useIsVisible';
import { headerStyling, subheadingStyling } from '../../constants/stylingConstants';
import Image from 'next/image';


const ButtonRow = ({buttonImages}) => {
  const { isVisible, elementRef } = useIsVisible({
    root: null, // Use the viewport as the root
    rootMargin: '0px',
  });

  const categories = [
    {
      title: 'What Is Newman?',
      image: buttonImages.what_is_newman_img || '/AboutJohnHenryNewman.svg',
        link: '#aboutNewman'
    },
    {
        title: 'The Oratory',
        image: buttonImages.oratory_img || '/OratoryLogo.svg',
        link: '#aboutOratory'
    },
    {
        title: 'Our Community',
        image: buttonImages.community_img || '/OurMissionaries.png',
        link: '#aboutOurCommunity'
    },
    {
        title: 'Service',
        image: buttonImages.service_img || '/ServiceIcon.svg',
        link: '#aboutService'
    },
    {
        title: 'FOCUS',
        image: buttonImages.focus_img || '/FOCUSLogo.svg',
        link: '#aboutFOCUS'
    },
    {
        title: 'Alumni',
        image: buttonImages.alumni_img || '/Alumni.png',
        link: '#aboutAlumni'
    }
  ]

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
              style={{width: '150px', height: '150px'}}
              className={`flex relative items-center justify-center  border-4 border-white rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 hover:border-border-white`}
            >
              <div 
                style={{width: '140px', height: '140px'}}
                className={`flex relative items-center justify-center border-cmu-maroon-darker border-2 rounded-full bg-opacity-100 bg-cmu-maroon-lighter overflow-hidden`}>
             {/* Image in the center */}
                <Image
                src={category.image}
                alt="Button Image"
                width={200}
                height={200}
                className="z-0 opacity-80 object-fill hover:opacity-100"
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