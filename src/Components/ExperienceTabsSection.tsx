import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data for the tabs ---
const tabsData = [
  {
    id: 1,
    title: 'More Google Traffic',
    subtitle: 'Upgrade your SEO',
    heading: 'With Owner, your website gets way more Google traffic',
    image: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/68099508c0154cdc49f8c9b7_a576e66e2a76a448f0c997ba69bd8d8f_ai-website_item-2.avif',
  },
  {
    id: 2,
    title: 'More Online Sales',
    subtitle: 'Boost your orders',
    heading: 'Grow sales with ordering that feels just like the big brands',
    image: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680a178dea2dba19951bf646_abc3446dbd78d9103d75cafb2dcfa96d_online-ordering_item-1.avif',
    phoneImage: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680a166038a3b80a4a531b2e_online-ordering_item-2.avif',
  },
  {
    id: 3,
    title: 'More Repeat Orders',
    subtitle: 'Create more regulars',
    heading: 'Owner uses smart follow-ups that grow your repeat orders',
    image: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/681214b6923ef956e00bbe28_3647942429bb2058a6d96e3f71542f42_follow-up.json', // This is a Lottie file, we'll represent it with an image
    isLottie: true, // We'll use this flag to show a placeholder for the Lottie animation
  },
  {
    id: 4,
    title: 'More App Downloads',
    subtitle: 'Reward your guests',
    heading: 'Give guests points when they use your branded mobile app',
    image: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680996116d3e8432042125d8_d72b2241f8d486588237730e70b32938_app-downloads_item-1.avif',
  },
];

const AUTOPLAY_INTERVAL = 5000; // 5 seconds

const MoreTrafficSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabsData.length);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [activeTab]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleNext = () => {
    setActiveTab((prevTab) => (prevTab + 1) % tabsData.length);
  };

  const handlePrev = () => {
    setActiveTab((prevTab) => (prevTab - 1 + tabsData.length) % tabsData.length);
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            With Owner, you get more traffic, more sales, more repeat customers
          </h2>
        </div>
        
        {/* Tabs Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 mb-4">
          {tabsData.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(index)}
              className="p-3 text-center transition-colors duration-300"
            >
              <span className={`text-sm sm:text-base font-medium ${activeTab === index ? 'text-gray-900' : 'text-gray-500'}`}>
                {index + 1}   {tab.title}
              </span>
              <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                {activeTab === index && (
                   <motion.div
                    key={activeTab} // This key forces re-render and restarts the animation
                    className="h-full bg-green-500"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: 'linear' }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Content Panes */}
        <div className="relative bg-gray-100 rounded-3xl min-h-[500px] lg:min-h-[600px] overflow-hidden p-8 sm:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="w-full h-full flex flex-col md:flex-row items-center justify-between"
            >
              <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
                <p className="text-lg text-gray-500">{tabsData[activeTab].subtitle}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                  {tabsData[activeTab].heading}
                </h3>
              </div>
              <div className="w-full md:w-2/3 h-full relative flex items-center justify-center">
                  {/* Specific layout for Tab 2 */}
                   {activeTab === 1 ? (
                     <>
                        <motion.img
                           src={tabsData[1].image}
                           alt={tabsData[1].title}
                           className="relative z-10 w-full max-w-lg rounded-lg shadow-lg"
                           initial={{ scale: 0.8, opacity: 0 }}
                           animate={{ scale: 1, opacity: 1 }}
                           transition={{ delay: 0.3, duration: 0.5 }}
                        />
                        <motion.img
                           src={tabsData[1].phoneImage}
                           alt="Phone screen"
                           className="absolute z-20 w-48 sm:w-64 -left-8 sm:left-0 bottom-0 rounded-lg shadow-2xl"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        />
                     </>
                  ) : activeTab === 2 ? (
                      <div className="bg-blue-100/50 p-8 rounded-2xl backdrop-blur-sm w-full h-80 flex items-center justify-center">
                         <p className="text-xl text-blue-800 font-semibold">Lottie Animation Placeholder</p>
                      </div>
                  ) : (
                     <img
                        src={tabsData[activeTab].image}
                        alt={tabsData[activeTab].title}
                        className="max-w-full max-h-[400px] object-contain"
                     />
                  )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center mt-6 text-gray-500">
           <button onClick={handlePrev} className="flex items-center space-x-2 px-4 py-2 hover:text-gray-900 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
               <span>Previous</span>
           </button>
            <span className="mx-4 text-gray-300">|</span>
           <button onClick={handleNext} className="flex items-center space-x-2 px-4 py-2 hover:text-gray-900 transition-colors">
               <span>Next</span>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
           </button>
        </div>
      </div>
    </section>
  );
};

export default MoreTrafficSection;