import clsx from 'clsx';

const Banner = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-2 md:grid-cols-6 place-items-center gap-2 gap-y-10 my-5',
        className,
      )}
    >
      <img src="/brands/brand-1.svg" />
      <img src="/brands/brand-2.svg" />
      <img src="/brands/brand-3.svg" />
      <img src="/brands/brand-4.svg" />
      <img src="/brands/brand-5.svg" />
      <img src="/brands/brand-6.svg" />
    </div>
  );
};

export default Banner;
