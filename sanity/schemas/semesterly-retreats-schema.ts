const semesterlyRetreatsSchema = {
    name: 'semesterlyRetreatsInfo',
    title: 'Semesterly Retreats Info',
    type: 'document',
    fields: [
        {
            name: 'retreats_header_desc',
            title: 'Semesterly Retreats Header Description',
            type: 'string',

        },
        {
            name: 'retreat_signUp_link',
            title: 'Next Retreat Sign Up Link',
            type: 'string',

        },
        {
            name:'retreat_info',
            title: 'Retreat Information',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'desc_title',
                            title: 'Description Title',
                            type: 'string'
                        },
                        {
                            name: 'desc_subtitle',
                            title: 'Description Subtitle',
                            type: 'string'
                        },
                        {
                            name: 'desc',
                            title: 'Description',
                            type: 'string'
                        },
                        {
                            name: 'image',
                            title: 'Desc Image',
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
                            name: 'desc_color',
                            title: 'Desc Color',
                            type: 'string',
                
                        },
                        {
                            name: 'text_color',
                            title: 'Text Color',
                            type: 'string',
                        },

                    ]
                }
            ]
        },
    ]
}

export default semesterlyRetreatsSchema;