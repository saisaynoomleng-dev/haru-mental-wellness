import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { CtaProps } from '@/lib/types';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Cta = ({ href, className }: CtaProps) => {
  return (
    <Button variant="link" className={className}>
      <Link href={href}>
        <span className="sr-only">Learn More</span>
        <FaLongArrowAltRight className="group-hover:-rotate-45 transition-transform duration-300" />
      </Link>
    </Button>
  );
};

export default Cta;
