import Bounded from '@/components/Bounded';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { THERAPIST_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FaLocationArrow, FaQuoteLeft, FaStarOfLife } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { TiInputChecked } from 'react-icons/ti';
import { CiMoneyBill } from 'react-icons/ci';
import { formatText } from '@/lib/utils';
import {
  FaLocationPin,
  FaRankingStar,
  FaShieldHeart,
  FaUserGroup,
} from 'react-icons/fa6';
import { TbCertificate } from 'react-icons/tb';
import { HiOutlineUser } from 'react-icons/hi2';
import clsx from 'clsx';
import { RiCommunityFill } from 'react-icons/ri';
import { GiHealthNormal } from 'react-icons/gi';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const TherapistDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: therapist } = await sanityFetch({
    query: THERAPIST_QUERY,
    params: await params,
  });

  if (!therapist) notFound();

  return (
    <Bounded className="add-padding flex flex-col">
      <div className="flex flex-col md:flex-row gap-3">
        {therapist.mainImage?.asset?.url ? (
          <Image
            src={urlFor(therapist.mainImage.asset?.url)
              .width(500)
              .height(500)
              .format('webp')
              .url()}
            width={500}
            height={500}
            alt={therapist.mainImage.alt || ''}
            priority
            className="rounded-sm object-cover max-w-[150px] max-md:mx-auto"
          />
        ) : null}

        <div className="flex flex-col text-fs-300">
          <p className="text-fs-400 text-brand-light-green font-semibold">
            {therapist.name}
          </p>
          <p className="font-medium">{therapist.role}</p>
          {therapist.verification && (
            <p className="flex gap-1 items-center">
              <TiInputChecked className="text-brand-orange" /> Verifed by
              <span className="italic text-brand-orange ">
                {' '}
                Psychology Today
              </span>
            </p>
          )}
        </div>
      </div>

      {therapist.quote && (
        <div className="md:text-fs-500 text-brand-orange">
          <FaQuoteLeft />
          <p className="italic uppercase"> {therapist.quote}</p>
        </div>
      )}

      <div>
        <p>{therapist.bio}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        <p className="font-semibold text-fs-500 col-span-full">Finances</p>

        <div className="md:col-start-1 flex flex-col gap-3">
          <p className="flex gap-1 items-center font-medium text-brand-light-green">
            <MdOutlineAttachMoney />
            Fees
          </p>
          <p className="text-fs-300">
            Individual Sessions ${therapist.price?.toFixed(2)}
          </p>
        </div>

        <div className="md:col-start-2 flex flex-col gap-3">
          <p className="flex gap-1 items-center font-medium text-brand-light-green">
            <FaShieldHeart />
            Insurance
          </p>
          <ul className="list-disc pl-6">
            {therapist.insurance?.map((insurance, i) => (
              <li key={i} className="capitalize text-fs-300">
                {formatText(insurance)}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-start-3 flex flex-col gap-3">
          <p className="flex gap-1 items-center font-medium text-brand-light-green">
            <CiMoneyBill />
            Payment Method
          </p>
          <ul className="list-disc pl-6">
            {therapist.paymentMethod?.map((method, i) => (
              <li key={i} className="capitalize text-fs-300">
                {formatText(method)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <p className="font-semibold text-fs-500 col-span-full">
          Qualifications
        </p>

        <div className="md:col-start-1 flex flex-col gap-3">
          <p className="flex gap-1 items-center font-medium text-brand-light-green">
            <TbCertificate />
            Education and Years In Practice
          </p>
          <ul className="list-disc pl-6 text-fs-300">
            <li>{therapist.experience}</li>
            <li>{therapist.education}</li>
          </ul>
        </div>

        <div className="md:col-start-2 flex flex-col gap-3">
          <p className="flex gap-1 items-center font-medium text-brand-light-green">
            <TbCertificate />
            Additional Credentials
          </p>
          <ul className="list-disc pl-6">
            {therapist.credential?.map((c, i) => (
              <li key={i} className="capitalize text-fs-300">
                {formatText(c)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <p className="font-semibold text-fs-500 col-span-full">
          Specialties and Expertise
        </p>

        <div className="md:col-start-1 flex flex-col gap-3">
          <p className="flex gap-1 items-center font-medium text-brand-light-green">
            <FaRankingStar />
            Top Specialties
          </p>
          <ul className="list-disc pl-6">
            {therapist.specialties?.map((s, i) => (
              <li key={i} className="capitalize text-fs-300">
                {formatText(s)}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-start-2 flex flex-col gap-3">
          <p className="flex gap-1 items-center font-medium text-brand-light-green">
            <FaStarOfLife />
            Expertise
          </p>
          <ul className="list-disc pl-6 columns-2">
            {therapist.expertise?.map((e, i) => (
              <li key={i} className="capitalize text-fs-300">
                {formatText(e)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={clsx(
          'grid gap-3',
          therapist.communities ? 'md:grid-cols-3' : 'md:grid-cols-2',
        )}
      >
        <p className="font-semibold text-fs-500 col-span-full">Client Focus</p>

        <div className="md:col-start-1 flex flex-col gap-3">
          <p className="flex gap-1 items-center font-medium text-brand-light-green">
            <HiOutlineUser />
            Age Specific
          </p>
          <ul className="list-disc pl-6">
            {therapist.ageSpecific?.map((age, i) => (
              <li key={i} className="capitalize text-fs-300">
                {formatText(age)}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-start-2 flex flex-col gap-3">
          <p className="flex gap-1 items-center font-medium text-brand-light-green">
            <FaUserGroup />
            Participants
          </p>
          <ul className="list-disc pl-6">
            {therapist.participant?.map((p, i) => (
              <li key={i} className="capitalize text-fs-300">
                {formatText(p)}
              </li>
            ))}
          </ul>
        </div>

        {therapist.communities && (
          <div className="md:col-start-3 flex flex-col gap-3">
            <p className="flex gap-1 items-center font-medium text-brand-light-green">
              <RiCommunityFill />
              Comuunities
            </p>
            <ul className="list-disc pl-6">
              {therapist.communities?.map((c, i) => (
                <li key={i} className="capitalize text-fs-300">
                  {formatText(c)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="grid gap-3">
        <p className="font-semibold text-fs-500 col-span-full">
          Treatment Approach
        </p>

        <div className="md:col-start-1 flex flex-col gap-3">
          <p className="flex gap-1 items-center font-medium text-brand-light-green">
            <GiHealthNormal />
            Types of Therapy
          </p>

          <ul className="list-disc pl-6 text-fs-300">
            {therapist.therapy?.map((therapy, i) => (
              <li key={i}>
                {therapy.name && therapy.desc ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="underline decoration-dotted underline-offset-4 cursor-pointer ">
                        {therapy.name}
                      </TooltipTrigger>
                      <TooltipContent
                        side="right"
                        sideOffset={-50}
                        className="bg-brand-cream text-brand-dark-gray ml-10 shadow-sm"
                      >
                        <p className="break-after-avoid">{therapy.desc}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <span>{therapy.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <p className="font-semibold text-fs-500 col-span-full">Location</p>

        <div className="md:col-start-1 flex flex-col gap-3 text-fs-300">
          <p className="flex gap-1 items-center font-medium text-brand-light-green text-fs-400">
            <FaLocationPin />
            Primary Location
          </p>
          <p className="flex flex-col">
            <span>{therapist.location?.address}</span>
            <span>{therapist.location?.phone}</span>
          </p>
        </div>

        <div className="md:col-start-2 flex flex-col gap-3">
          <p className="flex gap-1 items-center font-medium text-brand-light-green">
            <FaLocationArrow />
            Nearby Areas
          </p>
          <div className="flex text-fs-300 justify-around">
            <div>
              <p className="flex gap-1 items-center font-medium text-brand-light-green">
                Cities
              </p>
              <ul className="list-disc pl-6">
                {therapist.location?.cities?.map((city, i) => (
                  <li key={i} className="capitalize text-fs-300">
                    {formatText(city)}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="flex gap-1 items-center font-medium text-brand-light-green">
                Counties
              </p>
              <ul className="list-disc pl-6">
                {therapist.location?.counties?.map((county, i) => (
                  <li key={i} className="capitalize text-fs-300">
                    {formatText(county)}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="flex gap-1 items-center font-medium text-brand-light-green">
                Zips
              </p>
              <ul className="list-disc pl-6">
                {therapist.location?.zips?.map((zip, i) => (
                  <li key={i} className="capitalize text-fs-300">
                    {formatText(zip)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default TherapistDetailPage;
