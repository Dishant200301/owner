import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data for the tabs ---
const tabsData = [
  {
    id: 1,
    title: 'More Google Traffic',
    superTitle: 'Upgrade your SEO',
    headline: 'With Owner, your website gets way more Google traffic',
    image: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/68099508c0154cdc49f8c9b7_a576e66e2a76a448f0c997ba69bd8d8f_ai-website_item-2.avif',
  },
  {
    id: 2,
    title: 'More Online Sales',
    superTitle: 'Boost your orders',
    headline: 'Grow sales with ordering that feels just like the big brands',
    image: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/680a178dea2dba19951bf646_abc3446dbd78d9103d75cafb2dcfa96d_online-ordering_item-1.avif',
  },
  {
    id: 3,
    title: 'More Repeat Orders',
    superTitle: 'Create more regulars',
    headline: 'Owner uses smart follow-ups that grow your repeat orders',
    image: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/681214b6923ef956e00bbe28_3647942429bb2058a6d96e3f71542f42_follow-up.json',
  },
  {
    id: 4,
    title: 'App Downloads',
    superTitle: 'Reward your guests',
    headline: 'Give guests points when they use your branded mobile app',
    image: 'https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6810a957b420f1350a80e1a1_6e77102e1c950a259d33267568163f58_loyalty.avif',
  },
];

// --- SVG Icon Components ---
const ArrowIcon = ({ className = '' }: { className?: string }) => (
    <svg className={className} width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.9823 20.4958C16.72 20.7581 16.2952 20.7593 16.0314 20.4985V20.4985C15.7656 20.2356 15.7644 19.8067 16.0288 19.5423L18.8786 16.6926H11.2081C10.8257 16.6926 10.5156 16.3825 10.5156 16.0001V16.0001C10.5156 15.6176 10.8257 15.3076 11.2081 15.3076H18.8786L16.0293 12.463C15.7645 12.1986 15.765 11.7694 16.0303 11.5055V11.5055C16.2944 11.2428 16.7213 11.2434 16.9847 11.5068L21.1959 15.718C21.3517 15.8738 21.3517 16.1264 21.1959 16.2821L16.9823 20.4958Z" fill="currentColor"></path>
    </svg>
);

// --- Main Component ---
const ExperienceTabsSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [progressKey, setProgressKey] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleNext = () => {
        setActiveTab((prev) => (prev + 1) % tabsData.length);
        setProgressKey(prev => prev + 1); // Reset animation
    };

    const handlePrev = () => {
        setActiveTab((prev) => (prev - 1 + tabsData.length) % tabsData.length);
        setProgressKey(prev => prev + 1); // Reset animation
    };

    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(handleNext, 7000);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [activeTab, isPaused]);
    
    return (
        <section className="py-16 md:py-24 font-sans bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        With Owner, you get more traffic, more sales, more repeat customers
                    </h2>
                </div>

                {/* Tab Navigation */}
                <div className="mb-8">
                    <div className="flex border-b border-gray-200 overflow-x-auto no-scrollbar">
                        {tabsData.map((tab, index) => (
                            <button
                                key={tab.id}
                                onClick={() => {
                                    setActiveTab(index);
                                    setProgressKey(prev => prev + 1);
                                }}
                                className={`flex-1 min-w-[180px] md:min-w-0 py-4 text-sm md:text-base font-semibold focus:outline-none transition-colors ${
                                    activeTab === index ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <span className="opacity-40">{index + 1}</span>
                                    <span>{tab.title}</span>
                                </div>
                                <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden relative">
                                    {activeTab === index && (
                                        <div
                                            key={progressKey}
                                            className={`h-full bg-green-500 rounded-full ${isPaused ? 'animate-paused' : ''}`}
                                            style={{ animation: `fillProgress 7s linear forwards` }}
                                        />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Slider */}
                <div 
                    className="relative bg-gray-50 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden min-h-[500px] md:min-h-[550px] flex items-center"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="w-full flex flex-col md:flex-row items-center gap-8 lg:gap-16"
                        >
                            <div className="w-full md:w-2/5 text-center md:text-left">
                                <p className="text-lg md:text-xl font-semibold text-gray-500 mb-2">{tabsData[activeTab].superTitle}</p>
                                <p className="text-2xl md:text-3xl font-bold text-gray-900">{tabsData[activeTab].headline}</p>
                            </div>
                            <div className="w-full md:w-3/5">
                                <img
                                    src={tabsData[activeTab].image}
                                    alt={tabsData[activeTab].title}
                                    className="rounded-xl shadow-2xl object-cover w-full h-auto"
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                
                {/* Navigation Arrows */}
                <div className="flex justify-center md:justify-end items-center gap-6 mt-8">
                     <button onClick={handlePrev} className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors disabled:opacity-50" aria-label="Previous slide">
                        <ArrowIcon className="w-6 h-6 transform rotate-180" />
                        <span className="hidden md:inline text-sm font-semibold">Previous</span>
                    </button>
                    <button onClick={handleNext} className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors disabled:opacity-50" aria-label="Next slide">
                        <span className="hidden md:inline text-sm font-semibold">Next</span>
                        <ArrowIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ExperienceTabsSection;