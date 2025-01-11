export const brand = {
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Brand Name',
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
    },
    {
      name: 'logo',
      title: 'Brand Logo',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      description: 'Categories this brand belongs to',
    },
    {
      name: 'isLuxury',
      title: 'Is Luxury Brand',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'featured',
      title: 'Featured Brand',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'countryOfOrigin',
      title: 'Country of Origin',
      type: 'string',
    },
    {
      name: 'websiteUrl',
      title: 'Official Website',
      type: 'url',
    },
  ],
};

