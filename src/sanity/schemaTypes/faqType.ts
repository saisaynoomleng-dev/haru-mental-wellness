import { FaQuestion } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const FAQ = defineType({
  name: 'FAQ',
  type: 'document',
  icon: FaQuestion,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'faqs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              type: 'string',
            }),
            defineField({
              name: 'answer',
              type: 'text',
            }),
          ],
        },
      ],
    }),
  ],
});
