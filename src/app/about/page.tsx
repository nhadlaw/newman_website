import PageBanner from "../../../components/PageBanner";
import EventsPageButtons from "../../../components/EventsPageButtons";
import BackToTop from "../../../components/BackToTop";
import Footer from "../../../components/Footer";
import { getAllHeadersAndSubHeaders, getWeeklyEvents, 
    getUpcomingEvents, getEventHighlights, getChitChatsDisplay, getAboutPageContents, getAlumniVocations } from "../../../sanity/sanity-utils";
import grabText from '../../../constants/helpers';
import AboutPageSection from "../../../components/AboutPageSection";
import AboutNewman from "../../../components/aboutPage/AboutNewman";
import AboutOratory from "../../../components/aboutPage/AboutOratory";
import OurCommunityOptions from "../../../components/aboutPage/OurCommunityOptions";
import AboutService from "../../../components/aboutPage/AboutService";
import AboutServiceOpportunities from "../../../components/aboutPage/AboutServiceOpportunities";
import AboutFOCUS from "../../../components/aboutPage/AboutFOCUS";
import AboutAlumni from "../../../components/aboutPage/AboutAlumni";
import AboutPageButtons from "../../../components/aboutPage/AboutPageButtons";


import AboutSEEK from "../../../components/aboutPage/AboutSEEK";
import AboutSEEKHighlights from "../../../components/aboutPage/AboutSEEKHighlights";
import Navbar from "../../../components/Navbar";


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


export default async function Events() {
  const weeklyEvents = await getWeeklyEvents();
  const upcomingEvents = await getUpcomingEvents();
  const eventHighlights = await getEventHighlights();
  const chitChats = await getChitChatsDisplay();
  const allHeaders = await getAllHeadersAndSubHeaders();
  const aboutPageContents = await getAboutPageContents();
  const alumniVocations = await getAlumniVocations();

  console.log(alumniVocations);

  const communityItems = [
    {
        image: aboutPageContents[0].support_link_img,
        title: 'Support Us',
        description: 'Find ways to help support our community and students',
        link: aboutPageContents[0].support_link,
        link_name: 'Give'
    },
    {
        image: aboutPageContents[0].events_link_img,
        title: 'See Events',
        description: 'Join us in our events with fellowship, food, and fun!',
        link: '/events',
        link_name: 'Join'
    },
    {
        image: aboutPageContents[0].alumni_link_img,
        title: 'Alumni',
        description: 'Learn more about and connect with our alumni',
        link: '#aboutAlumni',
        link_name: 'Connect'
    },
  ]

  return (
      <div style={{overflowX: "hidden"}}>
          <Navbar/>
          <BackToTop/>
          <AboutPageButtons/>
          <AboutPageSection 
            bgColor={"bg-indigo-500"} 
            heading={"What is Newman?"} 
            sectionComponents={[<AboutNewman newmanImg={aboutPageContents[0].what_is_newman_img} newmanTxt={aboutPageContents[0].what_is_newman_text}/>]}
          />
          <AboutPageSection 
            bgColor={"bg-indigo-600"} 
            heading={"The Oratory"} 
            sectionComponents={[<AboutOratory oratoryTxt={aboutPageContents[0].oratory_text} oratoryImgs={aboutPageContents[0].oratory_images}/>]}
          />
          <AboutPageSection 
            bgColor={"bg-indigo-700"} 
            heading={"Our Community"} 
            sectionComponents={[<OurCommunityOptions subheading={aboutPageContents[0].our_community_subheading} items={communityItems}/>]
          }/>
          <AboutPageSection 
            bgColor={"bg-indigo-500"} 
            heading={"Service"} 
            sectionComponents={
                [<AboutService subheading={aboutPageContents[0].service_subheading} discordLink={aboutPageContents[0].service_discord_link} emailLink={aboutPageContents[0].service_email_link} />, 
                <AboutServiceOpportunities serviceOpportunities={aboutPageContents[0].service_opportunity_images} subheading={"Check out some of our favorite ways to help out"}/>]}/>
          <AboutPageSection 
            bgColor={"bg-indigo-600"} 
            heading={"FOCUS"} 
            sectionComponents={[
                <AboutFOCUS subheading={aboutPageContents[0].focus_subheading} missionariesImg={aboutPageContents[0].our_missionaries_img} missionariesTxt={aboutPageContents[0].our_missionaries_text}/>, 
                <AboutSEEK subheading={aboutPageContents[0].seek_subheading} signupLink={aboutPageContents[0].seek_signup_link} seekDesc={aboutPageContents[0].what_is_seek_text} seekImg={aboutPageContents[0].what_is_seek_img}/>, 
                <AboutSEEKHighlights 
                    highlightImages={aboutPageContents[0].seek_highlights}
                    recapLink={aboutPageContents[0].seek_recap_link}
                    seeMoreLink={aboutPageContents[0].seek_see_more_link}
                />
            ]}
          />
          <AboutPageSection 
            bgColor={"bg-indigo-500"} 
            heading={"Alumni"} 
            sectionComponents={[<AboutAlumni subheading={aboutPageContents[0].alumni_subheading} vocations={alumniVocations[0].categories}/>]}/>
          <Footer/>
      </div>
  );
}