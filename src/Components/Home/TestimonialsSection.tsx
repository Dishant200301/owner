import React, { useState, FC } from 'react';

// --- SVG Icon Components ---

const ArrowTailIcon: FC = () => (
  <svg width="100%" height="100%" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1L1 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const ArrowHeadIcon: FC = () => (
  <svg width="100%" height="100%" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1.5L5 6L1 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"></path>
  </svg>
);

const PlayIcon: FC = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 8.86762C7.5 7.27719 7.5 6.48198 7.83313 6.03148C8.12355 5.63875 8.56886 5.38992 9.05554 5.34841C9.6138 5.3008 10.291 5.71757 11.6455 6.5511L16.2928 9.41096C17.6851 10.2678 18.3813 10.6962 18.619 11.2467C18.8266 11.7275 18.8266 12.2725 18.619 12.7533C18.3813 13.3038 17.6851 13.7322 16.2928 14.589L11.6455 17.4489C10.291 18.2824 9.6138 18.6992 9.05554 18.6516C8.56886 18.6101 8.12355 18.3612 7.83313 17.9685C7.5 17.518 7.5 16.7228 7.5 15.1324L7.5 8.86762Z" fill="currentColor" fillOpacity="0.92"></path>
  </svg>
);

const PrevArrowIcon: FC = () => (
  <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.0177 20.4958C15.28 20.7581 15.7048 20.7593 15.9686 20.4985V20.4985C16.2344 20.2356 16.2356 19.8067 15.9712 19.5423L13.1214 16.6926H20.7919C21.1743 16.6926 21.4844 16.3825 21.4844 16.0001V16.0001C21.4844 15.6176 21.1743 15.3076 20.7919 15.3076H13.1214L15.9707 12.463C16.2355 12.1986 16.235 11.7694 15.9697 11.5055V11.5055C15.7056 11.2428 15.2787 11.2434 15.0153 11.5068L10.8041 15.718C10.6483 15.8738 10.6483 16.1264 10.8041 16.2821L15.0177 20.4958Z" fill="currentColor"></path>
  </svg>
);

const NextArrowIcon: FC = () => (
  <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.9823 20.4958C16.72 20.7581 16.2952 20.7593 16.0314 20.4985V20.4985C15.7656 20.2356 15.7644 19.8067 16.0288 19.5423L18.8786 16.6926H11.2081C10.8257 16.6926 10.5156 16.3825 10.5156 16.0001V16.0001C10.5156 15.6176 10.8257 15.3076 11.2081 15.3076H18.8786L16.0293 12.463C15.7645 12.1986 15.765 11.7694 16.0303 11.5055V11.5055C16.2944 11.2428 16.7213 11.2434 16.9847 11.5068L21.1959 15.718C21.3517 15.8738 21.3517 16.1264 21.1959 16.2821L16.9823 20.4958Z" fill="currentColor"></path>
  </svg>
);

// --- Testimonial Data Interface ---

interface TestimonialData {
  id: string;
  name: string;
  title: string;
  quote: string;
  stats: {
    value: string;
    description: string;
  }[];
  imageUrl: string;
  imageSrcset: string; // for responsive images
  videoUrl: string;
  restaurantName: string;
}

// --- Sample Testimonial Data ---
const testimonials: TestimonialData[] = [
  {
    id: 'metro-pizza',
    name: 'John & Sam',
    title: 'Owners at Metro Pizza',
    quote: '"Owner is a must-have for succeeding online as an independent restaurant today."',
    stats: [
      { value: '+54%', description: 'Sales growth after switching to Owner' },
      { value: '11,000', description: 'Installs of their new mobile app, created with Owner' },
    ],
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e34a28bbef917ac47ed99_metro-pizza.jpg',
    imageSrcset: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e34a28bbef917ac47ed99_metro-pizza-p-500.jpg 500w, https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e34a28bbef917ac47ed99_metro-pizza-p-800.jpg 800w, https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e34a28bbef917ac47ed99_metro-pizza-p-1080.jpg 1080w, https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e34a28bbef917ac47ed99_metro-pizza.jpg 1410w',
    videoUrl: 'https://player.vimeo.com/progressive_redirect/playback/856612612/rendition/1080p/file.mp4?loc=external&signature=58132f9a67b9bb449a424c47d2cf44c8a22c0b979de6b6f264c3a2279219e59e',
    restaurantName: 'Metro Pizza',
  },
  {
    id: 'doo-dah-diner',
    name: 'Timirie Shibley',
    title: 'Owner of Doo-Dah Diner',
    quote: '“We’ve more than doubled our direct online sales since starting. I didn’t think having our own app would work, but our regulars love it and use it constantly.”',
    stats: [
      { value: '+$72,000', description: 'Online sales' },
      { value: '$19,000', description: 'Savings in third-party fees' },
    ],
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e8b9729dc9ea397f5555d_imirieshibley-headshot2023_1500xx4054-4054-0-0%201.08.10.jpg',
    imageSrcset: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e8b9729dc9ea397f5555d_imirieshibley-headshot2023_1500xx4054-4054-0-0%201.08.10-p-500.jpg 500w, https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e8b9729dc9ea397f5555d_imirieshibley-headshot2023_1500xx4054-4054-0-0%201.08.10-p-800.jpg 800w, https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e8b9729dc9ea397f5555d_imirieshibley-headshot2023_1500xx4054-4054-0-0%201.08.10-p-1080.jpg 1080w, https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e8b9729dc9ea397f5555d_imirieshibley-headshot2023_1500xx4054-4054-0-0%201.08.10.jpg 2000w',
    videoUrl: 'https://player.vimeo.com/progressive_redirect/playback/839310097/rendition/1080p/file.mp4?loc=external&signature=c6df88d4ab963620b9993e58371a92c6f92b883b68c374e5d02ab6db59b1ad3d',
    restaurantName: 'Doo-Dah Diner',
  },
  {
    id: 'cyclo-noodles',
    name: 'Sandy Sei',
    title: 'Owner of Cyclo Noodles',
    quote: '“ I would recommend to check Owner.com out. Don’t take my word for it, read the reviews, see their videos, and just give them a call, because it can save you a lot of money.”',
    stats: [
      { value: '+$104,500', description: 'Online sales' },
      { value: '$31,000', description: 'Savings in third-party fees' },
    ],
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e34bb9714cd24bc6ff2a0_cyclo-noodle.jpg',
    imageSrcset: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e34bb9714cd24bc6ff2a0_cyclo-noodle-p-500.jpg 500w, https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e34bb9714cd24bc6ff2a0_cyclo-noodle.jpg 664w',
    videoUrl: 'https://player.vimeo.com/progressive_redirect/playback/917960671/rendition/1080p/file.mp4?loc=external&signature=ce4dd4d64e663d4af8e339cebd8a9f519dff7c2b1fdd0a926185a1c65437317a',
    restaurantName: 'Cyclo Noodles',
  },
];

