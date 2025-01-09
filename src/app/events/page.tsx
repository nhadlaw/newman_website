import PageBanner from "../../../components/PageBanner";
import EventsPageWeeklyGrid from "../../../components/EventsPageWeeklyGrid";
import EventsPageUpcomingGrid from "../../../components/EventsPageUpcomingGrid";
import EventsPageEventHighlightsForExploreSection from "../../../components/EventsPageEventHighlightsForExploreSection";
import { getWeeklyEvents, getUpcomingEvents, getEventHighlights, getChitChatsDisplay } from "../../../sanity/sanity-utils";
import EventsPageButtons from "../../../components/EventsPageButtons";
import Image from 'next/image';
import BackToTop from "../../../components/BackToTop";
import GoogleCalendar from "../../../components/GoogleCalendar";
import Saint1 from "../../../components/Saint1";
import ChitChatsDisplay from "../../../components/ChitChatsDisplay";


const eventsQuote = '"If we wish to be perfect, we have nothing more to do than to perform the ordinary duties of the day well. -St. John Henry Newman"'

export default async function Events() {
  const weeklyEvents = await getWeeklyEvents();
  const upcomingEvents = await getUpcomingEvents();
  const eventHighlights = await getEventHighlights();
  const chitChats = await getChitChatsDisplay();

  return (
      <div style={{overflowX: "hidden"}}>
          <PageBanner pageName={"Events"} pageDesc={eventsQuote} pageImg={'/EventsPage.jpg'}/>
          <BackToTop/>
          <p style={{paddingRight: "20px", paddingLeft: "20px"}} className="z-10 pt-28 text-black text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl">Explore Our Events</p>
          <div className="pb-28">
            <EventsPageButtons/>
          </div>
          <div className="bg-[rgba(114,28,64,0.4)]" id="weeklyEvents">
            <div className="flex flex-col pt-48 items-center justify-center align-center">
              <p style={{paddingRight: "20px", paddingLeft: "20px"}} className="z-10 drop-shadow-[0_8.2px_1.2px_rgba(0,0,0,0.8)] text-white text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl">Weekly Events</p>
              <div className="flex justify-center space-x-4">
                <Image
                  src={'/ImmaculateHeart.svg'}
                  alt="Button Image"
                  width={400}
                  height={400}
                  className="z-0 opacity-80 overflow-hidden relative bottom-56"
                />
              </div>
              <h1 className="z-10 font-light text-2xl font-bold text-center text-white relative bottom-64 w-2/3">We have numerous weekly events for food, fellowship, service, and more! Hover over any of the events for descriptions.</h1>
            </div>
            <div className="relative bottom-56">
              <EventsPageWeeklyGrid items={weeklyEvents}/>
            </div>
          </div>

          <div className="bg-[rgba(255,200,46,0.8)]" id="upcomingEvents">
            <div className="flex flex-col pt-48 items-center justify-center align-center">
                <p style={{paddingRight: "20px", paddingLeft: "20px"}} className="z-10 drop-shadow-[0_8.2px_1.2px_rgba(0,0,0,0.8)] text-white text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl">Upcoming Events</p>
                <div className="flex justify-center space-x-4">
                  <Image
                    src={'/SacredHeart.svg'}
                    alt="Button Image"
                    width={400}
                    height={400}
                    className="z-0 opacity-80 overflow-hidden relative bottom-64"
                  />
                </div>
              </div>
            <div className="relative bottom-64">
            <EventsPageUpcomingGrid items={upcomingEvents}/>
            <div className="flex flex-col items-center bg-[rgba(255,190,46,1.0)]">
              <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '3rem'}} className="z-10 pt-8 text-gray-800 text-center font-bold text-white">Events Calendar</p>
              <h1 className="font-light text-2xl text-center text-white text-center w-2/3">Check out our events calendar which has all the most up to date information about weekly, upcoming, and new events happening! Feel free to reach out if you have any questions.</h1>
              <GoogleCalendar/>
            </div>
            </div>
          </div>
          <div className="bg-[rgba(31,103,226,0.6)]" id="eventHighlights">
            <div className="flex flex-col pt-48 items-center justify-center align-center">
                <p style={{paddingRight: "20px", paddingLeft: "20px"}} className="z-10 drop-shadow-[0_8.2px_1.2px_rgba(0,0,0,0.8)] text-white text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl">Event Highlights</p>
                <div className="flex justify-center space-x-4">
                  <Image
                    src={'/ChasteHeart.svg'}
                    alt="Button Image"
                    width={400}
                    height={400}
                    className="z-0 opacity-80 overflow-hidden relative bottom-56"
                  />
                </div>
                <h1 className="z-10 font-light text-2xl font-bold text-center text-white relative bottom-64 w-2/3">Take a look at some of our events from the past couple of weeks. This is just a small glimpse into the wonderful community events we have that bring us together! </h1>
              </div>
            <div className="relative bottom-64">
              <EventsPageEventHighlightsForExploreSection items={eventHighlights}/>
              <div className="flex flex-col items-center" id="chitChatsDisplay">
                <p style={{paddingRight: "20px", paddingLeft: "20px"}} className="pt-28 z-10 text-white text-center font-bold text-6xl">Chit-Chats at a Glance</p>
                <h1 className="z-10 font-light text-2xl text-white w-2/3 text-center pt-4">Join us every Thursday at 8pm in the Highmark Wellness Center for Chit Chats. Here's a glimpse at some of our previous chit-chat topics/themes </h1>
                <ChitChatsDisplay chitChatTopics={chitChats}/>
              </div>
            </div>

          </div>
      </div>
  );
}
