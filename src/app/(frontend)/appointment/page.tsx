import AppointmentForm from '@/components/AppointmentForm';
import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { sanityFetch } from '@/sanity/lib/live';
import {
  APPOINTMENT_THERAPISTS_QUERY,
  THERAPISTS_QUERY,
} from '@/sanity/lib/queries';

const AppointmentPage = async () => {
  const { data: therapists } = await sanityFetch({
    query: APPOINTMENT_THERAPISTS_QUERY,
  });

  return (
    <Bounded>
      <div className="flex flex-col gap-3 justify-center items-center text-center">
        <Title as="h1" size="sm" className="uppercase">
          Schedule an{' '}
          <span className="font-serif block text-brand-orange">
            appointment
          </span>{' '}
          with us
        </Title>
      </div>

      <AppointmentForm therapists={therapists} />
    </Bounded>
  );
};

export default AppointmentPage;
