import React from 'react';
import { Link } from 'react-router-dom';

// SVG components for arrows and play icon (reusing from previous tasks)
const ArrowTailIcon: React.FC = () => (
  <svg width="100%" height="100%" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1L1 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const ArrowHeadIcon: React.FC = () => (
  <svg width="100%" height="100%" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1.5L5 6L1 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"></path>
  </svg>
);

const PlayIcon: React.FC = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.5 8.86762C7.5 7.27719 7.5 6.48198 7.83313 6.03148C8.12355 5.63875 8.56886 5.38992 9.05554 5.34841C9.6138 5.3008 10.291 5.71757 11.6455 6.5511L16.2928 9.41096C17.6851 10.2678 18.3813 10.6962 18.619 11.2467C18.8266 11.7275 18.8266 12.2725 18.619 12.7533C18.3813 13.3038 17.6851 13.7322 16.2928 14.589L11.6455 17.4489C10.291 18.2824 9.6138 18.6992 9.05554 18.6516C8.56886 18.6101 8.12355 18.3612 7.83313 17.9685C7.5 17.518 7.5 16.7228 7.5 15.1324L7.5 8.86762Z"
      fill="currentColor"
      fillOpacity="0.92"
    ></path>
  </svg>
);

const GuidesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24 lg:py-32 border-b border-gray-200"> {/* section-border="bottom" section-full="" */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"> {/* padding-global container-large */}
        <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between lg:gap-12"> {/* guides_wrap */}
          {/* Guides Head */}
          <div className="text-center lg:text-left mb-12 lg:mb-0"> {/* guides_head */}
            <div className="max-w-xl mx-auto lg:mx-0 mb-6 lg:mb-0"> {/* max-width-560 */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"> {/* h44 */}
                Improve your restaurant's website with our guides
              </h2>
            </div>
            {/* The original code has `hide-mobile-landscape` which implies showing on larger screens. */}
            {/* Replicated using `hidden lg:block` to show only on large screens and above. */}
            <div className="hidden lg:block mt-8"> {/* hide-mobile-landscape */}
              <Link to="#" className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"> {/* button w-inline-block */}
                <p>Read the blog</p>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-auto"><ArrowTailIcon /></div>
                  <div className="w-3 h-auto"><ArrowHeadIcon /></div>
                </div>
              </Link>
            </div>
          </div>

          {/* Guides Visual Wrap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full lg:w-2/3"> {/* guides_visual-wrap */}
            {/* Guide 1: YouTube Video */}
            <Link to="https://www.youtube.com/watch?v=dJB-ATZaxM0" target="_blank" rel="noopener noreferrer" className="relative block aspect-video rounded-2xl overflow-hidden shadow-lg group"> {/* guides_visual develivery w-inline-block */}
              <img
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /* img-cover link-image */
                src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fda6309b0381d246fcd29_rank-1_youtube.jpg"
                alt="Man smiling, titled 'I Reviewed The Best Website Builders For Restaurants, Here's What I Found'"
                sizes="(max-width: 1476px) 100vw, 1476px"
                loading="lazy"
                srcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fda6309b0381d246fcd29_rank-1_youtube-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fda6309b0381d246fcd29_rank-1_youtube-p-800.jpg 800w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fda6309b0381d246fcd29_rank-1_youtube.jpg 1476w"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6"> {/* video_meta */}
                <p className="text-lg font-semibold text-white mb-2"> {/* h18 */}
                  I Reviewed The Best Website Builders For Restaurants, Here's What I Found
                </p>
                <div className="w-8 h-8 flex items-center justify-center bg-white bg-opacity-20 rounded-full text-white backdrop-blur-sm group-hover:bg-opacity-30 transition-all duration-200"> {/* video-play icon_24 */}
                  <PlayIcon />
                </div>
              </div>
            </Link>

            {/* Guide 2: Blog Post */}
            <Link to="https://www.owner.com/blog/website-builders-for-restaurants" target="_blank" rel="noopener noreferrer" className="relative block aspect-video rounded-2xl overflow-hidden shadow-lg group"> {/* guides_block w-inline-block */}
              <img
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /* img-cover link-image */
                src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fda668c6beb76e3104f8a_best-restaraunant-website-builders.jpg"
                alt="Two women smiling in an apron, titled 'Buyer's Guide: The Best Website Builders for Restaurants'"
                sizes="(max-width: 796px) 100vw, 796px"
                loading="lazy"
                srcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fda668c6beb76e3104f8a_best-restaraunant-website-builders-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668fda668c6beb76e3104f8a_best-restaraunant-website-builders.jpg 796w"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6"> {/* video_meta */}
                <p className="text-lg font-semibold text-white"> {/* h18 */}
                  Buyer's Guide: The Best Website Builders for Restaurants
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;