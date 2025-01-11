import { SKUInput } from '@/sanity/components/SKUInput';

export const product = {
  name: 'product',
  title: 'Product',
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
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [{ type: 'brand' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainCategories',
      title: 'Main Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      validation: (Rule: any) => Rule.required().custom((mainCategories: any) => {
        if (!mainCategories || mainCategories.length === 0) {
          return 'At least one main category is required'
        }
        return true
      }),
    },
    {
      name: 'subcategories',
      title: 'Subcategories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.min(1).required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: any) => Rule.required().positive(),
    },
    {
      name: 'compareAtPrice',
      title: 'Compare At Price',
      type: 'number',
    },
    {
      name: 'sku',
      title: 'SKU',
      type: 'string',
      components: {
        input: SKUInput
      },
      validation: (Rule: any) => Rule.required(),
      readOnly: true,
    },
    {
      name: 'inventory',
      title: 'Inventory',
      type: 'object',
      fields: [
        {
          name: 'inStock',
          title: 'In Stock',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'quantity',
          title: 'Quantity',
          type: 'number',
          validation: (Rule: any) => Rule.min(0),
        },
      ],
    },
    {
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Variant Name',
              type: 'string',
            },
            {
              name: 'sku',
              title: 'Variant SKU',
              type: 'string',
              components: {
                input: SKUInput
              },
              validation: (Rule: any) => Rule.required(),
              readOnly: true,
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number',
            },
            {
              name: 'inStock',
              title: 'In Stock',
              type: 'boolean',
            },
            {
              name: 'attributes',
              title: 'Attributes',
              type: 'object',
              fields: [
                {
                  name: 'size',
                  title: 'Size',
                  type: 'string',
                },
                {
                  name: 'color',
                  title: 'Color',
                  type: 'string',
                },
                {
                  name: 'material',
                  title: 'Material',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'status',
      title: 'Product Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Draft', value: 'draft' },
          { title: 'Archived', value: 'archived' },
        ],
      },
      initialValue: 'draft',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'sku',
      media: 'images.0',
    },
  },
};