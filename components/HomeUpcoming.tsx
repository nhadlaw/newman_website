"use client"
import {useIsVisible } from '../src/app/hooks/useIsVisible';
import {headerStyling, sectionMargin} from '../constants/stylingConstants';
import EventsPageUpcomingGrid from './EventsPageUpcomingGrid'

const HomeUpcomingEvents = ({upcomingEvents}) => {
    const { isVisible, elementRef } = useIsVisible({
        root: null, // Use the viewport as the root
        rootMargin: '0px',
      });
    return (
        <div className={`${sectionMargin} transition-opacity ease-in duration-[700ms] ${
            isVisible ? 'opacity-100' : 'opacity-0'}`} ref={elementRef}>
             <p 
                className={headerStyling}>See What It&apos;s All About...
                </p>
            <EventsPageUpcomingGrid items={upcomingEvents}/>
        </div>
    )
}

export default HomeUpcomingEvents