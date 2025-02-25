const weeklyEventsSchema = {
    name: 'weeklyEvents',
    title: 'Weekly Events',
    type: 'document',
    fields: [
        {
            name: 'event_name',
            title: 'Event Name',
            type: 'string',

        },
        {
            name: 'event_location',
            title: 'Event Location',
            type: 'string',

        },
        {
            name: 'event_desc',
            title: 'Event Desc',
            type: 'array',
            of: [{type: "block"}]
        },
        {
            name: 'event_link',
            title: 'Forward Link for Event',
            type: 'string',
        },
        {
            name: 'link_name',
            title: 'Forward Link Name for Event',
            type: 'string',
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

export default weeklyEventsSchema;