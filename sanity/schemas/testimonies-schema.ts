const testimonies = {
    name: 'testimonies',
    title: 'Testimonies',
    type: 'document',
    fields: [
        {
            name: 'student',
            title: 'Student',
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
        {
            name: 'testimony',
            title: 'Testimony',
            type: 'string'
        },
        {
            name: 'major',
            title: 'Major',
            type: 'string'
        },
        {
            name: 'grad_year',
            title: 'Graduation Year',
            type: 'string'
        },
    ]
}

export default testimonies;