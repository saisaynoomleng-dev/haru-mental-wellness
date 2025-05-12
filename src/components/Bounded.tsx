import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
  as: Comp = 'section',
  children,
  className,
}: BoundedProps) => {
  return (
    <Comp
      className={clsx(
        'pt-12 md:pt-20 relative z-0 space-y-10 md:space-y-20 mt-5 py-10',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Bounded;
