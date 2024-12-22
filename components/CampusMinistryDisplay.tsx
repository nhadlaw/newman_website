// pages/index.js
"use client"
import ContactCard from './ContactCard';
import { useState } from "react";
import { MdClose } from "react-icons/md"; // Importing close icon from react-icons


export default function CampusMinistryDisplay({people, bgColors}) {
  const [selectedPerson, setSelectedPerson] = useState(null);
  console.log('bgcolors: ', bgColors)
  const handleCardClick = (person) => {
    setSelectedPerson(person);
  };

  const handleClose = () => {
    setSelectedPerson(null);
  };
  const handleBackgroundClick = (e) => {
    // Only close modal if the background overlay itself is clicked, not the content
    if (e.target === e.currentTarget) {
      setSelectedPerson(null);
    }
  };

  return (
    <div>
        <div 
          className="flex flex-wrap justify-center gap-6 p-4 mt-8 mb-24"
        >
            {people.map(function (person, index) {
                const assignedColor = bgColors[index % (bgColors.length)]
                return (
                  <div 
                    key={index}
                    className={`cursor-pointer`}
                    onClick={() => handleCardClick(person)}
                  >
                    <ContactCard key={index} person={person} bgColor={assignedColor} />
                  </div>
                )
            })}
        </div>
        {/* Modal for detailed view */}
        {selectedPerson && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center"
        onClick={handleBackgroundClick}
        >
          <div className="rounded-lg bg-white w-3/4 max-w-4xl flex flex-col sm:flex-row overflow-auto max-h-[90vh]">
            {/* Left Half - Image */}
            <div className="w-full sm:w-1/2">
              <img
                src={selectedPerson.image}
                alt={selectedPerson.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right Half - Description */}
            <div className="w-full sm:w-1/2 p-6 overflow-auto">
              <h2 className="text-3xl font-bold">{selectedPerson.name}</h2>
              <p className="mt-4 text-gray-700 font-semibold">{selectedPerson.additionalInfo}</p>
              <p className="mt-4 text-gray-700 font-bold text-lg">{"About"}</p>
              <p className="text-gray-700">{selectedPerson.about}</p>
              <p className="mt-4 text-gray-700 font-bold text-lg">{"Fun Fact"}</p>
              <p className="text-gray-700">{"some random fun fact here"}</p>
              <p className="mt-4 text-gray-700 font-bold text-lg">{"Hometown"}</p>
              <p className="text-gray-700">{"Rural Valley, PA"}</p>
              <p className="mt-4 text-gray-700 font-bold text-lg">{"Favorite Quote"}</p>
              <p className="text-gray-700">{`"What Doesn't Kill You Makes You Strong" -Kelly Clarkson`}</p>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-gray-800 bg-white text-black p-2 rounded-full hover:bg-gray-600"
              onClick={handleClose}
            >
              <MdClose size={24} /> {/* Using the MdClose icon from react-icons */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}