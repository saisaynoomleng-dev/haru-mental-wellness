import React from 'react';
import Title from './Title';
import Newsletter from './Newsletter';

const NewsSubscription = () => {
  return (
    <div className="flex  gap-5 md:gap-10 flex-col item-center justify-center text-center py-10">
      <Title as="h2" size="md" className="uppercase">
        Want to know How we help <span className="wavy-em">people</span>?
      </Title>
      <p>
        Join our{' '}
        <span className="text-brand-orange font-bold"> Newsletter</span>
      </p>

      <Newsletter />
    </div>
  );
};

export default NewsSubscription;
