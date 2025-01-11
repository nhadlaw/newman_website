const alumniVocations =  {
    name: 'alumniVocations',
    type: 'document',
    title: 'Alumni Vocations',
    fields: [
      {
        name: 'categories',
        type: 'array',
        title: 'Categories',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'categoryName',
                type: 'string',
                title: 'Category Name',
              },
              {
                name: 'individuals',
                type: 'array',
                title: 'Individuals',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                        name: 'image',
                        type: 'image',
                        title: 'Image',
                        options: {
                          hotspot: true,
                        },
                      },
                      {
                        name: 'name',
                        type: 'string',
                        title: 'Name',
                      },
                      {
                        name: 'gradStatus',
                        type: 'string',
                        title: 'Graduation Status',
                      },
                      {
                        name: 'vocation',
                        type: 'string',
                        title: 'Vocation',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

export default alumniVocations;
  