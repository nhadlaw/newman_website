// components/ContactCard.js

const ContactCard = ({ person, bgColor}) => {
  return (
    <div className="w-56 bg-white shadow-lg shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* Top Section */}
      <div className="relative h-72 shadow-md">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-[25%] bg-white"></div>
          <div className={`${bgColor} w-full h-[75%]`}></div>
          {/* <div className={`w-full h-[75%] bg-[#FFD700]`}></div> */}

        </div>
        {/* Image */}
        <img
          src={person.image}
          alt={person.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Bottom Section */}
      <div className="p-4 h-40">
        <h2 className="text-xl font-bold text-gray-800">{person.name}</h2>
        <p className="text-gray-600 font-bold">{person.additionalInfo}</p>
        <p className="text-gray-600 text-sm">{person.email}</p>
      </div>
    </div>
  );
};

export default ContactCard;

