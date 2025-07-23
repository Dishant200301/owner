// src/components/TestimonialCard.tsx
import React from 'react';
import { Testimonial } from './types';
import { ButtonArrow } from './SVGIcons'; // Reusing ButtonArrow from previous sections
import PlayButton from './PlayButton';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  // To handle video playback, you would typically use a state variable
  // and a modal/overlay for the video player. For simplicity, this just links.
  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (testimonial.vimeoUrl) {
      // In a real app, open a video modal or navigate
      console.log('Playing video from:', testimonial.vimeoUrl);
      window.open(testimonial.vimeoUrl, '_blank'); // Opens in new tab for demo
    }
  };

  return (
    <div className="testimonials_item grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
      {/* Testimonials Head - Left Column Top */}
      <div className="testimonials_head flex flex-col justify-between md:col-span-1">
        <div>
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-2">
            <span>{testimonial.owners.split(' ')[0]}</span>{' '}
            <span>{testimonial.owners.split(' ').slice(1).join(' ')}</span>
          </h3>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Owners at {testimonial.restaurant}
          </h3>
        </div>
        {/* "See all reviews" button - visible only on desktop */}
        <div className="hidden md:block"> {/* hide-tablet */}
          <a href="/reviews" className="button is-black mt-8 flex items-center justify-center w-fit px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
            <p className="mr-2">See all reviews</p>
            <ButtonArrow className="w-4 h-auto text-white" />
          </a>
        </div>
      </div>

      {/* Testimonials Content - Left Column Middle/Bottom */}
      <div className="testimonials_content flex flex-col md:col-span-1">
        <div className="testimonials_content-inner mb-8">
          <div className="text-gray-600 mb-6"> {/* text-color-content-secondary */}
            <p className="text-lg md:text-xl leading-relaxed font-medium"> {/* h16 */}
              "{testimonial.quote}"
            </p>
          </div>
          {/* "Read all reviews" button - visible only on tablet */}
          <div className="md:hidden"> {/* show-tablet */}
            <a href="/reviews" className="button mt-4 flex items-center justify-center w-fit px-6 py-3 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-100 transition-colors">
              <p className="text-base mr-2 font-medium">Read all reviews</p> {/* h13 */}
              <ButtonArrow className="w-4 h-auto text-gray-800" />
            </a>
          </div>
        </div>
        
        {/* Stats Section */}
        <ul className="testimonials_stats flex flex-wrap gap-x-12 gap-y-6">
          {testimonial.stats.map((stat, index) => (
            <li key={index} className="testimonials_stats-item flex-shrink-0">
              <div className="mb-2"> {/* margin-bottom margin-8 */}
                <p className="text-4xl md:text-5xl font-bold text-gray-900">{stat.value}</p> {/* p44 */}
              </div>
              <div className="text-gray-600"> {/* text-color-content-secondary */}
                <p className="text-base md:text-lg leading-snug">{stat.description}</p> {/* h14 */}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Testimonials Visual (Video Thumbnail) - Right Column */}
      <a
        href={testimonial.vimeoUrl || '#'}
        onClick={handleVideoClick}
        className="testimonials_visual relative rounded-lg overflow-hidden cursor-pointer aspect-video md:aspect-square md:col-span-1 md:row-span-full"
      >
        <div className="video-block w-full h-full">
          <div className="video-block_thumb absolute inset-0">
            <img
              src={testimonial.imageSrc}
              alt={`Story of ${testimonial.restaurant}`}
              sizes="100vw"
              srcSet={testimonial.imageSrcset}
              className="img-cover w-full h-full object-cover"
              loading="lazy"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>

            <div className="video_meta absolute bottom-6 left-6 right-6 flex items-end justify-between z-10">
              <div className="hiw-hero_visual-content">
                <div className="text-white mb-1"> {/* text-color-content-inverted-primary */}
                  <p className="text-xl md:text-2xl font-semibold">See the story</p> {/* h18 */}
                </div>
                <div className="text-gray-200"> {/* text-color-content-inverted-tertiary */}
                  <p className="text-xl md:text-2xl font-semibold">{testimonial.restaurant}</p> {/* h18 */}
                </div>
              </div>
              <PlayButton /> {/* Reusable Play Button Component */}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default TestimonialCard;