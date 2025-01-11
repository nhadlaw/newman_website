import { useState } from "react";

const ServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  let serviceNonExpandedDesc = '';
  // isLonger is used to keep track of if we need a see more option
  let isLonger = false;

  if (service.desc) {
    if (service.desc.length <= 250) {
      serviceNonExpandedDesc = service.desc
    } else {
      isLonger = true;
      serviceNonExpandedDesc = `${service.desc.slice(0, 100)}...`
    }
  }

  return (
    <div className="max-w-96 mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300">
        
        {/* Top Section */}
        <div className="relative h-80 shadow-md">
          {/* Image */}
          <img
            src={service.service_image}
            alt={service.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Bottom Section */}
        <div className={`bg-indigo-700 flex flex-col items-center p-4 text-white ${isExpanded ? 'h-auto' : 'h-40'}`}>
          <h2 className="text-2xl font-bold">{service.title}</h2>
          <p className="text-sm mt-2">
            {isExpanded ? service.desc : serviceNonExpandedDesc}
          </p>
        { isLonger &&   
        <button
            onClick={toggleDescription}
            className="text-blue-500 text-sm mt-2"
          >
            {isExpanded ? "See Less" : "See More"}
          </button>}
        </div>
    </div>
  );
};

export default ServiceCard;