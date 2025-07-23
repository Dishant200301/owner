import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// --- SVG Icon Components ---
const StarIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.9893 13.7812C10.8543 13.7812 10.7193 13.7397 10.604 13.6564L6.99982 11.0435L3.39563 13.6564C3.1649 13.8244 2.85472 13.8226 2.62408 13.6556C2.39422 13.4881 2.29849 13.192 2.38652 12.922L3.76566 8.68413L0.256342 5.98906C0.0333063 5.81774 -0.0555079 5.52383 0.0350563 5.25766C0.125618 4.99149 0.375165 4.81245 0.6563 4.81245H5.05689L6.37455 0.675942C6.4617 0.403819 6.71465 0.21875 6.99999 0.21875C7.28532 0.21875 7.53828 0.403732 7.62543 0.675942L8.94307 4.81245H13.3437C13.6248 4.81245 13.8743 4.99149 13.9649 5.25766C14.0556 5.52383 13.9667 5.81774 13.7436 5.98906L10.2343 8.68413L11.6135 12.922C11.7015 13.192 11.6058 13.4881 11.3759 13.6556C11.2606 13.7393 11.1252 13.7812 10.9893 13.7812Z" fill="#212121" fillOpacity="0.7"></path>
    </svg>
);

const SparkleIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 8c0-.5523-.4477-1-1-1-.5523 0-1 .4477-1 1 0 2.3085-.5108 3.7424-1.3842 4.6158C9.74243 13.4892 8.30848 14 6 14c-.55228 0-1 .4477-1 1s.44772 1 1 1c2.3085 0 3.7424.5108 4.6158 1.3842C11.4892 18.2576 12 19.6915 12 22c0 .5523.4477 1 1 1s1-.4477 1-1c0-2.3085.5108-3.7424 1.3842-4.6158C16.2576 16.5108 17.6915 16 20 16c.5523 0 1-.4477 1-1s-.4477-1-1-1c-2.3085 0-3.7424-.5108-4.6158-1.3842C14.5108 11.7424 14 10.3085 14 8zM6 5.5c0-.2761-.2239-.5-.5-.5s-.5.2239-.5.5C5 6.4806 4.7828 7.0726 4.4277 7.4277 4.0726 7.7828 3.4806 8 2.5 8c-.27614 0-.5.2239-.5.5s.22386.5.5.5c.9806 0 1.5726.2172 1.9277.5723.3551.3551.5723.9471.5723 1.9277 0 .2761.2239.5.5.5s.5-.2239.5-.5c0-.9806.2172-1.5726.5723-1.9277.3551-.3551.9471-.5723 1.9277-.5723.2761 0 .5-.2239.5-.5s-.2239-.5-.5-.5c-.9806 0-1.5726-.2172-1.9277-.5723C6.2172 7.0726 6 6.4806 6 5.5z" fill="black"></path></svg>
);

const ArrowUpIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 8.25L9 3l5.25 5.25M9 14.6912V3.375" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
);

const TagLineIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 13V7h18v6H0z" fill="#E5663A"></path></svg>
);


// --- Animated Text Component ---
const typingTexts = [
    "Scan your site and see what isn’t working",
    "Compare yourself with your local competition",
    "Find out how to get discovered on Google",
    "See who's beating you on Google",
];

const TypingAnimation = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % typingTexts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-6 w-full overflow-hidden">
            <AnimatePresence>
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0 text-sm md:text-base font-medium text-gray-800"
                >
                    {typingTexts[index]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};

// --- Phone with Animated Tags ---
const PhoneMockup = () => {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 0.5], ['-50%', '-150%']);
    const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const y2 = useTransform(scrollYProgress, [0, 0.5], ['-70%', '-200%']);
    const opacity2 = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div className="relative w-full max-w-[280px] sm:max-w-xs mx-auto">
            {/* Animated Tag 1 */}
            <motion.div style={{ y: y1, opacity: opacity1 }} className="absolute -left-28 sm:-left-44 top-1/4 z-20">
                <div className="bg-white/70 backdrop-blur-sm shadow-lg rounded-lg p-2 flex items-center gap-2 text-xs font-semibold whitespace-nowrap"><TagLineIcon /> See who's beating you on Google</div>
            </motion.div>
            
            {/* Animated Tag 2 */}
            <motion.div style={{ y: y2, opacity: opacity2 }} className="absolute -right-24 sm:-right-36 top-1/3 z-20">
                <div className="bg-white/70 backdrop-blur-sm shadow-lg rounded-lg p-2 flex items-center gap-2 text-xs font-semibold whitespace-nowrap"><TagLineIcon /> See exactly what to fix</div>
            </motion.div>

            {/* Phone Body */}
            <div className="relative z-10">
                <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6809881c139b1b218ef1ed59_phone-ui.avif" alt="Phone frame" className="w-full h-auto" />
                <div className="absolute inset-0 p-[5%] rounded-[2.8rem] sm:rounded-[3.5rem] overflow-hidden">
                    <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680989d5f4894fb9796a6ae3_6efc782c4a1bad4412843a05cd6b6192_phone-grader-ui.avif" alt="App interface showing restaurant performance score" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};


// --- Main Hero Section Component ---
export const SectionHpGrader = () => {
    return (
        <section className="bg-[#F7F7F7] py-20 md:py-28 lg:py-32 font-sans overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Top Meta Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-2 mb-5"
                    >
                        <p className="text-sm font-medium text-gray-800">#1 Top-Rated Restaurant Software</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>4.8</span>
                            <StarIcon />
                            <span>across 279 reviews</span>
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900 mb-12"
                    >
                        See where your restaurant is losing sales online
                    </motion.h1>
                </div>

                <div className="relative">
                    {/* Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                    >
                        <PhoneMockup />
                    </motion.div>
                    
                    {/* Search Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                        className="relative -mt-14 sm:-mt-16 z-20"
                    >
                        <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-2xl p-2.5">
                            <form 
                                className="flex flex-col md:flex-row items-center gap-3 md:gap-2" 
                                onSubmit={(e) => e.preventDefault()}
                                aria-label="Restaurant performance report form"
                            >
                                <div className="flex items-center gap-2.5 p-1 w-full md:w-auto md:flex-1">
                                    <SparkleIcon />
                                    <div className="flex-1">
                                        <TypingAnimation />
                                    </div>
                                </div>
                                <div className="flex w-full md:w-auto md:flex-1.5 items-center gap-2 bg-gray-50 rounded-lg p-1">
                                    <input
                                        type="text"
                                        placeholder="Find your restaurant name"
                                        className="w-full bg-transparent border-none focus:ring-0 text-sm md:text-base p-2"
                                        aria-label="Find your restaurant name"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-black text-white rounded-lg px-4 py-2.5 flex items-center gap-1.5 font-semibold text-sm whitespace-nowrap hover:bg-gray-800 transition-colors"
                                    >
                                        Get my report
                                        <ArrowUpIcon />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};