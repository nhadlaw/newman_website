"use client"
import Link from "next/link";
import {headerStyling, sectionMargin} from '../constants/stylingConstants';
import {useIsVisible } from '../src/app/hooks/useIsVisible';


const WeeklyEventsGrid = () => {

  const { isVisible, elementRef } = useIsVisible({
    root: null, // Use the viewport as the root
    rootMargin: '0px',
  });
  const gridItems = [
        { 
            title: "Mass", 
            description: "Multiple opportunities for mass on campus", 
            linkName: "Find Mass Times",
            imageUrl: "/MassIcon.png",
            href: '/lit_and_prayer/#massTimes'

        },
        { 
            title: "Food & Friends", 
            description: "Come enjoy a free meal, find fellowship, and build community", 
            linkName: "See More Info",
            imageUrl: "/Food&FriendsIcon.png",
            href: '/events/#weeklyEvents' 
        },
        { 
            title: "Chit-Chats", 
            linkName: "Learn More",
            description: "Looking for fruitful discussions about the Catholic faith? Got a question?", 
            imageUrl: "/DiscussionIcon.png",
            href: '/events/#chitChatsDisplay'
        },
        { 
            title: "Service", 
            linkName: "Find Service Opportunities",
            description: "Looking for a way to help out? Find numerous opportunities with us!", 
            imageUrl: "/ServiceIcon.png",
            href: '/about/#aboutService' 
        },
    ]
return (
   <div className={`${sectionMargin} transition-opacity ease-in duration-[700ms] ${
    isVisible ? 'opacity-100' : 'opacity-0'}`} ref={elementRef}>
      <p className={headerStyling}>Weekly Events
        </p>
        <div className="container mx-auto py-8 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {gridItems.map(function (item, index) {
              return (
                <div
                key={index}
                className={`transition-transform ease-in duration-700 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex-col`}
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
                    href={item.href}
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
      </div>

      );
};

export default WeeklyEventsGrid