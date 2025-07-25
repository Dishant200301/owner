import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Reusable Icon Components ---

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.9893 13.7812C10.8543 13.7812 10.7193 13.7397 10.604 13.6564L6.99982 11.0435L3.39563 13.6564C3.1649 13.8244 2.85472 13.8226 2.62408 13.6556C2.39422 13.4881 2.29849 13.192 2.38652 12.922L3.76566 8.68413L0.256342 5.98906C0.0333063 5.81774 -0.0555079 5.52383 0.0350563 5.25766C0.125618 4.99149 0.375165 4.81245 0.6563 4.81245H5.05689L6.37455 0.675942C6.4617 0.403819 6.71465 0.21875 6.99999 0.21875C7.28532 0.21875 7.53828 0.403732 7.62543 0.675942L8.94307 4.81245H13.3437C13.6248 4.81245 13.8743 4.99149 13.9649 5.25766C14.0556 5.52383 13.9667 5.81774 13.7436 5.98906L10.2343 8.68413L11.6135 12.922C11.7015 13.192 11.6058 13.4881 11.3759 13.6556C11.2606 13.7393 11.1252 13.7812 10.9893 13.7812Z" fill="#212121" fillOpacity="0.4"></path>
  </svg>
);

const WandIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 8C14 7.44772 13.5523 7 13 7C12.4477 7 12 7.44772 12 8C12 10.3085 11.4892 11.7424 10.6158 12.6158C9.74243 13.4892 8.30848 14 6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16C8.30848 16 9.74243 16.5108 10.6158 17.3842C11.4892 18.2576 12 19.6915 12 22C12 22.5523 12.4477 23 13 23C13.5523 23 14 22.5523 14 22C14 19.6915 14.5108 18.2576 15.3842 17.3842C16.2576 16.5108 17.6915 16 20 16C20.5523 16 21 15.5523 21 15C21 14.4477 20.5523 14 20 14C17.6915 14 16.2576 13.4892 15.3842 12.6158C14.5108 11.7424 14 10.3085 14 8Z" fill="black"></path>
    <path d="M6 5.5C6 5.22386 5.77614 5 5.5 5C5.22386 5 5 5.22386 5 5.5C5 6.48063 4.78279 7.0726 4.4277 7.4277C4.0726 7.78279 3.48063 8 2.5 8C2.22386 8 2 8.22386 2 8.5C2 8.77614 2.22386 9 2.5 9C3.48063 9 4.0726 9.21721 4.4277 9.5723C4.78279 9.9274 5 10.5194 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 10.5194 6.21721 9.9274 6.5723 9.5723C6.9274 9.21721 7.51937 9 8.5 9C8.77614 9 9 8.77614 9 8.5C9 8.22386 8.77614 8 8.5 8C7.51937 8 6.9274 7.78279 6.5723 7.4277C6.21721 7.0726 6 6.48063 6 5.5Z" fill="black"></path>
    <path d="M11 1.5C11 1.22386 10.7761 1 10.5 1C10.2239 1 10 1.22386 10 1.5C10 2.13341 9.85918 2.47538 9.66728 2.66728C9.47538 2.85918 9.13341 3 8.5 3C8.22386 3 8 3.22386 8 3.5C8 3.77614 8.22386 4 8.5 4C9.13341 4 9.47538 4.14082 9.66728 4.33272C9.85918 4.52462 10 4.86659 10 5.5C10 5.77614 10.2239 6 10.5 6C10.7761 6 11 5.77614 11 5.5C11 4.86659 11.1408 4.52462 11.3327 4.33272C11.5246 4.14082 11.8666 4 12.5 4C12.7761 4 13 3.77614 13 3.5C13 3.22386 12.7761 3 12.5 3C11.8666 3 11.5246 2.85918 11.3327 2.66728C11.1408 2.47538 11 2.13341 11 1.5Z" fill="black"></path>
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.75 8.25L8.99999 3L14.25 8.25M8.99999 14.6912V3.375" stroke="white" strokeWidth="1.6"></path>
  </svg>
);

