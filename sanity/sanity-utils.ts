import { createClient, groq } from "next-sanity";
import { Project } from "../types/Project";
import { cache } from "react"; // Import cache for revalidation

export async function getHomepageSlideshowImgs() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
        useCdn: false, // Disable CDN to always fetch fresh data
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
    return cache(async () => client.fetch(homepageSlideshowQuery))();

}

export async function getTestimonies() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
        useCdn: false, // Disable CDN to always fetch fresh data

    });

    // type=project indicates this query is going to fetch all of our testimonies
    // the fields inside the query is what we are going to be grabbing from inside of it
    const testimonyQuery = groq`*[_type == "testimonies"]{
        _id,
        _createAt,
        student,
        "image":image.asset->url,
        testimony,
        grad_year,
        major
    }`

    //ignore the reg squiggly line for testimonyQuery that is just a typescript issue
    return cache(async () => client.fetch(testimonyQuery))();

}


export async function getUpcomingEvents() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
        useCdn: false, // Disable CDN to always fetch fresh data
    });

    // type=project indicates this query is going to fetch all of our testimonies
    // the fields inside the query is what we are going to be grabbing from inside of it
    const upcomingEventsQuery = groq`*[_type == "upcomingEvents"]{
        _id,
        _createAt,
        event_name,
        event_desc,
        event_location,
        event_starting_date,
        "image":image.asset->url,
    }`

    //ignore the reg squiggly line for upcomingEventsQuery that is just a typescript issue
    return cache(async () => client.fetch(upcomingEventsQuery))();

}


export async function getChurchLituraryOptionsSchema() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
        useCdn: false, // Disable CDN to always fetch fresh data
    });

    // type=project indicates this query is going to fetch all of our testimonies
    // the fields inside the query is what we are going to be grabbing from inside of it
    const churchLituragyOptionsQuery = groq`*[_type == "churchLituragyOptions"]{
        _id,
        _createAt,
        churchName,
        priority,
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
    return cache(async () => client.fetch(churchLituragyOptionsQuery))();


}


export async function getOfficersAndMinisters() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
        useCdn: false, // Disable CDN to always fetch fresh data
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
    return cache(async () => client.fetch(officersAndMinistersQuery))();

}

export async function getWeeklyEvents(): Promise<Project[]> {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
        useCdn: false, // Disable CDN to always fetch fresh data
    });

    // type=project indicates this query is going to fetch all of our projects
    // the fields inside the query is what we are going to be grabbing from inside of it
    const weeklyEventsQuery = groq`*[_type == "weeklyEvents"]{
        _id,
        _createAt,
        event_name,
        event_desc,
        event_location,
        event_link,
        link_name,
        "image":image.asset->url,
        event_desc
    }`

    //ignore the reg squiggly line for weeklyEventsQuery that is just a typescript issue
    return cache(async () => client.fetch(weeklyEventsQuery))();

}

export async function getEventHighlights(): Promise<Project[]> {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
        useCdn: false, // Disable CDN to always fetch fresh data
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
    return cache(async () => client.fetch(eventHighlightsQuery))();

}


export async function getSemesterlyRetreats() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
        useCdn: false, // Disable CDN to always fetch fresh data
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
    return cache(async () => client.fetch(semesterlyRetreatsInfoQuery))();

}


export async function getPreviousRetreats() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
        useCdn: false, // Disable CDN to always fetch fresh data
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
        "svg_image": svg_image.asset->url
    }`

    //ignore the reg squiggly line for previousRetreatsInfoQuery that is just a typescript issue
    return cache(async () => client.fetch(previousRetreatsInfoQuery))();

}


export async function getStaffDescriptions() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
        useCdn: false, // Disable CDN to always fetch fresh data
    });

    // type=project indicates this query is going to fetch all of our projects
    // the fields inside the query is what we are going to be grabbing from inside of it
    const staffDescriptionsQuery = groq`*[_type == "staffDescriptions"]{
        _id,
        _createAt,
        oratory_staff_desc,
        focus_staff_desc,
        exec_staff_desc,
        focus_link,
        focus_link_name,
        oratory_link,
        oratory_link_name
    }`

    //ignore the reg squiggly line for staffDescriptionsQuery that is just a typescript issue
    return cache(async () => client.fetch(staffDescriptionsQuery))();

}


export async function getChitChatsDisplay() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
        useCdn: false, // Disable CDN to always fetch fresh data
    });

    // type=project indicates this query is going to fetch all of our projects
    // the fields inside the query is what we are going to be grabbing from inside of it
    const chitChatsDisplayQuery = groq`*[_type == "chitChatsDisplay"]{
        _id,
        _createAt,
        topic,
        description,
        "image":image.asset->url,
    }`

    //ignore the reg squiggly line for chitChatsDisplayQuery that is just a typescript issue
    return cache(async () => client.fetch(chitChatsDisplayQuery))();

}

