import { FaBriefcaseMedical } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const treatment = defineType({
  name: 'treatment',
  icon: FaBriefcaseMedical,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
    }),
  ],
});
