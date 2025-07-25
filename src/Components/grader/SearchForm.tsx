import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedTextLoop } from './AnimatedTextLoop';
import { SparkleIcon } from './SparkleIcon';
import { ArrowUpIcon } from './ArrowUpIcon';

export const SearchForm: React.FC = () => {
  return (
    <motion.div 
      className="w-full max-w-xl -mt-16 sm:-mt-20 md:-mt-24 relative z-20"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.8, ease: "easeOut" } }
      }}
    >
      <div className="bg-white border border-gray-200/80 rounded-2xl p-3 shadow-xl shadow-gray-600/10">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center gap-2 mb-3 px-2">
            <div className="w-6 h-6 text-gray-800">
              <SparkleIcon />
            </div>
            <AnimatedTextLoop
              texts={[
                "Scan your site and see what isn’t working",
                "Find out how to get discovered on Google",
                "See how much sales you could get from keywords",
                "Compare yourself with your local competition",
              ]}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              className="w-full flex-grow bg-gray-100 border-gray-300 rounded-lg py-3 px-4 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E5663A] focus:border-transparent transition-shadow"
              placeholder="Find your restaurant name"
              type="text"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white rounded-lg py-3 px-5 flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors duration-200"
            >
              <span className="font-semibold text-sm sm:text-base">Get my report</span>
              <div className="w-5 h-5"><ArrowUpIcon /></div>
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};