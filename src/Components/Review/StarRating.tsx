import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 15 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5.5l1.85,4.56h4.8l-3.88,2.82,1.48,4.56L7.5,9.62,3.25,12.44l1.48-4.56L.85,5.06h4.8L7.5.5z" />
  </svg>
);

interface StarRatingProps {
  rating: number;
  starClassName?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, starClassName = "w-4 h-4" }) => (
  <div className="flex text-black">
    {Array.from({ length: rating }, (_, i) => (
      <StarIcon key={i} className={starClassName} />
    ))}
  </div>
);

export default StarRating;