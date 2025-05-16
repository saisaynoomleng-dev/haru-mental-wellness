import { BlogCardProps } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { BLOGS_QUERYResult } from '@/sanity/types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogCard = ({
  href,
  className,
  ...props
}: BlogCardProps & NonNullable<BLOGS_QUERYResult>[number]) => {
  const { mainImage, title, author, category, publishedAt } = props;
  return (
    <Link
      href={href}
      className={clsx('flex flex-col gap-y-y-3 md:gap-y-5 group')}
    >
      <div className="overflow-hidden">
        {mainImage?.asset?.url && (
          <Image
            alt={mainImage.alt || ''}
            width={300}
            height={300}
            src={urlFor(mainImage.asset.url)
              .width(500)
              .height(500)
              .format('webp')
              .auto('format')
              .quality(90)
              .url()}
            priority
            className="object-cover mx-auto group-hover:scale-105 transition-transform duration-300 min-w-full"
          />
        )}
      </div>

      <div>
        <p className="text-fs-200 flex justify-between ">
          <span className="text-brand-light-green font-medium">{category}</span>
          <span>{publishedAt && formatDate(publishedAt)}</span>
        </p>
        <p className="font-medium">{title}</p>
        <p className="font-semibold text-fs-200">
          by{' '}
          <span className="italic text-brand-light-green">{author?.name}</span>
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
