const churchLituragyOptions = {
    name: 'churchLituragyOptions',
    title: 'Church Lituragy And Prayer Information',
    type: 'document',
    fields: [
        {
            name: 'churchName',
            title: 'Church Name',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Church Location',
            type: 'string',
            options: { source: 'name'}
        },
        {
            name: 'massTimes',
            title: 'Church Mass Times',
            type: 'document',
            fields: [
              {
                  name: 'information',
                  title: 'Information',
                  type: 'array',
                  of: [
                      {
                        type: 'object',
                        fields: [
                            {
                                name: 'key',
                                title: 'Day Range',
                                type: 'string'
                            },
                            {
                                name: 'value',
                                title: 'Times',
                                type: 'string'
                            }
                        ]
                      }
                  ]
              }
            ]
        },
        {
            name: 'confessionOptions',
            title: 'Confession Options',
            type: 'document',
            fields: [
              {
                  name: 'information',
                  title: 'Information',
                  type: 'array',
                  of: [
                      {
                        type: 'object',
                        fields: [
                            {
                                name: 'key',
                                title: 'Day Range',
                                type: 'string'
                            },
                            {
                                name: 'value',
                                title: 'Times',
                                type: 'string'
                            }
                        ]
                      }
                  ]
              }
            ]
        },
        {
            name: 'divineOfficeAndDevotions',
            title: 'Divine Office And Devotions',
            type: 'document',
            fields: [
              {
                  name: 'information',
                  title: 'Information',
                  type: 'array',
                  of: [
                      {
                        type: 'object',
                        fields: [
                            {
                                name: 'key',
                                title: 'Devotion',
                                type: 'string'
                            },
                            {
                                name: 'value',
                                title: 'Information',
                                type: 'string'
                            }
                        ]
                      }
                  ]
              }
            ]
        },
        {
            name: 'image',
            title: 'Church Image',
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
            title: 'Church Description',
            type: 'string'
        },
    ]
}

export default churchLituragyOptions;