// components/ImageRow.js
"use client"
import {useIsVisible } from '../src/app/hooks/useIsVisible';
import Image from 'next/image';
import Link from "next/link"; // Use this if you're using Next.js routing.


const SacramentOptions = ({subheading}) => {
  const items = [
    {
      imgSrc: '/MassOutline.svg',
      alt: 'Mass Outline',
      title: 'Mass',
      desc: 'See all Mass times near campus',
      divLink: '#massTimes'
    },
    {
      imgSrc: '/ConfessionOutline.svg',
      alt: 'Confession Outline',
      title: 'Confession',
      desc: 'View all Confession options',
      divLink: '#confessionOptions'
    },
    {
      imgSrc: '/EucharistOutline.svg',
      alt: 'Eucharist Outline',
      title: 'Divine Office & Devotions',
      desc: 'Check out the Devotion options',
      divLink: '#divineOfficeAndDevotions'
    },
    // {
    //   imgSrc: '/StPaulOutline.svg',
    //   alt: 'Church Outline',
    //   title: 'Church Info',
    //   desc: 'Find out about our churches',
    //   divLink: '#churchInfo'

    // },
  ];
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
      <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '3.5rem'}} className="text-white pt-28 text-center font-bold">The Sacraments</p>
      <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '1rem'}} className="text-white pt-2 text-center font-light text-black ">{subheading}</p>
      <div className="flex flex-row flex-wrap justify-center gap-6 py-6">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.divLink} // Make sure each object in the array has a 'link' property.
            className="
                bg-black shadow-lg rounded-lg text-center 
                transform transition-transform duration-300 
                border-black border-2 hover:scale-105 hover:border-white cursor-pointer"
          >
              {/* Image Section */}
              <div className="w-48 h-48">
                <Image
                  src={item.imgSrc}
                  alt={item.alt}
                  width={100}
                  height={100}
                  className="rounded-md object-cover w-full h-full"
                />
              </div>

              {/* Title and Description */}
              <p className="mt-4 text-white p-4 pb-0 w-48 font-bold text-xl">
                {item.title}
              </p>
              <p className="text-white p-4 pt-0 w-48 font-light text-md">
                {item.desc}
              </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SacramentOptions;