"use client";
import {
  aboutSubheadingStyling,
} from "../../constants/stylingConstants";

const AboutFOCUS = ({subheading, missionariesImg, missionariesTxt}) => {

  // Text content
  const text = {
    title: "Our Missionaries",
    description: missionariesTxt,
  };


  return (
    <div>
      <div className="px-24">
        <p className={aboutSubheadingStyling}>
          {subheading}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mt-16 mx-32 h-[120vh] lg:h-[80vh]">
        <div className="flex-1 relative overflow-hidden">
          <img
            src={missionariesImg}
            alt={`Our Missionaries Img`}
            className={`absolute w-full h-full object-cover object-top transition-opacity duration-700 opacity-100`}
          />
        </div>
        <div className="flex-1 bg-cmu-maroon-darker p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-white">{text.title}</h1>
          <p className="text-lg text-white">{text.description}</p>
          <a
            href={"/officers_and_ministers#focusStaff"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "300px" }}
            className="text-center mt-4 text-white border-2 border-white px-8 py-4 text-xl font-medium rounded shadow-md hover:bg-white hover:text-cmu-maroon hover:shadow-lg transition-all duration-300"
          >
            See Our Missionaries
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutFOCUS;

