// components/AlumniVocations.js
import React, { useState } from 'react';
// 
const AlumniVocations = ({ alumniVocations }) => {
  const categories = Object.keys(alumniVocations[0]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAlumni =
    selectedCategory === "All"
      ? categories.flatMap((category) => alumniVocations[0][category])
      : alumniVocations[0][selectedCategory];
  
  categories.push("All")

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Buttons for each category */}
      <div className="flex flex-wrap gap-4 mb-6">
        {categories.map((category) => (
         <div className={`${selectedCategory === category ? 'bg-white' : 'bg-indigo-800'} 
         flex relative items-center justify-center w-40 h-40 border rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 hover:bg-white`}>
             <div className={`flex relative items-center justify-center w-32 h-32 border-1 rounded-full bg-indigo-600 bg-opacity-100 overflow-hidden`}>
                 <p className='text-white font-bold px-4 text-center'>
                     {category}
                 </p>
             </div>
         </div>
        ))}
      </div>

      {/* Display selected category */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {selectedCategory === "All" ? "All Categories" : selectedCategory}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAlumni.map((person, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center shadow-md rounded-lg p-4"
            >
              {/* Circular Image */}
              <div className="w-24 h-24 mb-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Alumni Details */}
              <h3 className="text-lg font-semibold text-white">{person.name}</h3>
              <p className="text-white">Graduation: {person.gradStatus}</p>
              <p className="text-white font-medium">{person.vocation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniVocations;


