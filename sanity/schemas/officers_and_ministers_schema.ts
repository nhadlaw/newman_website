const officersAndMinisters = {
    name: 'officersAndMinisters',
    title: 'Officers And Ministers Information',
    type: 'document',
    fields: [
        {
            name: 'oratoryStaff',
            title: 'Oratory Staff',
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
                                name: 'name',
                                title: 'Name',
                                type: 'string'
                            },
                            {
                                name: 'number',
                                title: 'Phone Number',
                                type: 'string'
                            },
                            {
                                name: 'email',
                                title: 'Email',
                                type: 'string'
                            },
                            {
                                name: 'additionalInfo',
                                title: 'Additional Info (such as position)',
                                type: 'string'
                            },
                            {
                                name: 'about',
                                title: 'About',
                                type: 'string'
                            },
                            {
                                name: 'image',
                                title: 'Staff Image',
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
                  ]
              }
            ]
        },
        {
            name: 'focusStaff',
            title: 'FOCUS Staff',
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
                                name: 'name',
                                title: 'Name',
                                type: 'string'
                            },
                            {
                                name: 'number',
                                title: 'Phone Number',
                                type: 'string'
                            },
                            {
                                name: 'email',
                                title: 'Email',
                                type: 'string'
                            },
                            {
                                name: 'additionalInfo',
                                title: 'Additional Info (such as position)',
                                type: 'string'
                            },
                            {
                                name: 'about',
                                title: 'About',
                                type: 'string'
                            },
                            {
                                name: 'image',
                                title: 'Staff Image',
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
                  ]
              }
            ]
        },
        {
            name: 'execBoard',
            title: 'Exec Board',
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
                                name: 'name',
                                title: 'Name',
                                type: 'string'
                            },
                            {
                                name: 'number',
                                title: 'Phone Number',
                                type: 'string'
                            },
                            {
                                name: 'email',
                                title: 'Email',
                                type: 'string'
                            },
                            {
                                name: 'additionalInfo',
                                title: 'Additional Info (such as position)',
                                type: 'string'
                            },
                            {
                                name: 'about',
                                title: 'About',
                                type: 'string'
                            },
                            {
                                name: 'image',
                                title: 'Staff Image',
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
                  ]
              }
            ]
        },
    ]
}

export default officersAndMinisters;