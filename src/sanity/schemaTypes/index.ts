import { type SchemaTypeDefinition } from 'sanity';
import { newsletter } from './newsletterType';
import { contact } from './contactType';
import { review } from './reviewType';
import { FAQ } from './faqType';
import { blockContentType } from './blockContent';
import { treatment } from './treatmentType';
import { blog } from './blogType';
import { author } from './authorType';
import { therapist } from './therapistType';
import { therapy } from './therapyType';
import { appointment } from './appointmentType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    newsletter,
    contact,
    review,
    FAQ,
    blockContentType,
    treatment,
    blog,
    author,
    therapist,
    therapy,
    appointment,
  ],
};
