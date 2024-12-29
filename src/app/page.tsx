import { getHomepageSlideshowImgs, getTestimonies, getUpcomingEvents } from "../../sanity/sanity-utils";
import { Project } from "../../types/Project";
import HomepageSlideshow from "../../components/HomepageSlideshow";
import WeeklyEventsGrid from "../../components/WeeklyEventsGrid";
import Navbar from '../../components/Navbar';
import Saint1 from "../../components/Saint1";
import Saint2 from "../../components/Saint2";
import UpcomingEvents from "../../components/UpcomingEvents";
import Testimonies from "../../components/Testimonies";
import ContactForm from "../../components/ContactForm";


export default async function Home() {

  const homepageSlideshowImgs: Project[] = await getHomepageSlideshowImgs();
  const testimonies: Project[] = await getTestimonies();
  const upcomingEvents: Project[] = await getUpcomingEvents();

  return (
      <div style={{overflowX: "hidden"}}>
        <Navbar/>
        <HomepageSlideshow imageData={homepageSlideshowImgs}/>
         <p 
          className={`pt-44 text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl`}
          style={{paddingRight: "20px", paddingLeft: "20px"}}>Welcome!
        </p>
        <p className="text-center text-3xl pr-24 pl-24 font-light mt-4">
        Our club has been a continuous presence at CMU for decades. We work in the vineyard with the Oratorian fathers, who administer campus ministry for Carnegie Mellon, the University of Pittsburgh, and Chatham University.
        </p>
        <Saint1 image={'/JohnHenryNewman.png'} quote={"We need something which the world cannot give, and this it is which the Gospel has supplied."} saint={"St. John Henry Newman"}/>
        <p 
          className={`pt-40 text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl`}
          style={{paddingRight: "20px", paddingLeft: "20px"}}>Weekly Events
        </p>
        <WeeklyEventsGrid/>
        <Saint2 image={'/PhillipNeri.png'} quote={"Cast yourself into the arms of God and be very sure that if he wants anything of you, He will fit you for the work and give you strength."} saint={"St. Phillip Neri"}/>
          <p 
          className={`pt-64 text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl`}
          style={{paddingRight: "20px", paddingLeft: "20px"}}>See What It&apos;s All About...
        </p>
        <UpcomingEvents events={upcomingEvents}/>
        <Saint1 image={'/JohnHenryNewman2.png'} quote={"The truest wisdom is to stand still and trust in God"} saint={"St. John Henry Newman"}/>
        <p style={{paddingRight: "20px", paddingLeft: "20px"}} className="pt-44 text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl">Why Newman?</p>
        <Testimonies testimonies={testimonies}/>
        <Saint2 image={'/PhillipNeri2.png'} quote={"The Lord grants in a moment what we may have been unable to obtain in dozens of years."} saint={"St. Phillip Neri"}/>
        <p style={{paddingRight: "20px", paddingLeft: "20px"}} className="pt-44 text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl">Questions?</p>
        <p style={{paddingRight: "20px", paddingLeft: "20px"}} className="text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl">Want to Join?</p>
        <p style={{paddingRight: "40px", paddingLeft: "40px"}} className="pt-4 text-center font-light text-black text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl">A missionary, board member, or campus minister will reach out to you once we get your info!</p>
        <ContactForm/>
      </div>
  );
}


//RGB Value for CMU Newman: 114,28,64