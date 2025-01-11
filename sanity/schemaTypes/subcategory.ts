// sanity/schemaTypes/subcategory.ts
export const subcategory = {
  name: 'subcategory',
  title: 'Subcategory',
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
      name: 'mainCategory',
      title: 'Main Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule: any) => Rule.required(),
      description: 'Select the main category this belongs to (Men, Women, Perfumes, or Gadgets)',
    },
    {
      name: 'type',
      title: 'Subcategory Type',
      type: 'string',
      options: {
        list: [
          { title: 'Clothing', value: 'clothing' },
          { title: 'Bags', value: 'bags' },
          { title: 'Shoes', value: 'shoes' },
          { title: 'Accessories', value: 'accessories' },
          { title: 'Jewelry', value: 'jewelry' },
          { title: 'Luxury Brand', value: 'luxuryBrand' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display this subcategory',
    },
    {
      name: 'featured',
      title: 'Featured Subcategory',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'parentSubcategory',
      title: 'Parent Subcategory',
      type: 'reference',
      to: [{ type: 'subcategory' }],
      description: 'Use this for nested subcategories (e.g., Luxury Brands -> Gucci)',
      validation: (Rule: any) => Rule.optional(),
    },
    {
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Required specifications for products in this subcategory',
    },
  ],
}