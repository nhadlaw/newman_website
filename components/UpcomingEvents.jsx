"use client";
import React from "react";

export default function DiagonalGrid({ events }) {
  return (
    <div>
      <div className="container mx-auto pb-8 px-8">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
          style={{
            justifyItems: "center", // Center items in the grid horizontally
            alignItems: "center", // Center items in the grid vertically
          }}
        >
          {events.map((item) => (
            <a
              key={item.event_name}
              href={item.link}
              className="max-w-96 transition-transform ease-in duration-700 relative group w-full aspect-square bg-cmu-maroon overflow-hidden shadow-lg rounded-lg shadow-lg"
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
                <div style={{ marginTop: "20px" }}>
                  <p className="text-2xl">{item.event_name}</p>
                  <p className="font-semibold text-xl">{item.event_desc}</p>
                  <p className="font-light text-xl">{item.event_location}</p>
                </div>
              </div>
              {/* Hover effect */}
              <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

