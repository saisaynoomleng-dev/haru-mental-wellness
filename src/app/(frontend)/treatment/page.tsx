import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { TREATMENTS_QUERY } from '@/sanity/lib/queries';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Treatment',
  description:
    'Haru Mental Wellness provides main 6 different types mental treatments',
};

const TreatmentPage = async () => {
  const { data: treatments } = await sanityFetch({ query: TREATMENTS_QUERY });

  if (!treatments) return null;

  return (
    <Bounded>
      <div className="flex flex-col text-center treatment-bg py-5 md:py-10">
        <Title as="h1" size="md" className="uppercase">
          Let&apos;s take control of your own{' '}
          <span className="font-serif text-brand-orange">health</span>
        </Title>
      </div>

      <div className="bg-brand-light-gray flex flex-col text-brand-dark-gray py-10 md:py-16 justify-center items-center add-padding gap-3 md:gap-5">
        <Title as="h2" size="sm" className="uppercase">
          Our <span className="font-serif">treatments</span>
        </Title>

        <p className="text-fs-200 text-center max-w-2/3 md:max-w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quo
          excepturi dignissimos voluptates atque enim soluta debitis
          reprehenderit assumenda nemo ullam aliquam possimus inventore eaque,
          suscipit consequatur deserunt dolore laborum pariatur aut incidunt?
          Nemo voluptate odio eveniet, totam distinctio dicta sed eius
          doloremque? Quibusdam architecto unde tempora veniam ea aliquid.
        </p>

        <div className="grid md:grid-cols-4 gap-3 md:gap-12 place-content-center">
          {treatments.map((t) => (
            <Link
              href={`/treatment/${t.slug?.current}`}
              key={t.slug?.current}
              className="flex flex-row md:flex-col gap-5 group"
            >
              <div>
                {t.mainImage?.asset?.url && (
                  <Image
                    alt=""
                    width={200}
                    height={200}
                    src={urlFor(t.mainImage.asset.url)
                      .width(500)
                      .height(500)
                      .format('webp')
                      .auto('format')
                      .quality(80)
                      .url()}
                    priority
                    className="rounded-full mx-auto group-hover:scale-[1.1] transition-transform duration-300"
                  />
                )}
              </div>
              <p className="uppercase group-hover:text-brand-orange text-center text-brand-dark-gray place-self-center">
                {t.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default TreatmentPage;
