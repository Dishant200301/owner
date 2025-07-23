import React, { useState } from 'react';

// SVG component for the play button
const PlayIcon: React.FC = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.5 8.86762C7.5 7.27719 7.5 6.48198 7.83313 6.03148C8.12355 5.63875 8.56886 5.38992 9.05554 5.34841C9.6138 5.3008 10.291 5.71757 11.6455 6.5511L16.2928 9.41096C17.6851 10.2678 18.3813 10.6962 18.619 11.2467C18.8266 11.7275 18.8266 12.2725 18.619 12.7533C18.3813 13.3038 17.6851 13.7322 16.2928 14.589L11.6455 17.4489C10.291 18.2824 9.6138 18.6992 9.05554 18.6516C8.56886 18.6101 8.12355 18.3612 7.83313 17.9685C7.5 17.518 7.5 16.7228 7.5 15.1324L7.5 8.86762Z"
      fill="currentColor"
      fillOpacity="0.92"
    ></path>
  </svg>
);

const AboutHeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="text-center mb-16 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Helping local business owners survive & thrive
            </h1>
          </div>

          <div className="w-full relative bg-gray-100 rounded-3xl overflow-hidden shadow-xl aspect-video max-w-4xl">
            {/* Thumbnail/Overlay (video-block_thumb) */}
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-end cursor-pointer bg-cover bg-center rounded-3xl"
                style={{ backgroundImage: `url(https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/666f65a462fe41f9c7d629f5_about-video%20(1).jpg)` }}
                onClick={handlePlayClick}
                role="button" // Improve accessibility
                tabIndex={0} // Make it focusable
                aria-label="Play video about Adam and Dean's story"
              >
                {/* Dark overlay for text/button readability */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                
                {/* Video thumbnail content */}
                <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center w-full p-6 sm:p-8">
                  <div className="text-white text-center sm:text-left mb-4 sm:mb-0">
                    <p className="text-lg font-semibold">Meet Adam and Dean</p>
                    <p className="text-lg font-semibold text-gray-300">See our story</p>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center bg-white bg-opacity-20 rounded-full text-white backdrop-blur-sm group-hover:bg-opacity-30 transition-all duration-200">
                    <PlayIcon />
                  </div>
                </div>
              </div>
            )}

            {/* Background Video (w-background-video) - This is for the looping video behind the thumbnail. */}
            {/* It is designed to play silently and loop until the user clicks to watch the main video. */}
            {!isPlaying && (
                <video
                    id="hero-background-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    // The inline style for background-image from the original `video` tag
                    style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08%2F6694f710830f10a69f30eed9_our-story-loop-poster-00001.jpg")', opacity: isPlaying ? 0 : 1 }}
                >
                    <source src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08%2F6694f710830f10a69f30eed9_our-story-loop-transcode.mp4" type="video/mp4" />
                    <source src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08%2F6694f710830f10a69f30eed9_our-story-loop-transcode.webm" type="video/webm" />
                    Your browser does not support the background video.
                </video>
            )}

            {/* Main Video (Vimeo) - This video replaces the thumbnail/background video on click. */}
            {isPlaying && (
              <div className="absolute inset-0 w-full h-full">
                <video
                  width="100%"
                  height="100%"
                  controls
                  autoPlay // Auto-play when visible
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://player.vimeo.com/progressive_redirect/playback/794733145/rendition/1080p/file.mp4?loc=external&signature=bb2ac831c250f59f56faf7c392ebcd2715d391c670089e29390eccb8b8b8bdd9"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>

          <div className="max-w-lg mx-auto mt-12 text-gray-700">
            <p className="text-base text-center">
              Learn how we got here, what keeps us going, and why our customers love Owner. This is personal for us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;