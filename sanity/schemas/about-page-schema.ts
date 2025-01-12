const aboutPageContents = {
    name: 'aboutPageContents',
    title: 'About Page Contents',
    type: 'document',
    fields: [
        {
            name: 'what_is_newman_img',
            title: 'What Is Newman Img',
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
            name: 'what_is_newman_text',
            title: 'What is Newman Text',
            type: 'string',

        },
        {
            name: 'oratory_text',
            title: 'The Oratory Text',
            type: 'string',

        },
        {
            name: 'oratory_images',
            title: 'Oratory Images',
            type: 'array',
            of: [
                {
                title: 'Image with Title and Description',
                type: 'object',
                fields: [
                    {
                    name: 'oratory_image',
                    title: 'Image',
                    type: 'image',
                    options: {
                        hotspot: true, // This allows you to crop the image
                    },
                    },
                    {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    },
                    {
                    name: 'desc',
                    title: 'Description',
                    type: 'text',
                    },
                ],
                },
            ],
        },
        {
            name: 'our_community_subheading',
            title: 'Our Community Subheading',
            type: 'string',

        },
        {
            name: 'support_link',
            title: 'Support Link',
            type: 'string',

        },
        {
            name: 'support_link_name',
            title: 'Support Link Name',
            type: 'string',

        },
        {
            name: 'support_link_img',
            title: 'Support Link Img',
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
            name: 'events_link_img',
            title: 'Events Link Img',
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
            name: 'alumni_link_img',
            title: 'Alumni Link Img',
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
            name: 'service_subheading',
            title: 'Service Subheading',
            type: 'string',

        },
        {
            name: 'service_discord_link',
            title: 'Service Discord Link',
            type: 'string',

        },
        {
            name: 'service_see_more_link',
            title: 'Service See More Link',
            type: 'string',

        },
        {
            name: 'service_opportunity_images',
            title: 'Service Opportunity Images',
            type: 'array',
            of: [
                {
                title: 'Image with Title and Description',
                type: 'object',
                fields: [
                    {
                    name: 'service_image',
                    title: 'Image',
                    type: 'image',
                    options: {
                        hotspot: true, // This allows you to crop the image
                    },
                    },
                    {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    },
                    {
                    name: 'desc',
                    title: 'Description',
                    type: 'text',
                    },
                ],
                },
            ],
        },
        {
            name: 'focus_subheading',
            title: 'FOCUS Subheading',
            type: 'string',

        },
        {
            name: 'our_missionaries_img',
            title: 'Our Missionaries Img',
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
            name: 'our_missionaries_text',
            title: 'Our Missionaries Text',
            type: 'string',

        },
        {
            name: 'seek_subheading',
            title: 'SEEK Subheading',
            type: 'string',

        },
        {
            name: 'seek_signup_link',
            title: 'SEEK Sign Up Link',
            type: 'string',

        },
        {
            name: 'what_is_seek_text',
            title: 'What Is SEEK text',
            type: 'string',

        },
        {
            name: 'what_is_seek_img',
            title: 'What Is SEEK Img',
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
            name: 'seek_recaplink',
            title: 'SEEK Recap Link',
            type: 'string',

        },
        {
            name: 'seek_see_more_link',
            title: 'SEEK See more Link',
            type: 'string',

        },
        {
            name: 'seek_highlights',
            title: 'Seek Highlight Images',
            type: 'array',
            of: [
                {
                title: 'Image with Title and Description',
                type: 'object',
                fields: [
                    {
                    name: 'highlight_image',
                    title: 'Image',
                    type: 'image',
                    options: {
                        hotspot: true, // This allows you to crop the image
                    },
                    },
                    {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    },
                    {
                    name: 'desc',
                    title: 'Description',
                    type: 'text',
                    },
                ],
                },
            ],
        },
        {
            name: 'alumni_subheading',
            title: 'Alumni Subheading',
            type: 'string',

        },
    ]
}

export default aboutPageContents;