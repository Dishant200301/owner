import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedTextLoopProps {
  texts: string[];
}

export const AnimatedTextLoop: React.FC<AnimatedTextLoopProps> = ({ texts }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000); // Cycle text every 3 seconds

    return () => clearInterval(timer);
  }, [texts.length]);

  return (
    <div className="h-6 w-full relative text-left overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          className="absolute w-full text-base font-medium text-gray-700"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {texts[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};