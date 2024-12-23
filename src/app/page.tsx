import { getHomepageSlideshowImgs, getTestimonies, getUpcomingEvents } from "../../sanity/sanity-utils";
import { Project } from "../../types/Project";
import HomepageSlideshow from "../../components/HomepageSlideshow";
import WeeklyEventsGrid from "../../components/WeeklyEventsGrid";
import Navbar from '../../components/Navbar';
import Saint1 from "../../components/Saint1";
import Saint2 from "../../components/Saint2";
import UpcomingEvents from "../../components/UpcomingEvents";
import Testimonies from "../../components/Testimonies";


export default async function Home() {

  const homepageSlideshowImgs: Project[] = await getHomepageSlideshowImgs();
  const testimonies: Project[] = await getTestimonies();
  const upcomingEvents: Project[] = await getUpcomingEvents();

  return (
      <div style={{overflowX: "hidden"}}>
        <Navbar/>
        <HomepageSlideshow imageData={homepageSlideshowImgs}/>
        <Saint1/>
        <div className="py-40">
          <WeeklyEventsGrid/>
        </div>
        <Saint2/>
        <UpcomingEvents events={upcomingEvents}/>
        <p style={{paddingRight: "20px", paddingLeft: "20px"}} className="pt-28 text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl">Why Newman?</p>
        <Testimonies testimonies={testimonies}/>
        <Saint1/>
        <p style={{paddingRight: "20px", paddingLeft: "20px"}} className="pt-28 text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl">Questions?</p>
        <p style={{paddingRight: "20px", paddingLeft: "20px"}} className="text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl">Want to Join?</p>
        <p style={{paddingRight: "40px", paddingLeft: "40px"}} className="pt-4 text-center font-light text-black text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl">A missionary, board member, or campus minister will reach out to you once we get your info!</p>
        <p className="py-40">contact form will go here</p>
      </div>
  );
}


//RGB Value for CMU Newman: 114,28,64