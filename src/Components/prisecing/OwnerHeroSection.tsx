// ./src/components/OwnerHeroSection.tsx

import React from 'react';
import { motion, Variants } from 'framer-motion';


// Animation variants (no changes here)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const textItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};
const imageVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
}

const OwnerHeroSection: React.FC = () => {
  return (
    <div className="bg-[#f7f7f7] min-h-screen font-sans">

      <main className="container mx-auto px-4 py-12 lg:py-20 overflow-hidden">
        <motion.div 
            className="grid lg:grid-cols-2 items-center gap-12 lg:gap-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
          
          {/* Left Column (no changes here) */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
                variants={textItemVariants}
            >
              Restaurant websites built for sales first, style second.
            </motion.h1>
            <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                variants={textItemVariants}
            >
              Owner builds your website to drive sales. Our proven design grows Google traffic, outranks delivery apps, and beats your competition.
            </motion.p>
            <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2"
                variants={textItemVariants}
            >
              <button className="flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1">
                Get a free demo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
              <button className="flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow-lg hover:-translate-y-1">
                View Pricing
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </motion.div>
          </div>

          {/* --- Right Column: Video Thumbnail (UPDATED) --- */}
          <motion.div 
            className="relative group cursor-pointer"
            variants={imageVariants}
          >
            <img 
              src="/owner-hero-image.png"
              alt="Testimonial from Mr M's Sandwich Shop owner"
              className="rounded-2xl w-full h-full object-cover shadow-xl transition-all duration-300 group-hover:shadow-2xl"
            />
            {/* 
              This single div now acts as the .video_meta overlay.
              I've translated your CSS into Tailwind classes below.
            */}
            <div 
              className="
                absolute inset-0 z-10 w-full h-full rounded-2xl overflow-hidden
                flex justify-between items-end
                p-[2.4rem] lg:p-[3.2rem]
                bg-gradient-to-t from-black/60 to-transparent
              "
            >
              <p className="w-4/5 text-base font-medium text-white">
                See how the owners of Mr M's Sandwich Shop use Owner to get "more clicks, more traffic, more sales"
              </p>
              <button aria-label="Play video" className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white group-hover:scale-105 transition-transform duration-300 drop-shadow-lg">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </motion.div>

        </motion.div>
      </main>
    </div>
  );
};

export default OwnerHeroSection;