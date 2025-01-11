import React, { useState } from 'react';

const AlumniVocations = ({ alumniVocations }) => {
  const categories = (alumniVocations).map(obj => obj.categoryName)
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAlumni =
    selectedCategory === "All"
      ? alumniVocations.flatMap((item) => item.individuals)
      : (alumniVocations.filter(item => item.categoryName === selectedCategory))[0].individuals;
    
  categories.push("All");

  return (
    <div className="">
      {/* Buttons for each category */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-6 mt-4">
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            <div
              className={`${selectedCategory === category ? 'bg-white' : 'bg-indigo-800'} 
              flex items-center justify-center w-40 h-40 border rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 hover:bg-white`}
            >
              <div className={`flex items-center justify-center w-[135] h-[135] border-1 rounded-full bg-indigo-600 bg-opacity-100 overflow-hidden`}>
                <p className='text-white font-bold px-4 text-center text-xl'>
                  {category === 'All' ? 'All Vocations' : category}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Display selected category */}
      <div className='mt-16'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {filteredAlumni.map((person, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center rounded-lg p-4 shadow-md"
            >
              {/* Circular Image */}
              <div className="w-44 h-44 mb-4">
                <img
                  src={person.imageUrl}
                  alt={person.name}
                  className="w-full h-full object-cover rounded-full bg-white p-2"
                />
              </div>
              {/* Alumni Details */}
              <h3 className="text-lg font-bold text-white">{person.name}</h3>
              <p className="text-white text-sm">Graduation: {person.gradStatus}</p>
              <p className="text-white text-md font-bold">{person.vocation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniVocations;



