import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- TYPE DEFINITIONS for props and data ---
interface TestimonialStat {
  value: string;
  label: string;
}

interface Testimonial {
  id: number;
  ownerName: string;
  restaurantName: string;
  quote: string;
  stats: TestimonialStat[];
  imageUrl: string;
  imageSrcSet: string;
  videoUrl: string;
}

// --- MOCKED DATA based on the HTML ---
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    ownerName: 'John & Sam',
    restaurantName: 'Metro Pizza',
    quote: 'Owner is a must-have for succeeding online as an independent restaurant today.',
    stats: [
      { value: '+54%', label: 'Sales growth after switching to Owner' },
      { value: '11,000', label: 'Installs of their new mobile app, created with Owner' },
    ],
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e34a28bbef917ac47ed99_metro-pizza.jpg',
    imageSrcSet: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e34a28bbef917ac47ed99_metro-pizza-p-500.jpg 500w, https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e34a28bbef917ac47ed99_metro-pizza-p-800.jpg 800w, https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e34a28bbef917ac47ed99_metro-pizza-p-1080.jpg 1080w, https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e34a28bbef917ac47ed99_metro-pizza.jpg 1410w',
    videoUrl: 'https://player.vimeo.com/progressive_redirect/playback/856612612/rendition/1080p/file.mp4?loc=external&signature=58132f9a67b9bb449a424c47d2cf44c8a22c0b979de6b6f264c3a2279219e59e',
  },
  {
    id: 2,
    ownerName: 'Sandy Sei',
    restaurantName: 'Cyclo Noodles',
    quote: 'I would recommend to check Owner.com out. Don’t take my word for it, read the reviews, see their videos, and just give them a call, because it can save you a lot of money.',
    stats: [
        { value: '+$104,500', label: 'Online sales' },
        { value: '$31,000', label: 'Savings in third-party fees' },
    ],
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e34bb9714cd24bc6ff2a0_cyclo-noodle.jpg',
    imageSrcSet: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e34bb9714cd24bc6ff2a0_cyclo-noodle-p-500.jpg 500w, https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e34bb9714cd24bc6ff2a0_cyclo-noodle.jpg 664w',
    videoUrl: 'https://player.vimeo.com/progressive_redirect/playback/917960671/rendition/1080p/file.mp4?loc=external&signature=ce4dd4d64e663d4af8e339cebd8a9f519dff7c2b1fdd0a926185a1c65437317a',
  },
  {
    id: 3,
    ownerName: 'Timirie Shibley',
    restaurantName: 'Doo-Dah Diner',
    quote: 'We’ve more than doubled our direct online sales since starting. I didn’t think having our own app would work, but our regulars love it and use it constantly.',
    stats: [
        { value: '+$72,000', label: 'Online sales' },
        { value: '$19,000', label: 'Savings in third-party fees' },
    ],
    imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e8b9729dc9ea397f5555d_imirieshibley-headshot2023_1500xx4054-4054-0-0%201.08.10.jpg',
    imageSrcSet: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e8b9729dc9ea397f5555d_imirieshibley-headshot2023_1500xx4054-4054-0-0%201.08.10-p-500.jpg 500w, https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e8b9729dc9ea397f5555d_imirieshibley-headshot2023_1500xx4054-4054-0-0%201.08.10-p-800.jpg 800w, https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e8b9729dc9ea397f5555d_imirieshibley-headshot2023_1500xx4054-4054-0-0%201.08.10-p-1080.jpg 1080w, https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668e8b9729dc9ea397f5555d_imirieshibley-headshot2023_1500xx4054-4054-0-0%201.08.10.jpg 2000w',
    videoUrl: 'https://player.vimeo.com/progressive_redirect/playback/839310097/rendition/1080p/file.mp4?loc=external&signature=c6df88d4ab963620b9993e58371a92c6f92b883b68c374e5d02ab6db59b1ad3d',
  },
];


// --- REUSABLE SVG ICONS ---
const PlayIcon: React.FC = () => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 8.86762C7.5 7.27719 7.5 6.48198 7.83313 6.03148C8.12355 5.63875 8.56886 5.38992 9.05554 5.34841C9.6138 5.3008 10.291 5.71757 11.6455 6.5511L16.2928 9.41096C17.6851 10.2678 18.3813 10.6962 18.619 11.2467C18.8266 11.7275 18.8266 12.2725 18.619 12.7533C18.3813 13.3038 17.6851 13.7322 16.2928 14.589L11.6455 17.4489C10.291 18.2824 9.6138 18.6992 9.05554 18.6516C8.56886 18.6101 8.12355 18.3612 7.83313 17.9685C7.5 17.518 7.5 16.7228 7.5 15.1324L7.5 8.86762Z" fill="currentColor" fillOpacity="0.92" />
    </svg>
);

