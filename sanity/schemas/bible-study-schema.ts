const bibleStudySchema = {
    name: 'bibleStudies',
    title: 'Bible Study Info',
    type: 'document',
    fields: [
        {
            name: 'study_name',
            title: 'Bible Study Name',
            type: 'string',

        },
        {
            name: 'description',
            title: 'Bible Study Description',
            type: 'string',

        },
        {
            name: 'contact_email',
            title: 'Bible Study Contact Email',
            type: 'string',

        },
        {
            name: 'contact_phone',
            title: 'Bible Study Contact Phone',
            type: 'string',

        },
        {
            name: 'contact_name',
            title: 'Bible Study Contact Name',
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

export default bibleStudySchema;