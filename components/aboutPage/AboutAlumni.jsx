"use client";
import { useState, useEffect } from "react";
import {
  headerStyling,
  sectionMargin,
  aboutSubheadingStyling,
  eventsPageSubHeadingStyle,
} from "../../constants/stylingConstants";
import AlumniVocations from "./AlumniVocations"

const tempText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


const alumniVocations = [
  {
    'Priests': [
      {
        image: '/SlideshowImg1.jpg',
        name: 'Nelly Hadlaw',
        gradStatus: '2027',
        vocation: 'Priest'
      },
      {
        image: '/SlideshowImg1.jpg',
        name: 'Nelly Hadlaw',
        gradStatus: '2027',
        vocation: 'Priest'
      },
      {
        image: '/SlideshowImg1.jpg',
        name: 'Nelly Hadlaw',
        gradStatus: '2027',
        vocation: 'Priest'
      }
    ],
    'Concecrated Virgins': [
      {
        image: '/SlideshowImg1.jpg',
        name: 'Nelly Hadlaw',
        gradStatus: '2027',
        vocation: 'Concecrated Virgin'
      },
      {
        image: '/SlideshowImg1.jpg',
        name: 'Nelly Hadlaw',
        gradStatus: '2027',
        vocation: 'Priest'
      },
      {
        image: '/SlideshowImg1.jpg',
        name: 'Nelly Hadlaw',
        gradStatus: '2027',
        vocation: 'Priest'
      }
    ],
    'Religious Life': [
      {
        image: '/SlideshowImg1.jpg',
        name: 'Nelly Hadlaw',
        gradStatus: '2027',
        vocation: 'Dominican sister'
      },
      {
        image: '/SlideshowImg1.jpg',
        name: 'Nelly Hadlaw',
        gradStatus: '2027',
        vocation: 'Priest'
      }
    ],
    'Workers': [
      {
        image: '/SlideshowImg1.jpg',
        name: 'Nelly Hadlaw',
        gradStatus: '2027',
        vocation: 'Worker'
      },
      {
        image: '/SlideshowImg1.jpg',
        name: 'Nelly Hadlaw',
        gradStatus: '2027',
        vocation: 'Priest'
      },
      {
        image: '/SlideshowImg1.jpg',
        name: 'Nelly Hadlaw',
        gradStatus: '2027',
        vocation: 'Priest'
      }
    ]
  }
]

const AboutAlumni = () => {

  // Slideshow images
  const images = ["/Oratory.jpeg", "/SlideshowImg1.jpg", "/LitAndPrayPage.png"];

  return (
    <div>
      <p className={aboutSubheadingStyling}>
        We offer Bible study groups for undergrad and grad women, as well as
        student-athletes at Carnegie Mellon. All are welcome—no religious
        background or skill level required! Contact anyone listed below or
        email us at newman@gmail.com to get connected.
      </p>
      <h1 className={`${eventsPageSubHeadingStyle} mt-16`}>{"Vocations"}</h1>
      <p className={aboutSubheadingStyling}>
       Take a look at our alumni vocations.
      </p>
      <AlumniVocations alumniVocations={alumniVocations}/>
    </div>
  );
};

export default AboutAlumni;
