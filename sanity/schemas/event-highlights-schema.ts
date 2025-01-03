const eventHighlightsSchema = {
    name: 'eventHighlights',
    title: 'Event Highlights',
    type: 'document',
    fields: [
        {
            name: 'event_name',
            title: 'Event Name',
            type: 'string',

        },
        {
            name: 'event_desc',
            title: 'Event Desc',
            type: 'string',

        },
        {
            name: 'event_location',
            title: 'Event Location',
            type: 'string',

        },
        {
            name: 'event_date',
            title: 'Event Date',
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
        }
    ]
}

export default eventHighlightsSchema;