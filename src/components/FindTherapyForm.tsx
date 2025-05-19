'use client';

import Form from 'next/form';
import { Input } from './ui/input';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

const FindTherapyForm = () => {
  return (
    <Form
      action=""
      className="flex items-center justify-center gap-5 max-w-full md:max-w-[80%]"
    >
      <div>
        <label
          htmlFor="search"
          aria-label="search for therapist by name, zipcode or city"
          className="sr-only"
        >
          Search Therapist
        </label>
        <Input
          name="search"
          id="search"
          type="string"
          placeholder="City, Name, Zipcode or County"
        />
      </div>
      <button type="submit" className="cursor-pointer">
        <HiOutlineMagnifyingGlass />
      </button>
    </Form>
  );
};

export default FindTherapyForm;
