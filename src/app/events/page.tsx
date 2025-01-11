import PageBanner from "../../../components/PageBanner";
import EventsPageButtons from "../../../components/EventsPageButtons";
import BackToTop from "../../../components/BackToTop";
import Footer from "../../../components/Footer";
import EventsPageAllSections from "../../../components/EventsPageAllSections";
import { getAllHeadersAndSubHeaders, getWeeklyEvents, getUpcomingEvents, getEventHighlights, getChitChatsDisplay } from "../../../sanity/sanity-utils";
import grabText from '../../../constants/helpers';

export default async function Events() {
  const weeklyEvents = await getWeeklyEvents();
  const upcomingEvents = await getUpcomingEvents();
  const eventHighlights = await getEventHighlights();
  const chitChats = await getChitChatsDisplay();
  const allHeaders = await getAllHeadersAndSubHeaders();

  return (
      <div style={{overflowX: "hidden"}}>
          <PageBanner pageName={"Events"} pageDesc={grabText('events_subheading', allHeaders)} pageImg={allHeaders[0].events_heading_img}/>
          <BackToTop/>
          <EventsPageButtons subheading={grabText('events_explore_subheading', allHeaders)}/>
          <EventsPageAllSections 
            weeklySubText={grabText('events_weekly_subheading', allHeaders)} 
            weeklyItems={weeklyEvents} 
            upcomingSubText={grabText('events_upcoming_subheading', allHeaders)} 
            upcomingItems={upcomingEvents} 
            highlightsSubText={grabText('events_highlights_subheading', allHeaders)} 
            highlightItems={eventHighlights} 
            chitChatItems={chitChats}
            chitChatsSubheading={grabText('events_chitchats_subheading', allHeaders)}
            calendarSubheading={grabText('events_calendar_subheading', allHeaders)}
          />
          <Footer/>
      </div>
  );
}
