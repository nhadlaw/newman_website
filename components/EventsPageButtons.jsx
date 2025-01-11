"use client"
import {useIsVisible } from '../src/app/hooks/useIsVisible';
import CircularButton from './CircularButton';
import Link from "next/link"; // Use this if you're using Next.js routing.
import { headerStyling, subheadingStyling } from '../constants/stylingConstants';

const exploreEventsText = "There is always something going on in our community. With events every week, a lot of new upcoming events to look forward to, and fun highlights to enjoy you'll never feel deprived of any events"

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
      <p className={`${headerStyling}`}>Explore Our Events</p>
      <p className={subheadingStyling}>{subheading}</p>
      <div className="flex justify-center items-center gap-8 flex-wrap sm:flex-row mt-16">
        <Link href={'#weeklyEvents'}>
          <CircularButton
              imageSrc="/ImmaculateHeart.svg"
              textInButton="Weekly"
              bottomText="Events"
              innerBgColor="bg-black"
              outerBgColor="bg-[rgba(114,28,64,0.8)]"
          />
        </Link>
        <Link href={"#upcomingEvents"}>
          <CircularButton
              imageSrc="/SacredHeart.svg"
              textInButton="Upcoming"
              bottomText="Events"
              innerBgColor="bg-black"
              outerBgColor="bg-[rgba(255,200,46,1.0)]"
          />
        </Link>
        <Link href={"#eventHighlights"}>
          <CircularButton
              imageSrc="/ChasteHeart.svg"
              textInButton="Event"
              bottomText="Highlights"
              innerBgColor="bg-black"
              outerBgColor="bg-[rgba(31,103,226,1.0)]"
          />
        </Link>
      </div>
    </div>

  );
};

export default ButtonRow;
