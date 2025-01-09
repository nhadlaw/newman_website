import React from 'react';

const GoogleCalendar = () => {
  return (
    <div className="flex justify-center items-center w-full h-full py-6">
      <div className="w-full max-w-4xl h-[600px] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <iframe 
            src="https://calendar.google.com/calendar/embed?src=46dad460634486a31b2c101fef5c51d7eb03e8501088658e128d299bb42b3740%40group.calendar.google.com&ctz=America%2FNew_York" 
            width="100%" height="600" 
            frameborder="0" 
            scrolling="no"
        >
        </iframe>
      </div>
    </div>
  );
};

export default GoogleCalendar;

