"use client"
import EventsPageSection from "./EventsPageSection";
import EventsPageWeeklyGrid from "./EventsPageWeeklyGrid";
import EventsPageUpcomingGrid from "./EventsPageUpcomingGrid";
import EventsPageEventHighlightsForExploreSection from "./EventsPageEventHighlightsForExploreSection";
import GoogleCalendar from "./GoogleCalendar";
import ChitChatsDisplay from "./ChitChatsDisplay";
import { useRef } from 'react';


export default function EventsPageAllSections({chitChatsSubheading, calendarSubheading, weeklySubText, upcomingSubText, highlightsSubText, weeklyItems, highlightItems, upcomingItems, chitChatItems}) {

    const weeklyEventsSectionRef = useRef(null);
    const upcomingEventsSectionRef = useRef(null);
    const eventHighlightsSectionRef = useRef(null)

    return (
        <div>
            <div className="bg-[rgba(114,28,64,0.4)]" id="weeklyEvents">
                <EventsPageSection 
                    sectionRef={weeklyEventsSectionRef} 
                    nextSectionRef={upcomingEventsSectionRef} 
                    heading={"Weekly Events"} headingImg={'/ImmaculateHeart.svg'} 
                    subheadingText={weeklySubText} displayComponents={[<EventsPageWeeklyGrid items={weeklyItems}/>]}
                />
            </div>

            <div className="bg-[rgba(255,200,46,0.8)]" id="upcomingEvents">
                <EventsPageSection 
                    sectionRef={upcomingEventsSectionRef} 
                    nextSectionRef={eventHighlightsSectionRef} 
                    heading={"Upcoming Events"} headingImg={'/SacredHeart.svg'} 
                    subheadingText={upcomingSubText} displayComponents={[<EventsPageUpcomingGrid items={upcomingItems}/>, <GoogleCalendar subheading={calendarSubheading}/>]}
                />
            </div>
            <div className="bg-[rgba(31,103,226,0.6)]" id="eventHighlights">
                <EventsPageSection 
                    sectionRef={eventHighlightsSectionRef} 
                    nextSectionRef={null} 
                    heading={"Event Highlighs"} headingImg={'/ChasteHeart.svg'} 
                    subheadingText={highlightsSubText} displayComponents={[<EventsPageEventHighlightsForExploreSection items={highlightItems}/>, <ChitChatsDisplay subheading={chitChatsSubheading} chitChatTopics={chitChatItems}/>]}
                />
            </div>
        </div>

    )
}

