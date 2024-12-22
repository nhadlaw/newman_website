import PageBanner from "../../../components/PageBanner";
import EventsPageWeeklyGrid from "../../../components/EventsPageWeeklyGrid";
import EventsPageUpcomingGrid from "../../../components/EventsPageUpcomingGrid";
import EventsPageEventHighlights from "../../../components/EventsPageEventHighlights";

const eventsQuote = '"If we wish to be perfect, we have nothing more to do than to perform the ordinary duties of the day well. -St. John Henry Newman"'

export default async function Events() {

  return (
      <div style={{overflowX: "hidden"}}>
          <PageBanner pageName={"Events"} pageDesc={eventsQuote} pageImg={'/EventsPage.jpg'}/>
          <div className="bg-[rgba(114,28,64,0.4)] pb-28">
            <p style={{paddingRight: "20px", paddingLeft: "20px"}} className="text-white pt-28 text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl">Weekly Events</p>
            <EventsPageWeeklyGrid/>
          </div>
          <div className="bg-[rgba(255,200,46,0.8)]">
            <p style={{paddingRight: "20px", paddingLeft: "20px"}} className="text-white pt-28 text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl">Upcoming Events</p>
            <EventsPageUpcomingGrid/>
          </div>
          <div className="bg-[rgba(31,103,226,0.8)]">
            <p style={{paddingRight: "20px", paddingLeft: "20px"}} className="text-white pt-28 text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl">Event Highlights</p>
            <EventsPageEventHighlights/>
          </div>
      </div>
  );
}