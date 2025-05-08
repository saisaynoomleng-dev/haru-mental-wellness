import { RiContactsLine } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

export const contact = defineType({
  name: 'contact',
  title: 'Contact List',
  icon: RiContactsLine,
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
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
});
