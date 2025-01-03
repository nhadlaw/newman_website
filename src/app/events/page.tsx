import PageBanner from "../../../components/PageBanner";
import EventsPageWeeklyGrid from "../../../components/EventsPageWeeklyGrid";
import EventsPageUpcomingGrid from "../../../components/EventsPageUpcomingGrid";
import EventsPageEventHighlights from "../../../components/EventsPageEventHighlights";
import { getWeeklyEvents, getUpcomingEvents, getEventHighlights } from "../../../sanity/sanity-utils";
import EventsPageButtons from "../../../components/EventsPageButtons";
import Image from 'next/image';
import BackToTop from "../../../components/BackToTop";

const eventsQuote = '"If we wish to be perfect, we have nothing more to do than to perform the ordinary duties of the day well. -St. John Henry Newman"'

export default async function Events() {
  const weeklyEvents = await getWeeklyEvents();
  const upcomingEvents = await getUpcomingEvents();
  const eventHighlights = await getEventHighlights();

  return (
      <div style={{overflowX: "hidden"}}>
          <PageBanner pageName={"Events"} pageDesc={eventsQuote} pageImg={'/EventsPage.jpg'}/>
          <BackToTop/>
          <EventsPageButtons/>
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
              <EventsPageEventHighlights items={eventHighlights}/>
            </div>
          </div>
      </div>
  );
}
