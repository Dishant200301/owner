import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- Data Structure for Guides ---
interface Guide {
    id: string;
    imageUrl: string;
    title: string;
    link: string;
    is_video?: boolean; // Optional, to show/hide the play button
}

const guidesData: Guide[] = [
    {
        id: '1',
        imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/66903d1185e18cec8c85c892_guide-1.jpg',
        title: '3 Best Restaurant Marketing Ideas For 2025 (with AI Strategies)',
        link: 'https://www.youtube.com/watch?v=JymogwT3l78',
        is_video: true,
    },
    {
        id: '2',
        imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/66903d1dfa445e87864fbcea_guide-2.jpg',
        title: 'Restaurant SEO is Easier Than You Think (3 Big Wins)',
        link: 'https://www.owner.com/blog/seo-for-restaurants',
        is_video: false,
    },
    {
        id: '3',
        imageUrl: 'https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/66903dd1e4ad89845746a54f_guide-3%20(1).jpg',
        title: 'Buyer\'s Guide: The Best Restaurant Website Builders',
        link: 'https://www.owner.com/blog/website-builders-for-restaurants',
        is_video: false,
    },
];

// --- Framer Motion Variants ---
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for ease-out
            staggerChildren: 0.1, // Stagger children for sequential animation
            when: "beforeChildren" // Animate parent first, then children
        },
    },
};

const headVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.58, 1] } },
};

const buttonVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0, 0, 0.58, 1], delay: 0.2 } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for ease-out
        },
    },
};


const GuidesSection: React.FC = () => {
    return (
        // section_guides, section-full (implied full width by default)
        <motion.section
            className="py-16 md:py-24 bg-light-cream"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="px-4 md:px-8 max-w-7xl mx-auto"> {/* padding-global & container-large */}
                <div className="mb-12 md:mb-16"> {/* guides_wrap -> guides_head spacing */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6"> {/* guides_head */}
                        <motion.div className="max-w-xl" variants={headVariants}> {/* max-width-560 */}
                            <h2 className="text-h44 md:text-5xl font-bold font-display leading-tight text-gray-900">
                                See our free guides on growing your restaurant
                            </h2>
                        </motion.div>
                        {/* hide-mobile-landscape (hidden on small landscape screens, block on larger) */}
                        <motion.div className="hidden lg:block" variants={buttonVariants}>
                            <a href="/blog" className="inline-flex items-center justify-center
                                bg-black text-white rounded-md px-6 py-3 transition-colors duration-200
                                hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                                <p className="font-body text-base">Read the blog</p>
                                <div className="ml-2 flex items-center"> {/* button_arrow */}
                                    {/* button_arrow-tail */}
                                    <div className="w-4 h-0.5">
                                        <svg width="100%" height="100%" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 1L1 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    {/* button_arrow-head */}
                                    <div className="w-3 h-4 -ml-1"> {/* -ml-1 to make arrow head closer */}
                                        <svg width="100%" height="100%" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1.5L5 6L1 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* guides_slider */}
                <div className="w-full">
                    {/* w-dyn-list, w-dyn-items -> dynamically generated content */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" // guides_slider-wrap
                        variants={sectionVariants} // Reuse section variants for staggering children
                    >
                        {guidesData.map((guide) => (
                            <motion.div
                                key={guide.id}
                                className="relative rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-103" // guides_slider-item, added hover
                                variants={cardVariants} // Individual card animation
                            >
                                <a href={guide.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full"> {/* guides_visual w-inline-block */}
                                    <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96"> {/* Image container to control aspect ratio */}
                                        <img
                                            src={guide.imageUrl}
                                            loading="lazy"
                                            alt={guide.title}
                                            className="w-full h-full object-cover" // img-cover
                                        />
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white"> {/* video_meta */}
                                        <p className="text-h18 md:text-xl font-semibold mb-2 font-body leading-tight">
                                            {guide.title}
                                        </p>
                                        {/* Conditionally render play button for videos */}
                                        {guide.is_video && ( // w-condition-invisible check
                                            <div className="absolute bottom-4 right-4 bg-black/70 rounded-full p-3 flex items-center justify-center"> {/* video-play */}
                                                <div className="w-6 h-6 text-white"> {/* icon_24 w-embed */}
                                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M7.5 8.86762C7.5 7.27719 7.5 6.48198 7.83313 6.03148C8.12355 5.63875 8.56886 5.38992 9.05554 5.34841C9.6138 5.3008 10.291 5.71757 11.6455 6.5511L16.2928 9.41096C17.6851 10.2678 18.3813 10.6962 18.619 11.2467C18.8266 11.7275 18.8266 12.2725 18.619 12.7533C18.3813 13.3038 17.6851 13.7322 16.2928 14.589L11.6455 17.4489C10.291 18.2824 9.6138 18.6992 9.05554 18.6516C8.56886 18.6101 8.12355 18.3612 7.83313 17.9685C7.5 17.518 7.5 16.7228 7.5 15.1324L7.5 8.86762Z"
                                                            fill="currentColor" fillOpacity="0.92"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default GuidesSection;