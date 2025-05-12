import { defineQuery } from 'next-sanity';

export const FAQS_QUERY = defineQuery(`*[_type == 'FAQ'
    && defined(slug.current)][0]{
     faqs[]{
       question,
       answer
     }
    }`);

export const TREATMENTS_QUERY = defineQuery(`*[_type == 'treatment'
  && defined(slug.current)][0..4]{
   title,
   slug,
   mainImage{
     asset->{url}
   }
  } | order(title)`);

export const TREATMENT_QUERY = defineQuery(`*[_type == 'treatment'
  && slug.current == $slug][0]{
   title,
   mainImage{
     asset->{url}
   },
   desc
  }`);
