import { useState } from "react";

const ChitChatsCard = ({ chitChat }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  let chitChatNonExpandedDesc = '';
  // isLonger is used to keep track of if we need a see more option
  let isLonger = false;

  if (chitChat.description) {
    if (chitChat.description.length <= 150) {
      chitChatNonExpandedDesc = chitChat.description
    } else {
      isLonger = true;
      chitChatNonExpandedDesc = `${chitChat.description.slice(0, 100)}...`
    }
  }

  return (
    <div className="max-w-72 mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
        
        {/* Top Section */}
        <div className="relative h-80 shadow-md">
          {/* Image */}
          <img
            src={chitChat.image}
            alt={chitChat.topic}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Bottom Section */}
        <div className={`p-4 ${isExpanded ? 'h-auto' : 'h-40'}`}>
          <h2 className="text-xl font-bold text-gray-800">{chitChat.topic}</h2>
          <p className="text-gray-600 text-sm mt-2">
            {isExpanded ? chitChat.description : chitChatNonExpandedDesc}
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

export default ChitChatsCard;
