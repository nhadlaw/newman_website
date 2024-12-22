import { createClient, groq } from "next-sanity";
import { Project } from "../types/Project";

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
    });

    // type=project indicates this query is going to fetch all of our projects
    // the fields inside the query is what we are going to be grabbing from inside of it
    const query = groq`*[_type == "project"]{
        _id,
        _createAt,
        name,
        "slug":slug.current,
        "image":image.asset->url,
        url,
        content
    }`

    //ignore the reg squiggly line for query that is just a typescript issue
    return client.fetch(query)

}

export async function getHomepageSlideshowImgs(): Promise<Project[]> {
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

export async function getTestimonies(): Promise<Project[]> {
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


export async function getUpcomingEvents(): Promise<Project[]> {
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


export async function getChurchLituraryOptionsSchema(): Promise<Project[]> {
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
        "image":image.asset->url
    }`

    //ignore the reg squiggly line for churchLituragyOptionsQuery that is just a typescript issue
    return client.fetch(churchLituragyOptionsQuery)


}


export async function getOfficersAndMinisters(): Promise<Project[]> {
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
              "image":image.asset->url
            }
        },
        focusStaff {
            information[] {
              name,
              number,
              email,
              additionalInfo,
              about,
              "image":image.asset->url
            }
        },
        execBoard {
            information[] {
              name,
              number,
              email,
              additionalInfo,
              about,
              "image":image.asset->url
            }
        },
    }`

    //ignore the reg squiggly line for officersAndMinistersQuery that is just a typescript issue
    return client.fetch(officersAndMinistersQuery)

}





