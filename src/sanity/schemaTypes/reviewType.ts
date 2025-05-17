import { defineField, defineType } from 'sanity';
import { MdOutlineRateReview } from 'react-icons/md';

export const review = defineType({
  name: 'review',
  icon: MdOutlineRateReview,
  title: 'Review',
  type: 'document',
  fields: [
    defineField({
      name: 'username',
      title: 'User name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'username',
      },
      validation: (rule) => rule.required(),
      hidden: ({ document }) => !document?.username,
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'username',
      subtitle: 'role',
    },
  },
});
