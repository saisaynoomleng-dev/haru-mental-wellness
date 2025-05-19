'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import {
  MdOutlineChair,
  MdOutlineMeetingRoom,
  MdOutlineVideoCall,
} from 'react-icons/md';
import { TherapistFilterProps } from '@/lib/types';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import { Checkbox } from './ui/checkbox';
import clsx from 'clsx';

const EXPERTISE = [
  { title: 'Chronic Illness', value: 'chronic-illness' },
  { title: 'Chronic Pain', value: 'chronic-pain' },
  { title: 'Coping Skills', value: 'Coping Skills' },
  { title: 'Couples', value: 'couples' },
  { title: 'Family Conflict', value: 'family-conflict' },
  { title: 'First Responders', value: 'first-responders' },
  { title: 'grief', value: 'grief' },
  { title: 'Infertility', value: 'infertility' },
  { title: 'LGBTQ+', value: 'lgbtq+' },
  { title: 'Life Coaching', value: 'life-coaching' },
  { title: 'Life Transitions', value: 'life-transitions' },
  { title: 'Mood Disorders', value: 'mood-disorders' },
  {
    title: 'Pregnancy, Prenatal, Postpartum',
    value: 'pregnancy-prenatal-postpartum',
  },
  { title: 'Relationship Issues', value: 'relationship-issues' },
  { title: 'Self Esteem', value: 'self-esteem' },
  { title: 'Sex-Positive, Kink Allied', value: 'sex-positive' },
  { title: 'Spirituality', value: 'spirituality' },
  { title: 'Stress', value: 'stress' },
  { title: 'Suicidal Ideation', value: 'suicidal-ideation' },
  { title: 'Transgender', value: 'transgender' },
  { title: 'Veterans', value: 'veterans' },
  { title: `Women's Issues`, value: 'women-issues' },
  { title: `Addiction`, value: 'addiction' },
  { title: `ADHD`, value: 'adhd' },
  { title: `Anger Management`, value: 'anger-management' },
  { title: `Bipolar Disorder`, value: 'bipolar-disorder' },
  { title: `Body Positivity`, value: 'body-positivity' },
  {
    title: `Borderline Personality (BPD)`,
    value: 'borderline-personality',
  },
];

const INSURANCES = [
  { title: 'Aetna', value: 'aetna' },
  { title: 'BHS | Behavioral Health Systems', value: 'bhs' },
  { title: 'BlueCross And BlueShield', value: 'bluecross' },
  { title: 'Carelon Behavioral Health', value: 'carelon' },
  { title: 'Medicare', value: 'medicare' },
  { title: 'Meritain Health', value: 'meritain' },
  { title: 'New Directions | Lucet', value: 'new-directions-lucet' },
  { title: 'Optum', value: 'Optum' },
  { title: 'United Medical Resources', value: 'umr' },
  { title: 'UnitedHealthcare UHC | UBH', value: 'uhc-ubh' },
  { title: 'ComPsych', value: 'compsych' },
  { title: 'Uprise Health', value: 'uprise-health' },
  { title: 'Out of Network', value: 'out-of-network' },
];

const AGE = [
  { title: 'Preteen', value: 'preteen' },
  { title: 'Teen', value: 'teen' },
  { title: 'Adults', value: 'adults' },
  { title: 'Elders', value: 'elders' },
];

