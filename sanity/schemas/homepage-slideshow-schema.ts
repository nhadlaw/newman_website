const homepageSlideshow = {
    name: 'homepageSlideshow',
    title: 'Homepage Slideshow Images',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
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
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        {
            name: 'desc',
            title: 'Description',
            type: 'array',
            of: [{type: "block"}]
        }
    ]
}

export default homepageSlideshow;