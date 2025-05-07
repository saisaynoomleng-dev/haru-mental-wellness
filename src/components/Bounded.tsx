import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
  as: Comp = 'section',
  children,
  className,
}: BoundedProps) => {
  return (
    <Comp className={clsx('pt-10 px-10 md:pt-16 md:px-14 grid', className)}>
      {children}
    </Comp>
  );
};

export default Bounded;
