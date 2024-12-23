"use client"
import Link from "next/link";

const WeeklyEventsGrid = () => {

  const gridItems = [
        { 
            title: "Mass", 
            description: "Multiple opportunities for mass on campus", 
            linkName: "See More Info!",
            imageUrl: "/ChurchIconNoBackground.png"
        },
        { 
            title: "Food & Friends", 
            description: "Come enjoy a free meal, find fellowship, and build community", 
            linkName: "See More Info!",
            imageUrl: "/FriendsIconNoBackground.png" 
        },
        { 
            title: "Chit-Chats", 
            linkName: "See More Info!",
            description: "Looking for fruitful discussions about the Catholic faith? Got a question?", 
            imageUrl: "/BubbleIconNoBackground.png"
        },
        { 
            title: "Service", 
            linkName: "See More Info!",
            description: "Looking for a way to help out? Find numerous opportunities with us!", 
            imageUrl: "/ServiceIconNoBackground.png" 
        },
    ]
return (
  <>
  <div>
        <p className="text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl">Weekly Events</p>
    </div>
        <div className="container mx-auto py-8 px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gridItems.map(function (item, index) {
              return (
                <div
                key={index}
                className={`transition-transform ease-in duration-700 p-6 border rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex-col`}
              >
                 <div className="flex items-center mb-4">
                    <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-20 h-20 mr-4 rounded-full"
                    />
                    <h3 className="font-semibold text-4xl">{item.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <Link
                    href={""}
                    className="text-blue-600 hover:underline font-medium"
                >
                {item.linkName}
                </Link>
                </div>
              )
            }
              
            )}
          </div>
        </div>
        </>
      );
};

export default WeeklyEventsGrid