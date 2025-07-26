import React from 'react';
import { Review } from './types';
import StarRating from './StarRating';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => (
  <div className="flex h-full flex-col gap-4 rounded-xl bg-white p-6 shadow-sm">
    <StarRating rating={review.rating} />
    <p className="flex-grow text-left text-base text-gray-700">{review.text}</p>
    <div className="flex items-center gap-3 pt-2">
      <img 
        src={review.author.avatarUrl} 
        loading="lazy" 
        alt={review.author.name} 
        className="h-8 w-8 rounded-full object-cover" 
      />
      <p className="text-sm font-medium text-gray-800">{review.author.name}</p>
    </div>
  </div>
);

export default ReviewCard;