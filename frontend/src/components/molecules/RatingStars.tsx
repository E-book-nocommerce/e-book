import React from 'react';
import Star from '../atoms/Star';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const clampedRating = Math.min(Math.max(rating, 0), 5);

  const stars = [...Array(5)].map((_, index) => {
    const starRating = clampedRating - index;
    let progress = 0;

    if (starRating >= 1) {
      progress = 1;
    } else if (starRating > 0) {
      progress = starRating;
    }

    return <Star key={index} progress={progress} />;
  });

  return <div className="flex">{stars}</div>;
};

export default StarRating;
