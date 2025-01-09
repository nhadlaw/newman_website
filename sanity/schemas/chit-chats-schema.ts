const chitChatsDisplay = {
    name: 'chitChatsDisplay',
    title: 'chitChatsDisplay',
    type: 'document',
    fields: [
        {
            name: 'topic',
            title: 'Chit Chats Topic',
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
            name: 'description',
            title: 'Topic Description',
            type: 'string'
        },
    ]
}

export default chitChatsDisplay;