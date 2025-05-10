import { defineQuery } from 'next-sanity';

export const FAQS_QUERY = defineQuery(`*[_type == 'FAQ'
    && defined(slug.current)][0]{
     faqs[]{
       question,
       answer
     }
    }`);
