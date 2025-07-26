import React, { useState, useRef } from 'react';

// SVG components for arrows and play icon
const ArrowTailIcon: React.FC = () => (
  <svg width="100%" height="100%" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
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

const RestaurantWebsiteHero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);

  const mainVideoVimeoId = '981605603'; // ID for the main video
  const mainVideoUrl = `https://player.vimeo.com/progressive_redirect/playback/${mainVideoVimeoId}/rendition/1080p/file.mp4?loc=external&signature=63192cd8c75738827c4ef31a1efb3386c9212956d00852c0195e1cf2f5d9d6a2`;

  const loopVideoPoster = 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08%2F668fd064a60016174593286b_clip-restaurant_website-mr_m-loop-poster-00001.jpg';
  const loopVideoMp4 = 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08%2F668fd064a60016174593286b_clip-restaurant_website-mr_m-loop-transcode.mp4';
  const loopVideoWebm = 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08%2F668fd064a60016174593286b_clip-restaurant_website-mr_m-loop-transcode.webm';

  const handlePlayClick = () => {
    setIsPlaying(true);
    // Pause the background loop video if it's playing
    if (backgroundVideoRef.current) {
      backgroundVideoRef.current.pause();
    }
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-24 lg:py-32"> {/* section_delivery-hero */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"> {/* padding-global container-huge */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24"> {/* delivery-hero_wrap */}
          {/* Header Content */}
          <div className="lg:w-1/2 text-center lg:text-left"> {/* delivery-hero_header */}
            <div className="mb-4"> {/* margin-bottom margin-16 */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"> {/* h56 */}
                Restaurant websites built for sales first, style second.
              </h1>
            </div>
            <div className="mb-8"> {/* margin-bottom margin-32 */}
              <div className="max-w-lg lg:max-w-none mx-auto lg:mx-0"> {/* max-width-460 */}
                <p className="text-base text-gray-700 leading-relaxed"> {/* p15 text-color-content-secondary */}
                  Owner builds your website to drive sales. Our proven design grows Google traffic, outranks delivery apps, and beats your competition.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"> {/* button-group */}
              <a href="/demo" className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"> {/* button */}
                <p>Get a free demo</p>
                <div className="flex items-center space-x-1">
                  <div className="w-1 h-auto"><ArrowTailIcon /></div>
                  <div className="w-3 h-auto"><ArrowHeadIcon /></div>
                </div>
              </a>
              <a href="/pricing" className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gray-200 text-gray-800 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-300 transition-colors duration-200"> {/* button is-secondary */}
                <p>View Pricing</p>
                <div className="flex items-center space-x-1">
                  <div className="w-1 h-auto"><ArrowTailIcon /></div>
                  <div className="w-3 h-auto"><ArrowHeadIcon /></div>
                </div>
              </a>
            </div>
          </div>

          {/* Video Visual */}
          <div className="lg:w-1/2 relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl"> {/* hero-video-box delivery-hero_visual */}
            {/* Thumbnail and looping background video preview */}
            {!isPlaying ? (
              <div
                className="absolute inset-0 flex items-end cursor-pointer bg-cover bg-center"
                style={{ backgroundImage: `url(${loopVideoPoster})` }} // Fallback for video load
                onClick={handlePlayClick}
                role="button"
                tabIndex={0}
                aria-label="Play video showing owners of Mr M's Sandwich Shop"
              >
                {/* Looping Background Video */}
                <video
                  ref={backgroundVideoRef}
                  id="delivery-loop-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  // Use the poster image as a background for instant display
                  style={{ backgroundImage: `url(${loopVideoPoster})`, opacity: isPlaying ? 0 : 1 }}
                >
                  <source src={loopVideoMp4} type="video/mp4" />
                  <source src={loopVideoWebm} type="video/webm" />
                  Your browser does not support the video tag.
                </video>

                {/* Overlay for text/button readability */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                
                {/* Video meta content and play button */}
                <div className="relative z-10 flex flex-col justify-between items-start w-full p-6 sm:p-8">
                  <div className="max-w-xs mb-4">
                    <p className="text-sm text-white leading-tight"> {/* h15 text-color-content-inverted-primary */}
                      See how the owners of Mr M's Sandwich Shop use Owner to get "more clicks, more traffic, more sales"
                    </p>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center bg-white bg-opacity-20 rounded-full text-white backdrop-blur-sm hover:bg-opacity-30 transition-all duration-200"> {/* video-play icon_24 */}
                    <PlayIcon />
                  </div>
                </div>
              </div>
            ) : (
              // Main Vimeo video iframe
              <div className="absolute inset-0 w-full h-full">
                <iframe
                  src={mainVideoUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover" // Ensure it covers the container
                  title="Mr M's Sandwich Shop Success Story"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantWebsiteHero;