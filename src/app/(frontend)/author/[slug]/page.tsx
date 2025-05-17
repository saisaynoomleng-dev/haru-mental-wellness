import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { AUTHOR_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const AuthorDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: author } = await sanityFetch({
    query: AUTHOR_QUERY,
    params: await params,
  });

  if (!author) {
    notFound();
  }

  return (
    <Bounded className="grid md:grid-cols-[auto_1fr] add-padding gap-5 md:gap-8">
      <div className="flex flex-col gap-3 md:gap-5 md:max-w-[300px]">
        <div className="p-3">
          {author?.mainImage?.asset?.url && (
            <Image
              src={urlFor(author.mainImage.asset.url)
                .width(300)
                .height(300)
                .format('webp')
                .auto('format')
                .url()}
              width={200}
              height={200}
              alt={author.mainImage.alt || ''}
              priority
              className="rounded-full mx-auto !max-w-[200px]"
            />
          )}
        </div>

        <div className="flex flex-col gap-3 md:gap-5 px-3  text-brand-cream relative text-fs-300">
          <p className="font-semibold">{author.name}</p>

          <div>
            <p className="font-semibold">Links</p>
            <ul className="list-disc ml-5">
              {author.links?.map((link) => (
                <li key={link.title}>
                  <Link href={`${link.url}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:gap-5">
        <Title as="h1" size="sm">
          {author.name}
        </Title>

        <div>
          <p className="font-semibold text-brand-cream">About</p>
          <p className="text-fs-300">{author.bio}</p>
        </div>

        {author.book && (
          <div className="flex flex-col gap-3 md:gap-5">
            <p className="font-semibold text-brand-cream">
              Books From the Author
            </p>
            <div className="flex gap-3">
              {author.book.map((book) => (
                <Link
                  href={`${book.url}`}
                  key={book.title}
                  className="w-full flex-1 group"
                >
                  <div className="overflow-hidden">
                    {book.mainImage?.asset?.url && (
                      <Image
                        src={urlFor(book.mainImage.asset.url)
                          .width(300)
                          .height(400)
                          .format('webp')
                          .url()}
                        width={300}
                        height={400}
                        alt={book.mainImage.alt || ''}
                        priority
                        className="object-cover mx-auto min-h-full min-w-full group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    )}
                  </div>
                  <p className="text-fs-200 group-hover:text-brand-light-green">
                    {book.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default AuthorDetailPage;
