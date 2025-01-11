import React from 'react';
import { eventsPageSubHeadingStyle, eventsPageSubHeadingTextStyle } from '../constants/stylingConstants';

const GoogleCalendar = ({subheading}) => {
  return (
    <div className='flex flex-col items-center bg-[rgba(255,190,46,1.0)] py-24'>
      <p className={eventsPageSubHeadingStyle}>Events Calendar</p>
      <h1 className={eventsPageSubHeadingTextStyle}>{subheading}</h1>
      <div className="flex justify-center items-center w-full h-full py-6">
        <div className="w-full max-w-4xl h-[600px] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <iframe 
              src="https://calendar.google.com/calendar/u/0/embed?src=m1pptlj77f3hf03ot4t06qum38@group.calendar.google.com&ctz=America/New_York" 
              width="100%" height="600" 
              frameBorder="0" 
              scrolling="no"
          >
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleCalendar;

