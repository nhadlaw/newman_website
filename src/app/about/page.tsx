import PageBanner from "../../../components/PageBanner";
import EventsPageButtons from "../../../components/EventsPageButtons";
import BackToTop from "../../../components/BackToTop";
import Footer from "../../../components/Footer";
import { getAllHeadersAndSubHeaders, getWeeklyEvents, getUpcomingEvents, getEventHighlights, getChitChatsDisplay } from "../../../sanity/sanity-utils";
import grabText from '../../../constants/helpers';
import AboutPageSection from "../../../components/AboutPageSection";
import AboutNewman from "../../../components/aboutPage/AboutNewman";
import AboutOratory from "../../../components/aboutPage/AboutOratory";
import OurCommunityOptions from "../../../components/aboutPage/OurCommunityOptions";
import AboutService from "../../../components/aboutPage/AboutService";
import AboutServiceOpportunities from "../../../components/aboutPage/AboutServiceOpportunities";
import AboutFOCUS from "../../../components/aboutPage/AboutFOCUS";
import AboutAlumni from "../../../components/aboutPage/AboutAlumni";

import AboutSEEK from "../../../components/aboutPage/AboutSEEK";
import AboutSEEKHighlights from "../../../components/aboutPage/AboutSEEKHighlights";

const communityItems = [
    {
        image: '/Oratory.jpeg',
        title: 'Support',
        des: 'desc'
    },
    {
        image: '/SlideshowImg1.jpg',
        title: 'See Events',
        des: 'desc'
    },
    {
        image: '/LitAndPrayPage.png',
        title: 'Alumni',
        des: 'desc'
    },

]

const serviceOpportunities = [
    {
        image: '/Oratory.jpeg',
        title: 'Red Door',
        description: 'service desc of some kind to describe this service opportunity and to describe it well and to describe the service opportunity'
    },
    {
        image: '/SlideshowImg1.jpg',
        title: 'Mission Trips',
        description: 'service desc of some kind to describe this service opportunity and to describe it well and to describe the service opportunity'
    },
    {
        image: '/LitAndPrayPage.png',
        title: 'Little Sisters of the Poor',
        description: 'service desc of some kind to describe this service opportunity and to describe it well and to describe the service opportunity'
    },
]
const images = [
    '/Oratory.jpeg',
    '/SlideshowImg1.jpg',
    '/LitAndPrayPage.png',
  ];

const tempText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default async function Events() {
  const weeklyEvents = await getWeeklyEvents();
  const upcomingEvents = await getUpcomingEvents();
  const eventHighlights = await getEventHighlights();
  const chitChats = await getChitChatsDisplay();
  const allHeaders = await getAllHeadersAndSubHeaders();

  return (
      <div style={{overflowX: "hidden"}}>
          {/* <PageBanner pageName={"About"} pageDesc={grabText('events_subheading', allHeaders)} pageImg={allHeaders[0].events_heading_img}/> */}
          <PageBanner pageName={"About"} pageDesc={grabText('events_subheading', allHeaders)} pageImg={allHeaders[0].events_heading_img}/>
          <BackToTop/>
          <EventsPageButtons subheading={grabText('events_explore_subheading', allHeaders)}/>
          <AboutPageSection bgColor={"bg-indigo-500"} heading={"What is Newman?"} sectionComponents={[<AboutNewman/>]}/>
          <AboutPageSection bgColor={"bg-indigo-600"} heading={"The Oratory"} sectionComponents={[<AboutOratory/>]}/>
          <AboutPageSection bgColor={"bg-indigo-700"} heading={"Our Community"} sectionComponents={[<OurCommunityOptions items={communityItems}/>]}/>
          <AboutPageSection bgColor={"bg-indigo-500"} heading={"Service"} sectionComponents={[<AboutService/>, <AboutServiceOpportunities serviceOpportunities={serviceOpportunities} subheading={"Check out some of our favorite ways to help out"}/>]}/>
          <AboutPageSection bgColor={"bg-indigo-600"} heading={"FOCUS"} sectionComponents={[<AboutFOCUS/>, <AboutSEEK/>, <AboutSEEKHighlights highlightImages={images}/>]}/>
          <AboutPageSection bgColor={"bg-indigo-500"} heading={"Alumni"} sectionComponents={[<AboutAlumni/>]}/>
          <Footer/>
      </div>
  );
}