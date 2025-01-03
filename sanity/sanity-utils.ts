import { createClient, groq } from "next-sanity";
import { Project } from "../types/Project";

export async function getHomepageSlideshowImgs() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
    });

    // type=project indicates this query is going to fetch all of our projects
    // the fields inside the query is what we are going to be grabbing from inside of it
    const homepageSlideshowQuery = groq`*[_type == "homepageSlideshow"]{
        _id,
        _createAt,
        name,
        "image":image.asset->url,
        content
    }`

    //ignore the reg squiggly line for homepageSlideshowQuery that is just a typescript issue
    return client.fetch(homepageSlideshowQuery)

}

export async function getTestimonies() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
    });

    // type=project indicates this query is going to fetch all of our testimonies
    // the fields inside the query is what we are going to be grabbing from inside of it
    const testimonyQuery = groq`*[_type == "testimonies"]{
        _id,
        _createAt,
        student,
        "image":image.asset->url,
        testimony,
        background_color
    }`

    //ignore the reg squiggly line for testimonyQuery that is just a typescript issue
    return client.fetch(testimonyQuery)

}


export async function getUpcomingEvents() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
    });

    // type=project indicates this query is going to fetch all of our testimonies
    // the fields inside the query is what we are going to be grabbing from inside of it
    const upcomingEventsQuery = groq`*[_type == "upcomingEvents"]{
        _id,
        _createAt,
        event_name,
        event_desc,
        event_location,
        "image":image.asset->url,
    }`

    //ignore the reg squiggly line for upcomingEventsQuery that is just a typescript issue
    return client.fetch(upcomingEventsQuery)

}


export async function getChurchLituraryOptionsSchema() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
    });

    // type=project indicates this query is going to fetch all of our testimonies
    // the fields inside the query is what we are going to be grabbing from inside of it
    const churchLituragyOptionsQuery = groq`*[_type == "churchLituragyOptions"]{
        _id,
        _createAt,
        churchName,
        location,
        location_google_maps,
        massTimes {
            information[] {
              key,
              value
            }
        },
        confessionOptions {
            information[] {
              key,
              value
            }
        },
        divineOfficeAndDevotions {
            information[] {
              key,
              value
            }
        },
        "image":image.asset->url,
        description
    }`

    //ignore the reg squiggly line for churchLituragyOptionsQuery that is just a typescript issue
    return client.fetch(churchLituragyOptionsQuery)


}


export async function getOfficersAndMinisters() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
    });

    // type=project indicates this query is going to fetch all of our projects
    // the fields inside the query is what we are going to be grabbing from inside of it
    const officersAndMinistersQuery = groq`*[_type == "officersAndMinisters"]{
        _id,
        _createAt,
\        oratoryStaff {
            information[] {
              name,
              number,
              email,
              additionalInfo,
              about,
              fun_fact,
              hometown,
              fav_quote,
              "image":image.asset->url,
              "image_with_background":image_with_background.asset->url
            }
        },
        focusStaff {
            information[] {
              name,
              number,
              email,
              additionalInfo,
              about,
              fun_fact,
              hometown,
              fav_quote,
              "image":image.asset->url,
              "image_with_background":image_with_background.asset->url
            }
        },
        execBoard {
            information[] {
              name,
              number,
              email,
              additionalInfo,
              about,
              fun_fact,
              hometown,
              fav_quote,
              "image":image.asset->url,
              "image_with_background":image_with_background.asset->url
            }
        },
    }`

    //ignore the reg squiggly line for officersAndMinistersQuery that is just a typescript issue
    return client.fetch(officersAndMinistersQuery)

}

export async function getWeeklyEvents(): Promise<Project[]> {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
    });

    // type=project indicates this query is going to fetch all of our projects
    // the fields inside the query is what we are going to be grabbing from inside of it
    const weeklyEventsQuery = groq`*[_type == "weeklyEvents"]{
        _id,
        _createAt,
        event_name,
        event_desc,
        event_location,
        "image":image.asset->url,
        event_desc
    }`

    //ignore the reg squiggly line for weeklyEventsQuery that is just a typescript issue
    return client.fetch(weeklyEventsQuery)

}

export async function getEventHighlights(): Promise<Project[]> {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
    });

    // type=project indicates this query is going to fetch all of our projects
    // the fields inside the query is what we are going to be grabbing from inside of it
    const eventHighlightsQuery = groq`*[_type == "eventHighlights"]{
        _id,
        _createAt,
        event_name,
        event_desc,
        event_location,
        event_date,
        "image":image.asset->url,
        event_desc
    }`

    //ignore the reg squiggly line for eventHighlightsQuery that is just a typescript issue
    return client.fetch(eventHighlightsQuery)

}


export async function getSemesterlyRetreats() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
    });

    // type=project indicates this query is going to fetch all of our projects
    // the fields inside the query is what we are going to be grabbing from inside of it
    const semesterlyRetreatsInfoQuery = groq`*[_type == "semesterlyRetreatsInfo"]{
        _id,
        _createAt,
        retreats_header_desc,
        retreat_signUp_link,
        retreat_info[] {
            desc_title,
            desc_subtitle,
            desc,
            "image":image.asset->url,
            desc_color,
            text_color
          }
    }`

    //ignore the reg squiggly line for semesterlyRetreatsInfoQuery that is just a typescript issue
    return client.fetch(semesterlyRetreatsInfoQuery)

}


export async function getPreviousRetreats() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
    });

    // type=project indicates this query is going to fetch all of our projects
    // the fields inside the query is what we are going to be grabbing from inside of it
    const previousRetreatsInfoQuery = groq`*[_type == "previousRetreats"]{
        _id,
        _createAt,
        retreat_theme,
        retreat_semester,
        bg_color,
        retreat_desc,
        retreat_talks[],
        "image":image.asset->url,
    }`

    //ignore the reg squiggly line for previousRetreatsInfoQuery that is just a typescript issue
    return client.fetch(previousRetreatsInfoQuery)

}


export async function getStaffDescriptions() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
    });

    // type=project indicates this query is going to fetch all of our projects
    // the fields inside the query is what we are going to be grabbing from inside of it
    const staffDescriptionsQuery = groq`*[_type == "staffDescriptions"]{
        _id,
        _createAt,
        oratory_staff_desc,
        focus_staff_desc,
        exec_staff_desc
    }`

    //ignore the reg squiggly line for staffDescriptionsQuery that is just a typescript issue
    return client.fetch(staffDescriptionsQuery)

}




