export const category = {
  name: 'category',
  title: 'Category',
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
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'parents',
      title: 'Parent Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      validation: (Rule: any) => Rule.custom((parents: any, context: any) => {
        if (context.document.isMainCategory && parents && parents.length > 0) {
          return 'Main categories cannot have parent categories'
        }
        return true
      }),
    },
    {
      name: 'isMainCategory',
      title: 'Is Main Category',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'mainCategoryType',
      title: 'Main Category Type',
      type: 'string',
      options: {
        list: [
          { title: 'Men', value: 'men' },
          { title: 'Women', value: 'women' },
          { title: 'Accessories', value: 'accessories' },
          { title: 'Gadgets', value: 'gadgets' },
          { title: 'Home Interiors', value: 'homeInteriors' },
        ],
      },
      hidden: ({ document }: any) => !document?.isMainCategory,
      validation: (Rule: any) => Rule.custom((mainCategoryType: any, context: any) => {
        if (context.document.isMainCategory && !mainCategoryType) {
          return 'Main category type is required for main categories'
        }
        return true
      }),
    },
    {
      name: 'subcategoryType',
      title: 'Subcategory Type',
      type: 'string',
      options: {
        list: [
          { title: 'Clothing', value: 'clothing' },
          { title: 'Bags', value: 'bags' },
          { title: 'Shoes', value: 'shoes' },
          { title: 'Jewelry', value: 'jewelry' },
          { title: 'Luxury Brands', value: 'luxuryBrands' },
        ],
      },
      hidden: ({ document }: any) => document?.isMainCategory,
      validation: (Rule: any) => Rule.custom((subcategoryType: any, context: any) => {
        if (!context.document.isMainCategory && !subcategoryType) {
          return 'Subcategory type is required for subcategories'
        }
        return true
      }),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order in which to display this category',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'isMainCategory',
      media: 'image',
    },
    prepare({ title, subtitle, media }: any) {
      return {
        title,
        subtitle: subtitle ? 'Main Category' : 'Subcategory',
        media,
      }
    },
  },
};