const TherapistFilter = ({
  location,
  session,
  expertise,
  insurance,
  ageSpecific,
  therapist,
  search,
}: TherapistFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSession = (value: string) => {
    const param = new URLSearchParams(searchParams.toString());
    const session = param.get('session');

    if (session && session === value) {
      param.delete('session');
    } else {
      param.set('session', value);
    }

    router.push(`/therapist?${param.toString()}`);
  };

  const handleCheckbox = (key: string, value: string) => {
    const param = new URLSearchParams(searchParams.toString());
    const currentValues = param.getAll(key);

    if (currentValues.includes(value)) {
      const updatedValues = currentValues.filter((v) => v !== value);
      param.delete(key);
      updatedValues.forEach((v) => param.append(key, v));
    } else {
      param.set(key, value);
    }

    router.push(`/therapist?${param.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between text-brand-dark-gray gap-2">
      <div className="flex gap-2 items-center justify-around">
        <Button
          variant="filter"
          className={clsx(
            'flex-1',
            session === 'online' &&
              'border-brand-dark-gray text-brand-dark-gray',
          )}
          onClick={() => handleSession('online')}
        >
          <MdOutlineVideoCall />
        </Button>

        <Button
          variant="filter"
          className={clsx(
            'flex-1',
            session === 'in-person' &&
              'border-brand-dark-gray text-brand-dark-gray',
          )}
          onClick={() => handleSession('in-person')}
        >
          <MdOutlineChair />
        </Button>

        <Button
          variant="filter"
          className={clsx(
            'flex-1',
            'border-2 hover:border-brand-dark-green hover:text-brand-dark-green cursor-pointer flex gap-2 justify-center font-semibold items-center text-center rounded-sm',
            session === 'in-person-online'
              ? 'border-brand-dark-gray text-brand-dark-gray'
              : 'border-brand-light-green text-brand-light-green',
          )}
          onClick={() => handleSession('in-person-online')}
        >
          <MdOutlineMeetingRoom />
        </Button>

        {(location ||
          session ||
          expertise ||
          insurance ||
          ageSpecific ||
          therapist ||
          search) && (
          <Link
            href="/therapist"
            className="bg-red-500 px-2 rounded-sm text-brand-white align-middle py-1"
            aria-label="clear filter"
          >
            Clear Filter
          </Link>
        )}
      </div>

      <Drawer>
        <DrawerTrigger asChild>
          <button className="flex items-center gap-2 border-brand-light-green rounded-sm border-2 px-2 cursor-pointer text-brand-light-green justify-center">
            <HiOutlineAdjustmentsHorizontal />
            <span>All Filters</span>
          </button>
        </DrawerTrigger>
        <DrawerContent className="h-screen overflow-y-scroll">
          <form className="text-brand-dark-gray p-2 divide-y">
            <DrawerHeader className="sr-only">
              <DrawerTitle>All Filters</DrawerTitle>
              <DrawerDescription>
                Set desire filter for filter search therapist
              </DrawerDescription>
            </DrawerHeader>

            {/* expertise */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 pb-3">
              <p className="text-fs-500 font-semibold col-span-full">
                Specialties
              </p>
              {EXPERTISE.map((exp) => (
                <div
                  key={exp.value}
                  className="flex gap-2 items-center text-fs-300"
                >
                  <Checkbox
                    id={exp.value}
                    checked={searchParams
                      .getAll('expertise')
                      .includes(exp.value)}
                    onCheckedChange={() =>
                      handleCheckbox('expertise', exp.value)
                    }
                  />
                  <label htmlFor={exp.value}>{exp.title}</label>
                </div>
              ))}
            </div>

            {/* insurance */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 pb-3">
              <p className="text-fs-500 font-semibold col-span-full">
                Insurance
              </p>
              {INSURANCES.map((insurance) => (
                <div
                  key={insurance.value}
                  className="flex gap-2 items-center text-fs-300"
                >
                  <Checkbox
                    id={insurance.value}
                    checked={searchParams
                      .getAll('insurance')
                      .includes(insurance.value)}
                    onCheckedChange={() =>
                      handleCheckbox('insurance', insurance.value)
                    }
                  />
                  <label htmlFor={insurance.value}>{insurance.title}</label>
                </div>
              ))}
            </div>

            {/* session */}
            <div className="grid sm:grid-cols-3 gap-2 pb-3">
              <p className="text-fs-500 font-semibold col-span-full">
                Session Availablity
              </p>
              <button
                className={clsx(
                  'border-2 hover:border-brand-dark-green hover:text-brand-dark-green cursor-pointer flex gap-2 justify-center font-semibold items-center text-center rounded-sm',
                  session === 'online'
                    ? 'border-brand-dark-gray text-brand-dark-gray'
                    : 'border-brand-light-green text-brand-light-green',
                )}
                onClick={() => handleSession('online')}
              >
                <MdOutlineVideoCall />
                <span>Online</span>
              </button>

              <button
                className={clsx(
                  'border-2 hover:border-brand-dark-green hover:text-brand-dark-green cursor-pointer flex gap-2 justify-center font-semibold items-center text-center rounded-sm',
                  session === 'in-person'
                    ? 'border-brand-dark-gray text-brand-dark-gray'
                    : 'border-brand-light-green text-brand-light-green',
                )}
                onClick={() => handleSession('in-person')}
              >
                <MdOutlineChair />
                <span>In Person</span>
              </button>

              <button
                className={clsx(
                  'border-2 hover:border-brand-dark-green hover:text-brand-dark-green cursor-pointer flex gap-2 justify-center font-semibold items-center text-center rounded-sm',
                  session === 'in-person-online'
                    ? 'border-brand-dark-gray text-brand-dark-gray'
                    : 'border-brand-light-green text-brand-light-green',
                )}
                onClick={() => handleSession('in-person-online')}
              >
                <MdOutlineChair />
                <MdOutlineVideoCall />
                <span>In Person & Online</span>
              </button>
            </div>

            {/* age specific */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 pb-3">
              <p className="text-fs-500 font-semibold col-span-full">
                Age Groups
              </p>
              {AGE.map((age) => (
                <div
                  key={age.value}
                  className="flex gap-2 items-center text-fs-300"
                >
                  <Checkbox
                    id={age.value}
                    checked={searchParams
                      .getAll('ageSpecific')
                      .includes(age.value)}
                    onCheckedChange={() =>
                      handleCheckbox('ageSpecific', age.value)
                    }
                  />
                  <label htmlFor={age.value}>{age.title}</label>
                </div>
              ))}
            </div>

            <DrawerFooter>
              {(location ||
                session ||
                expertise ||
                insurance ||
                ageSpecific ||
                therapist ||
                search) && (
                <Link
                  href="/therapist"
                  className="bg-red-500 px-2 rounded-sm text-brand-white align-middle py-1 text-center"
                  aria-label="clear filter"
                >
                  Clear Filter
                </Link>
              )}
              <DrawerClose asChild>
                <Button type="button">Apply Filter</Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default TherapistFilter;
