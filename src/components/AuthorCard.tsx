import { urlFor } from '@/sanity/lib/image';
import { AUTHORS_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';

const AuthorCard = (props: NonNullable<AUTHORS_QUERYResult>[number]) => {
  const { name, slug, mainImage } = props;
  return (
    <Link
      href={`/author/${slug?.current}`}
      className="flex flex-col gap-2 text-center cursor-pointer"
    >
      <div>
        {mainImage?.asset?.url && (
          <Image
            src={urlFor(mainImage.asset.url)
              .width(200)
              .height(200)
              .format('webp')
              .auto('format')
              .url()}
            width={100}
            height={100}
            priority
            alt={mainImage.alt || ''}
            className="rounded-full mx-auto object-cover"
          />
        )}
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-semibold text-fs-200">{name}</p>
      </div>
    </Link>
  );
};

export default AuthorCard;
