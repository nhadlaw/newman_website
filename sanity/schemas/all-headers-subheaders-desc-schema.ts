const allHeadersAndDescriptionsSchema = {
    name: 'allHeadersAndDescriptions',
    title: 'All Headers, Subheadings, Descriptions Schema',
    type: 'document',
    fields: [
        {
            name: 'welcome_subheading',
            title: 'Home Page -> Welcome Subheading',
            type: 'array',
            of: [{type: "block"}]
        },
        {
            name: 'litAndPray_heading_img',
            title: 'Main Image For Lit and Pray Page',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }

            ]
        },
        {
            name: 'events_heading_img',
            title: 'Main Image For Events Page',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }

            ]
        },
        {
            name: 'retreats_heading_img',
            title: 'Main Image For Retreats Page',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }

            ]
        },
        {
            name: 'staff_heading_img',
            title: 'Main Image For Staff Page',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }

            ]
        },
        {
            name: 'litAndPray_subheading',
            title: 'Lit and Pray Page -> Main Subheading',
            type: 'array',
            of: [{type: "block"}]
        },
        {
            name: 'sacraments_subheading',
            title: 'Lit and Pray Page -> Sacraments -> Subheading',
            type: 'array',
            of: [{type: "block"}]
        },
        {
            name: 'events_subheading',
            title: 'Events Page -> Main Subheading',
            type: 'array',
            of: [{type: "block"}]
        },
        {
            name: 'events_explore_subheading',
            title: 'Events Page -> Explore Our Events -> Subheading',
            type: 'array',
            of: [{type: "block"}]
        },
        {
            name: 'events_weekly_subheading',
            title: 'Events Page -> Weekly Events -> Subheading',
            type: 'array',
            of: [{type: "block"}]
        },
        {
            name: 'events_upcoming_subheading',
            title: 'Events Page -> Upcoming Events -> Subheading',
            type: 'array',
            of: [{type: "block"}]
        },
        {
            name: 'events_calendar_subheading',
            title: 'Events Page -> Upcoming Events -> Events Calendar -> Subheading',
            type: 'array',
            of: [{type: "block"}]
        },
        {
            name: 'events_highlights_subheading',
            title: 'Events Page -> Event Highlights -> Subheading',
            type: 'array',
            of: [{type: "block"}]
        },
        {
            name: 'events_chitchats_subheading',
            title: 'Events Page -> Event Highlights -> Chit Chats -> Subheading',
            type: 'array',
            of: [{type: "block"}]
        },
        {
            name: 'retreats_subheading',
            title: 'Retreats Page -> Main Subheading',
            type: 'array',
            of: [{type: "block"}]
        },
        {
            name: 'retreats_previous_subheading',
            title: 'Retreats Page -> Prev Retreats -> Subheading',
            type: 'array',
            of: [{type: "block"}]
        },
        {
            name: 'staff_subheading',
            title: 'Staff Page -> Main Subheading',
            type: 'array',
            of: [{type: "block"}]
        },
        {
            name: 'staff_seePeople_subheading',
            title: 'Staff Page -> See Our People -> Subheading',
            type: 'array',
            of: [{type: "block"}]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }

            ]
        },
    ]
}

export default allHeadersAndDescriptionsSchema;