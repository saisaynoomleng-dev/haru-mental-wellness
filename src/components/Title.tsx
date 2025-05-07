import { TitleProps } from '@/lib/types';
import clsx from 'clsx';

const Title = ({ as: Comp = 'h1', children, className, size }: TitleProps) => {
  return (
    <Comp
      className={clsx(
        'font-medium leading-[1.1] text-balance',
        size === 'lg' && 'text-fs-700 md:text-fs-800 lg:text-fs-900',
        size === 'md' && 'text-fs-600 md:text-fs-700 lg:text-fs-800',
        size === 'sm' && 'text-fs-500 md:text-fs-600 lg:text-fs-700',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Title;
