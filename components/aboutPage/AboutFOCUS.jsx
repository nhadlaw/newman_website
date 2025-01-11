"use client";
import { useState, useEffect } from "react";
import {
  headerStyling,
  sectionMargin,
  aboutSubheadingStyling,
} from "../../constants/stylingConstants";

const tempText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const AboutFOCUS = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slideshow images
  const images = ["/Oratory.jpeg", "/SlideshowImg1.jpg", "/LitAndPrayPage.png"];

  // Text content
  const text = {
    title: "Our Missionaries",
    description: tempText,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div>
      <p className={aboutSubheadingStyling}>
        We offer Bible study groups for undergrad and grad women, as well as
        student-athletes at Carnegie Mellon. All are welcome—no religious
        background or skill level required! Contact anyone listed below or
        email us at newman@gmail.com to get connected.
      </p>
      <div className="flex flex-col lg:flex-row mt-16 mx-32 h-[120vh] lg:h-[80vh] mx-32">
        {/* Slideshow Section */}
        <div className="flex-1 relative overflow-hidden">
          <img
            src={"/OurMissionaries.png"}
            alt={``}
            className={`absolute w-full h-full object-cover object-top transition-opacity duration-700 opacity-100`}
          />
        </div>
        {/* Text Section */}
        <div className="flex-1 bg-indigo-700 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-white">{text.title}</h1>
          <p className="text-lg text-white">{text.description}</p>
          <a
            href={""}
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "300px" }}
            className="text-center mt-4 text-white border-2 border-white px-8 py-4 text-xl font-medium rounded shadow-md hover:bg-white hover:text-indigo-700 hover:shadow-lg transition-all duration-300"
          >
            See Our Missionaries
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutFOCUS;

