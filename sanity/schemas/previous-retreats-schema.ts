const previousRetreatsSchema = {
    name: 'previousRetreats',
    title: 'Previous Retreats',
    type: 'document',
    fields: [
        {
            name: 'retreat_theme',
            title: 'Retreat Theme',
            type: 'string',

        },
        {
            name: 'retreat_semester',
            title: 'Retreat Semester',
            type: 'string',

        },
        {
            name: 'bg_color',
            title: 'Background Color',
            type: 'string',

        },
        {
            name: 'retreat_desc',
            title: 'Retreat Description',
            type: 'string',

        },
        {
            name: 'retreat_talks',
            title: 'Retreat Talks',
            type: 'array',
            of: [
                {type: 'string'}
            ]

        },
        {
            name: 'image',
            title: 'Retreat Image',
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

export default previousRetreatsSchema;