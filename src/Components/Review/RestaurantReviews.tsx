'use client'; // Required for Swiper

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { reviews } from './reviews';
import ReviewCard from './ReviewCard';
import G2Icon from './G2Icon';
import CapterraIcon from './CapterraIcon';

const ReviewsSection: React.FC = () => {
  const reviewsCol1 = reviews.slice(0, 3);
  const reviewsCol2 = reviews.slice(3, 6);
  const reviewsCol3 = reviews.slice(6, 9);

  return (
    <section className="bg-[#F9F7F5] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              See why we're rated #1 in restaurant tech
            </h2>
            <div className="mt-8 flex flex-col items-center gap-6">
              <ul className="flex flex-col sm:flex-row gap-6">
                <li className="flex items-center gap-3">
                  <div className="h-8 w-8"><G2Icon /></div>
                  <p className="text-sm text-gray-600">Rated #1 Restaurant Marketing Software</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-8 w-8"><CapterraIcon /></div>
                  <p className="text-sm text-gray-600">Leader Position Winter 2025</p>
                </li>
              </ul>
              <p className="text-sm font-medium text-blue-700">
                Over 250 5-star reviews on G2 and Capterra
              </p>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
            <div className="flex flex-col gap-6">
              {reviewsCol1.map((review) => <ReviewCard key={review.id} review={review} />)}
            </div>
            <div className="mt-10 flex flex-col gap-6">
              {reviewsCol2.map((review) => <ReviewCard key={review.id} review={review} />)}
            </div>
            <div className="flex flex-col gap-6">
              {reviewsCol3.map((review) => <ReviewCard key={review.id} review={review} />)}
            </div>
          </div>
          
          {/* Mobile Carousel */}
          <div className="w-full lg:hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2.2 },
                768: { slidesPerView: 3.2 },
              }}
              className="!py-4"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id} className="h-auto">
                  <ReviewCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <a href="/reviews" className="mt-12 inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            See more reviews
            <svg className="ml-2 h-3 w-3" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L5 6L1 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;