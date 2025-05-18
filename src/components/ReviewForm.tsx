'use client';

import Form from 'next/form';
import Title from './Title';
import { Input } from './ui/input';
import { Button } from './ui/button';
import StarRating from './StarRating';
import { submitReview } from '@/lib/actions';
import { useActionState } from 'react';
import { Textarea } from './ui/textarea';
import clsx from 'clsx';

const initialFormState = {
  status: '',
  message: '',
  field: '',
};

const ReviewForm = () => {
  const [state, actionFunction, isPending] = useActionState(
    submitReview,
    initialFormState,
  );
  return (
    <section className="flex flex-col px-5 gap-8 md:gap-12 py-10">
      <Title as="h3" size="md" className="uppercase text-center">
        Write Us a <span className="wavy-em">Review</span>
      </Title>
      <Form action={actionFunction} className="flex flex-col gap-3">
        <div className="space-y-3">
          <label htmlFor="star" className="block">
            Rating
          </label>
          <StarRating name="rating" id="star" />
        </div>

        <div className="space-y-3 ">
          <label
            htmlFor="username"
            className='after:content-["*"] after:ml-0.5 after:text-red-500 block'
          >
            User Name
          </label>
          <Input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
          />
        </div>

        <div className="space-y-3 ">
          <label
            htmlFor="role"
            className='after:content-["*"] after:ml-0.5 after:text-red-500 block'
          >
            Role
          </label>
          <Input type="text" name="role" id="role" />
        </div>

        <div className="space-y-3">
          <label
            htmlFor="desc"
            className='after:content-["*"] after:ml-0.5 after:text-red-500 block'
          >
            Comment
          </label>
          <Textarea name="desc" id="desc" />
        </div>

        <Button
          type="submit"
          className={clsx(
            'text-brand-white hover:text-brand-dark-gray',
            isPending && 'bg-brand-dark-gray/20',
          )}
          disabled={isPending}
        >
          Submit Review
        </Button>
      </Form>
    </section>
  );
};

export default ReviewForm;
