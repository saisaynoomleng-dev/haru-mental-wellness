import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { TREATMENT_QUERY } from '@/sanity/lib/queries';
import { MyPortableTextComponent } from '@/sanity/MyPortableTextComponent';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

const TreatmentDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: treatment } = await sanityFetch({
    query: TREATMENT_QUERY,
    params: await params,
  });

  if (!treatment) {
    notFound();
  }

  return (
    <Bounded>
      <Link className="add-padding block" href="/treatment">
        &larr; Back to All Treatments
      </Link>
      <div className="add-padding">
        <Title as="h1" size="sm" className="capitalize text-brand-white/50">
          {treatment?.title}
        </Title>

        <div className="prose md:prose-lg lg:prose-xl w-full text-brand-white">
          {treatment.desc && (
            <PortableText
              value={treatment.desc}
              components={MyPortableTextComponent}
            />
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default TreatmentDetail;
