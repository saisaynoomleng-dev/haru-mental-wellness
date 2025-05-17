import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { sanityFetch } from '@/sanity/lib/live';
import { REVIEWS_QUERY } from '@/sanity/lib/queries';
import { MyPortableTextComponent } from '@/sanity/MyPortableTextComponent';
import { PortableText } from 'next-sanity';
import { notFound } from 'next/navigation';
import { FaStar } from 'react-icons/fa';

const ReviewPage = async () => {
  const { data: reviews } = await sanityFetch({
    query: REVIEWS_QUERY,
  });

  if (!reviews) notFound();

  return (
    <Bounded>
      <div className="flex flex-col items-center justify-center add-padding gap-y-2 md:gap-y-4">
        <Title as="h1" size="sm">
          Reviews and{' '}
          <span className="font-serif text-brand-orange">Testimonials</span>
        </Title>
        <p className="first-letter:text-fs-600 first-letter:float-start first-letter:mr-2 first-letter:text-brand-orange first-letter:font-serif">
          While we&apos;re confident that our science-based tools and programs
          offer the absolute best quality and value in positive psychology
          professional development opportunities, our website can only do so
          much. Rather than hear it from us, on this page you can learn how our
          products are helping practitioners like you directly from our
          customers.
        </p>
      </div>

      <div className="sm:columns-2 md:columns-3 space-y-4 bg-brand-cream add-padding text-brand-dark-gray py-10">
        {reviews.map((review) => (
          <div
            key={review?.slug?.current}
            className="bg-brand-light-blue/20 flex flex-col gap-x-2 gap-y-3 p-3 h-fit rounded-sm break-inside-avoid"
          >
            <div className="flex flex-col gap-1">
              <p className="font-semibold">{review.username}</p>
              <p className="text-fs-200">{review.role}</p>
              {review.rating && (
                <p className="flex">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <FaStar
                      key={i}
                      className="text-brand-orange"
                      aria-label="rating-star"
                    />
                  ))}
                </p>
              )}
            </div>

            {review.desc ? (
              <div className="prose prose-sm">
                <PortableText value={review.desc} />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default ReviewPage;
