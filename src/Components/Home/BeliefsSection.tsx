import React from 'react';
import { motion } from 'framer-motion';
import adamGuildImage from '../../assets/adam-guild.jpg'; // Adjust the path if needed

const beliefs = [
  {
    title: 'Sales growth is more important than customization.',
    description: 'The third party delivery apps and the big national brands have shaped how everyone orders online. We take their best practices and give them to you. This is why we outperform our competitors, who choose customization over sales.',
  },
  {
    title: 'We have to earn your business every month.',
    description: 'Restaurants are hard enough, you don’t need another tech vendor tying you up in a long term contract. Customers vote with their feet if they don’t like your restaurant. We want you to be able to leave easily if we aren’t adding value and helping you grow your business.',
  },
  {
    title: 'Restaurants should own their customer relationships.',
    description: 'One of the cruelest byproducts of tech “innovation” is how you are separated from your customers. If you ever decide to leave Owner, you get to bring your customers with you.',
  },
];

const BeliefsSection: React.FC = () => {
  return (
    <section className="bg-brand-gray-100 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Column */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
              Three beliefs that guide our company
            </h2>
            <p className="text-brand-gray-300 text-lg mb-12">
              Understand the principles that guide our decisions.
            </p>
            <div className="relative w-48 h-48">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={adamGuildImage} 
                  alt="Adam Guild, Co-Founder and CEO at Owner" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute -bottom-8 -left-12 w-40 h-32 text-white" style={{ mixBlendMode: 'exclusion' }}>
                  {/* Signature SVG */}
                  <svg width="100%" height="100%" viewBox="0 0 140 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 36.7974C4.57502 29.2946 12.8025 22.5437 17.9105 15.421C21.1656 10.882 23.7482 6.07952 27.6362 1.74469C30.008 -0.899685 31.7909 4.26813 32.28 5.30742C40.4514 22.6707 39.4574 43.4536 32.8057 60.9032C28.1203 73.1945 20.5623 85.8376 9.89333 96.4731C8.65323 97.7093 6.69263 100.033 4.68 100.869C2.9609 101.583 2.93705 99.1477 2.92762 99.0877C2.63618 97.2309 2.55931 90.6551 2.57714 89.3189C2.81632 71.3977 5.34785 53.2022 10.4629 35.5906C11.5609 31.8098 12.8836 28.0386 14.2743 24.2991C14.701 23.1517 15.6116 19.9417 16.3333 21.0237C17.1697 22.2774 16.8152 24.393 16.9467 25.6495C17.3739 29.7322 18.0501 33.7909 19.9257 37.7168C23.2489 44.6724 29.3705 51.1576 41.3924 51.508C54.5593 51.8918 65.5949 48.097 74.5124 42.0265C77.1995 40.1973 80.028 38.2575 82.1352 36.1078C83.3546 34.8638 83.8991 33.0758 80.9962 34.9585C79.6535 35.8293 70.078 42.2001 73.1981 43.8079C75.8662 45.1828 82.3048 43.0831 84.4133 42.515C90.8284 40.7864 96.8845 38.5545 102.77 36.1653C104.405 35.5014 108.402 33.0935 109.385 35.3033C112.843 43.079 129.123 43.0068 139 45.0721" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold text-brand-dark">Adam Guild</p>
                <p className="text-sm text-brand-gray-400">Co-Founder and CEO at Owner</p>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-2 space-y-10">
            {beliefs.map((belief, index) => (
              <div 
                key={index}
                className="pb-10 border-b border-gray-300 last:border-b-0 last:pb-0"
              >
                <h3 className="text-xl font-semibold text-brand-dark mb-3">{belief.title}</h3>
                <p className="text-brand-gray-400 leading-relaxed">{belief.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeliefsSection;