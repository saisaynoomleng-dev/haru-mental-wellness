import Bounded from '@/components/Bounded';
import FindTherapyForm from '@/components/FindTherapyForm';
import TherapistCard from '@/components/TherapistCard';
import TherapistFilter from '@/components/TherapistFilter';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { sanityFetch } from '@/sanity/lib/live';
import { THERAPISTS_QUERY } from '@/sanity/lib/queries';
import clsx from 'clsx';
import Link from 'next/link';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const TherapistPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    session?: string;
    expertise?: string;
    insurance?: string;
    ageSpecific?: string;
    search?: string;
    page?: string;
  }>;
}) => {
  const { session, expertise, insurance, ageSpecific, search, page } =
    await searchParams;

  const params = {
    session: session || null,
    expertise: expertise || null,
    insurance: insurance ? ([] as string[]).concat(insurance) : null,
    ageSpecific: ageSpecific || null,
    search: search || null,
  };

  const { data: allTherapists } = await sanityFetch({
    query: THERAPISTS_QUERY,
    params: params,
  });

  const currentPage = parseInt(page || '1', 10);
  const therapistPerPage = 5;
  const totalTherapists = allTherapists.length;
  const totalPages = Math.ceil(totalTherapists / therapistPerPage);

  const startIndex = (currentPage - 1) * therapistPerPage;
  const endIndex = startIndex + therapistPerPage;
  const therapists = allTherapists.slice(startIndex, endIndex);

  return (
    <Bounded>
      <div className="add-padding flex flex-col gap-5 md:gap-10 items-center">
        <Title as="h1" size="sm" className="uppercase text-center">
          Find Your{' '}
          <span className="font-serif text-brand-orange"> Therapist</span>
        </Title>

        <FindTherapyForm />
      </div>

      {/* filter */}

      <div className="bg-brand-cream flex flex-col gap-3 md:gap-5 add-padding py-10 md:py-14 divide-y-[1px] divide-brand-dark-gray">
        <div className="pb-10">
          <TherapistFilter
            session={session}
            expertise={expertise}
            insurance={insurance}
            ageSpecific={ageSpecific}
            search={search}
          />
        </div>
        {therapists.map((therapist) => (
          <TherapistCard key={therapist.slug?.current} {...therapist} />
        ))}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3">
            <Button variant="pagination" disabled={currentPage == 1}>
              <Link
                className={clsx(
                  'px-2 flex gap-2 items-center text-brand-dark-green',
                  currentPage == 1 && 'text-brand-dark-green/20',
                )}
                href={{
                  pathname: '/therapist',
                  query: {
                    ...(expertise && { expertise }),
                    ...(session && { session }),
                    ...(insurance && { insurance }),
                    ...(ageSpecific && { ageSpecific }),
                    ...(search && { search }),
                    page: currentPage - 1,
                  },
                }}
              >
                <FaAngleLeft /> Prev
              </Link>
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <Link
                  href={{
                    pathname: '/therapist',
                    query: {
                      ...(expertise && { expertise }),
                      ...(session && { session }),
                      ...(insurance && { insurance }),
                      ...(ageSpecific && { ageSpecific }),
                      ...(search && { search }),
                      page: pageNumber,
                    },
                  }}
                  key={pageNumber}
                  className={clsx(
                    'px-2 bg-brand-light-green',
                    currentPage == pageNumber && 'text-brand-dark-gray',
                  )}
                >
                  {pageNumber}
                </Link>
              ),
            )}

            <Button variant="pagination" disabled={currentPage == totalPages}>
              <Link
                className={clsx(
                  'px-2 flex gap-2 items-center text-brand-dark-green',
                  currentPage == totalPages && 'text-brand-dark-green/20',
                )}
                href={{
                  pathname: '/therapist',
                  query: {
                    ...(expertise && { expertise }),
                    ...(session && { session }),
                    ...(insurance && { insurance }),
                    ...(ageSpecific && { ageSpecific }),
                    ...(search && { search }),
                    page: currentPage + 1,
                  },
                }}
              >
                Next <FaAngleRight />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default TherapistPage;
