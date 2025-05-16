import { TbLogs } from 'react-icons/tb';
import { defineField, defineType } from 'sanity';

export const blog = defineType({
  name: 'blog',
  title: 'Blog',
  icon: TbLogs,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Blog Title',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .min(10)
          .info(`Blog title must have at least 10 characters`),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
      hidden: ({ document }) => !document?.title,
    }),
    defineField({
      name: 'category',
      title: 'Blog Category',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      validation: (rule) =>
        rule.required().info(`Required to generate a page on the website`),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sub Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Blog Text',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: `Blog Cover Image`,
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
  preview: {
    select: {
      title: 'title',
      category: 'category',
      author: 'author.name',
      publishedDate: 'publishedAt',
      cover: 'mainImage',
    },
    prepare({ author, category, title, publishedDate, cover }) {
      const dateFormatted = new Date(publishedDate).toLocaleDateString(
        'en-US',
        {
          month: 'short',
          year: 'numeric',
          day: 'numeric',
        },
      );
      return {
        title: `${title} (${author})`,
        subtitle: `${category} | ${dateFormatted}`,
        media: cover,
      };
    },
  },
});
