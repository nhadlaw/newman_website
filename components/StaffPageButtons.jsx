"use client"
import {useIsVisible } from '../src/app/hooks/useIsVisible';
import CircularButton from './CircularButton';
import Link from "next/link"; // Use this if you're using Next.js routing.
import { headerStyling, subheadingStyling } from '../constants/stylingConstants';

const ButtonRow = ({subheading}) => {
  const { isVisible, elementRef } = useIsVisible({
    root: null, // Use the viewport as the root
    rootMargin: '0px',
  });
  return (
    <div
        ref={elementRef}
        className={`my-48 transition-opacity ease-in duration-[700ms] ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
      <p className={`${headerStyling}`}>See Our People</p>
      <p className={subheadingStyling}>{subheading}</p>
      <div className="flex justify-center items-center gap-8 flex-wrap sm:flex-row mt-16">
        <Link href={'#oratoryStaff'}>
          <CircularButton
              imageSrc="/OratoryLogo.svg"
              textInButton="Pitt"
              bottomText="Oratory"
              innerBgColor="bg-black"
              outerBgColor="bg-black"
          />
        </Link>
        <Link href={"#focusStaff"}>
          <CircularButton
              imageSrc="/FOCUSLogo.svg"
              textInButton="FOCUS"
              bottomText="Missionaries"
              innerBgColor="bg-black"
              outerBgColor="bg-black"
          />
        </Link>
        <Link href={"#execStaff"}>
          <CircularButton
              imageSrc="/CMUAltLogo.svg"
              textInButton="Exec"
              bottomText="Board"
              innerBgColor="bg-black"
              outerBgColor="bg-black"
          />
        </Link>
      </div>
    </div>

  );
};

export default ButtonRow;