import { FaPlusSquare } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const therapy = defineType({
  name: 'therapy',
  title: 'Therapy',
  type: 'document',
  icon: FaPlusSquare,
  fields: [
    defineField({
      name: 'name',
      title: 'Therapy Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      therapyName: 'name',
      slug: 'slug',
    },
    prepare({ therapyName, slug }) {
      const slugFormatted = String(slug.current);
      return {
        title: therapyName,
        subtitle: slugFormatted,
      };
    },
  },
});
