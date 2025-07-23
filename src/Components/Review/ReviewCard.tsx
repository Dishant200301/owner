// src/components/ReviewCard.tsx
import React from 'react';
import { Review } from './types';
import { StarRating } from './StarRating';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="hp-reviews_item bg-white p-6 rounded-lg shadow-sm flex flex-col h-full">
      <div className="hp-reviews_star mb-3 text-yellow-500">
        <StarRating /> {/* Renders 5 yellow stars */}
      </div>
      <p className="p15 text-sm md:text-base text-gray-700 flex-grow leading-relaxed">
        {review.text}
      </p>
      <div className="row-meta flex items-center mt-4">
        <img
          src={review.avatarSrc}
          alt={review.author}
          className="meta_avatar w-8 h-8 rounded-full object-cover mr-3"
          loading="lazy"
        />
        <p className="p13 text-sm text-gray-800 font-medium">{review.author}</p>
      </div>
    </div>
  );
};

export default ReviewCard;