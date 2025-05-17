'use client';

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ name = 'rating', id }: { id: string; name: string }) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  return (
    <div className="flex space-x-1" id={id}>
      {Array.from({ length: 5 }, (_, i) => {
        const starValue = i + 1;
        const isFilled = starValue <= (hover || rating);

        const ratingStar = (value: number) => {
          setRating((prev) => (prev == value ? 0 : value));
        };

        return (
          <button
            key={i}
            type="button"
            className="cursor-pointer"
            onClick={() => ratingStar(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          >
            <FaStar
              className={isFilled ? 'text-brand-orange' : 'text-gray-300'}
            />
          </button>
        );
      })}
      <input type="hidden" name={name} value={rating} />
    </div>
  );
};

export default StarRating;
