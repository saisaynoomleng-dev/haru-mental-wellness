import { type SchemaTypeDefinition } from 'sanity';
import { newsletter } from './newsletterType';
import { contact } from './contactType';
import { review } from './reviewType';
import { FAQ } from './faqType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [newsletter, contact, review, FAQ],
};
