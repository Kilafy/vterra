import { defineField, defineType } from 'sanity'
import { Home } from 'lucide-react'

export const propertyType = defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  icon: Home,
  fields: [
    // Basic Information
    defineField({
      name: 'title_en',
      title: 'Title (English)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title_es',
      title: 'Título (Español)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title_en',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    
    // Property Details
    defineField({
      name: 'type',
      title: 'Property Type',
      type: 'string',
      options: {
        list: [
          { title: 'Condominium', value: 'condominium' },
          { title: 'Villa', value: 'villa' },
          { title: 'House', value: 'house' },
          { title: 'Penthouse', value: 'penthouse' },
          { title: 'Apartment', value: 'apartment' },
          { title: 'Commercial', value: 'commercial' },
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'For Sale', value: 'for-sale' },
          { title: 'For Rent', value: 'for-rent' },
          { title: 'Sold', value: 'sold' },
        ],
        layout: 'radio',
      },
      initialValue: 'for-sale',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    }),
    
    // Location
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'city',
          title: 'City',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'state',
          title: 'State/Province',
          type: 'string',
        },
        {
          name: 'country',
          title: 'Country',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'address',
          title: 'Full Address',
          type: 'text',
          rows: 2,
        },
      ],
      validation: (rule) => rule.required(),
    }),
    
    // Property Features
    defineField({
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number',
      validation: (rule) => rule.required().integer().positive(),
    }),
    defineField({
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'area',
      title: 'Area (sq ft)',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'parking',
      title: 'Parking Spaces',
      type: 'number',
      validation: (rule) => rule.integer().min(0),
    }),
    
    // Images
    defineField({
      name: 'images',
      title: 'Property Images',
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
              title: 'Alt Text',
              type: 'string',
            },
            {
              name: 'caption_en',
              title: 'Caption (English)',
              type: 'string',
            },
            {
              name: 'caption_es',
              title: 'Caption (Español)',
              type: 'string',
            },
          ],
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    
    // Descriptions
    defineField({
      name: 'description_en',
      title: 'Description (English)',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description_es',
      title: 'Descripción (Español)',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    
    // Amenities
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    
    // Featured & Priority
    defineField({
      name: 'featured',
      title: 'Featured Property',
      type: 'boolean',
      description: 'Display this property in featured sections',
      initialValue: false,
    }),
    defineField({
      name: 'priority',
      title: 'Display Priority',
      type: 'number',
      description: 'Higher numbers appear first (optional)',
      validation: (rule) => rule.integer().min(0).max(100),
    }),
    
    // SEO
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle_en',
          title: 'Meta Title (English)',
          type: 'string',
        },
        {
          name: 'metaTitle_es',
          title: 'Meta Title (Español)',
          type: 'string',
        },
        {
          name: 'metaDescription_en',
          title: 'Meta Description (English)',
          type: 'text',
          rows: 3,
        },
        {
          name: 'metaDescription_es',
          title: 'Meta Description (Español)',
          type: 'text',
          rows: 3,
        },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  
  preview: {
    select: {
      title: 'title_en',
      subtitle: 'location.city',
      media: 'images.0',
      price: 'price',
    },
    prepare({ title, subtitle, media, price }) {
      return {
        title,
        subtitle: `${subtitle} • $${price?.toLocaleString()}`,
        media,
      }
    },
  },
})
