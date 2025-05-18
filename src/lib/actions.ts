'use server';

import { client } from '@/sanity/lib/client';
import { PrevFormStateProps } from './types';
import { toSlug } from './utils';

export const submitNewsletter = async (
  prevState: PrevFormStateProps,
  formData: FormData,
): Promise<{ status: string; message: string; field?: string }> => {
  const name = formData.get('name')?.toString().trim() as string;
  const email = formData.get('email')?.toString().trim() as string;
  const reg_email = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

  if (!email) {
    return {
      status: 'error',
      message: 'Email field cannot be empty',
      field: 'email',
    };
  }

  if (!name) {
    return {
      status: 'error',
      message: 'Name field cannot be empty',
      field: 'name',
    };
  }

  if (!reg_email.test(email)) {
    return {
      status: 'error',
      message: 'Must be a valid email address',
      field: 'email',
    };
  }

  try {
    await client.create({
      _type: 'newsletter',
      name,
      email,
      _createdAt: new Date().toISOString(),
    });

    return {
      status: 'success',
      message: 'Thank you for your Subscription!',
    };
  } catch (err) {
    console.error(err);

    return {
      status: 'error',
      message: 'Something went wrong, please try again!',
    };
  }
};

export const submitContactForm = async (
  prevState: PrevFormStateProps,
  formData: FormData,
): Promise<{ status: string; message: string; field?: string }> => {
  const name = formData.get('name')?.toString()?.trim() || '';
  const email = formData.get('email')?.toString()?.trim() || '';
  const comment = formData.get('comment')?.toString() || '';
  const reg_email = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

  if (!name) {
    return {
      status: 'error',
      message: 'Name field cannot be empty',
      field: 'name',
    };
  }

  if (!email) {
    return {
      status: 'error',
      message: 'Email field cannot be empty',
      field: 'email',
    };
  }

  if (!comment) {
    return {
      status: 'error',
      message: 'Comment field must have at least 10 characters',
      field: 'comment',
    };
  }

  if (!reg_email.test(email)) {
    return {
      status: 'error',
      message: 'Must be a valid email address',
      field: 'email',
    };
  }

  try {
    await client.create({
      _type: 'contact',
      name,
      email,
      comment,
      _createdAt: new Date().toISOString,
    });

    return {
      status: 'success',
      message: `Thank you for contacting us! We'll be in touch shorly!`,
    };
  } catch (err) {
    console.error(err);

    return {
      status: 'error',
      message: 'Something went wrong. Please Try again later!',
    };
  }
};

export const submitReview = async (
  prevState: PrevFormStateProps,
  formData: FormData,
): Promise<{ status: string; message: string; field?: string }> => {
  const username = formData.get('username')?.toString().trim() || '';
  const role = formData.get('role')?.toString().trim() || '';
  const rating = formData.get('rating') || 0;
  const desc = formData.get('desc');

  await client.create({
    _type: 'review',
    username,
    slug: {
      _type: 'slug',
      current: toSlug(username),
    },
    role,
    rating: Number(rating),
    desc,
  });

  return {
    status: 'success',
    message: 'Thank you for your Review!',
  };
};
