import { FaCalendarAlt } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const appointment = defineType({
  name: 'appointment',
  icon: FaCalendarAlt,
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: `Patient's Name`,
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: `Patient's Name`,
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'firstName',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'service',
      title: 'Service',
      type: 'string',
      options: {
        list: [
          { title: 'Depression', value: 'depression' },
          { title: 'Family Conflict', value: 'family-conflict' },
          { title: 'Relationships', value: 'relationships' },
          { title: 'Stress', value: 'stress' },
          { title: 'Life Changes', value: 'life-changes' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'therapist',
      title: 'Select a therapist',
      type: 'reference',
      to: [{ type: 'therapist' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Brief Intro',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      patient: 'firstname',
      therapist: 'therapist.name',
      date: 'date',
    },
    prepare({ patient, therapist, date }) {
      const dateFormatted = new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
        day: '2-digit',
      });
      return {
        title: patient,
        subtitle: `${therapist} | ${dateFormatted}`,
      };
    },
  },
});
