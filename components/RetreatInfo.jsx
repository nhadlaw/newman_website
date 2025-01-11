"use client"
import { headerStyling, subheadingStyling } from "../constants/stylingConstants";
import {useIsVisible } from '../src/app/hooks/useIsVisible';

const retreatsInfoColors = ["bg-[rgba(31,103,226,0.8)]", "bg-[rgba(114,28,64,1.0)]", "bg-[rgba(0,168,107,0.8)]", "bg-[rgba(255,200,46,1.0)]"]
const retreatsInfoTextColors = ["text-[rgba(31,103,226,0.8)]", "text-[rgba(114,28,64,1.0)]", "text-[rgba(0,168,107,0.8)]", "text-[rgba(255,200,46,1.0)]"]

const RetreatInfo = ({items, header_desc, signup_link}) => {
  const { isVisible, elementRef } = useIsVisible({
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    });
    return (
        <div
        ref={elementRef}
        className={`my-40 transition-opacity ease-in duration-[700ms] ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center">
              <p className={headerStyling}>Semesterly Retreats</p>
              <p 
              className={`${subheadingStyling} mb-12`}>{header_desc}</p>
              <a
                href={signup_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black border-2 border-black px-8 py-4 text-xl font-medium rounded shadow-md hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300"
                >
                Sign Up for Our Next Retreat!
            </a>
            </div>
          <div className="container mx-auto py-8 px-8 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {items.map((item, index) => (
                <article
                  key={index}
                  className="transform transition-transform duration-300 hover:scale-105 border rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex flex-col"
                >
                  {/* Top Half: Title */}
                  <div className={`${retreatsInfoColors[index]} text-white font-semibold text-3xl py-4 text-center rounded-t-lg`}>
                    {`${item.desc_title}?`}
                  </div>
      
                  {/* Bottom Half: Split into two parts */}
                  <div className="flex flex-grow flex-col lg:flex-row">
                    {/* Left: Image */}
                    <div className="lg:w-1/2 bg-gray-100 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.desc_title}
                        className="max-w-full h-full object-cover"
                      />
                    </div>
      
                    {/* Right: Description */}
                    <div className="lg:w-1/2 bg-gray-50 flex flex-col justify-center p-4">
                      <p className={ `text-2xl font-bold text-center ${retreatsInfoTextColors[index]}`}>{item.desc_subtitle}</p>
                      <p className="text-gray-700 mb-4 font-light mt-8">{item.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

      );
};

export default RetreatInfo