// src/components/RestaurantReviews.tsx
import React from 'react';
import ReviewCard from './ReviewCard';
import { G2Icon, CapterraIcon, ButtonArrow } from './SVGIcons'; // Adjust path as needed
import { Review, ReviewPlatform } from './types'; // Adjust path as needed

// --- Dummy Data (Replace with your actual data source) ---
const platformsData: ReviewPlatform[] = [
  { icon: G2Icon, text: 'Rated #1 Restaurant Marketing Software' },
  { icon: CapterraIcon, text: 'Leader Position Winter 2025' },
];

const allReviews: Review[] = [
  { id: '1', text: 'The branded website and Online ordering platform is perfect for our guest and growing my business.', avatarSrc: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e9284f98fb67f811248df_1_1.jpeg', author: 'Steven F' },
  { id: '2', text: 'Owner.com has been an absolute lifesaver when it comes to minimizing third-party service fees and driving direct store sales', avatarSrc: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e92ad5b46e544921e6560_1_2.jpeg', author: 'Tara B' },
  { id: '3', text: 'My restaurant\'s website looks awesome. I\'m keeping all the profits for my store instead of giving 30-40% away.', avatarSrc: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e92e887495af0921e60c3_1_3.jpeg', author: 'Gia S' },
  { id: '4', text: 'With Owner.com I keep all money from sales and only pay minimal fee on delivery cost.', avatarSrc: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e930e2e9b2fdeeb0b7d3f_1_4.jpeg', author: 'Mohammad A' },
  { id: '5', text: 'My restaurants operate very late, yet Owner Customer\'s Support has ALWAYS been active and able to help me with any concerns!', avatarSrc: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e932f3f679ef5a1bdf5f4_1-5.jpeg', author: 'Daryl E' },
  { id: '6', text: 'Why isn’t every restaurant using this system? My SEO is at an all time high, because I am retaining customers to my website.', avatarSrc: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e9345b164ea49c1c2d5d3_1_6.jpeg', author: 'John R' },
  { id: '7', text: 'Owner.com has almost everything you need to run your restaurant online. An awesome partner to have for restaurants.', avatarSrc: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e93f0f98fb67f81131322_1_7.jpeg', author: 'Jake A' },
  { id: '8', text: 'They are helping us take back more control of our business and compete with larger companies because the technology is great!', avatarSrc: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e940d4bbd0d98bed8fc77_1_8.jpeg', author: 'Michael B' },
  { id: '9', text: 'Exceptional customer service from start to finish every step of the process has been an enjoyable experience', avatarSrc: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/680e942d34808eee310cd3d9_1_9.jpeg', author: 'Ziad A' },
];
// -----------------------------------------------------------

const RestaurantReviews: React.FC = () => {
  // Distribute reviews into three columns for desktop layout
  const column1 = allReviews.filter((_, i) => i % 3 === 0);
  const column2 = allReviews.filter((_, i) => i % 3 === 1);
  const column3 = allReviews.filter((_, i) => i % 3 === 2);

  return (
    <section className="bg-[#fcfbf9] py-16 sm:py-20 md:py-24">
      <div className="px-4 mx-auto max-w-7xl"> {/* padding-global & container-large */}
        <div className="hp-reviews_wrap">
          <div className="hp-reviews_head text-center mb-10 md:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
              See why we're rated #1 in restaurant tech
            </h2>
            <div className="flex flex-col items-center">
              <ul className="hp-reviews_platforms flex flex-wrap justify-center gap-4 mb-4">
                {platformsData.map((platform, index) => (
                  <li key={index} className="platforms_item flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                    <div className="icon_32 w-8 h-8 mr-2 flex items-center justify-center">
                      <platform.icon className="w-full h-full" />
                    </div>
                    <p className="text-sm text-gray-700">{platform.text}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6"> {/* margin-top margin-24 */}
                <div className="text-orange-500"> {/* text-color-brand */}
                  <p className="text-sm font-medium">Over 250 5-star reviews on G2 and Capterra</p> {/* p11 text-weight-medium */}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Grid Layout (hidden on mobile) */}
          <div className="hp-reviews_box hidden md:block">
            <div className="hp-reviews_grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="hp-reviews_col flex flex-col gap-6">
                {column1.map(review => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
              <div className="hp-reviews_col cc-middle flex flex-col gap-6">
                {column2.map(review => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
              <div className="hp-reviews_col flex flex-col gap-6">
                {column3.map(review => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Responsive Carousel/Scroll Layout (hidden on desktop) */}
          <div className="hp-reviews_grid-respo-box md:hidden relative pb-4">
            {/* Gradients for fade effect on scrollable ends */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#fcfbf9] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#fcfbf9] to-transparent z-10 pointer-events-none"></div>

            <div className="hp-reviews_grid-respo flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-4 -mx-4 no-scrollbar">
              {/* Optional: Empty divs for initial spacing if desired, adjusted for Tailwind units */}
              {/* <div className="swiper-slide hp-testimonials-empty w-[100px] shrink-0"></div>
              <div className="swiper-slide hp-testimonials-empty w-[100px] shrink-0"></div> */}

              {allReviews.map(review => (
                <div key={review.id} className="swiper-slide hp-testimonials shrink-0 w-3/4 sm:w-1/2 pr-6 snap-start">
                  <ReviewCard review={review} />
                </div>
              ))}

              {/* Optional: Empty divs for trailing spacing if desired */}
              {/* <div className="swiper-slide hp-testimonials-empty w-[100px] shrink-0"></div>
              <div className="swiper-slide hp-testimonials-empty w-[100px] shrink-0"></div> */}
            </div>
          </div>

          <a
            href="/reviews"
            className="button is-black mt-10 md:mt-16 flex items-center justify-center mx-auto w-fit px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
          >
            <p className="mr-2">See more reviews</p>
            <ButtonArrow className="w-4 h-auto text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RestaurantReviews;