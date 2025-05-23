import Bounded from '@/components/Bounded';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <Bounded className="py-10 flex flex-col gap-5 justify-center items-center">
      The URL you are looking for is not found.
      <div className="flex justify-center items-center">
        <p className="text-fs-800 text-brand-light-green font-bold text-center">
          404...
        </p>
      </div>
      <Button>
        <Link href="/">Back to Homepage</Link>
      </Button>
    </Bounded>
  );
}
