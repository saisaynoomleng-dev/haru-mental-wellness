import { urlFor } from '@/sanity/lib/image';
import { THERAPISTS_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdChair, MdOutlineVideoCall } from 'react-icons/md';
import { Button } from './ui/button';

const TherapistCard = (props: NonNullable<THERAPISTS_QUERYResult>[number]) => {
  const { name, slug, mainImage, bio, session, role } = props;

  const cutText = (text: string) => {
    return text.split(' ').join(' ').slice(0, 150).padEnd(153, '.');
  };

  const availableSession = (session: string) => {
    if (session == 'in-person') {
      return (
        <span className="flex gap-1 items-center">
          <span>
            <MdChair />
          </span>{' '}
          Available In Person Only
        </span>
      );
    } else if (session == 'online') {
      return (
        <span className="flex gap-1 items-center">
          <span>
            <MdOutlineVideoCall />{' '}
          </span>
          Available Online Only
        </span>
      );
    }

    return (
      <span className="flex gap-1 items-center">
        <span>
          <MdChair />
        </span>{' '}
        <span>
          <MdOutlineVideoCall />{' '}
        </span>
        Available both online & in person
      </span>
    );
  };

  return (
    <Link
      href={`/therapist/${slug?.current}`}
      className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] auto-rows-auto gap-2 pb-4 text-brand-dark-green"
    >
      <div className="col-start-1 md:row-span-2 overflow-hidden">
        {mainImage?.asset?.url ? (
          <Image
            src={urlFor(mainImage.asset.url)
              .width(500)
              .height(500)
              .format('webp')
              .url()}
            width={100}
            height={100}
            alt={mainImage.alt || ''}
            priority
            className="object-cover rounded-sm min-w-fit"
          />
        ) : null}
      </div>

      <div className="col-start-2 text-fs-300 md:row-span-1">
        <p className="font-semibold text-fs-500 text-brand-dark-blue">{name}</p>
        <p className="font-medium">{role}</p>
        <p className="text-fs-200">{session && availableSession(session)}</p>
      </div>

      <div className="col-start-1 col-span-full row-start-2 md:col-start-2 md:col-span-1">
        {bio && <p className="text-fs-200">{cutText(bio)}</p>}
      </div>

      <div className="col-start-1 col-span-full md:col-start-3 place-self-end md:row-span-2">
        <Button>View</Button>
      </div>
    </Link>
  );
};

export default TherapistCard;
