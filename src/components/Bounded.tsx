import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
  as: Comp = 'section',
  children,
  className,
  variant = 'with-padding',
}: BoundedProps) => {
  return (
    <Comp
      className={clsx(
        'pt-12 md:pt-20 relative z-0 space-y-10 md:space-y-20',
        variant === 'with-padding' && 'px-10 md:px-14',
        variant === 'without-padding' && 'px-0',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Bounded;
