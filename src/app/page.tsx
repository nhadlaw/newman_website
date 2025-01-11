import { getBibleStudies, getHomepageSlideshowImgs, getTestimonies, getUpcomingEvents, getAllHeadersAndSubHeaders } from "../../sanity/sanity-utils";
import { Project } from "../../types/Project";
import HomepageSlideshow from "../../components/HomepageSlideshow";
import WeeklyEventsGrid from "../../components/WeeklyEventsGrid";
import BibleStudy from "../../components/BibleStudy";
import Navbar from '../../components/Navbar';
import Saint1 from "../../components/Saint1";
import Saint2 from "../../components/Saint2";
import TestimoniesNew from "../../components/TestimoniesNew";

import ContactForm from "../../components/ContactForm";
import WelcomeText from "../../components/Welcome";
import Footer from "../../components/Footer";
import ContactLinks from "../../components/StayInTouch";
import HomeUpcomingEvents from "../../components/HomeUpcoming";
import grabText from '../../constants/helpers';

export default async function Home() {

  const homepageSlideshowImgs: Project[] = await getHomepageSlideshowImgs();
  const testimonies: Project[] = await getTestimonies();
  const upcomingEvents: Project[] = await getUpcomingEvents();
  const bibleStudies = await getBibleStudies();
  const allHeaders = await getAllHeadersAndSubHeaders();

  return (
      <div style={{overflowX: "hidden"}}>
        <Navbar/>
        <HomepageSlideshow imageData={homepageSlideshowImgs}/>
        <WelcomeText welcomeText={grabText('welcome_subheading', allHeaders)}/>
        <Saint1 imgSize={400} image={'/JohnHenryNewman.svg'} quote={"We need something which the world cannot give, and this it is which the Gospel has supplied."} saint={"St. John Henry Newman"}/>
        <WeeklyEventsGrid/>
        <Saint2 imgSize={400} image={'/PhillipNeri.svg'} quote={"Cast yourself into the arms of God and be very sure that if he wants anything of you, He will fit you for the work and give you strength."} saint={"St. Phillip Neri"}/>
        <BibleStudy items={bibleStudies}/>
        <Saint1 imgSize={450} image={'/CatherineOfSiena.svg'} quote={"Be who God meant you to be and you will set the world on fire."} saint={"St. Catherine Of Siena"}/>
        <HomeUpcomingEvents upcomingEvents={upcomingEvents}/>
        <Saint1 imgSize={400} image={'/ThereseOfLisieux.svg'} quote={"Love can accomplish all things. Things that are most impossibe become easy where love is at work."} saint={"St. Therese of Lisieux"}/>
        <TestimoniesNew testimonies={testimonies}/>
        <Saint2 imgSize={400} image={'/ThomasAquainus.svg'} quote={"To one who has faith, no explanation is necessary. To one without faith, no explanation is possible."} saint={"St. Thomas Aquinas"}/>
        <ContactLinks/>
        <ContactForm/>
        <Footer/>
      </div>
  );
}


