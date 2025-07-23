// ./src/components/MarketingPage.tsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.15 }}
        transition={{ duration: 15, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 bg-cover bg-center"
        // IMPORTANT: Replace with the path to your background image
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
      />
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Text Content with Fade-in Animation */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl font-extrabold tracking-tight md:text-6xl"
        >
          Experience the Difference
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 max-w-xl text-lg md:text-xl"
        >
          Crafted with passion, served with a smile. Discover your new favorite spot for coffee and conversation.
        </motion.p>
      </div>
    </div>
  );
};

// --- 2. Customer Reviews Carousel ---
const reviews = [
  { name: 'John D.', text: 'Great coffee & ambiance! The perfect place to work or relax.' },
  { name: 'Sarah L.', text: 'Absolutely love the new seasonal drinks. A must-try!' },
  { name: 'Mike R.', text: 'The staff is always so friendly and welcoming. Feels like a second home.' },
];

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000); // Change review every 4 seconds
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-center text-3xl font-bold text-gray-800">What Our Customers Say</h2>
        <div className="relative mt-8 h-32 w-full overflow-hidden">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ x: '100%', opacity: 0 }}
              animate={{
                x: currentIndex === index ? '0%' : '-100%',
                opacity: currentIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute top-0 left-0 flex w-full items-center justify-center"
            >
              <div className="w-full max-w-lg transform cursor-pointer rounded-xl bg-white px-8 py-6 shadow-lg transition-transform hover:scale-105">
                <p className="text-lg font-medium text-gray-900">"{review.text}"</p>
                <span className="mt-2 block text-right text-sm text-gray-500">- {review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 3. News Marquee Section ---
const NewsMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-900 py-3">
      <div className="animate-marquee whitespace-nowrap text-white">
        <span className="mx-8 text-lg font-medium">☕️ New Offer: 20% Off on All Brews this Weekend!</span>
        <span className="mx-8 text-lg font-medium">✨ Live Music Every Friday Night!</span>
        <span className="mx-8 text-lg font-medium">🥐 Fresh Pastries Delivered Daily!</span>
        <span className="mx-8 text-lg font-medium">☕️ New Offer: 20% Off on All Brews this Weekend!</span>
        <span className="mx-8 text-lg font-medium">✨ Live Music Every Friday Night!</span>
        <span className="mx-8 text-lg font-medium">🥐 Fresh Pastries Delivered Daily!</span>
      </div>
    </div>
  );
};

// --- Assembled Marketing Page ---
const MarketingPage = () => {
  return (
    <div>
      <HeroSection />
      <NewsMarquee />
      <ReviewsCarousel />
      {/* You can add more sections like a gallery or contact form here */}
    </div>
  );
};

export default MarketingPage;