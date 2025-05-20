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

export const LATEST_BLOGS_QUERY = defineQuery(`*[_type == 'blog'
  && defined(slug.current)
  && (!defined($tags) || category == $tags)]{
   title,
   author->{
     name
   },
   mainImage{
     asset->{url},
     alt
   },
   category,
   slug,
   publishedAt
  } | order(publishedAt desc)`);

export const OLDEST_BLOGS_QUERY = defineQuery(`*[_type == 'blog'
  && defined(slug.current)
  && (!defined($tags) || category == $tags)]{
   title,
   author->{
     name
   },
   mainImage{
     asset->{url},
     alt
   },
   category,
   slug,
   publishedAt
  } | order(publishedAt)`);

export const BLOG_QUERY = defineQuery(`*[_type == 'blog'
  && slug.current == $slug][0]{
   title,
   author->{
     name,
     slug,
     mainImage{
      asset->{url},
      alt
     }
   },
   category,
   slug,
   publishedAt,
   subtitle,
   desc,
  }`);

export const AUTHORS_QUERY = defineQuery(`*[_type == 'author'
  && defined(slug.current)]{
   name,
   slug,
   mainImage{
     asset->{url},
     alt
   }
  } | order(name)`);

export const AUTHOR_QUERY = defineQuery(`*[_type == 'author'
  && slug.current == $slug][0]{
   name,
   slug,
   book[]{
    title,
    url,
    mainImage{
      asset->{url},
      alt
    }
  },
   mainImage{
     asset->{url},
     alt
   },
   links[]{
    title,
    url
   },
   bio
  }`);

export const REVIEWS_QUERY = defineQuery(`*[_type == 'review'
  && defined(slug.current)]{
   username,
   slug,
   role,
   rating,
   desc
  }`);

export const THERAPISTS_QUERY = defineQuery(`*[_type == 'therapist'
  && defined(slug.current)
  && (
    !defined($search) 
    || name match $search 
    || location.cities[] match $search
    || location.address match $search
    || location.zips[] match $search
    || location.counties[] match $search
    )
  && (!defined($session) || session match $session)
  &&  (!defined($insurance) || insurance match $insurance)
  && (!defined($expertise) || expertise match $expertise)
  && (!defined($ageSpecific) || ageSpecific match $ageSpecific)
  ]{
   name,
   slug,
   mainImage{
     asset->{url},
     alt
   },
   bio,
   session,
   role,
  } | order(name desc)`);

export const THERAPIST_QUERY = defineQuery(`*[_type == 'therapist'
  && slug.current == $slug][0]{
   name,
   slug,
   role,
   verification,
   bio,
   session,
   quote,
   price,
   paymentMethod,
   insurance,
   education,
   experience,
   credential,
   specialties,
   expertise,
   ageSpecific,
   participant,
   communities,
   therapy[]->{
     name,
     desc
   },
   location{
     address,
     cities,
     phone,
     counties,
     zips
   },
   mainImage{
     ...,
     asset->{url}
   }
  }`);

export const APPOINTMENT_THERAPISTS_QUERY = defineQuery(`*[_type == 'therapist'
    && defined(slug.current)]{
     name,
     _id,
     role,
     slug,
     mainImage{
       ...,
       asset->{url}
     }
    } | order(name desc)`);