// --- Testimonial Card Component ---

interface TestimonialCardProps {
  testimonial: TestimonialData;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
      {/* Testimonial Content */}
      <div className="flex flex-col justify-between">
        <div className="mb-8">
          <h3 className="text-3xl md:text-4xl font-bold leading-tight">
            <span>{testimonial.name}</span>
          </h3>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight">
            {testimonial.title}
          </h3>
        </div>

        <div className="flex flex-col justify-between flex-grow">
          <div className="text-gray-600 mb-8 md:mb-0">
            <p className="text-lg leading-relaxed">{testimonial.quote}</p>
          </div>
          {/* "Read all reviews" button - only visible on tablet and up */}
          <div className="block md:hidden mb-8">
            <a href="#" className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors">
              <p className="text-base font-medium">Read all reviews</p>
              <div className="flex items-center w-4 h-2">
                <div className="w-full h-full">
                  <ArrowTailIcon />
                </div>
                <div className="w-full h-full">
                  <ArrowHeadIcon />
                </div>
              </div>
            </a>
          </div>

          <ul className="flex flex-col md:flex-row md:space-x-8">
            {testimonial.stats.map((stat, index) => (
              <li key={index} className="mb-4 md:mb-0 last:mb-0">
                <div className="mb-2">
                  <p className="text-4xl font-bold">{stat.value}</p>
                </div>
                <div className="text-gray-600">
                  <p className="text-sm">{stat.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Testimonial Visual (Video Thumbnail) */}
      <a href="#" className="relative block w-full aspect-video rounded-2xl overflow-hidden group">
        <div className="absolute inset-0">
          <img
            src={testimonial.imageUrl}
            loading="lazy"
            alt={testimonial.restaurantName}
            sizes="100vw"
            srcSet={testimonial.imageSrcset}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-gradient-to-t from-black/60 to-transparent rounded-2xl">
            <div className="mb-1">
              <p className="text-lg font-bold">See the story</p>
            </div>
            <div className="text-gray-300">
              <p className="text-lg">{testimonial.restaurantName}</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-black/70 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black">
            <div className="w-6 h-6 text-white">
              <PlayIcon />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

// --- Main Testimonials Section Component ---

const TestimonialsSection: FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const currentTestimonial = testimonials[currentTestimonialIndex];
  const prevTestimonial = testimonials[(currentTestimonialIndex - 1 + testimonials.length) % testimonials.length];
  const nextTestimonial = testimonials[(currentTestimonialIndex + 1) % testimonials.length];

  const goToPrev = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-stone-50"> {/* Added bg-stone-50 for background color */}
      <div className="px-4 md:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        <div className="relative">
          {/* "See all reviews" button - only visible on desktop */}
          <div className="hidden md:block absolute top-0 right-0 -mt-16 z-10"> {/* Adjust position as needed */}
            <a href="/reviews" className="inline-flex items-center space-x-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              <p className="font-medium">See all reviews</p>
              <div className="flex items-center w-4 h-2">
                <div className="w-full h-full">
                  <ArrowTailIcon />
                </div>
                <div className="w-full h-full">
                  <ArrowHeadIcon />
                </div>
              </div>
            </a>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-lg">
            {currentTestimonial && <TestimonialCard testimonial={currentTestimonial} />}
          </div>

          {/* Swiper Arrows (Navigation) */}
          <div className="flex justify-between items-center mt-12 px-4 md:px-0">
            {/* Previous Button */}
            <button
              onClick={goToPrev}
              className="group flex items-center space-x-2 p-2 rounded-full text-gray-800 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              aria-label="Previous slide"
            >
              <div className="w-8 h-8 text-gray-800 group-hover:text-black transition-colors">
                <PrevArrowIcon />
              </div>
              <div className="hidden md:block">
                <p className="text-base">
                  <span className="text-gray-400">Previous</span>{' '}
                  <span className="font-semibold">{prevTestimonial.restaurantName}</span>
                </p>
              </div>
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="group flex items-center space-x-2 p-2 rounded-full text-gray-800 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              aria-label="Next slide"
            >
              <div className="hidden md:block">
                <p className="text-base">
                  <span className="text-gray-400">Next</span>{' '}
                  <span className="font-semibold">{nextTestimonial.restaurantName}</span>
                </p>
              </div>
              <div className="w-8 h-8 text-gray-800 group-hover:text-black transition-colors">
                <NextArrowIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;