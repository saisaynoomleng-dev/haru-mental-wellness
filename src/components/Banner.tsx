import clsx from 'clsx';
import Image from 'next/image';
import { SlideInGroup } from './animations/Effects';

const Banner = ({ className }: { className?: string }) => {
  return (
    <SlideInGroup
      direction="bottom"
      offset={50}
      className={clsx(
        'grid grid-cols-2 md:grid-cols-6 place-items-center gap-2 gap-y-10 my-5',
        className,
      )}
    >
      <Image
        alt=""
        width={100}
        height={100}
        priority
        src="/brands/brand-1.svg"
      />
      <Image
        alt=""
        width={100}
        height={100}
        priority
        src="/brands/brand-2.svg"
      />
      <Image
        alt=""
        width={100}
        height={100}
        priority
        src="/brands/brand-3.svg"
      />
      <Image
        alt=""
        width={100}
        height={100}
        priority
        src="/brands/brand-4.svg"
      />
      <Image
        alt=""
        width={100}
        height={100}
        priority
        src="/brands/brand-5.svg"
      />
      <Image
        alt=""
        width={100}
        height={100}
        priority
        src="/brands/brand-6.svg"
      />
    </SlideInGroup>
  );
};

export default Banner;
