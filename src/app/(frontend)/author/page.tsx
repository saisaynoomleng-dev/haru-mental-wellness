import AuthorCard from '@/components/AuthorCard';
import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { sanityFetch } from '@/sanity/lib/live';
import { AUTHORS_QUERY } from '@/sanity/lib/queries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authors',
};

const AuthorPage = async () => {
  const { data: authors } = await sanityFetch({ query: AUTHORS_QUERY });

  return (
    <Bounded>
      <div className="flex justify-center items-center add-padding">
        <Title as="h1" size="sm">
          Meet our{' '}
          <span className="font-serif text-brand-orange"> Contributors</span>
        </Title>
      </div>

      <div className="bg-brand-cream grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 add-padding text-brand-dark-gray px-5 md:px-10 py-8 md:py-16">
        {authors.map((author) => (
          <AuthorCard key={author.slug?.current} {...author} />
        ))}
      </div>
    </Bounded>
  );
};

export default AuthorPage;
