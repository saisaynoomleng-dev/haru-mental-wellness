'use server';

import { client } from '@/sanity/lib/client';

export const submitNewsletter = async (
  prevState: { status: string; message: string; field?: string },
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
