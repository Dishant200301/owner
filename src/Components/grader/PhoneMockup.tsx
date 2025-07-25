import React from 'react';
import { motion } from 'framer-motion';

export const PhoneMockup: React.FC = () => {
  return (
    <motion.div 
      className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto z-10"
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.5, ease: "easeOut" } }
      }}
    >
      {/* Phone device frame */}
      <img
        src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6809881c139b1b218ef1ed59_phone-ui.avif"
        alt="Phone displaying restaurant analytics"
        className="relative z-10 w-full h-auto"
      />
      
      {/* Container to mask the scrolling screen */}
      <div className="absolute z-0 top-[2.5%] left-[5%] right-[5%] bottom-[2.5%] overflow-hidden rounded-[10%]">
        {/* The animated scrolling UI image */}
        <motion.img
          src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680989d5f4894fb9796a6ae3_6efc782c4a1bad4412843a05cd6b6192_phone-grader-ui.avif"
          alt="Restaurant website health score scrolling"
          className="w-full h-auto absolute top-0 left-0"
          animate={{ y: ['0%', '-50%'] }} // Moves the image up and down
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse", // Reverses the animation smoothly
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating helper tags */}
      <motion.div 
        className="absolute top-[40%] -left-24 md:-left-32 z-20"
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 1 } }
        }}
      >
        <InfoTag text="See who's beating you on Google" />
      </motion.div>
      <motion.div 
        className="absolute top-[20%] -right-20 md:-right-24 z-20"
        variants={{
          hidden: { opacity: 0, x: 20 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 1.2 } }
        }}
      >
        <InfoTag text="See exactly what to fix" />
      </motion.div>
    </motion.div>
  );
};

// Reusable tag component with its own floating animation
const InfoTag: React.FC<{ text: string }> = ({ text }) => (
    <motion.div
        className="bg-white shadow-md rounded-full py-2 px-3 flex items-center gap-2"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
        <div className="w-4 h-4 text-[#E5663A]">
            <svg viewBox="0 0 18 19" fill="currentColor"><path d="M0 13V7h18v6H0z"></path></svg>
        </div>
        <p className="text-xs font-medium text-gray-800 whitespace-nowrap">{text}</p>
    </motion.div>
);