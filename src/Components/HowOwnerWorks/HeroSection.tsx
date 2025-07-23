import React, { useState, useRef } from 'react';

// SVG components for arrows and play icon
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

const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const vimeoIframeRef = useRef<HTMLIFrameElement>(null);

  const vimeoVideoId = '871511548'; // Main Vimeo video ID
  const vimeoEmbedUrl = `https://player.vimeo.com/video/${vimeoVideoId}?autoplay=1&loop=0&byline=0&portrait=0`; // URL for main video

  const handlePlayClick = () => {
    setIsPlaying(true);
    // Pause the background loop video if it's playing
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-24 lg:py-32"> {/* section-full class */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"> {/* padding-global container-large */}
        <div className="flex flex-col items-center text-center"> {/* hiw-hero_wrap */}
          <div className="hiw-hero_head mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6"> {/* h56 */}
              You could be getting a LOT more online sales.
            </h1>
            <div className="max-w-lg mx-auto mb-8"> {/* max-width-460 */}
              <p className="text-base text-gray-700"> {/* h15 text-color-content-secondary */}
                Owner is the easiest way to rank higher on Google, get more online orders, and create the best experience for your customers. See how we do it.
              </p>
            </div>
            <div className="button-group">
              <a href="/demo" className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"> {/* button */}
                <p>Get a free demo</p>
                <div className="flex items-center space-x-1"> {/* button_arrow */}
                  <div className="w-4 h-auto"><ArrowTailIcon /></div> {/* button_arrow-tail */}
                  <div className="w-3 h-auto"><ArrowHeadIcon /></div> {/* button_arrow-head */}
                </div>
              </a>
            </div>
          </div>

          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl max-w-5xl mt-12 sm:mt-16"> {/* hero-video-box hiw-hero_visual */}
            {/* Thumbnail and looping background video preview */}
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-end cursor-pointer bg-cover bg-center"
                style={{ backgroundImage: `url(https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/668e4d2729e50c2765e05bc8_hp-hero.webp)` }}
                onClick={handlePlayClick}
                role="button"
                tabIndex={0}
                aria-label="Play video about Owner"
              >
                {/* Background video element */}
                <video
                  ref={videoRef}
                  id="hiw-hero-loop-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  // The inline style for background-image from the original `video` tag
                  style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08%2F668fbe877f44d81d8df0caa8_how-owner-works_loop-poster-00001.jpg")', opacity: isPlaying ? 0 : 1 }}
                >
                  <source src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08%2F668fbe877f44d81d8df0caa8_how-owner-works_loop-transcode.mp4" type="video/mp4" />
                  <source src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08%2F668fbe877f44d81d8df0caa8_how-owner-works_loop-transcode.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>

                {/* Overlay for text/button readability */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                
                {/* Video meta content and play button */}
                <div className="relative z-10 flex justify-between items-center w-full p-6 sm:p-8">
                  <p className="text-lg font-semibold text-white">Play the video</p> {/* h18 text-color-content-inverted-primary */}
                  <div className="w-12 h-12 flex items-center justify-center bg-white bg-opacity-20 rounded-full text-white backdrop-blur-sm hover:bg-opacity-30 transition-all duration-200">
                    <PlayIcon />
                  </div>
                </div>
              </div>
            )}

            {/* Main Vimeo video iframe */}
            {isPlaying && (
              <div className="absolute inset-0 w-full h-full">
                <iframe
                  ref={vimeoIframeRef}
                  src={vimeoEmbedUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="vimeo-player__iframe" // Retaining original class if custom styles are linked to it
                  title="Owner Product Overview Video"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;