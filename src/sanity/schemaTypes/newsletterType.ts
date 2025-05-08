import { defineField, defineType } from 'sanity';
import { BsNewspaper } from 'react-icons/bs';

export const newsletter = defineType({
  name: 'newsletter',
  title: 'Newsletter Subscription',
  icon: BsNewspaper,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
      validation: (rule) => rule.required(),
    }),
  ],
});