const ArrowIcon: React.FC<{ direction?: 'left' | 'right' }> = ({ direction = 'right' }) => (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={direction === 'left' ? 'transform scale-x-[-1]' : ''}>
         <path d="M16.9823 20.4958C16.72 20.7581 16.2952 20.7593 16.0314 20.4985V20.4985C15.7656 20.2356 15.7644 19.8067 16.0288 19.5423L18.8786 16.6926H11.2081C10.8257 16.6926 10.5156 16.3825 10.5156 16.0001V16.0001C10.5156 15.6176 10.8257 15.3076 11.2081 15.3076H18.8786L16.0293 12.463C15.7645 12.1986 15.765 11.7694 16.0303 11.5055V11.5055C16.2944 11.2428 16.7213 11.2434 16.9847 11.5068L21.1959 15.718C21.3517 15.8738 21.3517 16.1264 21.1959 16.2821L16.9823 20.4958Z" fill="currentColor" />
    </svg>
);


// --- CHILD COMPONENT: VideoPlayer ---
interface VideoPlayerProps {
  testimonial: Testimonial;
  isPlaying: boolean;
  onPlay: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ testimonial, isPlaying, onPlay }) => {
    return (
        <div className="relative w-full h-full overflow-hidden rounded-2xl cursor-pointer group" onClick={onPlay} role="button" tabIndex={0}>
            <AnimatePresence>
                {!isPlaying ? (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0"
                    >
                        <img
                            src={testimonial.imageUrl}
                            srcSet={testimonial.imageSrcSet}
                            alt={`Story of ${testimonial.restaurantName}`}
                            sizes="(max-width: 767px) 90vw, (max-width: 1023px) 80vw, 550px"
                            className="object-cover w-full h-full"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-30"></div>
                        <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white w-full flex justify-between items-end">
                            <div>
                                <p className="font-semibold text-lg">See the story</p>
                                <p className="text-gray-200">{testimonial.restaurantName}</p>
                            </div>
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                                <div className="w-6 h-6 sm:w-8 sm:h-8">
                                    <PlayIcon />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full h-full"
                    >
                        <video
                            src={testimonial.videoUrl}
                            className="w-full h-full object-cover"
                            autoPlay
                            controls
                            playsInline
                            loop
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- MAIN COMPONENT: Testimonials ---
const Testimonials: React.FC = () => {
    // State for the current slide index and animation direction
    const [[page, direction], setPage] = useState([0, 0]);
    // State for video playback
    const [isPlaying, setIsPlaying] = useState(false);

    // Correctly wraps index for infinite looping
    const i = (page % testimonialsData.length + testimonialsData.length) % testimonialsData.length;
    const testimonial = testimonialsData[i];

    // Handles pagination and resets video player
    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
        setIsPlaying(false);
    };

    const prevRestaurantName = testimonialsData[(i - 1 + testimonialsData.length) % testimonialsData.length].restaurantName;
    const nextRestaurantName = testimonialsData[(i + 1) % testimonialsData.length].restaurantName;

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
        }),
    };

    return (
        <section className="bg-[#F5F3EF] w-full py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 md:p-12 relative overflow-hidden">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={page} // Key change triggers the animation
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: 'spring', stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                            }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                        >
                            {/* --- Left Column: Content --- */}
                            <div className="flex flex-col h-full order-2 lg:order-1">
                                <div className="flex-grow">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">{testimonial.ownerName}</h2>
                                            <p className="text-lg md:text-xl text-gray-600">Owner of {testimonial.restaurantName}</p>
                                        </div>
                                        <Link to="#" className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap">
                                            See all reviews
                                        </Link>
                                    </div>
                                    <blockquote className="my-6">
                                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                            “{testimonial.quote}”
                                        </p>
                                    </blockquote>
                                </div>
                                <div className="mt-auto pt-8">
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        {testimonial.stats.map((stat) => (
                                            <li key={stat.label}>
                                                <p className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
                                                <p className="text-sm text-gray-600">{stat.label}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="#" className="mt-8 lg:hidden inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors">
                                        See all reviews
                                    </Link>
                                </div>
                            </div>
                            {/* --- Right Column: Video --- */}
                            <div className="w-full aspect-square order-1 lg:order-2">
                                <VideoPlayer testimonial={testimonial} onPlay={() => setIsPlaying(true)} isPlaying={isPlaying} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* --- Navigation Controls --- */}
                <div className="flex justify-between items-center mt-8 px-2 sm:px-4">
                    <button onClick={() => paginate(-1)} className="flex items-center gap-3 group text-gray-700 hover:text-black transition-colors" aria-label={`Previous: ${prevRestaurantName}`}>
                        <div className="p-2 text-2xl border border-gray-300 rounded-full group-hover:bg-white transition-colors">
                           <ArrowIcon direction="left" />
                        </div>
                        <div className="text-left">
                            <span className="text-xs text-gray-500">Previous</span>
                            <p className="font-medium text-sm hidden sm:block">{prevRestaurantName}</p>
                        </div>
                    </button>
                    <button onClick={() => paginate(1)} className="flex items-center gap-3 group text-gray-700 hover:text-black transition-colors" aria-label={`Next: ${nextRestaurantName}`}>
                        <div className="text-right">
                            <span className="text-xs text-gray-500">Next</span>
                            <p className="font-medium text-sm hidden sm:block">{nextRestaurantName}</p>
                        </div>
                        <div className="p-2 text-2xl border border-gray-300 rounded-full group-hover:bg-white transition-colors">
                           <ArrowIcon direction="right" />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;