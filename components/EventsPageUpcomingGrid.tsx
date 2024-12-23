"use client"
import React from "react";

//NEED TO CHANGE TO GRAB THIS FROM SANITY
const events = [
  {
    event_name: "Newman Night",
    event_desc: "Sundays @ 7 PM.",
    event_location: "St. Paul Cathedral Social Hall",
    image: "/EventsPage.jpg",
  },
  {
    event_name: "Mass on Campus",
    event_desc: "Mondays @ 5:15 PM.",
    event_location: "CUC Wright-Rogal Chapel",
    image: "/EventsPage1.png",
  },
  {
    event_name: "Chit Chats",
    event_desc: "Thursdays @ 8 PM.",
    event_location: "Highmark Center Well-Being Lab",
    image: "/EventsPage2.png",
  },
  {
    event_name: "Womens Bible Study",
    event_desc: "Contact a Missionary",
    event_location: "TBD",
    image: "/EventsPage3.png",
  },
  {
    event_name: "Mens Bible Study",
    event_desc: "Contact A missionary.",
    event_location: "St. Paul Cathedral Basement",
    image: "/EventsPage2.png",
  },
  {
    event_name: "Red Door",
    event_desc: "Thursdays & Fridays time TBD.",
    event_location: "St. Mary of Mercy Divine Parish",
    image: "/EventsPage1.png",
  },
];
export default function DiagonalGrid() {
    return (
    <div>
    <div className="container mx-auto py-8 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {events.map(function (item) { 
          
            return (
                <a
                    key={item.event_name}
                    href={"/"}
                    className={`h-64 relative group w-full aspect-square bg-cmu-maroon overflow-hidden shadow-lg rounded-lg shadow-lg`}
                >
                    {/* Diagonal background with image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                        backgroundImage: `url(${item.image})`,
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        }}
                    ></div>
                    {/* Diagonal overlay with text */}
                    <div
                        className="absolute inset-0 bg-gray-800 bg-opacity-70 flex flex-col text-white font-bold p-4"
                        style={{
                        clipPath: "polygon(0 0, 100% 0, 0 100%)",
                        }}
                    >   
                    <div style={{marginTop: '20px'}}>
                        <p className="text-xl">
                            {item.event_name}
                        </p>
                        <p className="font-semibold text-lg">
                            {item.event_desc}
                        </p>
                        <p className="font-light text-md max-w-32">
                            {item.event_location}
                        </p>
                    </div>
                    </div>
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition"></div>
                </a>
            )
        })}
        </div>
    </div>
    </div>
  );
}