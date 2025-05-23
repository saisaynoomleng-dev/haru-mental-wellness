'use client';

import Form from 'next/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from './ui/select';
import { APPOINTMENT_THERAPISTS_QUERYResult } from '@/sanity/types';
import { SelectTrigger, SelectValue } from '@radix-ui/react-select';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useActionState, useEffect, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { submitAppointment } from '@/lib/actions';
import { Button } from './ui/button';
import clsx from 'clsx';
import { toast } from 'sonner';
import { formatDate } from '@/lib/utils';

const LABEL_CLASS = `after:content-['*'] after:ml-0.5 after:text-red-500`;

const initialFormState = {
  status: '',
  message: '',
  field: '',
};

const SERVICES = [
  { title: 'Depression', value: 'depression' },
  { title: 'Family Conflict', value: 'family-conflict' },
  { title: 'Relationships', value: 'relationships' },
  { title: 'Stress', value: 'stress' },
  { title: 'Life Changes', value: 'life-changes' },
];

const AppointmentForm = ({
  therapists,
}: {
  therapists: NonNullable<APPOINTMENT_THERAPISTS_QUERYResult>;
}) => {
  const allTherapists = therapists;
  const [state, actionFunction, isPending] = useActionState(
    submitAppointment,
    initialFormState,
  );
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    if (state.status === 'success') {
      toast('Appointment created successfully', {
        description: `${date && formatDate(date.toISOString())}`,
      });
    }
  }, [state, date]);

  return (
    <Form
      action={actionFunction}
      className=" grid md:grid-cols-2 add-padding py-10 md:py-16 gap-5 md:gap-10"
    >
      <div>
        <label htmlFor="firstname" className={LABEL_CLASS}>
          First Name
        </label>
        <Input
          name="firstname"
          id="firstname"
          type="text"
          placeholder="eg. John"
          autoComplete="firstname"
        />
        {state.status === 'error' && state.field === 'firstname' && (
          <p className="text-red-500 italic text-fs-300">{state.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="lastname" className={LABEL_CLASS}>
          Last Name
        </label>
        <Input
          name="lastname"
          type="text"
          id="lastname"
          placeholder="eg. Doe"
          autoComplete="username"
        />
        {state.status === 'error' && state.field === 'lastname' && (
          <p className="text-red-500 italic text-fs-300">{state.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className={LABEL_CLASS}>
          Email
        </label>
        <Input
          name="email"
          type="email"
          id="email"
          placeholder="Full Name"
          autoComplete="username"
        />
        {state.status === 'error' && state.field === 'email' && (
          <p className="text-red-500 italic text-fs-300">{state.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className={LABEL_CLASS}>
          Phone
        </label>
        <Input
          name="phone"
          type="text"
          id="phone"
          placeholder="eg.+123 456 7890"
          autoComplete="phone"
        />
        {state.status === 'error' && state.field === 'phone' && (
          <p className="text-red-500 italic text-fs-300">{state.message}</p>
        )}
      </div>

      <div className=" flex flex-col gap-2 col-span-full">
        <label htmlFor="therapist" className={LABEL_CLASS}>
          Select a preffered Therapist
        </label>
        <Select name="therapist" required>
          <SelectTrigger className="border rounded-sm border-brand-cream px-5 text-fs-300 py-2">
            <SelectValue placeholder="Select a Therapist" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Therapists</SelectLabel>
              {allTherapists.map((therapist) => (
                <SelectItem
                  key={therapist.slug?.current}
                  value={therapist._id || ''}
                  className="flex gap-2 bg-brand-cream"
                >
                  <div className="w-fit inline">
                    {therapist.mainImage?.asset?.url && (
                      <Image
                        src={urlFor(therapist.mainImage.asset.url)
                          .width(100)
                          .height(100)
                          .format('webp')
                          .url()}
                        width={100}
                        height={100}
                        alt={therapist.mainImage.alt || ''}
                        priority
                        className="max-w-[50px] rounded-lg mx-auto"
                      />
                    )}
                  </div>
                  <div className="inline-flex flex-col gap-1">
                    <span className="font-semibold">{therapist.name}</span>
                    <span>{therapist.role}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {state.status === 'error' && state.field === 'therapist' && (
          <p className="text-red-500 italic text-fs-300">{state.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2 text-fs-300">
        <label htmlFor="therapist" className={LABEL_CLASS}>
          Select a Date
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <button className="border border-brand-cream p-2 flex gap-2 rounded-sm">
              <CalendarIcon />
              {date ? format(date, 'PPP') : <span>Pick a date</span>}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Input
              type="date"
              name="date"
              onChange={(e) => {
                const selectedDate = e.target.valueAsDate;
                setDate(selectedDate ?? undefined);
              }}
            />
          </PopoverContent>
        </Popover>
        {state.status === 'error' && state.field === 'date' && (
          <p className="text-red-500 italic text-fs-300">{state.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="therapist" className={LABEL_CLASS}>
          Select a service
        </label>
        <Select name="service" required>
          <SelectTrigger className="border rounded-sm border-brand-cream px-5 text-fs-300 py-2">
            <SelectValue placeholder="Select a Service" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectGroup>
              <SelectLabel>Services</SelectLabel>
              {SERVICES.map((service) => (
                <SelectItem
                  key={service.value}
                  value={service.value}
                  className="font-semibold"
                >
                  {service.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {state.status === 'error' && state.field === 'service' && (
          <p className="text-red-500 italic text-fs-300">{state.message}</p>
        )}
      </div>

      <div className="col-span-full">
        <label htmlFor="intro" className={LABEL_CLASS}>
          Intro Message
        </label>
        <Textarea
          name="intro"
          placeholder="Breifly describe your condition..."
          id="intro"
          className="h-32"
        />
        {state.status === 'error' && state.field === 'intro' && (
          <p className="text-red-500 italic text-fs-300">{state.message}</p>
        )}
      </div>

      <input
        type="hidden"
        name="date"
        value={date ? format(date, 'yyyy-MM-dd') : ''}
      />

      <Button
        disabled={isPending}
        type="submit"
        className={clsx(isPending && 'bg-brand-light-gray')}
      >
        Set an appointment
      </Button>
    </Form>
  );
};

export default AppointmentForm;