export async function getBibleStudies() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
        useCdn: false, // Disable CDN to always fetch fresh data
    });

    // type=project indicates this query is going to fetch all of our projects
    // the fields inside the query is what we are going to be grabbing from inside of it
    const bibleStudiesQuery = groq`*[_type == "bibleStudies"]{
        _id,
        _createAt,
        study_name,
        description,
        contact_email,
        contact_phone,
        contact_name,
        "image":image.asset->url,
    }`

    //ignore the reg squiggly line for bibleStudiesQuery that is just a typescript issue
    return cache(async () => client.fetch(bibleStudiesQuery))();

}


export async function getAllHeadersAndSubHeaders() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
        useCdn: false, // Disable CDN to always fetch fresh data
    });

    // Define the GROQ query to fetch all fields from the schema
    const headersAndSubHeadersQuery = groq`*[_type == "allHeadersAndDescriptions"]{
        _id,
        _createdAt,
        welcome_subheading,
        "litAndPray_heading_img": litAndPray_heading_img.asset->url,
        "litAndPray_heading_img_alt": litAndPray_heading_img.alt,
        "events_heading_img": events_heading_img.asset->url,
        "events_heading_img_alt": events_heading_img.alt,
        "retreats_heading_img": retreats_heading_img.asset->url,
        "retreats_heading_img_alt": retreats_heading_img.alt,
        "staff_heading_img": staff_heading_img.asset->url,
        "staff_heading_img_alt": staff_heading_img.alt,
        litAndPray_subheading,
        sacraments_subheading,
        events_subheading,
        events_explore_subheading,
        events_weekly_subheading,
        events_upcoming_subheading,
        events_calendar_subheading,
        events_highlights_subheading,
        events_chitchats_subheading,
        retreats_subheading,
        retreats_previous_subheading,
        staff_subheading,
        staff_seePeople_subheading,
        "image": image.asset->url,
        "image_alt": image.alt
    }`

    // Fetch and return the data
    return cache(async () => client.fetch(headersAndSubHeadersQuery))();
}



export async function getAboutPageContents() {
    const client = createClient({
        projectId: "ds40fytf",  // Replace with your projectId
        dataset: "production",  // Replace with your dataset name
        apiVersion: "2024-12-18",
        useCdn: false, // Disable CDN to always fetch fresh data  // Use the current API version
    });

    const aboutPageContentsQuery = groq`*[_type == "aboutPageContents"]{
        _id,
        _createdAt,
        "what_is_newman_img": what_is_newman_img.asset->url,
        what_is_newman_text,
        oratory_text,
        oratory_images[]{
            "oratory_image": oratory_image.asset->url,
            title,
            desc
        },
        our_community_subheading,
        support_link,
        support_link_name,
        "support_link_img": support_link_img.asset->url,
        "events_link_img": events_link_img.asset->url,
        "alumni_link_img": alumni_link_img.asset->url,
        service_subheading,
        service_discord_link,
        service_see_more_link,
        service_opportunity_images[]{
            "service_image": service_image.asset->url,
            title,
            desc
        },
        focus_subheading,
        "our_missionaries_img": our_missionaries_img.asset->url,
        our_missionaries_text,
        seek_subheading,
        seek_signup_link,
        what_is_seek_text,
        "what_is_seek_img": what_is_seek_img.asset->url,
        seek_recaplink,
        seek_see_more_link,
        seek_highlights[]{
            "highlight_image": highlight_image.asset->url,
            title,
            desc
        },
        alumni_subheading
    }`;

    return cache(async () => client.fetch(aboutPageContentsQuery))();
}




export async function getAlumniVocations() {
    const client = createClient({
        projectId: "ds40fytf",  // Replace with your projectId
        dataset: "production",  // Replace with your dataset name
        apiVersion: "2024-12-18",
        useCdn: false, // Disable CDN to always fetch fresh data  // Use the current API version
    });

    const alumniVocationsQuery = groq`
        *[_type == "alumniVocations"]{
            categories[]{
            categoryName,
            individuals[]{
                "imageUrl": image.asset->url,
                name,
                gradStatus,
                vocation
            }
            }
        }      
    `

    return cache(async () => client.fetch(alumniVocationsQuery))();
}


export async function getAboutPageButtons() {
    const client = createClient({
        projectId: "ds40fytf",
        dataset: "production",
        apiVersion: "2024-12-18",
        useCdn: false, // Disable CDN to always fetch fresh data
    });

    // type=project indicates this query is going to fetch all of our testimonies
    // the fields inside the query is what we are going to be grabbing from inside of it
    const aboutPageButtonsQuery = groq`*[_type == "aboutPageButtons"]{
        _id,
        _createAt,
        student,
        "what_is_newman_img":what_is_newman_img.asset->url,
        "community_img":community_img.asset->url,
        "oratory_img":oratory_img.asset->url,
        "service_img":service_img.asset->url,
        "focus_img":focus_img.asset->url,
        "alumni_img":alumni_img.asset->url,
    }`

    //ignore the reg squiggly line for aboutPageButtonsQuery that is just a typescript issue
    return cache(async () => client.fetch(aboutPageButtonsQuery))();

}