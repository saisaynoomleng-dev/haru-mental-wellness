'use client';

import Form from 'next/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useActionState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import clsx from 'clsx';
import { submitContactForm } from '@/lib/actions';

const LABEL_CLASS = 'after:content-["*"] after:ml-1 after:text-red-500';

const initialFormState = {
  status: '',
  message: '',
  field: '',
};

const ContactForm = () => {
  const [state, actionFunction, isPending] = useActionState(
    submitContactForm,
    initialFormState,
  );

  return (
    <Form action={actionFunction} className="flex flex-col gap-5 py-2">
      <div className="space-y-3 md:space-y-5">
        <label htmlFor="name" className={LABEL_CLASS}>
          Full Name
        </label>
        <Input id="name" type="text" name="name" autoComplete="name" />
        {state?.status === 'error' && state.field === 'name' && (
          <p className="text-fs-200 text-red-500 italic">{state.message}</p>
        )}
      </div>

      <div className="space-y-3 md:space-y-5">
        <label htmlFor="email" className={LABEL_CLASS}>
          Email Address
        </label>
        <Input id="email" type="text" name="email" autoComplete="username" />
        {state?.status === 'error' && state.field === 'email' && (
          <p className="text-fs-200 text-red-500 italic">{state.message}</p>
        )}
      </div>

      <div className="space-y-3 md:space-y-5">
        <label htmlFor="comment" className={LABEL_CLASS}>
          Comments
        </label>
        <Textarea name="comment" id="comment" className="h-30" />
        {state?.status === 'error' && state.field === 'comment' && (
          <p className="text-fs-200 text-red-500 italic">{state.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className={clsx('h-12', isPending && 'bg-brand-dark-gray')}
        disabled={isPending}
      >
        {isPending ? 'Submitting...' : <FaLongArrowAltRight />}
      </Button>
    </Form>
  );
};

export default ContactForm;
