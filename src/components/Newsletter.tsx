'use client';

import Form from 'next/form';
import { Input } from './ui/input';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Button } from './ui/button';
import { useActionState } from 'react';
import { submitNewsletter } from '@/lib/actions';
import clsx from 'clsx';

const formInitialState = {
  status: '',
  message: '',
  field: '',
};

const Newsletter = () => {
  const [state, actionFunction, isPending] = useActionState(
    submitNewsletter,
    formInitialState,
  );
  return (
    <Form
      action={actionFunction}
      className="flex flex-col md:flex-row gap-5 justify-center items-center text-left"
    >
      <div className="space-y-2">
        <label
          htmlFor="name"
          className='after:content-["*"] after:ml-0.5 after:text-red-500'
        >
          Full Name
        </label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          autoComplete="off"
          required
        />
        {state.status === 'error' && state.field === 'name' && (
          <span className="text-red-500 italic text-fs-200">
            {state.message}
          </span>
        )}
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className='after:content-["*"] after:ml-0.5 after:text-red-500'
        >
          Email
        </label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          autoComplete="off"
        />
        {state.status === 'error' && state.field === 'email' && (
          <span className="text-red-500 italic text-fs-200">
            {state.message}
          </span>
        )}
      </div>
      <Button
        type="submit"
        className={clsx('h-12', isPending && 'bg-brand-dark-gray')}
        disabled={isPending}
      >
        <FaLongArrowAltRight />
      </Button>
    </Form>
  );
};

export default Newsletter;
