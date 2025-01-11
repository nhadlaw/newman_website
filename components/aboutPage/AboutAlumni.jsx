"use client";
import {
  aboutSubheadingStyling,
  eventsPageSubHeadingStyle,
} from "../../constants/stylingConstants";
import AlumniVocations from "./AlumniVocations"

const AboutAlumni = ({subheading, vocations}) => {

  return (
    <div>
      <p className={aboutSubheadingStyling}>
        {subheading}
      </p>
      <div className="flex flex-col items-center">
        <h1 className={`${eventsPageSubHeadingStyle} mt-16`}>{"Vocations"}</h1>
        <p className={aboutSubheadingStyling}>
        Take a look at our alumni vocations
        </p>
        <AlumniVocations alumniVocations={vocations}/>
      </div>
    </div>
  );
};

export default AboutAlumni;