const DashIcon = () => (
    <div className="w-[18px] h-[18px] flex items-center justify-center">
        <svg width="18" height="2" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H18" stroke="#E5663A" strokeWidth="2"/>
        </svg>
    </div>
);


// --- Animated Text Loop Component ---

const animatedTextItems = [
    "Scan your site and see what isn’t working",
    "Find out how to get discovered on Google",
    "See how much sales you could get from keywords",
    "Compare yourself with your local competition",
];

const AnimatedTextLoop = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % animatedTextItems.length);
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-6 w-full overflow-hidden">
            <AnimatePresence>
                <motion.span
                    key={index}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full text-base font-medium text-gray-800"
                >
                    {animatedTextItems[index]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};


// --- Main Restaurant Grader Component ---

const RestaurantGrader = () => {
    return (
        <section className="bg-[#F9F7F5] py-20 sm:py-28 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-5">
                        <p className="text-xs text-gray-700">#1 Top-Rated Restaurant Software</p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                            <span>4.8</span>
                            <StarIcon />
                            <span>across 279 reviews</span>
                        </div>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tighter">
                        See where your restaurant is losing sales online
                    </h1>
                </motion.div>

                <div className="mt-16 lg:mt-24 relative flex flex-col items-center">
                     {/* Phone Mockup with floating animation */}
                    <motion.div
                        className="relative w-[300px] md:w-[350px] z-10"
                        animate={{ y: [-5, 5] }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                    >
                        <img
                            src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680987a35774edc612fc8db5_phone-shadow-back.avif"
                            alt="Phone Shadow"
                            className="absolute inset-0 w-full h-full object-contain"
                        />
                        <img
                            src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6809881c139b1b218ef1ed59_phone-ui.avif"
                            alt="Phone Frame"
                            className="relative w-full h-auto z-10"
                        />
                        <div className="absolute inset-0 p-[12px] md:p-[14px] top-[1px] md:top-0 z-20">
                             <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680989a6a598aea4688dc28b_phone-status.svg" alt="Phone Status Bar" className="absolute top-[20px] md:top-[22px] left-1/2 -translate-x-1/2 w-[90%]"/>
                            <div className="w-full h-full rounded-[30px] md:rounded-[40px] overflow-hidden mt-[1px]">
                                <img
                                    src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680989d5f4894fb9796a6ae3_6efc782c4a1bad4412843a05cd6b6192_phone-grader-ui.avif"
                                    alt="Restaurant Health Score"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                         {/* Animated Tags */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            className="absolute top-[40%] -left-1/2 md:-left-3/4 flex items-center gap-2 bg-white p-3 rounded-lg shadow-lg"
                        >
                            <DashIcon />
                            <p className="text-sm font-medium">See who's beating you on Google</p>
                        </motion.div>

                        <motion.div
                             initial={{ opacity: 0, x: 20 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            className="absolute top-1/4 -right-1/2 md:-right-3/4 flex items-center gap-2 bg-white p-3 rounded-lg shadow-lg"
                        >
                            <DashIcon />
                            <p className="text-sm font-medium">See exactly what to fix</p>
                        </motion.div>
                    </motion.div>

                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative -mt-16 md:-mt-20 w-full max-w-lg lg:max-w-xl z-20"
                    >
                         <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                             <div className="flex items-center gap-3 mb-4">
                                <WandIcon />
                                <AnimatedTextLoop />
                             </div>
                             <form className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="text"
                                    placeholder="Find your restaurant name"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition-shadow duration-200"
                                />
                                <button type="submit" className="flex-shrink-0 bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors duration-200">
                                    Get my report
                                    <div className="w-5 h-5">
                                      <ArrowUpIcon />
                                    </div>
                                </button>
                            </form>
                         </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RestaurantGrader;