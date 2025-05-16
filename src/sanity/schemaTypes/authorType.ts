import { FaPenFancy } from 'react-icons/fa';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const author = defineType({
  name: 'author',
  title: 'Author',
  icon: FaPenFancy,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: `Author's Name`,
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      hidden: ({ document }) => !document?.name,
    }),
    defineField({
      name: 'book',
      title: `Books by the Author`,
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Book Title',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'Book URL',
              type: 'url',
            }),
            defineField({
              name: 'mainImage',
              title: 'Book Cover',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alternative Text',
                  type: 'string',
                  validation: (rule) =>
                    rule.required().info(`Required for screen readers`),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'bio',
      title: `Author's Bio`,
      type: 'text',
      validation: (rule) =>
        rule.required().min(20).info(`Bio must have at least 20 characters`),
    }),
    defineField({
      name: 'mainImage',
      title: `Author's Image`,
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (rule) =>
            rule.required().info(`Required for screen readers`),
        }),
      ],
    }),
    defineField({
      name: 'links',
      title: 'Useful links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'Link URL',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      authorName: 'name',
      authorImage: 'mainImage',
    },
    prepare({ authorImage, authorName }) {
      return {
        title: authorName,
        media: authorImage,
      };
    },
  },
});
