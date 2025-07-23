// ./src/components/PricingHeroAnimated.tsx

import React from 'react';
// FIX: Import the 'Variants' type from framer-motion
import { motion, Variants } from 'framer-motion';

// --- Reusable SVG Icon Components ---

const HexCheckIcon = () => (
  <svg className="h-6 w-6 flex-shrink-0 text-blue-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 6V18L12 22L20 18V6L12 2Z" />
    <path d="M9.5 12L11.5 14L15.5 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Pattern = () => (
  <div className="absolute inset-0 h-full w-full opacity-10 pointer-events-none">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="pattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(1) rotate(45)">
          <rect x="0" y="0" width="100%" height="100%" fill="none"></rect>
          <path d="M-10 20 l20 -20 M0 40 l40 -40 M30 40 l20 -20" stroke="white" strokeWidth="0.5"></path>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pattern)"></rect>
    </svg>
  </div>
);

// --- Data for the "What's Included" list ---
const features = [
  { title: 'Restaurant Website', description: 'A restaurant website perfectly optimized to grow your traffic and sales.' },
  { title: 'Online Ordering', description: "An online ordering system that's as good as the biggest restaurant brands." },
  { title: 'Mobile App', description: 'Your very own mobile app, branded for your restaurant, that your regulars will love.' },
  { title: 'Loyalty and Rewards', description: 'A rewards program that gets more repeat orders, just like the national chains.' },
  { title: 'Automated Marketing', description: 'Automated email and text marketing campaigns that drive sales on their own.' },
  { title: 'Month-to-Month Contract', description: 'No lock-in. No long-term contracts. No cancellation fees. Cancel anytime.' },
  { title: '24/7 Support', description: 'You’re 24/7, so we are too. Our customer support is consistently rated 5 stars.' },
];

// --- Animation Variants for Framer Motion ---

// FIX: Added the 'Variants' type annotation
const listVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// FIX: Added the 'Variants' type annotation
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// --- Main Pricing Hero Component (Final Animated Version) ---
const PricingHeroAnimated = () => {
  return (
    <main>
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              One simple price.
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Month-to-month. No long-term contracts. No cancellation fees. Just pay a flat rate to get everything on the Owner platform.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="relative mt-12 mx-auto h-[300px] max-w-[700px] flex flex-col overflow-hidden rounded-2xl bg-blue-600 text-white p-8">
            <Pattern />
            <div className="relative z-10 mt-auto flex w-full flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-7xl font-bold">$499</p>
                <p className="mt-2 text-lg text-blue-200">billed monthly</p>
              </div>
              <a
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/30"
              >
                <span>Get a free demo</span>
              </a>
            </div>
          </div>

          {/* Included Features List with Animation */}
          <div className="mt-20">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">
              WHAT’S INCLUDED
            </h2>
            <motion.ul
              role="list"
              className="mt-8"
              variants={listVariants}
              initial="hidden"
              // You can use whileInView to trigger the animation when the user scrolls to it
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={feature.title}
                  variants={itemVariants}
                  className={`grid grid-cols-1 items-start gap-y-3 py-6 md:grid-cols-2 md:gap-x-8 ${index !== 0 ? 'border-t border-gray-200' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <HexCheckIcon />
                    <p className="text-lg font-semibold text-gray-900">{feature.title}</p>
                  </div>
                  <p className="text-base text-gray-600 md:pl-9">{feature.description}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingHeroAnimated;