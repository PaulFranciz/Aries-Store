// sanity/schemaTypes/collection.ts

export const collection = {
    name: 'collection',
    title: 'Collection',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Hero Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'product' }] }],
      },
      {
        name: 'featured',
        title: 'Featured Collection',
        type: 'boolean',
        initialValue: false,
      },
      {
        name: 'startDate',
        title: 'Start Date',
        type: 'datetime',
      },
      {
        name: 'endDate',
        title: 'End Date',
        type: 'datetime',
      },
      {
        name: 'collectionType',
        title: 'Collection Type',
        type: 'string',
        options: {
          list: [
            { title: 'Seasonal', value: 'seasonal' },
            { title: 'Special Edition', value: 'special' },
            { title: 'Permanent', value: 'permanent' },
          ],
        },
        initialValue: 'permanent',
      },
      {
        name: 'displayPriority',
        title: 'Display Priority',
        type: 'number',
        description: 'Higher numbers will be displayed first',
        initialValue: 0,
      },
    ],
  }